import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
     const [
      cart,
      setCart
   ] = useState([])

  const loaderCartCount= async()=>{
    try {
      const res=await fetch("http://localhost:5000/api/v1/cart/my-cart",
        {
         credentials:"include"
       })
       const data = await res.json();

       if(data.success){
        const total = data.cart.reduce(
      (total,item)=>
          total + item.quantity,0
     )
        setCartCount(total)
       }

      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    loaderCartCount();
  },[]);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        loaderCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);