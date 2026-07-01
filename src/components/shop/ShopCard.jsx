import { useNavigate } from "react-router-dom";
import {
   FaMapMarkerAlt,
   FaArrowRight
} from "react-icons/fa";

export default function ShopCard({ shop }) {

   const navigate = useNavigate();

   return (

      <div
         onClick={() =>
            navigate(`/shop/${shop._id}`)
         }
         className="
         bg-white
         rounded-3xl
         shadow-md
         hover:shadow-xl
         transition-all
         duration-300
         overflow-hidden
         cursor-pointer
         border
         border-red-100
         hover:border-red-300
         "
      >

         {/* Banner */}

         <div
            className="
            h-24
            bg-gray-100
            relative
            "
         >

            <img
               src={
                  shop.shopBanner ||
                  "https://placehold.co/1200x300?text=FoodHub"
               }
               alt={shop.shopName}
               className="
               w-full
               h-full
               object-cover
               "
            />

            {/* Logo */}

            <div
               className="
               absolute
               -bottom-8
               left-6
               "
            >

               <img
                  src={
                     shop.shopLogo ||
                     "https://placehold.co/100x100?text=Shop"
                  }
                  alt={shop.shopName}
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  object-cover
                  border-4
                  border-white
                  shadow-lg
                  bg-white
                  "
               />

            </div>

         </div>

         {/* Content */}

         <div
            className="
            pt-10
            pb-4
            px-5
            "
         >

            <div
               className="
               flex
               justify-between
               items-start
               gap-4
               "
            >

               <div className="flex-1">

                  <h2
                     className="
                     text-xl
                     font-bold
                     text-gray-800
                     "
                  >
                     {shop.shopName}
                  </h2>

                  <p
                     className="
                     text-gray-500
                     mt-2
                     line-clamp-2
                     "
                  >
                     {shop.description ||
                        "Fresh delicious food waiting for you."}
                  </p>

                  <div
                     className="
                     flex
                     items-center
                     gap-2
                     mt-4
                     text-gray-600
                     "
                  >

                     <FaMapMarkerAlt
                        className="
                        text-red-500
                        "
                     />

                     <span>
                        {shop.address || "Address not available"}
                     </span>

                  </div>

               </div>

               <button
                  className="
                  bg-[#FF3B4E]
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  hover:bg-red-600
                  transition
                  shrink-0
                  "
               >

                  Visit

                  <FaArrowRight />

               </button>

            </div>

         </div>

      </div>

   );
}