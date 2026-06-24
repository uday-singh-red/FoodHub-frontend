# 🍔 Food Ordering App

A full-stack food ordering platform where customers can order food, shopkeepers can manage their shops and products, and admins can manage the entire platform through a dedicated dashboard.

## ✨ Features

### Customer

- Browse food products
- View detailed product information
- Add products to cart
- Update cart quantity
- Remove products from cart
- Place orders

### Shopkeeper

- Create shop request
- Manage approved shop
- Create products
- Update products
- View orders

### Admin

- Approve shop requests
- Reject shop requests
- Create products
- Manage products
- Manage orders

## 🛠 Tech Stack

### Frontend

- React
- React Router DOM
- Tailwind CSS
- Context API
- React Icons
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary
- JWT Authentication

## 📂 Project Structure

```bash
SRC
│   App.jsx
│   index.css
│   main.jsx
│   
├───assets
│       hero.png
│       react.svg
│       vite.svg
│       
├───components
│   │   AdminProductCard.jsx
│   │   CartCard.jsx
│   │   Navbar.jsx
│   │   OrderCard.jsx
│   │   ProductCard.jsx
│   │   shopReqCard.jsx
│   │   
│   └───Product
│           ProductBasicInfo.jsx
│           ProductExtraInfo.jsx
│           
├───context
│       AuthContext.jsx
│       CartContext.jsx
│       
├───costomHook
│       useGoogleLogin.jsx
│       userLogout.jsx
│       
├───firebase
│       firebase.js
│       
└───pages
        admin.jsx
        adminEdit.jsx
        AdminOrders.jsx
        Cart.jsx
        createProduct.jsx
        createShop.jsx
        EditProduct.jsx
        Home.jsx
        Login.jsx
        OrderPage.jsx
        ProductInfo.jsx
        Profile.jsx
        Register.jsx
        VerifyOtp.jsx


## 📱 Responsive Design

The application is responsive and optimized for:

- Mobile Devices
- Tablets
- Desktop Screens

## 🎯 Future Improvements

- Online Payments
- Product Search
- Product Filters
- Reviews & Ratings
- Wishlist
- Real-time Order Tracking
- Notifications

## 👨‍💻 Author

Uday Singh

Want to build something that people use every day.