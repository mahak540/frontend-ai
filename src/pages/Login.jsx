import "./Login.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        `${apiUrl}/login`,
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      console.log(response.data);

      alert("Login Successful");

      navigate("/image");

    } catch (err) {

      console.log(err);

      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Navbar />

      <main className="login-page">
        <div className="login-container">

          <h1>Login</h1>

          <form className="login-form" onSubmit={handleSubmit}>

            <label>
              Email

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

           

            <button type="submit">
              Login
            </button>

          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
