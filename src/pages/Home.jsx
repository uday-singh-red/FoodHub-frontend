
import { useEffect,useState,React } from "react"
import ProductCard from "../components/ProductCard"
import { Await } from "react-router-dom"

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

         const data =await res.json()


         if(data.success){

            setProducts( data.products )
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
     bg-[#FFF5F5]
      text-white
      p-2
      "
      >

         <h1
         className="
         text-1xl
         font-bold
         mb-10
         "
         >
            Products
         </h1>



         <div
         className="
         grid
         grid-cols-2
         md:grid-cols-4
         lg:grid-cols-5
         gap-4
         "
         >

            {
               products.map((product)=>(

                  <ProductCard

                     _id={product._id}

                     key={product._id}

                     image={product.images[0].url}

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

