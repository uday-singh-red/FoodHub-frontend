import {
   useState,
   useEffect
}
from "react"

import {
   useLocation,
   useNavigate,
}
from "react-router-dom"


export default function OrderPage(){
   const navigate =useNavigate()
   const location =useLocation()


const productId =location.state?.productId
const quantity =location.state?.quantity

useEffect(()=>{
   if(!productId){
      navigate("/")
   }
},[])


  const [
   success,
   setSuccess
   ] = useState("")

   const [
      address,
      setAddress
   ] = useState("")

   const [
      phone,
      setPhone
   ] = useState("")

   const [
      paymentMethod,
      setPaymentMethod
   ] = useState("cod")

   const [
      paymentApp,
      setPaymentApp
   ] = useState("")

   const [
      error,
      setError
   ] = useState("")

   const handleOrder =
   async()=>{

    const phoneRegex =/^[6-9]\d{9}$/

   if(!phoneRegex.test(phone)){
      setError(
         "Enter valid phone number"
      )
      return
   }



      try{
         const res =
         await fetch(
`http://localhost:5000/api/v1/orders/create-order`,
            {
               method:"POST",
               headers:{
                  "Content-Type":
                  "application/json"
               },

               credentials:"include",
               body:JSON.stringify({
                  productId,
                  quantity,
                  address,
                  phone,
                  paymentMethod,
                  paymentApp
               })
            }
         )


         const data =await res.json()

         console.log(data)



         if(data.success){

             setSuccess("Order placed successfully")

            setTimeout(()=>{
                navigate("/")
            },2000)
         }

      }

      catch(error){

         console.log(error)
      }
   }



   return(

      <div
      className="
      w-full
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      justify-center
      p-5
      "
      >

        {
   success && (

      <h2
      className="
      bg-green-500
      p-3
      rounded-lg
      mb-5
      text-center
      "
      >

         {success}

      </h2>
   )
}

         <div
         className="
         w-full
         max-w-xl
         bg-zinc-900
         p-8
         rounded-2xl
         "
         >

            <h1
            className="
            text-3xl
            font-bold
            mb-6
            "
            >
               Order Details
            </h1>



            {/* ERROR */}

            {
               error && (

                  <h2
                  className="
                  bg-red-500
                  p-3
                  rounded-lg
                  mb-5
                  "
                  >
                     {error}
                  </h2>
               )
            }



            {/* ADDRESS */}

            <textarea

               placeholder="Address"

               value={address}

               onChange={(e)=>
                  setAddress(
                     e.target.value
                  )
               }

               className="
               w-full
               h-[120px]
               p-3
               rounded-lg
               bg-zinc-800
               outline-none
               mb-5
               "
            />



            {/* PHONE */}

            <input

               type="number"

               placeholder="Phone Number"

               value={phone}

               onChange={(e)=>
                  setPhone(
                     e.target.value
                  )
               }

               className="
               w-full
               p-3
               rounded-lg
               bg-zinc-800
               outline-none
               mb-5
               "
            />



            {/* PAYMENT */}

            <div className="mb-5">

               <h2
               className="
               text-xl
               font-bold
               mb-3
               "
               >
                  Payment Method
               </h2>



               <div
               className="
               flex
               gap-5
               "
               >

                  <label>

                     <input

                        type="radio"

                        checked={
                           paymentMethod
                           === "cod"
                        }

                        onChange={()=>
                           setPaymentMethod(
                              "cod"
                           )
                        }
                     />

                     Cash On Delivery

                  </label>



                  <label>

                     <input

                        type="radio"

                        checked={
                           paymentMethod
                           === "online"
                        }

                        onChange={()=>
                           setPaymentMethod(
                              "online"
                           )
                        }
                     />

                     Online Payment

                  </label>

               </div>

            </div>



            {/* ONLINE OPTIONS */}

            {
               paymentMethod
               === "online" && (

                  <div
                  className="
                  mb-5
                  space-y-3
                  "
                  >

                     <button

                        onClick={()=>
                           setPaymentApp(
                              "PhonePe"
                           )
                        }

                        className="
                        w-full
                        bg-purple-500
                        p-3
                        rounded-lg
                        "
                     >

                        PhonePe

                     </button>



                     <button

                        onClick={()=>
                           setPaymentApp(
                              "Paytm"
                           )
                        }

                        className="
                        w-full
                        bg-blue-500
                        p-3
                        rounded-lg
                        "
                     >

                        Paytm

                     </button>



                     <button

                        onClick={()=>
                           setPaymentApp(
                              "GooglePay"
                           )
                        }

                        className="
                        w-full
                        bg-green-500
                        p-3
                        rounded-lg
                        "
                     >

                        Google Pay

                     </button>

                  </div>
               )
            }



            {/* BUTTON */}

            <button

               onClick={handleOrder}

               className="
               w-full
               bg-green-500
               hover:bg-green-600
               transition-all
               p-3
               rounded-lg
               text-lg
               "
            >

               Place Order

            </button>

         </div>

      </div>
   )
}