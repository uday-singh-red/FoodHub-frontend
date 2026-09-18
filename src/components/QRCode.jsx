import QRCode from "react-qr-code";

export default function QRCodeComponent({ url }) {

   return (
      <div className="bg-white p-6 rounded-2xl shadow-lg w-fit">

         <h2 className="text-xl font-bold text-center mb-4">
            Scan to Visit Our Shop
         </h2>

         <div className="bg-white p-3">
            <QRCode
               value={url}
               size={220}
            />
         </div>

         <p className="text-gray-500 text-sm text-center mt-4 break-all max-w-[220px]">
            {url}
         </p>

      </div>
   );
}