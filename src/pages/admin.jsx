import { Link } from "react-router-dom";
import {
   FaPlus,
   FaClipboardList,
   FaEdit,
   FaStore
} from "react-icons/fa";

import { useEffect } from "react";
import { useState } from "react";

import ShopRequestCard from "../components/shopReqCard";
import { useAuth } from "../context/AuthContext";

export default function Admin() {

   const {user}= useAuth();

   const [
   pendingShops, setPendingShops] = useState([]);



   const getPendingShops = async()=>{

   try{

      const res =
      await fetch(
         "http://localhost:5000/api/v1/shops/pending",
         {
            credentials:"include"
         }
      );

      const data =
      await res.json();

      if(data.success){

         setPendingShops(
            data.shops
         );
      }

   }

   catch(error){

      console.log(error);

   }
}

  const approveShop = async(id)=>{

   try{

      const res =
      await fetch(
         `http://localhost:5000/api/v1/shops/approve/${id}`,
         {
            method:"PUT",
            credentials:"include"
         }
      );

      const data =
      await res.json();

      if(data.success){

         getPendingShops();

      }

   }

   catch(error){

      console.log(error);

   }
}

  const rejectShop = async(id)=>{

   try{

      const res =
      await fetch(
         `http://localhost:5000/api/v1/shops/reject/${id}`,
         {
            method:"DELETE",
            credentials:"include"
         }
      );

      const data =
      await res.json();

      if(data.success){

         getPendingShops();

      }

   }

   catch(error){

      console.log(error);

   }
}

useEffect(()=>{

   getPendingShops();

},[]);


   return (

      <div
         className="
         min-h-screen
         bg-gray-100
         p-6
         "
      >

         {/* HEADER */}

         <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            mb-8
            "
         >

            <h1
               className="
               text-4xl
               font-bold
               text-red-500
               "
            >
               Admin Dashboard
            </h1>

            <p
               className="
               text-gray-600
               mt-2
               "
            >
               Manage products, orders and shop requests
            </p>

         </div>

         {/* ACTIONS */}

         <div
            className="
            grid
            md:grid-cols-3
            gap-6
            mb-10
            "
         >

            <Link
               to="/create-product"
               className="
               bg-white
               rounded-2xl
               shadow-md
               p-6
               hover:shadow-xl
               transition
               border-l-4
               border-green-500
               "
            >

               <FaPlus
                  size={28}
                  className="mb-3 text-green-500"
               />

               <h2
                  className="
                  text-xl
                  font-bold
                  "
               >
                  Create Product
               </h2>

               <p className="text-gray-500 mt-2">
                  Add new products
               </p>

            </Link>

            <Link
               to="/admin/orders"
               className="
               bg-white
               rounded-2xl
               shadow-md
               p-6
               hover:shadow-xl
               transition
               border-l-4
               border-blue-500
               "
            >

               <FaClipboardList
                  size={28}
                  className="mb-3 text-blue-500"
               />

               <h2
                  className="
                  text-xl
                  font-bold
                  "
               >
                  Orders
               </h2>

               <p className="text-gray-500 mt-2">
                  Manage customer orders
               </p>

            </Link>

            <Link
               to="/admin/Edit"
               className="
               bg-white
               rounded-2xl
               shadow-md
               p-6
               hover:shadow-xl
               transition
               border-l-4
               border-yellow-500
               "
            >

               <FaEdit
                  size={28}
                  className="mb-3 text-yellow-500"
               />

               <h2
                  className="
                  text-xl
                  font-bold
                  "
               >
                  Edit Products
               </h2>

               <p className="text-gray-500 mt-2">
                  Update existing products
               </p>

            </Link>

         </div>

         {/* PENDING SHOP REQUESTS */}

         {user?.role === "admin" && (
    <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            "
         >

            <div
               className="
               flex
               items-center
               gap-3
               mb-6
               "
            >

               <FaStore
                  size={26}
                  className="text-red-500"
               />

               <h2
                  className="
                  text-2xl
                  font-bold
                  "
               >
                  Pending Shop Requests
               </h2>

            </div>

            {/* Abhi placeholder */}

           <div
            className="
            flex
            flex-col
            gap-4
            "
         >

            {
               pendingShops.length > 0
               ?

               pendingShops.map(
                  (shop)=>(
                     <ShopRequestCard
                        key={shop._id}
                        shop={shop}
                        onApprove={
                           approveShop
                        }
                        onReject={
                           rejectShop
                        }
                     />
                  )
               )

               :

               <div
                  className="
                  bg-gray-50
                  border-2
                  border-dashed
                  border-gray-300
                  rounded-xl
                  p-10
                  text-center
                  "
               >

                  <p
                     className="
                     text-gray-500
                     "
                  >
                     No Pending Shop Requests
                  </p>

               </div>
            }

         </div>
         </div>

         )}

      </div>
   );
}