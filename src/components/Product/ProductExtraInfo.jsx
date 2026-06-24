import { useState } from "react";

import {
   FaFire,
   FaLeaf,
   FaExclamationTriangle,
   FaClock,
   FaChevronDown,
   FaChevronUp
} from "react-icons/fa";

export default function ProductExtraInfo({
   form,
   setForm
}) {

   const [showNutrition,
      setShowNutrition]
      = useState(false);

   const [showIngredients,
      setShowIngredients]
      = useState(false);

   const [showAllergens,
      setShowAllergens]
      = useState(false);

   const [showPreparation,
      setShowPreparation]
      = useState(false);

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
"
      >

         <h2
            className="
            text-xl
            font-bold
            text-[#FF3B4E]
            mb-4
            "
         >
            ⚙️ Extra Information
         </h2>

<div
   className="
   border
   rounded-2xl
   overflow-hidden
   gap-5
   

   "
>

   <button
      type="button"
      onClick={() =>
         setShowNutrition(
            !showNutrition
         )
      }
      className="
      w-full
      flex
      justify-between
      items-center
      px-5
      py-4
      bg-red-50
      hover:bg-red-100
      transition
      "
   >

      <div
         className="
         flex
         items-center
         gap-3
         "
      >
         <FaFire
            className="
            text-[#FF3B4E]
            "
         />

         <span
            className="
            font-semibold
            "
         >
            Nutrition Information
         </span>

         
      </div>

      {
         showNutrition
         ? <FaChevronUp />
         : <FaChevronDown />
      }

   </button>

            {
                showNutrition && (

                    <div
                        className="
                        p-5
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-4
                        "
                    >

                        <input
                        type="number"
                        placeholder="Calories"
                        className="
                        border
                        rounded-xl
                        p-3
                        focus:border-[#FF3B4E]
                        outline-none
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            calories:e.target.value
                        }))
                        }
                        />

                        <input
                        type="number"
                        placeholder="Protein (g)"
                        className="
                        border
                        rounded-xl
                        p-3
                        focus:border-[#FF3B4E]
                        outline-none
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            protein:e.target.value
                        }))
                        }
                        />

                        <input
                        type="number"
                        placeholder="Carbs (g)"
                        className="
                        border
                        rounded-xl
                        p-3
                        focus:border-[#FF3B4E]
                        outline-none
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            carbs:e.target.value
                        }))
                        }
                        />

                        <input
                        type="number"
                        placeholder="Fat (g)"
                        className="
                        border
                        rounded-xl
                        p-3
                        focus:border-[#FF3B4E]
                        outline-none
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            fat:e.target.value
                        }))
                        }
                        />

                    </div>

                )
            }

            </div>

            <div
            className="
            border
            rounded-2xl
            overflow-hidden
            "
            >
            <button
                type="button"
                onClick={() =>
                    setShowIngredients(
                        !showIngredients
                    )
                }
                className="
                w-full
                flex
                justify-between
                items-center
                px-5
                py-4
                bg-green-50
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaLeaf
                        className="
                        text-green-600
                        "
                    />
                    <span
                        className="
                        font-semibold
                        "
                    >
                        Ingredients
                    </span>
                </div>

                {
                    showIngredients
                    ? <FaChevronUp />
                    : <FaChevronDown />
                }

            </button>

            {
                showIngredients && (

                    <div
                        className="
                        p-5
                        "
                    >

                        <textarea
                        rows="4"
                        placeholder="
                         Cheese, Tomato, Onion, Sauce
                        "
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        outline-none
                        focus:border-[#FF3B4E]
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            ingredients:
                            e.target.value
                        }))
                        }
                        />

                    </div>

                )
            }

            </div>


            <div
            className="
            border
            rounded-2xl
            overflow-hidden
            "
            >

            <button
                type="button"
                onClick={() =>
                    setShowAllergens(
                        !showAllergens
                    )
                }
                className="
                w-full
                flex
                justify-between
                items-center
                px-5
                py-4
                bg-yellow-50
                hover:bg-yellow-100
                transition
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaExclamationTriangle
                        className="
                        text-yellow-500
                        "
                    />

                    <span
                        className="
                        font-semibold
                        "
                    >
                        Allergens
                    </span>
                </div>

                {
                    showAllergens
                    ? <FaChevronUp />
                    : <FaChevronDown />
                }

            </button>

            {
                showAllergens && (

                    <div className="p-5">

                        <textarea
                        rows="4"
                        placeholder="
            Milk, Peanut, Gluten
                        "
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        outline-none
                        focus:border-[#FF3B4E]
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            allergens:
                            e.target.value
                        }))
                        }
                        />

                    </div>

                )
            }

</div>

             <div
            className="
            border
            rounded-2xl
            overflow-hidden
            "
            >

            <button
                type="button"
                onClick={() =>
                    setShowPreparation(
                        !showPreparation
                    )
                }
                className="
                w-full
                flex
                justify-between
                items-center
                px-5
                py-4
                bg-blue-50
                hover:bg-blue-100
                transition
                "
            >

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                >
                    <FaClock
                        className="
                        text-blue-600
                        "
                    />

                    <span
                        className="
                        font-semibold
                        "
                    >
                        Preparation Time
                    </span>
                </div>

                {
                    showPreparation
                    ? <FaChevronUp />
                    : <FaChevronDown />
                }

            </button>

            {
                showPreparation && (

                    <div className="p-5">

                        <input
                        type="number"
                        placeholder="Preparation Time (Minutes)"
                        className="
                        w-full
                        border
                        rounded-xl
                        p-3
                        outline-none
                        focus:border-[#FF3B4E]
                        "
                        onChange={(e)=>
                        setForm(prev=>({
                            ...prev,
                            preparationTime:
                            e.target.value
                        }))
                        }
                        />

                    </div>

                )
            }

            </div>



      </div>
   );
}