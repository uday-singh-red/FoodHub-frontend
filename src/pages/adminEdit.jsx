import React from 'react'
import { useEffect,useState } from "react"
import ProductCard from "../components/ProductCard"

const AdminEdit = () => {

    const [products, setProducts] = useState();

    const getProducts= async ()=>{
        try {
            const res = await fetch("http://localhost:5000/api/v1/products/all-products",
            //    { credencials:"include"}
            )

            const data= await res.json();

            if(data.success){
                setProducts(data.products)
            }

            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);


    
  return (
    <div>
      {/* <div className='
      flex
      
      '>
            {
                products.map((product)=>{
                  
                })
            }
      </div> */}
    </div>
  )
}

export default AdminEdit