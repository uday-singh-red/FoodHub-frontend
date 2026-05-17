
import { useEffect,useState,React } from "react"
import ProductCard from "../components/ProductCard"

  export default function Home(){

   const [products,
   setProducts] =
   useState([])



   const getProducts =
   async()=>{

      try{

         const res =
         await fetch(

            "http://localhost:5000/api/v1/products/all-products"
         )



         const data =
         await res.json()

         console.log(data)



         if(data.success){

            setProducts(
               data.products
            )
         }

      }

      catch(error){

         console.log(error)
      }
   }



   useEffect(()=>{

      getProducts()

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

         <h1
         className="
         text-4xl
         font-bold
         mb-10
         "
         >
            Products
         </h1>



         <div
         className="
         grid
         grid-cols-3
         gap-6
         "
         >

            {
               products.map((product)=>(

                  <ProductCard

                     key={product._id}

                     image={product.image}

                     name={product.name}

                     description={
                        product.description
                     }
                  />
               ))
            }

         </div>

      </div>
   )
}

