import { useState} from "react"
import {useNavigate } from "react-router-dom"
import { useAuth} from "../context/AuthContext"



export default function ProductCard({ image,name,description,_id}){
   const navigate = useNavigate()
   const { user } = useAuth()

   const [count,setCount]= useState(1)

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
      <div className="bg-gray-400">
      <div onClick={()=>{
         navigate(`/product/${_id}`)
      }}
      >

         {/* IMAGE */}

         <img

            src={image}
            alt={name}
            className=" w-full h-[100px] sm:h-[260px] object-cover "
         />



         {/* CONTENT */}

         <div className="p-4">

            <h1
            className="
            text-xl
            sm:text-2xl
            font-bold
            mb-2
            "
            >
               {name}
            </h1>



            <p
            className="
            text-zinc-300
            text-sm
            sm:text-base
            "
            >
               {description}
            </p>


         </div>

      </div>

                  {/* QUANTITY + ORDER */}

            <div
            className="
            flex
            flex-col
            gap-1.5
            items-center
            justify-between
            p-2
            "
            >

               {/* QUANTITY CONTROLLER */}

               <div
               className="
               flex
               items-center
               gap-2
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
                  text-xl
                  font-bold
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
                  bg-green-500
                  hover:bg-green-600
                  transition-all
                  px-5
                  py-2
                  rounded-lg
                  "
               >

                  Order

               </button>

            </div>
         

      </div>
   )
}