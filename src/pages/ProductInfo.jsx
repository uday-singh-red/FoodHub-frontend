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
         await fetch(`http://localhost:5000/api/v1/products/${id}`)

         const data =await res.json()

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



  return (

  <div
    className="
    min-h-screen
    bg-[#FFF5F5]
    p-5
    md:p-10
    "
  >

    <div
      className="
      max-w-6xl
      mx-auto
      "
    >

      {/* BACK BUTTON */}

      <button
        onClick={() => window.history.back()}
        className="
        mb-6
        text-[#FF3B4E]
        font-semibold
        hover:underline
        "
      >
        ← Back
      </button>

      <div
        className="
        bg-white
        rounded-3xl
        shadow-xl
        p-6
        md:p-10
        grid
        md:grid-cols-2
        gap-10
        "
      >

        {/* IMAGE */}

        <div
          className="
          flex
          items-center
          justify-center
          "
        >

          <img
            src={product.image}
            alt={product.name}
            className="
            w-full
            max-w-md
            object-contain
            rounded-2xl
            "
          />

        </div>

        {/* INFO */}

        <div>

          <h1
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#FF3B4E]
            mb-5
            "
          >
            {product.name}
          </h1>

          <p
            className="
            text-gray-600
            leading-7
            mb-8
            "
          >
            {product.description}
          </p>

          <h2
            className="
            text-2xl
            font-semibold
            text-gray-800
            mb-4
            "
          >
            Nutrition Details
          </h2>

          <div
            className="
            grid
            grid-cols-2
            gap-4
            "
          >

            <div
              className="
              bg-[#FFF5F5]
              p-4
              rounded-xl
              "
            >
              <p className="text-gray-500 text-sm">
                Protein
              </p>

              <h3
                className="
                text-xl
                font-bold
                text-[#FF3B4E]
                "
              >
                {product.info?.protein} g
              </h3>
            </div>

            <div
              className="
              bg-[#FFF5F5]
              p-4
              rounded-xl
              "
            >
              <p className="text-gray-500 text-sm">
                Fat
              </p>

              <h3
                className="
                text-xl
                font-bold
                text-[#FF3B4E]
                "
              >
                {product.info?.fat} g
              </h3>
            </div>

            <div
              className="
              bg-[#FFF5F5]
              p-4
              rounded-xl
              "
            >
              <p className="text-gray-500 text-sm">
                Quantity
              </p>

              <h3
                className="
                text-xl
                font-bold
                text-[#FF3B4E]
                "
              >
                {product.info?.quantity}
              </h3>
            </div>

            <div
              className="
              bg-[#FFF5F5]
              p-4
              rounded-xl
              "
            >
              <p className="text-gray-500 text-sm">
                Amount
              </p>

              <h3
                className="
                text-xl
                font-bold
                text-[#FF3B4E]
                "
              >
                ₹ {product?.price}
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

)
}