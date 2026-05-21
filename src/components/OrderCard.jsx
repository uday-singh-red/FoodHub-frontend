export default function OrderCard({

   order,onDelivered

}){

   return(

      <div
      className="
      w-full
      bg-zinc-900
      rounded-2xl
      overflow-hidden
      shadow-xl
      border
      border-zinc-800
      hover:scale-[1.01]
      transition-all
      duration-300
      "
      >

         {/* IMAGE */}

         <img

            src={
               order.product?.image
            }

            alt={
               order.product?.name
            }

            className="
            w-full
            h-[240px]
            object-cover
            "
         />



         {/* CONTENT */}

         <div className="p-5">

            {/* PRODUCT */}

            <h1
            className="
            text-2xl
            font-bold
            text-white
            mb-3
            "
            >

               {
                  order.product?.name
               }

            </h1>



            {/* USER */}

            <h2
            className="
            text-zinc-300
            mb-2
            "
            >

               User:
               {" "}
               {
                  order.user?.fullname
               }

            </h2>



            {/* PHONE */}

            <h2
            className="
            text-zinc-300
            mb-2
            "
            >

               Phone:
               {" "}
               {
                  order.phone
               }

            </h2>



            {/* ADDRESS */}

            <p
            className="
            text-zinc-400
            mb-3
            leading-relaxed
            "
            >

               {
                  order.address
               }

            </p>



            {/* QUANTITY */}

            <div
            className="
            flex
            items-center
            justify-between
            mb-3
            "
            >

               <h2
               className="
               text-lg
               font-semibold
               text-white
               "
               >

                  Quantity:
                  {" "}
                  {
                     order.quantity
                  }

               </h2>



               <h2
               className="
               bg-green-500
               px-4
               py-1
               rounded-full
               text-sm
               font-semibold
               "
               >

                  {
                     order.status
                  }

               </h2>

            </div>



            {/* PAYMENT */}

            <div
            className="
            flex
            items-center
            justify-between
            "
            >

               <h2
               className="
               text-zinc-300
               "
               >

                  Payment:
                  {" "}
                  {
                     order.paymentMethod
                  }

               </h2>



               {
                  order.paymentApp && (

                     <h2
                     className="
                     text-blue-400
                     "
                     >

                        {
                           order.paymentApp
                        }

                     </h2>
                  )
               }

               <button

   onClick={()=>
      onDelivered(
         order._id
      )
   }

   className="
   w-full
   mt-3
   bg-green-500
   hover:bg-green-600
   transition-all
   py-2
   rounded-lg
   text-sm
   "
>

   Delivered

</button>

            </div>

         </div>

      </div>
   )
}