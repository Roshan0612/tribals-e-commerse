const express = require('express');
const multer = require('multer');
const middlemanController = require('../controllers//middlemanController');
const {createTribalUser,
    getAllTribalUsers,
    createProduct,
    getAllProducts
}= require("../controllers/middlemanController");
const { isMiddleman } = require('../middlewares/authmiddleware');
const router = express.Router();

// Set up multer for file uploads (tribal photos and product photos)
const upload = multer({
  dest: 'uploads/', // Uploads folder
  limits: { fileSize: 5 * 1024 * 1024 }, // Max file size 5MB
});

router.post('/create-tribal',isMiddleman, upload.single('photo'),createTribalUser);
router.get('/get-tribals', getAllTribalUsers);
router.post('/create-product', upload.single('photo'),createProduct);
router.get('/get-all-products', getAllProducts);

module.exports = router;
