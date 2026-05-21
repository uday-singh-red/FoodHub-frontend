import {
   useEffect,
   useState
}
from "react"


import OrderCard from "../components/OrderCard"
import { useNavigate } from "react-router-dom"

export default function AdminOrders(){

    const navigate= useNavigate()

   const [
      orders,
      setOrders
   ] = useState([])


   const handleDelivered =
async(orderId)=>{

   try{

      const res =
      await fetch(

`http://localhost:5000/api/v1/orders/delivered`,

         {

            method:"PATCH",

            headers:{
               "Content-Type":
               "application/json"
            },

            credentials:"include",

            body:JSON.stringify({

               orderId
            })
         }
      )



      const data =
      await res.json()



      if(data.success){

        getOrders()
      }

   }

   catch(error){

      console.log(error)
   }
}



   const getOrders =
   async()=>{

      try{
         const res =
         await fetch(
`http://localhost:5000/api/v1/orders/all-orders`,
            {
               credentials:"include"
            }
         )



         const data = await res.json()

         if(data.success){
            setOrders(
               data.orders
            )
         }

      }

      catch(error){
         console.log(error)
      }
   }



   useEffect(()=>{
      getOrders()
   },[])



   return(

      <div
      className="
      w-full
      min-h-screen
      bg-black
      text-white
      p-10
      "
      >

        <button

         onClick={()=>
            navigate("/admin")
         }

         className="
            
            top-22
            left-4
            z-50
            bg-zinc-800
            hover:bg-zinc-700
            transition-all
            px-5
            py-2
            rounded-xl
            text-white
            shadow-lg
         "
      >

         ← Back

      </button>

         <h1
         className="
         text-4xl
         font-bold
         mb-10
         "
         >
            Orders
         </h1>



       <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
            >

            {
                orders.map((order)=>(

                    <OrderCard

                        key={order._id}

                        order={order}

                        onDelivered={
                      handleDelivered
                                    }
                    />
                ))
            }

      </div>
         </div>

    
   )
}