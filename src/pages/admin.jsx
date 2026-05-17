import { Link }from "react-router-dom"



export default function Admin(){

   return(

      <div className="w-full min-h-screen bg-black text-white p-10" >
        <h1
         className="text-4xl font-bold mb-10 " >
            Admin Panel
         </h1>

         <Link to="/create-product" className=" bg-blue-500 px-6 py-3 rounded-lg " >
            Create Product
         </Link>

      </div>
   )
}