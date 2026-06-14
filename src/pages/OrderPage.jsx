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



  return (

  <div
    className="
    w-full
    min-h-screen
    bg-[#FFF5F5]
    flex
    flex-col
    items-center
    justify-center
    p-5
    "
  >

    {success && (

      <div
        className="
        bg-green-100
        border
        border-green-300
        text-green-700
        rounded-xl
        p-3
        mb-4
        text-center
        w-full
        max-w-xl
        "
      >
        {success}
      </div>

    )}

    <div
      className="
      w-full
      max-w-xl
      bg-white
      p-8
      rounded-3xl
      shadow-xl
      "
    >

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate(-1)}
        className="
        mb-5
        text-[#FF3B4E]
        font-semibold
        hover:underline
        "
      >
        ← Back
      </button>

      {/* TITLE */}

      <h1
        className="
        text-4xl
        font-bold
        text-[#FF3B4E]
        text-center
        mb-8
        "
      >
        Order Details
      </h1>

      {/* ERROR */}

      {error && (

        <div
          className="
          bg-red-100
          border
          border-red-300
          text-red-600
          rounded-xl
          p-3
          mb-5
          text-center
          "
        >
          {error}
        </div>

      )}

      {/* ADDRESS */}

      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        className="
        w-full
        h-[120px]
        p-3
        border
        border-gray-300
        rounded-xl
        outline-none
        resize-none
        focus:border-[#FF3B4E]
        mb-5
        "
      />

      {/* PHONE */}

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        className="
        w-full
        p-3
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:border-[#FF3B4E]
        mb-5
        "
      />

      {/* PAYMENT METHOD */}

      <div className="mb-6">

        <h2
          className="
          text-xl
          font-semibold
          text-gray-800
          mb-4
          "
        >
          Payment Method
        </h2>

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-4
          "
        >

          <label
            className="
            flex
            items-center
            gap-2
            text-gray-700
            cursor-pointer
            "
          >
            <input
              type="radio"
              checked={
                paymentMethod === "cod"
              }
              onChange={() =>
                setPaymentMethod("cod")
              }
            />

            Cash On Delivery
          </label>

          <label
            className="
            flex
            items-center
            gap-2
            text-gray-700
            cursor-pointer
            "
          >
            <input
              type="radio"
              checked={
                paymentMethod === "online"
              }
              onChange={() =>
                setPaymentMethod("online")
              }
            />

            Online Payment
          </label>

        </div>

      </div>

      {/* ONLINE PAYMENT OPTIONS */}

      {paymentMethod === "online" && (

        <div
          className="
          mb-6
          space-y-3
          "
        >

          <button
            onClick={() =>
              setPaymentApp("PhonePe")
            }
            className={`
            w-full
            p-3
            rounded-xl
            border-2
            transition
            ${
              paymentApp === "PhonePe"
                ? "bg-[#FF3B4E] text-white border-[#FF3B4E]"
                : "border-[#FF3B4E] text-[#FF3B4E]"
            }
            `}
          >
            PhonePe
          </button>

          <button
            onClick={() =>
              setPaymentApp("Paytm")
            }
            className={`
            w-full
            p-3
            rounded-xl
            border-2
            transition
            ${
              paymentApp === "Paytm"
                ? "bg-[#FF3B4E] text-white border-[#FF3B4E]"
                : "border-[#FF3B4E] text-[#FF3B4E]"
            }
            `}
          >
            Paytm
          </button>

          <button
            onClick={() =>
              setPaymentApp("GooglePay")
            }
            className={`
            w-full
            p-3
            rounded-xl
            border-2
            transition
            ${
              paymentApp === "GooglePay"
                ? "bg-[#FF3B4E] text-white border-[#FF3B4E]"
                : "border-[#FF3B4E] text-[#FF3B4E]"
            }
            `}
          >
            Google Pay
          </button>

        </div>

      )}

      {/* PLACE ORDER BUTTON */}

      <button
        onClick={handleOrder}
        className="
        w-full
        bg-[#FF3B4E]
        text-white
        py-3
        rounded-xl
        font-semibold
        text-lg
        hover:opacity-90
        transition
        "
      >
        Place Order
      </button>

    </div>

  </div>

)
}