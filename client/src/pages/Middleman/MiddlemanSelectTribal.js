// MiddlemanSelectTribal.js
import { useState ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layouts from "../../components/Layout/Layouts";
import MiddlemanMenu from "../../components/Layout/MiddlemanMenu";
export default function MiddlemanSelectTribal() {
    const [tribals, setTribals] = useState([]);
  
    useEffect(() => {
      const fetchTribals = async () => {
        const { data } = await axios.get('/api/middleman/get-tribals');
        setTribals(data.tribals);
      };
      fetchTribals();
    }, []);
  
    return (
      <Layouts><div className="container-fluid m-3 p-3">
      <div className="row">

        <div className="col-md-3">
          <MiddlemanMenu />
        </div>
        <div className="col-md-9">
        <div className="p-4">
        <h2 className="text-xl mb-4">Select a Tribal User</h2>
        <ul className="space-y-4">
          {tribals.map((tribal) => (
            <li key={tribal._id}>
              <Link to={`/middleman/tribal/${tribal._id}`} className="flex items-center space-x-4">
                <img src={tribal.photo} alt={tribal.name} className="w-12 h-12 rounded-full" />
                <span>{tribal.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

        </div>
      </div>
    </div>

        
      </Layouts>
    );
  }
  