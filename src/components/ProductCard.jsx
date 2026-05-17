

export default function ProductCard({
   image,
   name,
   description
}){

   return(
      <div
      className="
      bg-zinc-900
      rounded-xl
      overflow-hidden
      "
      >

         <img

            src={image}

            alt={name}

            className="
            w-full
            h-[250px]
            object-cover
            "
         />



         <div className="p-4">

            <h1
            className="
            text-2xl
            font-bold
            mb-2
            "
            >
               {name}
            </h1>



            <p
            className="text-zinc-300"
            >
               {description}
            </p>

         </div>

      </div>
   )
}