import { useState } from "react"

import {
   useLocation,
   useNavigate
}
from "react-router-dom"
import { useAuth }from "../context/AuthContext"



export default function VerifyOtp(){

   const [otp,setOtp] = useState("")
   const navigate = useNavigate()
   const location = useLocation()
   const {setUser} = useAuth()

   const email =location.state?.email

   const handleVerify =
   async()=>{

      try{

         const res = await fetch(
            "http://localhost:5000/api/v1/users/verify-otp",
            {
               method:"POST",
               headers:{
                  "Content-Type":
                  "application/json"
               },
               credentials:"include",
               body:JSON.stringify({
                  email,
                  otp
               })
            }
         )

         const data =
         await res.json()
         console.log(data)

         if(data.success){
            setUser(data.user)
            navigate("/")
         }

      }catch(error){
         console.log(error)
      }
   }



   return(

      <div
      className="w-full min-h-screen flex items-center justify-center bg-black text-white"
      >

         <div
         className="w-[400px] bg-zinc-900 p-8 rounded-xl"
         >

            <h1
            className="text-3xl font-bold mb-6 text-center"
            >
               Verify OTP
            </h1>



            <input

               type="text"

               placeholder="Enter OTP"

               value={otp}

               onChange={(e)=>
                  setOtp(e.target.value)
               }

               className="w-full p-3 mb-4 bg-zinc-800 rounded-lg outline-none"
            />



            <button

               onClick={handleVerify}

               className="w-full bg-blue-500 p-3 rounded-lg"
            >
               Verify
            </button>

         </div>

      </div>
   )
}