import { useRef} from "react"



export default function CartCard({ item , getCart, cart, setCart}){

const debounceRef = useRef(null)

// this is function of update the card quantity
const updateQty =async(newQty)=>{

   if(newQty < 1){
      return
   }

   // UPDATE IN UI ONLY WITH STATE FOR GOOD EXPERIENCE

   const updatedCart =
   cart.map((cartItem)=>{
      if(cartItem._id === item._id){
         return {
            ...cartItem,
            quantity:newQty
         }
      }

      return cartItem
   })

   setCart(updatedCart)

   clearTimeout(
    debounceRef.current
   )



   // BACKEND UPDATE

   debounceRef.current =
   setTimeout(async()=>{

      try{
         await fetch(
"http://localhost:5000/api/v1/cart/update",

            {

               method:"PATCH",
               headers:{
                  "Content-Type":
                  "application/json"
               },
               credentials:"include",
               body:JSON.stringify({
                  cartId:item._id,
                  quantity:newQty
               })
            }
         )


      }

      

      catch(error){
         console.log(error)
      }

   },500)
}

   const removeItem =async()=>{

      const updatedCart =
      cart.filter(

         (cartItem)=>

         cartItem._id !== item._id
      )



      // INSTANT UI UPDATE

      setCart(updatedCart)

   try{
      await fetch(
`http://localhost:5000/api/v1/cart/remove/${item._id}`,

         {

            method:"DELETE",
            credentials:"include"
         }
      )

      getCart()

   }

   catch(error){
      console.log(error)
   }
  }

   return(
      <div
     className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      w-full
      h-[340px]
      flex
      flex-col
      "
      >

         <img
            src={
               item.product.image
            }
            alt={
               item.product.name
            }

            className="
            w-full
            h-[130px]
            object-contain
            flex-shrink-0
            "
         />

         <div className="p-4">
            <h1
            className="
            text-sm
            md:text-base
            font-bold
            text-gray-800
            truncate
            "
            >

               {
                  item.product.name
               }

            </h1>

            <p
            className="
            text-xs
            text-zinc-500
            mt-1
            line-clamp-2
            "
            >

               {
                  item.product.description
               }

            </p>

            <div
            className="
            flex
            items-center
            justify-between
            mt-4
            "
            >

               <span
               className="
               text-sm
               font-semibold
               text-gray-700
               "
               >

                  Qty:
                  {
                     item.quantity
                  }

               </span>



               <button
               className="
               px-3
               py-1
               rounded-lg
               text-xs
               "
               >

                  {(item.product.price)*item.quantity}

               </button>

            </div>

            <div
            className="
          flex
         items-center
         justify-center
         gap-3
         mt-4
            "
            >

   <button

      onClick={()=>

         updateQty(
            item.quantity - 1
         )
      }

      className="
    w-8
   h-8
   rounded-full
   bg-[#FF3B4E]
   text-white
   font-bold
   flex
   items-center
   justify-center
   hover:opacity-90
   transition
      "
   >

      -

   </button>



   <span className="
   font-bold
   text-lg
   text-gray-800
   ">

      {
         item.quantity
      }

   </span>



   <button

      onClick={()=>

         updateQty(
            item.quantity + 1
         )
      }

      className="
  w-8
   h-8
   rounded-full
   bg-[#FF3B4E]
   text-white
   font-bold
   flex
   items-center
   justify-center
   hover:opacity-90
   transition
      "
   >

      +

   </button>

</div>

        <button

        onClick={removeItem}

        className="
        mt-3
        w-full
        bg-red-500
        py-1
        rounded-lg
        text-xs
        "
        >

        Remove

        </button>

         </div>

      </div>
   )
}