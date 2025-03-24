const TribalUser = require('../models/tribalModel');
const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');

// Create Tribal User
const createTribalUser = async (req, res) => {
  try {
    const { name } = req.body;
    const uniqueId = `TRB-${Date.now()}`;  // Unique ID generation logic

    // Upload tribal photo
    const photo = req.file;
    if (!photo) return res.status(400).json({ error: 'Please upload a tribal photo' });

    // Save tribal user to the database
    const tribalUser = new TribalUser({
      name,
      photo: `/uploads/${photo.filename}`,
      uniqueId,
    });

    await tribalUser.save();
    res.status(201).json({ message: 'Tribal user created successfully', tribalUser });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', message: error.message });
  }
};

// Get all Tribal Users
const getAllTribalUsers = async (req, res) => {
  try {
    const tribals = await TribalUser.find();
    res.status(200).json({ tribals });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tribal users' });
  }
};

// Create Product for a Tribal User
const createProduct = async (req, res) => {
  try {
    const { tribalId, name, price, quantity, category, description } = req.body;

    // Check if the tribal user exists
    const tribalUser = await TribalUser.findById(tribalId);
    if (!tribalUser) {
      return res.status(400).json({ error: 'Tribal user not found' });
    }

    // Upload product photo
    const photo = req.file;
    if (!photo) return res.status(400).json({ error: 'Please upload a product photo' });

    // Calculate total cost
    const totalCost = price * quantity;

    // Create the product
    const product = new Product({
      tribalId,
      name,
      price,
      quantity,
      category,
      description,
      photo: `/uploads/${photo.filename}`,
      totalCost,
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// Get All Products for All Tribals
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('tribalId', 'name photo');
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
module.exports={
    createTribalUser,
    getAllTribalUsers,
    createProduct,
    getAllProducts,
}