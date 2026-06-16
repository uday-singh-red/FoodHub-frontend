export default function OrderCard({

   order,
   onDelivered

}) {

   return (

      <div
         className="
        bg-white
         rounded-2xl
         overflow-hidden
         shadow-lg
         border
         border-red-100
         max-w-[320px]
         mx-auto
         "
      >

         {/* IMAGE */}

         <img

            src={order.product?.image}

            alt={order.product?.name}

            className="
            w-full
            h-[200px]
            object-cover
            "
         />

         {/* CONTENT */}

         <div className="p-3">

            {/* PRODUCT NAME */}

            <h1
               className="
               text-2xl
               font-bold
               text-[#FF3B4E]
               
               "
            >

               {order.product?.name}

            </h1>

            {/* USER */}

            <div className="">

               <span className="font-semibold text-gray-800">
                  User:
               </span>

               <span className="text-gray-600 ml-2">
                  {order.user?.fullname}
               </span>

            </div>

            {/* PHONE */}

            <div className="">

               <span className="font-semibold text-gray-800">
                  Phone:
               </span>

               <span className="text-gray-600 ml-2">
                  {order.phone}
               </span>

            </div>

            {/* ADDRESS */}

            <div className="">

               <span className="font-semibold text-gray-800">
                  Address:
               </span>

               <p
                  className="
                  text-gray-600
                  
                  "
               >
                  {order.address}
               </p>

            </div>

            {/* QUANTITY + STATUS */}

            <div
               className="
               flex
               items-center
               justify-between
               mb-2
               "
            >

               <h2
                  className="
                  font-semibold
                  text-gray-800
                  "
               >
                  Qty: {order.quantity}
               </h2>

               <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${
                     order.status === "delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                  }
                  `}
               >
                  {order.status}
               </span>

            </div>

            {/* PAYMENT */}

            <div className="mb-2">

               <h2
                  className="
                  text-gray-800
                  font-semibold
                  "
               >
                  Payment:
                  <span
                     className="
                     text-gray-600
                     ml-2
                     font-normal
                     "
                  >
                     {order.paymentMethod}
                  </span>
               </h2>

               {

                  order.paymentApp && (

                     <p
                        className="
                        text-[#FF3B4E]
                        text-sm
                        mt-1
                        "
                     >

                        {order.paymentApp}

                     </p>

                  )

               }

            </div>

            {/* BUTTON */}

            {

               order.status !== "delivered" && (

                  <button

                     onClick={() =>
                        onDelivered(
                           order._id
                        )
                     }

                     className="
                     w-full
                     bg-[#FF3B4E]
                     text-white
                     py-3
                     rounded-xl
                     font-semibold
                     hover:opacity-90
                     transition
                     "
                  >

                     Mark As Delivered

                  </button>

               )

            }

         </div>

      </div>

   )

}