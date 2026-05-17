import { useState }
from "react"



export default function CreateProduct(){

   const [name,setName] =
   useState("")

   const [description,
   setDescription] =
   useState("")

   const [image,setImage] =
   useState(null)



   const handleSubmit =
   async()=>{

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



         const res =
         await fetch(

            "http://localhost:5000/api/v1/products/create-product",

            {

               method:"POST",

               credentials:"include",

               body:formData
            }
         )



         const data =
         await res.json()

         console.log(data)

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
      "
      >

         <div
         className="
         w-[450px]
         bg-zinc-900
         p-8
         rounded-xl
         "
         >

            <h1
            className="
            text-3xl
            font-bold
            mb-6
            "
            >
               Create Product
            </h1>



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
               bg-zinc-800
               rounded-lg
               outline-none
               "
            />



            <textarea

               placeholder="Description"

               value={description}

               onChange={(e)=>
               setDescription(e.target.value)
               }

               className="
               w-full
               p-3
               mb-4
               bg-zinc-800
               rounded-lg
               outline-none
               "
            />



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



            <button

               onClick={handleSubmit}

               className="
               w-full
               bg-blue-500
               p-3
               rounded-lg
               "
            >
               Create Product
            </button>

         </div>

      </div>
   )
}