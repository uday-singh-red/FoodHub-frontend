import { Link }from "react-router-dom"



export default function Admin(){

   return(

      <div className="w-full min-h-screen bg-black text-white " >
        <h1
         className="text-4xl font-bold mb-10 " >
            Admin Panel
         </h1>

        
          <Link to="/create-product" className=" bg-blue-500 px-6 py-3 rounded-lg m-6" >
            Create Product
         </Link>
         <Link to="/admin/orders" className=" bg-blue-500 px-6 py-3 rounded-lg m-6" >
            orders
         </Link>
         <Link to="/admin/Edit" className=" bg-blue-500 px-6 py-3 rounded-lg " >
            Edit products
         </Link>
        

      </div>
   )
}