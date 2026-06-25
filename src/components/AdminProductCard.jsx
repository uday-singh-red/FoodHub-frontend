import { useNavigate } from "react-router-dom";

export default function AdminProductCard({ product }) {

   const navigate = useNavigate();

   return (

      <div
   className="
   bg-white
   rounded-2xl
   shadow-md
   border
   border-red-100
   p-3
   flex
   items-center
   gap-3
   "
>

   {/* IMAGE */}

   <img
      src={product.images?.[0].url}
      alt={product.name}
      className="
      w-16
      h-16
      md:w-20
      md:h-20
      rounded-xl
      object-cover
      flex-shrink-0
      "
   />

   {/* INFO */}

   <div className="flex-1 min-w-0">

      <h2
         className="
         font-bold
         text-[#FF3B4E]
         truncate
         "
      >
         {product.name}
      </h2>

      <p
         className="
         text-sm
         text-gray-500
         truncate
         "
      >
         {product.description}
      </p>

      <h3
         className="
         font-semibold
         text-gray-700
         mt-1
         "
      >
         ₹ {product.price}
      </h3>

   </div>

   {/* BUTTON */}

   <button

      onClick={() =>
         navigate(`/admin/edit-product/${product._id}`)
      }

      className="
      bg-[#FF3B4E]
      text-white
      px-3
      py-2
      rounded-lg
      text-sm
      font-semibold
      flex-shrink-0
      "
   >

      Edit

   </button>

</div>
   );
}