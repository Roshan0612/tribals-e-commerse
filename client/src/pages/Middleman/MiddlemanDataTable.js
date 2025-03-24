// MiddlemanDataTable.js
import { useState ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layouts from "../../components/Layout/Layouts";
import MiddlemanMenu from "../../components/Layout/MiddlemanMenu";
export default function MiddlemanDataTable() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get('/api/middleman/get-all-products');
        setProducts(data.products);
      };
      fetchProducts();
    }, []);
  
    return (
        <Layouts>
            <div className="container-fluid m-3 p-3">
                    <div className="row">
            
                      <div className="col-md-3">
                        <MiddlemanMenu />
                      </div>
                      <div className="col-md-9">
                      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Tribal Name</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Total Cost</th>
              <th className="px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img src={product.tribal.photo} alt={product.tribal.name} className="w-12 h-12 rounded-full" />
                    <span>{product.tribal.name}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            
                      </div>
                    </div>
                  </div>
      
      </Layouts>
    );
  }
  