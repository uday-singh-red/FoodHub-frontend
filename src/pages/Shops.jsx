import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "../components/shop/ShopCard";

export default function Shops() {

   const navigate = useNavigate();

   const [shops, setShops] = useState([]);
   const [loading, setLoading] = useState(true);

   const getShops = async () => {

      try {

         const res = await fetch(
            "http://localhost:5000/api/v1/shops/all-shops"
         );

         const data = await res.json();

         console.log(data)

         if (data.success) {

            setShops(data.shops);

         }

      }

      catch (error) {

         console.log(error);

      }

      finally {

         setLoading(false);

      }

   };

   useEffect(() => {

      getShops();

   }, []);

   if (loading) {

      return (

         <div
            className="
            min-h-screen
            flex
            justify-center
            items-center
            text-2xl
            font-bold
            "
         >

            Loading...

         </div>

      );

   }

  return (

   <div
      className="
      min-h-screen
      bg-[#FFF5F5]
      py-10
      px-4
      "
   >

      <div
         className="
         max-w-6xl
         mx-auto
         "
      >

         <h1
            className="
            text-4xl
            font-bold
            text-[#FF3B4E]
            mb-2
            "
         >
            Explore Shops
         </h1>

         <p
            className="
            text-gray-500
            mb-8
            "
         >
            Browse all available food shops.
         </p>

         <div
            className="
          max-w-7xl
         mx-auto
         p-5
         grid
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         xl:grid-cols-4
         gap-5
            "
         >

            {
   shops.length === 0 ? (

      <div
         className="
         bg-white
         rounded-3xl
         p-10
         text-center
         shadow-lg
         "
      >
         <h2 className="text-2xl font-bold">
            No Shops Found
         </h2>

         <p className="text-gray-500 mt-2">
            There are no shops available right now.
         </p>

      </div>

   ) : (

      shops.map((shop) => (

         <ShopCard
            key={shop._id}
            shop={shop}
         />

      ))

   )
}

         </div>

      </div>

   </div>

);

}