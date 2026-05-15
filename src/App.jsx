

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </>
  );
}

export default App;