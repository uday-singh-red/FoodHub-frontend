import { useNavigate } from "react-router-dom";
import {
   FaMapMarkerAlt,
   FaArrowRight
} from "react-icons/fa";

export default function ShopCard({ shop }) {

   const navigate = useNavigate();

   return (

      <div

         onClick={()=>
            navigate(`/shop/${shop._id}`)
         }

         className="
         bg-white
         rounded-2xl
         overflow-hidden
         shadow-md
         hover:shadow-xl
         hover:-translate-y-1
         transition-all
         duration-300
         border
         border-red-100
         cursor-pointer
         "

      >

         {/* Banner */}

         <div className="relative h-28">

            <img

               src={
                  shop.shopBanner ||
                  "https://placehold.co/600x250"
               }

               alt={shop.shopName}

               className="
               w-full
               h-full
               object-cover
               "

            />

            <img

               src={
                  shop.shopLogo ||
                  "https://placehold.co/100"
               }

               alt={shop.shopName}

               className="
               absolute
               left-4
               -bottom-8
               w-16
               h-16
               rounded-xl
               object-cover
               border-4
               border-white
               bg-white
               shadow-lg
               "

            />

         </div>

         {/* Body */}

         <div className="pt-11 px-4 pb-4">

            <h2
               className="
               text-lg
               font-bold
               text-gray-800
               truncate
               "
            >
               {shop.shopName}
            </h2>

            <p
               className="
               text-sm
               text-gray-500
               mt-2
               line-clamp-2
               h-10
               "
            >
               {
                  shop.description ||
                  "Fresh food delivered fast."
               }
            </p>

            <div
               className="
               flex
               items-center
               gap-2
               mt-3
               text-sm
               text-gray-500
               "
            >

               <FaMapMarkerAlt
                  className="text-red-500"
               />

               <span className="truncate">

                  {
                     shop.address ||
                     "Address unavailable"
                  }

               </span>

            </div>

            <button

               className="
               mt-5
               w-full
               bg-[#FF3B4E]
               text-white
               py-2.5
               rounded-xl
               flex
               justify-center
               items-center
               gap-2
               font-semibold
               hover:bg-red-600
               transition
               "

            >

               Visit Shop

               <FaArrowRight/>

            </button>

         </div>

      </div>

   );

}