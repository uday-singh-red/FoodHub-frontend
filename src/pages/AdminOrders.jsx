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



   return (

  <div
    className="
    min-h-screen
    bg-[#FFF5F5]
    p-5
    md:p-10
    "
  >

    <div
      className="
      max-w-7xl
      mx-auto
      "
    >

      {/* TOP BAR */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-8
        "
      >

        <button

          onClick={() =>
            navigate("/admin")
          }

          className="
          bg-white
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
          w-fit
          "
        >

          ← Back

        </button>

        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-[#FF3B4E]
          "
        >
          Orders
        </h1>

      </div>

      {/* EMPTY STATE */}

      {
        orders.length === 0 && (

          <div
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            text-center
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-gray-700
              "
            >
              No Orders Found
            </h2>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              Orders will appear here.
            </p>

          </div>

        )
      }

      {/* ORDERS GRID */}

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
          orders.map((order) => (

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

  </div>

)
}