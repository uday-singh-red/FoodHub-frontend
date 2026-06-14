import { useState} from "react"
import {useNavigate } from "react-router-dom"
import { useAuth} from "../context/AuthContext"
import { useCart } from "../context/CartContext"



export default function ProductCard({ image,name,description,_id}){
   const navigate = useNavigate()
   const { user } = useAuth()
   const { setCartCount } = useCart();
   
   

   const [count,setCount]= useState(1)
   const [message,setMessage]= useState('')

   const handleCart =async()=>{
   if(!user){
      navigate("/login")
      return
   }



   try{
      const res =
      await fetch(
"http://localhost:5000/api/v1/cart/add",
         {

            method:"POST",
            headers:{
               "Content-Type":
               "application/json"
            },
            credentials:"include",
            body:JSON.stringify({
               productId:_id,
               quantity:count
            })
         }
      )

      const data = await res.json()
      console.log(data)

      if(data.success){
         setMessage(data.message)

         setTimeout(()=>{
            setMessage('')
         },1000)

         setCartCount(prev=>prev+count);
         
      }



   }

   catch(error){
      console.log(error)
   }
}

   const handleOrder =()=>{

   if(!user){
      navigate("/login")
      return
   }

   navigate("/order", {
       state:{
            productId:_id,
            quantity:count
         }
   })
}

   return(
      <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-1
      p-2
      "
      >


      <div onClick={()=>{
         navigate(`/product/${_id}`)
      }}
      >

         {/* IMAGE */}

         <img

            src={image}
            alt={name}
            className="w-full h-[120px] sm:h-[180px] object-contain bg-[#FFF5F5]"
         />



         {/* CONTENT */}

         <div className="p-1">

            <h1
            className="
            text-sm
            sm:text-base
            font-bold
         text-gray-800
            "
            >
               {name}
            </h1>



            <p
            className="
          text-gray-500
            text-xs
            line-clamp-2
            "
            >
               {description}
            </p>


         </div>

         <div
         className="
         flex
         items-center
         gap-1
         mt-2
         "
         >

         <span className="text-yellow-500">
         ⭐
         </span>

         <span
         className="
         text-xs
         font-semibold
         text-gray-700
         "
         >
         4.8
         </span>

         </div>

      </div>

                  {/* QUANTITY + ORDER */}

           <div
            className="
            p-3
            border-t
            flex
            flex-col
            gap-1
            "
            >

               {/* QUANTITY CONTROLLER */}

               <div
            className="
            flex
            items-center
            justify-center
            gap-3
               "
               >

                  {/* MINUS */}

                  <button

                     onClick={()=>{

                        if(count > 1){

                           setCount(
                              count - 1
                           )
                        }
                     }}

                     className="
                     bg-zinc-700
                     px-3
                     py-1
                     rounded-lg
                     text-xl
                     "
                  >

                     -

                  </button>



                  {/* COUNT */}

                  <h2
                  className="
                  font-bold
                  text-lg
                  text-gray-800
                  "
                  >

                     {count}

                  </h2>



                  {/* PLUS */}

                  <button

                     onClick={()=>
                        setCount(
                           count + 1
                        )
                     }

                     className="
                     bg-zinc-700
                     px-3
                     py-1
                     rounded-lg
                     text-xl
                     "
                  >

                     +

                  </button>

               </div>



               {/* ORDER BUTTON */}

               <button onClick={handleOrder}

                  className="
                  flex-1
                  bg-[#FF3B4E]
                  text-white
                  py-2
                  rounded-xl
                  font-semibold
                  text-sm
                  hover:opacity-90
                  transition
                  "
               >

                  Order

               </button>
            

               {
   message ? (

      <div
      className="
      bg-green-400
      text-white
      py-2
      rounded-xl
      text-center
      font-semibold
      "
      >
         {message}
      </div>

   ) : (

      <button

      onClick={handleCart}

      className="
      flex-1
      bg-gray-100
      text-gray-800
      py-2
      rounded-xl
      font-semibold
      text-sm
      hover:bg-gray-200
      transition
      "
      >

         Add To Cart

      </button>

   )
}

            </div>
         

      </div>
   )
}