// import React from 'react'
// import recipes from './Recipes2'
// export default function Recipes1() {
//   return (
//     <div className='flex grid grid-cols-4 bg-black text-white pt-20 pl-10 pr-10 gap-9'>
//       {recipes.map((recipe) => (
//        <div className='bg-gray-800 rounded-2xl hover:border-2 hover:border-orange-400'>
//          <div className="recipe-card  " key={recipe.id} >

//           <img
//             src={recipe.image}
//             alt={recipe.name}
//             className="recipe-image h-60 w-80 pt-1 pl-1 pr-1 rounded-2xl   group-hover:scale-110
//                   transition-transform
//                   duration-500 "
//           />

//           <div className="recipe-content pl-5">
//             <h3 className='flex justify-center items-center pt-2 text-xl font-bold hover:text-orange-400'>{recipe.name}</h3>
//             <span className="recipe-cuisine">
//             </span>

//                🔸 {recipe.cuisine}

//             {/* <p> 🔸 {recipe.category}</p> */}

//             <div className="recipe-meta">
//               <span> 🔸 ⏱ {recipe.time}</span>
          
//               <span className='flex flex-col underline'>🔸Ingredients ➔ [ {recipe.ingredients} ]</span><br></br>
//                <li className='underline'>🔸Instruction ➔</li>
//              <ul className="instructions-list">
//   {recipe.instructions.map((instruction, index) => (
//    <div className='flex gap-2 pl-3'>
//     <li className='text-orange-600 text-2xl'>•</li>
//     <li key={index}> {instruction}</li>
//    </div>
//   ))}
// </ul>

//             </div>
//           </div>

//         </div>
//        </div>
//       ))}

//     </div>
//   )
// }



import React, { useState } from "react";
import recipes from "./Recipes2";

export default function Recipes1() {
  const [openRecipe, setOpenRecipe] = useState(null);

  const handleViewRecipe = (id) => {
    setOpenRecipe(id);
  };

  const handleCloseRecipe = () => {
    setOpenRecipe(null);
  };

  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-8 lg:px-12 pt-24 pb-16">

      {/* Page Heading */}
      <div className="text-center mb-10">
        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold mb-2">
          Delicious & Easy
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Explore Our{" "}
          <span className="text-orange-500">Recipes</span>
        </h1>

        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {recipes.map((recipe) => {
          const isOpen = openRecipe === recipe.id;

          return (
            <div
              key={recipe.id}
              className={`
                group bg-gray-900
                border border-gray-800
                rounded-2xl overflow-hidden
                shadow-lg
                transition-all duration-500
                hover:border-orange-500
                ${
                  isOpen
                    ? "sm:col-span-2 lg:col-span-2 xl:col-span-2"
                    : ""
                }
              `}
            >

              {/* ================= IMAGE ================= */}
              <div
                className={`
                  relative overflow-hidden
                  transition-all duration-500
                  ${isOpen ? "h-72" : "h-52"}
                `}
              >

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className={`
                    w-full h-full object-cover
                    transition-transform duration-700
                    ${!isOpen ? "group-hover:scale-105" : ""}
                  `}
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Cuisine */}
                <span
                  className="
                    absolute top-3 left-3
                    bg-orange-500 text-black
                    px-3 py-1
                    rounded-full
                    text-xs font-bold
                  "
                >
                  {recipe.cuisine}
                </span>

                {/* Difficulty */}
                <span
                  className="
                    absolute top-3 right-3
                    bg-black/70
                    border border-orange-500/40
                    text-orange-400
                    px-3 py-1
                    rounded-full
                    text-xs
                  "
                >
                  {recipe.difficulty}
                </span>

                {/* Recipe Name */}
                <h2
                  className="
                    absolute bottom-4 left-5 right-5
                    text-xl font-bold
                    text-white
                  "
                >
                  {recipe.name}
                </h2>
              </div>


              {/* ================= SMALL CARD ================= */}

              {!isOpen && (
                <div className="p-4">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-gray-400 text-sm">
                      ⏱ {recipe.time}
                    </span>

                    <span className="text-gray-400 text-sm">
                      👥 {recipe.servings}
                    </span>

                  </div>

                  <button
                    onClick={() => handleViewRecipe(recipe.id)}
                    className="
                      w-full
                      bg-orange-500
                      hover:bg-orange-600
                      text-black
                      font-bold
                      py-2.5
                      rounded-xl
                      transition-all
                      duration-300
                      hover:shadow-lg
                      hover:shadow-orange-500/20
                    "
                  >
                    View Recipe ➜
                  </button>

                </div>
              )}


              {/* ================= FULL RECIPE ================= */}

              {isOpen && (
                <div className="p-6 animate-[fadeIn_0.3s_ease-in-out]">

                  {/* Meta Information */}
                  <div
                    className="
                      flex flex-wrap
                      gap-3
                      mb-6
                    "
                  >

                    <span className="bg-gray-800 px-3 py-2 rounded-lg text-sm">
                      🟠 {recipe.category}
                    </span>

                    <span className="bg-gray-800 px-3 py-2 rounded-lg text-sm">
                      ⏱ {recipe.time}
                    </span>

                    <span className="bg-gray-800 px-3 py-2 rounded-lg text-sm">
                      👥 {recipe.servings} servings
                    </span>

                    <span className="bg-gray-800 px-3 py-2 rounded-lg text-sm">
                      🔥 {recipe.difficulty}
                    </span>

                  </div>


                  {/* ================= INGREDIENTS ================= */}

                  <div className="mb-7">

                    <h3 className="text-xl font-bold mb-4">
                      <span className="text-orange-500">◆</span>{" "}
                      Ingredients
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {recipe.ingredients.map((ingredient, index) => (

                        <span
                          key={index}
                          className="
                            bg-gray-800
                            border border-gray-700
                            px-3 py-2
                            rounded-lg
                            text-sm
                            text-gray-300
                            hover:border-orange-500
                            hover:text-orange-400
                            transition
                          "
                        >
                          {ingredient.replace(/,\s*$/, "")}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* ================= INSTRUCTIONS ================= */}

                  <div>

                    <h3 className="text-xl font-bold mb-4">
                      <span className="text-orange-500">◆</span>{" "}
                      Instructions
                    </h3>

                    <div className="space-y-3">

                      {recipe.instructions.map(
                        (instruction, index) => (

                          <div
                            key={index}
                            className="flex items-start gap-3"
                          >

                            {/* Orange Small Dot */}
                            <span
                              className="
                                mt-2
                                w-2
                                h-2
                                min-w-2
                                rounded-full
                                bg-orange-500
                                shadow-[0_0_7px_rgba(249,115,22,0.7)]
                              "
                            ></span>

                            <p className="text-gray-300 text-sm leading-6">
                              {instruction}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>


                  {/* ================= CLOSE BUTTON ================= */}

                  <button
                    onClick={handleCloseRecipe}
                    className="
                      mt-7
                      w-full
                      border
                      border-orange-500
                      text-orange-500
                      hover:bg-orange-500
                      hover:text-black
                      font-bold
                      py-2.5
                      rounded-xl
                      transition-all
                      duration-300
                    "
                  >
                    ← Close Recipe
                  </button>

                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}

