import {
   useState
}
from "react"

import {  useNavigate } from "react-router-dom"



export default function CreateProduct(){

   const navigate=useNavigate()

   const [error,setError] = useState("")

    const [
   success,
   setSuccess
   ] = useState("")

   const [name,setName] =
   useState("")

   const [
      description,
      setDescription
   ] = useState("")

   const [image,setImage] =
   useState(null)



   {/* INFO STATES */}

   const [protein,setProtein]
   = useState("")

   const [category,setCategory]
    = useState("")

   const [fat,setFat]
   = useState("")

   const [
      quantity,
      setQuantity
   ] = useState("")

   const [amount,setAmount]
   = useState(0)



   const handleCreate =
   async(e)=>{

      e.preventDefault()



      try{

         const formData =
         new FormData()



         formData.append(
            "name",
            name
         )

         formData.append(
            "description",
            description
         )

         formData.append(
            "image",
            image
         )



         {/* INFO */}

         formData.append(
            "protein",
            protein
         )

         formData.append(
            "fat",
            fat
         )

         formData.append(
            "quantity",
            quantity
         )

         formData.append(
            "price",
            amount
         )

         formData.append(
            "category",
            category
         )



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
         console.log(data.message)

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
          setSuccess("Something went wrong")
      }
   }



   return(

      <div
      className="
      relative
      w-full
      max-w-xl
      bg-white
      rounded-3xl
      shadow-xl
      p-5
      md:p-6
      "
      >

         <button

         onClick={()=>
            navigate("/admin")
         }
            className="
            absolute
            top-4
            left-4
            z-10
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


         <form

            onSubmit={handleCreate}

            className="
            w-full
            max-w-xl
            bg-white
            rounded-3xl
            shadow-xl
            p-5
            md:p-6

            "
         >

            <h1
            className="
          text-2xl
            font-bold
            text-gray-800
            mb-6
            text-center
            "
            >
               Create Product
            </h1>


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



            {/* NAME */}

            <input

               type="text"

               placeholder="Product Name"

               value={name}

               onChange={(e)=>
                  setName(e.target.value)
               }

               className="
               w-full
               h-11
               px-4
               rounded-xl
               border
               border-gray-200
               bg-white
               outline-none
               focus:border-[#FF3B4E]
               "
            />



            {/* DESCRIPTION */}

            <textarea

               placeholder="Description"

               value={description}

               onChange={(e)=>
                  setDescription(
                     e.target.value
                  )
               }

               className="
          w-full
            h-28
            p-4
            rounded-xl
            border
            border-gray-200
            resize-none
            outline-none
            focus:border-[#FF3B4E]
               "
            />



            {/* IMAGE */}

           <div
            className="
            border-2
            border-dashed
            border-gray-300
            rounded-2xl
            p-6
            text-center
            bg-[#FFF5F5]
            "
            >

               <label
               className="
               cursor-pointer
               bg-[#e78892]
               text-white
               px-5
               py-2
               rounded-xl
               inline-block
               font-medium
               hover:opacity-90
               transition
               "
               >
                  Add Image

                  <input
                  type="file"
                  className="hidden"
                  onChange={(e)=>setImage(e.target.files[0])}
                  />
               </label>

               {
                  image && (
                     <p
                     className="
                     mt-3
                     text-sm
                     text-gray-600
                     break-all
                     "
                     >
                        {image.name}
                     </p>
                  )
               }

            </div>


            {/* INFO SECTION */}

            <h2
            className="
            text-lg
            font-semibold
            text-gray-700
            mb-4
            mt-2
            "
            >
            Product Information
            </h2>



           <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            "
            >

               {/* PROTEIN */}

               <input

                  type="text"

                  placeholder="Protein"

                  value={protein}

                  onChange={(e)=>
                     setProtein(
                        e.target.value
                     )
                  }

                  className="
                w-full
               h-11
               px-4
               rounded-xl
               border
               border-gray-200
               bg-white
               outline-none
               focus:border-[#FF3B4E]
                  "
               />



               {/* FAT */}

               <input

                  type="text"

                  placeholder="Fat"

                  value={fat}

                  onChange={(e)=>
                     setFat(
                        e.target.value
                     )
                  }

                  className="
               w-full
               h-11
               px-4
               rounded-xl
               border
               border-gray-200
               bg-white
               outline-none
               focus:border-[#FF3B4E]
                  "
               />



               {/* QUANTITY */}

               <input

                  type="text"

                  placeholder="Quantity"

                  value={quantity}

                  onChange={(e)=>
                     setQuantity(
                        e.target.value
                     )
                  }

                  className="
               w-full
               h-11
               px-4
               rounded-xl
               border
               border-gray-200
               bg-white
               outline-none
               focus:border-[#FF3B4E]
                  "
               />



               {/* AMOUNT */}

               <input

                  type="text"

                  placeholder="Price"

                  value={amount}

                  onChange={(e)=>
                     setAmount(
                        e.target.value
                     )
                  }

                  className="
                 w-full
                  h-11
                  px-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  outline-none
                  focus:border-[#FF3B4E]one
                  "
               />

               <select

               value={category}

               onChange={(e)=>
                  setCategory(
                     e.target.value
                  )
               }

               className="
               w-full
               h-11
               px-4
               rounded-xl
               border
               border-gray-200
               bg-white
               outline-none
               focus:border-[#FF3B4E]
"
            >

               <option value="">
                  Select Category
               </option>

               <option value="Burger">
                  Burger
               </option>

               <option value="Pizza">
                  Pizza
               </option>

               <option value="Drinks">
                  Drinks
               </option>

               <option value="Dessert">
                  Dessert
               </option>

               <option value="Fast Food">
                  Fast Food
               </option>

            </select>

            </div>



            {/* BUTTON */}

            <button
            onClick={()=>{
               setName("")
               setDescription("")
               setImage(null)
               setProtein("")
               setFat("")
               setQuantity("")
               setAmount("")
               setCategory("")
            }}
            className="
            absolute
            top-4
            right-4
            z-50
            w-10
            h-10
            rounded-full
            bg-[#FF3B4E]
            text-white
            text-2xl
            shadow-lg
            hover:scale-110
            transition
            "
            >
            +
            </button>

            <button
            type="submit"
            className="
            w-full
            mt-6
            bg-[#FF3B4E]
            text-white
            font-semibold
            py-3
            rounded-2xl
            hover:opacity-90
            transition
            "
            >
            Create Product
            </button>
            

         </form>

      </div>
   )
}