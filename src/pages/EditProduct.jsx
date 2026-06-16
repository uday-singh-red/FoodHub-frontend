import { useEffect, useState } from "react";
import {
   useNavigate,
   useParams
} from "react-router-dom";

export default function EditProduct() {

   const { id } = useParams();
   const navigate = useNavigate();

   const [product, setProduct] = useState(null);

   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");

   const [protein, setProtein] = useState("");
   const [fat, setFat] = useState("");
   const [quantity, setQuantity] = useState("");
   const [amount, setAmount] = useState("");

   const [image, setImage] = useState(null);
   const [preview, setPreview] = useState("");

   const getProduct = async () => {

      try {

         const res = await fetch(
            `http://localhost:5000/api/v1/products/${id}`
         );

         const data = await res.json();

         if (data.success) {

            const p = data.product;

            setProduct(p);

            setName(p.name || "");
            setDescription(p.description || "");
            setPrice(p.price || "");

            setProtein(
               p.info?.protein || ""
            );

            setFat(
               p.info?.fat || ""
            );

            setQuantity(
               p.info?.quantity || ""
            );

            setAmount(
               p.info?.amount || ""
            );

            setPreview(
               p.image || ""
            );
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

         const formData =
         new FormData();

         formData.append(
            "name",
            name
         );

         formData.append(
            "description",
            description
         );

         formData.append(
            "price",
            price
         );

         formData.append(
            "protein",
            protein
         );

         formData.append(
            "fat",
            fat
         );

         formData.append(
            "quantity",
            quantity
         );

         formData.append(
            "amount",
            amount
         );

         if (image) {

            formData.append(
               "image",
               image
            );
         }

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

   if (!product) {

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
         py-10
         px-4
         "
      >

         <div
            className="
            max-w-4xl
            mx-auto
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            md:p-8
            "
         >

            <button

               onClick={() =>
                  navigate(-1)
               }

               className="
               mb-6
               px-5
               py-2
               rounded-xl
               bg-red-500
               text-white
               hover:bg-red-600
               "
            >

               ← Back

            </button>

            <h1
               className="
               text-4xl
               font-bold
               text-red-500
               mb-2
               "
            >

               Edit Product

            </h1>

            <p
               className="
               text-gray-500
               mb-8
               "
            >

               Update product information

            </p>

            <div
               className="
               mb-8
               "
            >

               <label
                  className="
                  block
                  font-semibold
                  mb-3
                  "
               >

                  Product Image

               </label>

               <img

                  src={preview}

                  alt={name}

                  className="
                  w-full
                  h-[300px]
                  object-contain
                  bg-red-50
                  rounded-2xl
                  border
                  "
               />

            </div>

            <div
               className="
               grid
               md:grid-cols-2
               gap-5
               "
            >

               <div>

                  <label
                     className="
                     block
                     mb-2
                     font-medium
                     "
                  >

                     Product Name

                  </label>

                  <input

                     value={name}

                     onChange={(e)=>
                        setName(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

               <div>

                  <label
                     className="
                     block
                     mb-2
                     font-medium
                     "
                  >

                     Price

                  </label>

                  <input

                     value={price}

                     onChange={(e)=>
                        setPrice(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

            </div>

            <div className="mt-5">

               <label
                  className="
                  block
                  mb-2
                  font-medium
                  "
               >

                  Description

               </label>

               <textarea

                  rows={5}

                  value={description}

                  onChange={(e)=>
                     setDescription(
                        e.target.value
                     )
                  }

                  className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  "
               />

            </div>

            <div
               className="
               grid
               grid-cols-2
               md:grid-cols-4
               gap-5
               mt-5
               "
            >

               <div>

                  <label className="block mb-2">

                     Protein

                  </label>

                  <input

                     value={protein}

                     onChange={(e)=>
                        setProtein(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

               <div>

                  <label className="block mb-2">

                     Fat

                  </label>

                  <input

                     value={fat}

                     onChange={(e)=>
                        setFat(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

               <div>

                  <label className="block mb-2">

                     Quantity

                  </label>

                  <input

                     value={quantity}

                     onChange={(e)=>
                        setQuantity(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

               <div>

                  <label className="block mb-2">

                     Amount

                  </label>

                  <input

                     value={amount}

                     onChange={(e)=>
                        setAmount(
                           e.target.value
                        )
                     }

                     className="
                     w-full
                     border
                     rounded-xl
                     p-3
                     "
                  />

               </div>

            </div>

            <div className="mt-6">

               <label
                  className="
                  block
                  mb-2
                  font-medium
                  "
               >

                  Change Image

               </label>

               <input

                  type="file"

                  onChange={(e)=>{

                     const file =
                     e.target.files[0];

                     setImage(file);

                     if(file){

                        setPreview(
                           URL.createObjectURL(
                              file
                           )
                        );
                     }
                  }}

                  className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  "
               />

            </div>

            <button

               onClick={
                  updateProduct
               }

               className="
               w-full
               mt-8
               bg-red-500
               hover:bg-red-600
               text-white
               py-4
               rounded-2xl
               font-bold
               text-lg
               "
            >

               Update Product

            </button>

         </div>

      </div>

   );
}