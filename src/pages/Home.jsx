import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [hasMore, setHasMore] = useState(true); // Kya aur products hain fetch karne ko?

   const getProducts = async () => {
      if (loading || !hasMore) return; // Agar pehle se load ho raha hai ya data khatam hai toh ruk jao
      
      setLoading(true);
      try {
         // Backend API par page pass kar rahe hain (e.g., limit=10)
         const res = await fetch(
            `http://localhost:5000/api/v1/products/all-products?page=${page}&limit=10`
         );
         const data = await res.json();

         if (data.success) {
            // Naye products ko purane products ke sath joda (append kiya)
            setProducts((prev) => [...prev, ...data.products]);
            
            // Agar backend se khali array aaya ya kam aaye, matlab data khatam
            if (data.products.length < 10) {
               setHasMore(false);
            }
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   // Jab bhi page badlega, naya data fetch hoga
   useEffect(() => {
      getProducts();
   }, [page]);

   // Scroll detect karne ke liye function (Throttled version parde ke peeche browser handle karta hai agar tarike se likha jaye)
   useEffect(() => {
      const handleScroll = () => {
         // Agar user page ke bilkul bottom ke paas (50px door) pahunch gaya hai
         if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 50
         ) {
            if (!loading && hasMore) {
               setPage((prevPage) => prevPage + 1); // Agla page trigger kiya
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup
   }, [loading, hasMore]);

   return (
      <div className="w-full min-h-screen bg-[#FFF5F5] text-white p-2">
         <h1 className="text-1xl font-bold mb-10 text-black">Products</h1>

         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
               <ProductCard
                  _id={product._id}
                  key={product._id}
                  image={product.images[0]?.url}
                  name={product.name}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </div>

         {/* Loading Indicator */}
         {loading && <p className="text-center text-black mt-4">Loading more products...</p>}
      </div>
   );
}