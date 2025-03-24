// MiddlemanCreateProduct.js
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layouts from "../../components/Layout/Layouts";
import MiddlemanMenu from "../../components/Layout/MiddlemanMenu";
export default function MiddlemanCreateProduct() {
    const [tribal, setTribal] = useState(null); // Get this from route params or state
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState(null);
  
    const handleCreateProduct = async () => {
      try {
        const formData = new FormData();
        formData.append('tribalId', tribal._id);
        formData.append('name', productName);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('category', category);
        if (photo) formData.append('photo', photo);
  
        const { data } = await axios.post('/api/middleman/create-product', formData);
        toast.success('Product created successfully');
      } catch (error) {
        toast.error('Error creating product');
      }
    };
  
    return (
        <Layouts>
            <div className="container-fluid m-3 p-3">
                    <div className="row">
            
                      <div className="col-md-3">
                        <MiddlemanMenu />
                      </div>
                      <div className="col-md-9">
                      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Create Product for Tribal</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="form-input mb-4"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="form-input mb-4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="form-input mb-4"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          className="form-input mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* Categories should be fetched dynamically */}
          <option value="">Select Category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <input
          type="file"
          className="mb-4"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleCreateProduct}
        >
          Create Product
        </button>
      </div>
                      </div>
                    </div>
                  </div>
      
      </Layouts>
    );
  }
  