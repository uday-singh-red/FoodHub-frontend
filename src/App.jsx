

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";
import Admin from "./pages/admin";
import CreateProduct from "./pages/createProduct";
import ProductInfo from "./pages/ProductInfo"
import OrderPage from "./pages/OrderPage";
import AdminOrders from "./pages/AdminOrders";
import Cart from "./pages/Cart";
import AdminEdit from "./pages/adminEdit";
import EditProduct from "./pages/EditProduct";
import CreateShop from "./pages/createShop";


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
        <Route path="/admin" element={<Admin/>} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/admin/orders" element={<AdminOrders/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin/Edit" element={<AdminEdit/>} />
        <Route path="/admin/edit-product/:id" element={<EditProduct/>} />
        <Route path="/create-shop" element={<CreateShop/>} />

      </Routes>
    </>
  );
}

export default App;