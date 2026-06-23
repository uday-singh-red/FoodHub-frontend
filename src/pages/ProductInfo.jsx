import {
   useEffect,
   useState
}
from "react"

import {
   useParams
}
from "react-router-dom"



export default function ProductInfo(){

   const { id } =
   useParams()



   const [
      product,
      setProduct
   ] = useState(null)



   const getProduct =
   async()=>{
      try{
         const res =
         await fetch(`http://localhost:5000/api/v1/products/${id}`)

         const data =await res.json()

         console.log(data)

         if(data.success){
            setProduct(
               data.product
            )
         }

      }

      catch(error){

         console.log(error)
      }
   }



   useEffect(()=>{

      getProduct()

   },[])



   if(!product){

      return(

         <h1
         className="
         text-white
         text-center
         mt-10
         "
         >
            Loading...
         </h1>
      )
   }



  return (

<div
className="
min-h-screen
bg-[#FFF5F5]
p-4
md:p-8
"
>

<div
className="
max-w-6xl
mx-auto
"
>

<button
onClick={() => window.history.back()}
className="
mb-5
px-4
py-2
bg-white
rounded-xl
shadow
text-[#FF3B4E]
font-semibold
"
>
← Back
</button>

<div
className="
grid
lg:grid-cols-2
gap-6
"
>

{/* IMAGE */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-4
"
>

<img
src={product.images?.[0]?.url}
alt={product.name}
className="
w-full
h-[350px]
object-contain
rounded-2xl
"
/>

</div>

{/* RIGHT SIDE */}

<div
className="
flex
flex-col
gap-5
"
>

{/* BASIC INFO */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>

<div
className="
flex
justify-between
items-start
gap-3
"
>

<div>

<h1
className="
text-3xl
font-bold
text-gray-800
"
>
{product.name}
</h1>

<p
className="
text-sm
text-gray-500
mt-1
"
>
{product.category}
</p>

</div>

<div
className="
text-right
"
>

<h2
className="
text-3xl
font-bold
text-[#FF3B4E]
"
>
₹{product.price}
</h2>

{
product.discountedPrice > 0 && (

<p
className="
text-sm
line-through
text-gray-400
"
>
₹{product.discountedPrice}
</p>

)
}

</div>

</div>

<p
className="
mt-4
text-gray-600
leading-7
"
>
{product.description}
</p>

</div>

{/* TAGS */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>

<h2
className="
font-bold
text-lg
mb-4
"
>
Product Tags
</h2>

<div
className="
flex
flex-wrap
gap-3
"
>

{product.isVeg && (
<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
🥗 Veg
</span>
)}

{product.isVegan && (
<span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
🌱 Vegan
</span>
)}

{product.isSpicy && (
<span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
🌶️ Spicy
</span>
)}

{product.isFeatured && (
<span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
⭐ Featured
</span>
)}

{product.isBestSeller && (
<span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
🔥 Best Seller
</span>
)}

</div>

</div>

{/* QUICK STATS */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>

<h2
className="
font-bold
text-lg
mb-4
"
>
Quick Information
</h2>

<div
className="
grid
grid-cols-2
gap-4
"
>

<div className="bg-[#FFF5F5] rounded-xl p-3">
<p className="text-gray-500 text-sm">
Stock
</p>
<h3 className="font-bold">
{product.stock}
</h3>
</div>

{
product.preparationTime && (

<div className="bg-[#FFF5F5] rounded-xl p-3">
<p className="text-gray-500 text-sm">
Preparation
</p>
<h3 className="font-bold">
{product.preparationTime} min
</h3>
</div>

)
}

<div className="bg-[#FFF5F5] rounded-xl p-3">
<p className="text-gray-500 text-sm">
Rating
</p>
<h3 className="font-bold">
⭐ {product.averageRating}
</h3>
</div>

<div className="bg-[#FFF5F5] rounded-xl p-3">
<p className="text-gray-500 text-sm">
Reviews
</p>
<h3 className="font-bold">
{product.totalReviews}
</h3>
</div>

</div>

</div>

</div>

</div>

{/* NUTRITION */}

{
(
product.nutrition?.calories ||
product.nutrition?.protein ||
product.nutrition?.carbs ||
product.nutrition?.fat
) && (

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
mt-6
"
>

<h2
className="
font-bold
text-xl
mb-5
"
>
Nutrition Information
</h2>

<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-4
"
>

{
product.nutrition?.calories && (

<div className="bg-[#FFF5F5] p-4 rounded-xl">
<p className="text-sm text-gray-500">
Calories
</p>
<h3 className="font-bold text-[#FF3B4E]">
{product.nutrition.calories}
</h3>
</div>

)
}

{
product.nutrition?.protein && (

<div className="bg-[#FFF5F5] p-4 rounded-xl">
<p className="text-sm text-gray-500">
Protein
</p>
<h3 className="font-bold text-[#FF3B4E]">
{product.nutrition.protein} g
</h3>
</div>

)
}

{
product.nutrition?.carbs && (

<div className="bg-[#FFF5F5] p-4 rounded-xl">
<p className="text-sm text-gray-500">
Carbs
</p>
<h3 className="font-bold text-[#FF3B4E]">
{product.nutrition.carbs} g
</h3>
</div>

)
}

{
product.nutrition?.fat && (

<div className="bg-[#FFF5F5] p-4 rounded-xl">
<p className="text-sm text-gray-500">
Fat
</p>
<h3 className="font-bold text-[#FF3B4E]">
{product.nutrition.fat} g
</h3>
</div>

)
}

</div>

</div>

)
}

{/* INGREDIENTS */}

{
product.ingredients?.length > 0 && (

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
mt-6
"
>

<h2
className="
font-bold
text-xl
mb-4
"
>
Ingredients
</h2>

<div
className="
flex
flex-wrap
gap-2
"
>

{
product.ingredients.map(
(item,index)=>(
<span
key={index}
className="
px-3
py-1
bg-green-100
text-green-700
rounded-full
text-sm
"
>
{item}
</span>
)
)
}

</div>

</div>

)
}

{/* ALLERGENS */}

{
product.allergens?.length > 0 && (

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
mt-6
"
>

<h2
className="
font-bold
text-xl
mb-4
"
>
Allergens
</h2>

<div
className="
flex
flex-wrap
gap-2
"
>

{
product.allergens.map(
(item,index)=>(
<span
key={index}
className="
px-3
py-1
bg-red-100
text-red-700
rounded-full
text-sm
"
>
⚠️ {item}
</span>
)
)
}

</div>

</div>

)
}

</div>

</div>

)
}