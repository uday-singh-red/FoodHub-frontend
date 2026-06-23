export default function ShopRequestCard({

   shop,
   onApprove,
   onReject

}) {


   const approveShop = async (shopId) => {

   try {

      const res = await fetch(
         `http://localhost:5000/api/v1/shops/approve/${shopId}`,
         {
            method: "PATCH",
            credentials: "include"
         }
      );

      const data = await res.json();

      if (data.success) {

         setPendingShops(prev =>
            prev.filter(
               shop => shop._id !== shopId
            )
         );

         console.log(data.message);
      }

   }

   catch (error) {

      console.log(error);

   }
};

const rejectShop = async (shopId) => {

   try {

      const res = await fetch(
         `http://localhost:5000/api/v1/shops/reject/${shopId}`,
         {
            method: "DELETE",
            credentials: "include"
         }
      );

      const data = await res.json();

      if (data.success) {

         setPendingShops(prev =>
            prev.filter(
               shop => shop._id !== shopId
            )
         );

         console.log(data.message);
      }

   }

   catch (error) {

      console.log(error);

   }
};

   return (

      <div
         className="
         bg-white
         rounded-2xl
         shadow-md
         p-4
         flex
         items-center
         justify-between
         gap-4
         "
      >

         <div
            className="
            flex
            items-center
            gap-4
            "
         >

            <img
               src={shop.shopLogo}
               alt={shop.shopName}
               className="
               w-20
               h-20
               rounded-xl
               object-cover
               "
            />

            <div>

               <h3
                  className="
                  text-xl
                  font-bold
                  "
               >
                  {shop.shopName}
               </h3>

               <p
                  className="
                  text-gray-500
                  "
               >
                  {
                     shop.owner
                     ?.fullname
                  }
               </p>

               <p
                  className="
                  text-sm
                  text-gray-400
                  "
               >
                  {
                     shop.owner
                     ?.email
                  }
               </p>

            </div>

         </div>

         <div
            className="
            flex
            gap-3
            "
         >

            <button
               onClick={() =>
                  onApprove(shop._id)
               }
               className="
               bg-green-500
               text-white
               px-4
               py-2
               rounded-lg
               "
            >
               Approve
            </button>

            <button
               onClick={() =>
                  onReject(shop._id)
               }
               className="
               bg-red-500
               text-white
               px-4
               py-2
               rounded-lg
               "
            >
               Reject
            </button>

         </div>

      </div>
   )
}