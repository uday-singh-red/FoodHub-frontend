import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import {
  FaHome,
  FaShoppingCart,
  FaUserCircle,
  FaUserShield,
  FaStore
} from "react-icons/fa";

export default function Navbar() {
  const { user } = useAuth();
  const { cartCount } = useCart();

  // Example count

 

  return (
    <nav className="bg-white border-b-2 border-red-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* LEFT */}
          <Link
            to="/"
            className="
            text-2xl
            font-bold
            text-red-500
            tracking-wide
            "
          >
            FoodHub
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="
              flex
              items-center
              gap-2
              text-gray-700
              hover:text-red-500
              font-medium
              transition
              "
            >
              <FaHome />
              <span>Home</span>
            </Link>

            {user && (
              <>
                {/* CART */}
                <Link
                  to="/cart"
                  className="
                  relative
                  flex
                  items-center
                  gap-2
                  text-gray-700
                  hover:text-red-500
                  font-medium
                  transition
                  "
                >
                  <FaShoppingCart size={20} />

                  <span>Cart</span>

                  <span
                    className="
                    absolute
                    -top-2
                    -right-3
                    bg-red-500
                    text-white
                    text-xs
                    min-w-[20px]
                    h-5
                    flex
                    items-center
                    justify-center
                    rounded-full
                    px-1
                    "
                  >
                    {cartCount}
                  </span>
                </Link>

                {user && (
                  <Link
                    to="/create-shop"
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-700
                    hover:text-red-500
                    font-medium
                    transition
                    "
                  >
                    <FaStore />
                    <span>Create Shop</span>
                  </Link>
                )}

                {/* PROFILE */}
                <Link
                  to="/profile"
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-700
                  hover:text-red-500
                  font-medium
                  transition
                  "
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar.replace(
                        "http://",
                        "https://"
                      )}
                      alt="avatar"
                      className="
                      w-10
                      h-10
                      rounded-full
                      object-cover
                      border-2
                      border-red-500
                      "
                    />
                  ) : (
                    <FaUserCircle size={24} />
                  )}
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  className="
                  text-gray-700
                  hover:text-red-500
                  font-medium
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-red-600
                  transition
                  "
                >
                  Register
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}