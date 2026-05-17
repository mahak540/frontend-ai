import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoutButton from "../pages/logout";
import { useEffect, useState } from "react";
import axios from "axios";


function Navbar() {
  const apiUrl = import.meta.env.VITE_API_URL
  const [user,setUser] = useState(null);
  useEffect(()=>{

    const fetchUser = async()=>{

        try{

            const response = await axios.get(
                `${apiUrl}/current-user`,
                {
                    withCredentials:true
                }
            );

            setUser(response.data.user);

        }catch(err){

            setUser(null);

        }

    }

    fetchUser();

},[])
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">AI Studio</Link>
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/image">
            Generate
          </Link>
        </li>

        <li>
          <Link to="/signup">
            Signup
          </Link>
        </li>
        
        

      </ul>

      {
  !user ? (

    <Link to="/login">
      <button className="login-btn">
        Login
      </button>
    </Link>

  ) : (

    <LogoutButton/>

  )
}
    </nav>
  );
}

export default Navbar;