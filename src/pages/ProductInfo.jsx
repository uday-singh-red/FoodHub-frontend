import {
   useEffect,
   useState
}
from "react"

import {
   useParams
}
from "react-router-dom"



export default function ProductInfo(){

   const { id } =
   useParams()



   const [
      product,
      setProduct
   ] = useState(null)



   const getProduct =
   async()=>{

      try{

         const res =
         await fetch(

`http://localhost:5000/api/v1/products/${id}`

         )



         const data =
         await res.json()



         console.log(data)



         if(data.success){

            setProduct(
               data.product
            )
         }

      }

      catch(error){

         console.log(error)
      }
   }



   useEffect(()=>{

      getProduct()

   },[])



   if(!product){

      return(

         <h1
         className="
         text-white
         text-center
         mt-10
         "
         >
            Loading...
         </h1>
      )
   }



   return(

      <div
      className="
      w-full
      min-h-screen
      bg-black
      text-white
      p-5
      sm:p-10
      "
      >

         <div
         className="
         max-w-5xl
         mx-auto
         grid
         md:grid-cols-2
         gap-10
         "
         >

            {/* IMAGE */}

            <img

               src={product.image}

               alt={product.name}

               className="
               w-full
               rounded-2xl
               "
            />



            {/* INFO */}

            <div>

               <h1
               className="
               text-3xl
               sm:text-5xl
               font-bold
               mb-5
               "
               >
                  {product.name}
               </h1>



               <p
               className="
               text-zinc-300
               mb-6
               "
               >
                  {product.description}
               </p>



               <div
               className="
               space-y-3
               text-lg
               "
               >

                  <p>

                     Protein:
                     {product.info?.protein}

                  </p>



                  <p>

                     Fat:
                     {product.info?.fat}

                  </p>



                  <p>

                     Quantity:
                     {product.info?.quantity}

                  </p>



                  <p>

                     Amount:
                     {product.info?.amount}

                  </p>

               </div>

            </div>

         </div>

      </div>
   )
}