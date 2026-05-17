import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Logout.css"
export default function LogoutButton() {

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL
  const handleLogout = async () => {
    try {
      await axios.get(`${apiUrl}/logout`, {
        withCredentials: true
      });

      alert("Logged out successfully");

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Logout failed");
    }
  };

  return (
    <button 
    className="logout-btn"
    onClick={handleLogout}>
      Logout
    </button>
  );
}