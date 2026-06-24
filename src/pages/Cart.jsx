import {useEffect,useState} from "react"
import CartCard from "../components/CartCard"
import { useCart } from "../context/CartContext"

export default function Cart(){

   const [
      cart,
      setCart
   ] = useState([])

   const [loading , setLoading] = useState(true)

   const { setCartCount,cartCount ,loaderCartCount} = useCart();



   const getCart = async()=>{

       console.time("getCart");

      try{
         const res =
         await fetch(
"http://localhost:5000/api/v1/cart/my-cart",
            {
               credentials:"include"
            }
         )

         const data =await res.json()
         console.log(data)

          console.timeEnd("getCart")

         if(data.success){

            setCart( data.cart )

            
         }

         setLoading(false);

      }

      catch(error){
         console.log(error)
      }
   }

   const totalPrice = cart.reduce(

   (total,item)=>

   

      total +
      (
         item.product.price *
         item.quantity
      ),

   0
)

//   loaderCartCount();

 const total = cart.reduce(
      (total,item)=>
          total + item.quantity,0
     )
        setCartCount(total)
       



   useEffect(()=>{
      getCart()
   },[])

   
if(loading){
   return(

      <div
      className="
      min-h-screen
      bg-[#FFF5F5]
      flex
      items-center
      justify-center
      
      "
      >

         <h1
         className="
         text-3xl
         font-bold
         text-[#FF3B4E]
         "
         >
            Loading...
         </h1>

      </div>
   )
}



   if(cart.length === 0){
   return(

      <div
      className="
      min-h-screen
      bg-[#FFF5F5]
      flex
      flex-col
      items-center
      justify-center
      "
      >

         <h2
         className="
         text-2xl
         font-bold
         text-gray-700
         "
         >
            Your Cart Is Empty
         </h2>

         <p
         className="
         text-gray-500
         mt-2
         "
         >
            Add some delicious food 🍔
         </p>

      </div>
   )
}



   return(

      <div
      className="
      overflow-hidden 
      w-full
      min-h-screen
      bg-[#FFF5F5]
      p-4
      md:p-8
      "
      >

    <h1
      className="
      text-2xl
      md:text-4xl
      font-bold
      text-gray-800
      mb-6
      "
      >
      🛒 My Cart
      </h1>



         <div
         className="
         grid
         grid-cols-2
         sm:grid-cols-3
         lg:grid-cols-4
         gap-4
         "
         >


            {

               cart.map((item)=>(

                  <CartCard

                     key={item._id}

                     item={item}

                     getCart={getCart}

                     cart={cart}

                     setCart={setCart}
                  />
               ))
            }

         </div>

        <div
className="
fixed
bottom-0
left-0
right-0
bg-white
border-t
shadow-lg
px-4
py-3
"
>

   <div
   className="
   box-border
   max-w-6xl
   mx-auto
   flex
   items-center
   justify-between
   "
   >

      <div>

         <p
         className="
         text-xs
         text-gray-500
         "
         >
            Total Price
         </p>

         <h2
         className="
         text-xl
         font-bold
         text-[#FF3B4E]
         "
         >
            ₹{totalPrice}
         </h2>

      </div>

      <button
      className="
      bg-[#FF3B4E]
      text-white
      px-6
      py-3
      rounded-2xl
      font-semibold
      "
      >
         Place Order
      </button>

   </div>

</div>



      </div>
   )



}