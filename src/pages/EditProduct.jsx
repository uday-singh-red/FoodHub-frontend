import { useEffect, useState } from "react";
import {
   useNavigate,
   useParams
} from "react-router-dom";

import ProductBasicInfo from "../components/product/ProductBasicInfo";
import ProductExtraInfo from "../components/product/ProductExtraInfo";


export default function EditProduct() {

const { id } = useParams();

const navigate = useNavigate();

const [loading,setLoading] = useState(true);

const [preview,setPreview] = useState("");

 const [form,setForm] = useState({
   name:"",
   description:"",
   category:"",
   price:"",
   discountedPrice:"",
   stock:"",
   image:null,

   isVeg:false,
   isVegan:false,
   isSpicy:false,
   isFeatured:false,
   isBestSeller:false,

   calories:"",
   protein:"",
   carbs:"",
   fat:"",

   ingredients:"",
   allergens:"",
   preparationTime:""
})

   const getProduct = async () => {

      try {

         const res = await fetch(
            `http://localhost:5000/api/v1/products/${id}`
         );

         const data = await res.json();

         console.log("data a gaya ")

         if (data.success) {

            const p = data.product;

            setPreview(
                  p.images?.[0]?.url || ""
               );

               setLoading(false);

            setForm({
            name:p.name || "",
            description:p.description || "",
            category:p.category || "",

            price:p.price || "",
            discountedPrice:p.discountedPrice || "",
            stock:p.stock || "",

            image:null,

            isVeg:p.isVeg || false,
            isVegan:p.isVegan || false,
            isSpicy:p.isSpicy || false,
            isFeatured:p.isFeatured || false,
            isBestSeller:p.isBestSeller || false,

            calories:p.nutrition?.calories || "",
            protein:p.nutrition?.protein || "",
            carbs:p.nutrition?.carbs || "",
            fat:p.nutrition?.fat || "",

            ingredients:p.ingredients?.join(", ") || "",
            allergens:p.allergens?.join(", ") || "",

            preparationTime:p.preparationTime || ""
           })


         }

      }

      catch (error) {

         console.log(error);

      }
   };

   useEffect(() => {

      getProduct();

   }, []);

   const updateProduct = async () => {

      try {

        const formData = new FormData();

         Object.keys(form).forEach(key=>{
            formData.append(key,form[key]);
         });

         const res =
         await fetch(

`http://localhost:5000/api/v1/products/update/${id}`,

            {
               method: "PATCH",
               credentials: "include",
               body: formData
            }
         );

         const data =
         await res.json();

         if (data.success) {

            navigate("/admin/edit");

         }

      }

      catch (error) {

         console.log(error);

      }
   };

   if (loading) {

      return (

         <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            text-2xl
            font-bold
            "
         >

            Loading...

         </div>

      );
   }

   return (

   <div
   className="
   min-h-screen
   bg-[#FFF5F5]
   p-6
   "
   >

      <div
      className="
      max-w-7xl
      mx-auto
      "
      >

         <button

         onClick={()=>
            navigate(-1)
         }

         className="
         mb-6
         bg-red-500
         text-white
         px-5
         py-2
         rounded-xl
         "
         >

            ← Back

         </button>

         <h1
         className="
         text-4xl
         font-bold
         text-red-500
         mb-8
         "
         >

            Edit Product

         </h1>

         <div
         className="
         grid
         lg:grid-cols-2
         gap-6
         "
         >

            <ProductBasicInfo

               form={form}
               setForm={setForm}

            />

            <ProductExtraInfo

               form={form}
               setForm={setForm}

            />

         </div>

         {
            preview && (

               <div
               className="
               mt-8
               bg-white
               p-6
               rounded-3xl
               shadow-lg
               "
               >

                  <h2
                  className="
                  text-xl
                  font-bold
                  mb-4
                  "
                  >

                     Current Image

                  </h2>

                  <img

                  src={preview}

                  alt={form.name}

                  className="
                  w-72
                  h-72
                  object-contain
                  mx-auto
                  "

                  />

                  <div
   className="
   mt-4
   flex
   flex-col
   gap-3
   "
>

   <label
      className="
      bg-red-500
      text-white
      px-4
      py-2
      rounded-xl
      cursor-pointer
      text-center
      "
   >
      Change Image

      <input
         type="file"
         accept="image/*"
         hidden
         onChange={(e)=>{

            const file =
            e.target.files[0];

            if(!file) return;

            setForm(prev=>({
               ...prev,
               image:file
            }));

            setPreview(
               URL.createObjectURL(file)
            );
         }}
      />

   </label>

</div>

               </div>
            )
         }

         <button

         onClick={updateProduct}

         className="
         w-full
         mt-8
         bg-red-500
         text-white
         py-4
         rounded-2xl
         font-bold
         text-lg
         hover:bg-red-600
         "
         >

            Update Product

         </button>

      </div>

   </div>
);
}