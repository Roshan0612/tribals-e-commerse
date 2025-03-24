// MiddlemanCreateTribal.js
import { useState ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layouts from "../../components/Layout/Layouts";
import MiddlemanMenu from "../../components/Layout/MiddlemanMenu";
import { useAuth } from "../../context/Auth";
export default function MiddlemanCreateTribal() {
    const [auth] =useAuth();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
  
    const handleCreateTribal = async () => {
        try {
          console.log("Authorization token:", auth?.token); // Log the token
          const formData = new FormData();
          formData.append('name', name);
          if (photo) formData.append('photo', photo);
      
          // Pass the token directly in the Authorization header
          const { data } = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/middleman/create-tribal`,
            formData,  // Form data as the second argument
            {
              headers: {
                Authorization: auth?.token,  // Directly pass the token without 'Bearer'
              },
            }
          );
      
          toast.success('Tribal user created successfully');
        } catch (error) {
          console.log("Error:", error.response); // Log full error to see the response
          toast.error('Error creating tribal user');
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
        <h2 className="text-xl mb-4">Create Tribal User</h2>
        <input
          type="text"
          placeholder="Tribal Name"
          className="form-input mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          className="mb-4"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleCreateTribal}
        >
          Create Tribal
        </button>
      </div>
            
                      </div>
                    </div>
                  </div>
      
      </Layouts>
    );
  }
  