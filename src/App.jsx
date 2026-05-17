import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Image from "./pages/GenrateImage";
import VerifyOTP from "./pages/verify";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/image"
          element={
            <ProtectedRoute>
              <Image />
            </ProtectedRoute>
          }
        />
         <Route
          path="/verify"
          element={<VerifyOTP />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;