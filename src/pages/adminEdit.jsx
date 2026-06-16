import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminProductCard from "../components/AdminProductCard";

export default function AdminEdit() {

   const navigate = useNavigate();

   const [products, setProducts] = useState([]);

   const getProducts = async () => {

      try {

         const res = await fetch(
            "http://localhost:5000/api/v1/products/all-products"
         );

         const data = await res.json();

         if (data.success) {
            setProducts(data.products);
         }

      }

      catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getProducts();
   }, []);

   return (

      <div
         className="
         min-h-screen
         bg-[#FFF5F5]
         p-5
         md:p-10
         "
      >

         <div className="max-w-6xl mx-auto">

            {/* TOP */}

            <div
               className="
               flex
               items-center
               justify-between
               mb-8
               "
            >

               <button

                  onClick={() =>
                     navigate("/admin")
                  }

                  className="
                  border-2
                  border-[#FF3B4E]
                  text-[#FF3B4E]
                  px-5
                  py-2
                  rounded-xl
                  font-semibold
                  hover:bg-[#FF3B4E]
                  hover:text-white
                  transition
                  "
               >

                  ← Back

               </button>

               <h1
                  className="
                  text-4xl
                  font-bold
                  text-[#FF3B4E]
                  "
               >

                  Edit Products

               </h1>

            </div>

            {/* PRODUCTS */}

            <div
               className="
               flex
               flex-col
               gap-4
               "
            >

               {
                  products.map((product) => (

                     <AdminProductCard

                        key={product._id}

                        product={product}

                     />

                  ))
               }

            </div>

         </div>

      </div>

   );
}