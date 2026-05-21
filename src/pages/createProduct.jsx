import {
   useState
}
from "react"

import {  useNavigate } from "react-router-dom"



export default function CreateProduct(){

   const navigate=useNavigate()

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

   const [fat,setFat]
   = useState("")

   const [
      quantity,
      setQuantity
   ] = useState("")

   const [amount,setAmount]
   = useState("")



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
            "amount",
            amount
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
         console.log(data)

         if(data.success){

             setSuccess(data.message)

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
      items-center
      justify-center
      p-5
      "
      >

         <button

         onClick={()=>
            navigate("/admin")
         }
            className="mb-6 bg-zinc-500 px-4 py-2 rounded-lg hover:bg-zinc-700"
         
      >

         ← Back

      </button>


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

         <form

            onSubmit={handleCreate}

            className="
            w-full
            max-w-2xl
            bg-zinc-900
            p-8
            rounded-2xl
            "
         >

            <h1
            className="
            text-3xl
            font-bold
            mb-8
            "
            >
               Create Product
            </h1>



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
               p-3
               mb-4
               rounded-lg
               bg-zinc-800
               outline-none
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
               p-3
               mb-4
               rounded-lg
               bg-zinc-800
               outline-none
               h-[120px]
               "
            />



            {/* IMAGE */}

            <input

               type="file"

               onChange={(e)=>
                  setImage(
                     e.target.files[0]
                  )
               }

               className="
               w-full
               mb-6
               "
            />



            {/* INFO SECTION */}

            <h2
            className="
            text-2xl
            font-bold
            mb-5
            "
            >
               Product Information
            </h2>



            <div
            className="
            grid
            sm:grid-cols-2
            gap-4
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
                  p-3
                  rounded-lg
                  bg-zinc-800
                  outline-none
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
                  p-3
                  rounded-lg
                  bg-zinc-800
                  outline-none
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
                  p-3
                  rounded-lg
                  bg-zinc-800
                  outline-none
                  "
               />



               {/* AMOUNT */}

               <input

                  type="text"

                  placeholder="Amount"

                  value={amount}

                  onChange={(e)=>
                     setAmount(
                        e.target.value
                     )
                  }

                  className="
                  p-3
                  rounded-lg
                  bg-zinc-800
                  outline-none
                  "
               />

            </div>



            {/* BUTTON */}

            <button

               type="submit"

               className="
               w-full
               mt-8
               bg-blue-500
               hover:bg-blue-600
               transition-all
               py-3
               rounded-lg
               text-lg
               "
            >

               Create Product

            </button>

         </form>

      </div>
   )
}