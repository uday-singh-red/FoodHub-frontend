export default function ProductBasicInfo({
   form,
   setForm
}) {

   const handleChange = (e) => {

      const { name, value } =
      e.target;

      setForm(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleCheckbox = (e) => {

      const { name, checked } =
      e.target;

      setForm(prev => ({
         ...prev,
         [name]: checked
      }));
   };

   return (

      <div
         className="
        bg-white
        p-6
        rounded-3xl
        shadow-lg
        border
        border-red-100
        h-fit
        space-y-4
         "
      >

         <h2
            className="
            text-2xl
            font-bold
            text-red-500
            "
         >
            Basic Information
         </h2>

         <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         />

         <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         />

         <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         >

            <option value="">
               Select Category
            </option>

            <option value="Burger">
               Burger
            </option>

            <option value="Pizza">
               Pizza
            </option>

            <option value="Drinks">
               Drinks
            </option>

            <option value="Healthy Food">
               Healthy Food
            </option>

            <option value="Dessert">
               Dessert
            </option>

         </select>

         <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         />

         <input
            type="number"
            name="discountedPrice"
            placeholder="Discounted Price"
            value={form.discountedPrice}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         />

         <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="
            w-full
            border
            p-3
            rounded-lg
            "
         />

         <input
            type="file"
            accept="image/*"
            onChange={(e)=>
               setForm(prev=>({
                  ...prev,
                  image:e.target.files[0]
               }))
            }
         />

         <div
            className="
            grid
            grid-cols-2
            gap-4
            "
         >

            <label>
               <input
                  type="checkbox"
                  name="isVeg"
                  checked={form.isVeg}
                  onChange={handleCheckbox}
               />
               Veg
            </label>

            <label>
               <input
                  type="checkbox"
                  name="isVegan"
                  checked={form.isVegan}
                  onChange={handleCheckbox}
               />
               Vegan
            </label>

            <label>
               <input
                  type="checkbox"
                  name="isSpicy"
                  checked={form.isSpicy}
                  onChange={handleCheckbox}
               />
               Spicy
            </label>

            <label>
               <input
                  type="checkbox"
                  name="isFeatured"
                  checked={form.isFeatured}
                  onChange={handleCheckbox}
               />
               Featured
            </label>

            <label>
               <input
                  type="checkbox"
                  name="isBestSeller"
                  checked={form.isBestSeller}
                  onChange={handleCheckbox}
               />
               Best Seller
            </label>

         </div>

      </div>
   );
}