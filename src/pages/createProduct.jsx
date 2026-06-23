import {
   useState
}
from "react"

import {  useNavigate } from "react-router-dom"

import ProductBasicInfo from "../components/product/ProductBasicInfo";
import ProductExtraInfo from "../components/product/ProductExtraInfo";



export default function CreateProduct(){

   const navigate=useNavigate()

   const [error,setError] = useState("")

    const [
   success,
   setSuccess
   ] = useState("")

   const [form, setForm] = useState({

      name: "",
      description: "",
      category: "",

      price: "",
      discountedPrice: "",

      stock: "",

      image: null,

      isVeg: false,
      isVegan: false,
      isSpicy: false,
      isFeatured: false,
      isBestSeller: false,

      calories: "",
      protein: "",
      carbs: "",
      fat: "",

      ingredients: "",
      allergens: "",

      preparationTime: ""

   });

   const resetForm=()=>{
       setForm({

               name:"",
               description:"",
               category:"",

               price:"",
               discountedPrice:"",
               stock:"",

               image:null,

               isVeg:false,
               isVegan:false,
               isSpicy:false,
               isFeatured:false,
               isBestSeller:false,

               calories:"",
               protein:"",
               carbs:"",
               fat:"",

               ingredients:"",
               allergens:"",

               preparationTime:""

            })
   }


   const handleCreate =
   async(e)=>{

      e.preventDefault()

       if (
         !form.name ||
         !form.category ||
         !form.price ||
         !form.stock ||
         !form.image
      ) {
         return setError(
            "Please fill all required fields"
         );
      }



      try{

         const formData =
         new FormData()

         Object.keys(form).forEach(key => {

            formData.append(
               key,
               form[key]
            );

         });




         const res =
         await fetch(

`http://localhost:5000/api/v1/products/create-product`,

            {

               method:"POST",

               credentials:"include",

               body:formData
            }
         )



         const data =await res.json()
         console.log(data)

         if(data.success){

             setSuccess(data.message)

                setTimeout(()=>{
                        setSuccess("")
                     },3000)
         }

         else{
            setError(data.message)

            setTimeout(()=>{
               setError("")
            },3000)
         }

      }

      catch(error){

         console.log(error)
          setError("Something went wrong")

           setTimeout(()=>{
               setError("")
            },3000)
      }
   }



   return(

      <div
      className="
      min-h-screen
      bg-[#FFF5F5]
      flex
      justify-center
      items-start
      p-4
      md:p-8
      "
      >




         <form

            onSubmit={handleCreate}

          className="
            w-full
            max-w-6xl
            bg-white
            rounded-3xl
            shadow-xl
            p-5
            md:p-8

            "
         >

            
       <div
         className="
         flex
         justify-between
         items-center
         mb-6
         "
         >

            <button
               type="button"
               onClick={() => navigate("/admin")}
               className="
               w-10
               h-10
               rounded-full
               bg-white
               shadow-md
               text-gray-700
               hover:shadow-lg
               "
            >
               ←
            </button>

            <h1
               className="
               text-2xl
               font-bold
               text-gray-800
               "
            >
               Create Product
            </h1>

            <button
               type="button"
               onClick={resetForm}
               className="
               w-10
               h-10
               rounded-full
               bg-[#FF3B4E]
               text-white
               text-xl
               "
            >
               ↺
            </button>

         </div>

            {
success && (

   <div
   className="
   mb-5
   px-4
   py-3
   rounded-2xl
   border
   border-green-300
   bg-green-50
   flex
   items-center
   gap-3
   animate-pulse
   "
   >

      <span
      className="
      text-green-600
      text-xl
      "
      >
         ✅
      </span>

      <p
      className="
      text-green-700
      font-medium
      text-sm
      sm:text-base
      "
      >
         {success}
      </p>

   </div>

)
}

{
error && (

   <div
   className="
   mb-4
   px-4
   py-3
   rounded-2xl
   border
   border-red-300
   bg-red-50
   flex
   items-center
   gap-3
   "
   >

      <span className="text-red-600">
         ❌
      </span>

      <p
      className="
      text-red-700
      text-sm
      font-medium
      "
      >
         {error}
      </p>

   </div>

)
}



      <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6
      items-start
      "
      >

         <ProductBasicInfo
            form={form}
            setForm={setForm}
         />

         <ProductExtraInfo
            form={form}
            setForm={setForm}
         />

      </div>


         <div
      className="
      mt-8
      flex
      justify-center
      "
      >

         <button
            type="submit"
            className="
            bg-[#FF3B4E]
            text-white
            font-semibold
            px-10
            py-3
            rounded-2xl
            hover:opacity-90
            transition
            "
         >
            Create Product
         </button>

      </div>
            

         </form>

      </div>
   )
}