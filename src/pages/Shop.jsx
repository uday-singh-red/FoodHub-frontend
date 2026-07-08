import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Shop() {

   const { id } = useParams();

   const [shop, setShop] = useState(null);
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {

      const fetchData = async () => {

         try {

            const [shopRes, productRes] = await Promise.all([

               fetch(
                  `http://localhost:5000/api/v1/shops/${id}`
               ),

               fetch(
                  `http://localhost:5000/api/v1/products/all-products?shopId=${id}`
               )

            ]);

            const shopData = await shopRes.json();
            const productData = await productRes.json();

            console.log(shopData)
            console.log(productData)

            if (shopData.success) {
               setShop(shopData.shop);
            }

            if (productData.success) {
               setProducts(productData.products);
            }

         }

         catch (err) {

            console.log(err);

         }

         finally {

            setLoading(false);

         }

      };

      fetchData();

   }, [id]);

   if (loading) {

      return (
        
         <div
            className="
            min-h-screen
            flex
            justify-center
            items-center
            text-2xl
            font-bold
            "
         >
            Loading...
         </div>
      );

   }

  return(
        <>
        <div
   className="
   relative
   w-full
   h-[280px]
   rounded-3xl
   overflow-hidden
   shadow-xl
   mb-8
   "
>

   {/* Banner */}

   <img
      src={
         shop?.shopBanner ||
         "https://placehold.co/1400x500"
      }
      alt={shop?.shopName}
      className="
      w-full
      h-full
      object-cover
      "
   />

   {/* Dark Overlay */}

   <div
      className="
      absolute
      inset-0
      bg-black/45
      "
   />

   {/* Content */}

   <div
      className="
      absolute
      inset-0
      flex
      items-end
      p-6
      "
   >

      <div
         className="
         flex
         items-center
         gap-5
         "
      >

         {/* Logo */}

         <img
            src={
               shop?.shopLogo ||
               "https://placehold.co/120"
            }
            alt={shop?.shopName}
            className="
            w-24
            h-24
            rounded-2xl
            object-cover
            border-4
            border-white
            shadow-xl
            bg-white
            "
         />

         {/* Shop Details */}

         <div>

            <h1
               className="
               text-4xl
               font-bold
               text-white
               "
            >
               {shop?.shopName}
            </h1>

            <p
               className="
               text-white/90
               mt-2
               max-w-2xl
               "
            >
               {shop?.description}
            </p>

            <div
               className="
               flex
               flex-wrap
               gap-5
               mt-4
               text-white
               text-sm
               "
            >

               <span>
                  📍 {shop?.address}
               </span>

               <span>
                  📞 {shop?.phone}
               </span>

               <span>
                  ✉ {shop?.email}
               </span>

            </div>

         </div>

      </div>

   </div>

</div>
  
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
  
                       price={product.price}
  
                       description={
                          product.description
                       }
                    />
                 ))
              }
  
           </div>
  
        </div>
        </>
     )
   
     

}