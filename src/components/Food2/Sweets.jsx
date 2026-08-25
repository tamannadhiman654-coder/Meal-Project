import React, { useState } from "react";
import {sweetsData} from './Sweetdata.jsx'

export default function Sweets() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Indian Sweets",
    "Halwa",
    "Chocolate",
    "Cake",
    "Donuts",
    "Cheesecake",
    "Ice Cream",
    "Traditional",
    "Fusion",
    "Pastry",
    "Cupcake",
    "Pudding",
    "Custard",
  ];

  const filteredSweets =
    selectedCategory === "All"
      ? sweetsData
      : sweetsData.filter(
          (sweet) => sweet.category === selectedCategory
        );

  const handleOrder = (sweet) => {
    alert(`${sweet.name} added to your order!`);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

        <p className="text-orange-500 font-semibold text-sm tracking-widest">
          SWEET CRAVINGS
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Sweets
            </h1>

            <p className="text-gray-400 mt-3 max-w-2xl text-base md:text-lg">
              Treat yourself to delicious cakes, Indian sweets,
              chocolates, ice creams and desserts.
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            <span className="text-orange-500 font-bold text-lg">
              {filteredSweets.length}
            </span>{" "}
            Desserts Available
          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

        <div className="flex gap-3 overflow-x-auto pb-2">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                whitespace-nowrap
                px-5 py-2.5
                rounded-full
                border
                font-medium
                transition-all

                ${
                  selectedCategory === category
                    ? "bg-orange-500 text-black border-orange-500"
                    : "bg-gray-900 text-gray-300 border-gray-800 hover:border-orange-500 hover:text-orange-400"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* SWEETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">

          {filteredSweets.map((sweet) => (

            <div
              key={sweet.id}
              className="
                group
                bg-gray-900
                border border-gray-800
                rounded-2xl
                overflow-hidden
                hover:border-orange-500
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-orange-500/10
                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-gray-800">

                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                />

                <div className="absolute top-3 left-3 bg-black/75 px-3 py-1 rounded-full text-orange-400 text-xs font-semibold">
                  {sweet.category}
                </div>

                <div className="absolute top-3 right-3 bg-black/75 px-3 py-1 rounded-full">
                  <span className="text-yellow-400">★</span>{" "}
                  {sweet.rating}
                </div>

              </div>


              {/* CONTENT */}
              <div className="p-5">

                <h2 className="text-xl font-bold group-hover:text-orange-400 transition">
                  {sweet.name}
                </h2>

                <div className="flex items-center justify-between mt-3">

                  <div>
                    <span className="text-yellow-400 text-sm">
                      {sweet.stars}
                    </span>

                    <span className="text-gray-500 text-xs ml-2">
                      {sweet.rating}
                    </span>
                  </div>

                  <span className="text-gray-400 text-sm">
                    ⏱ {sweet.time}
                  </span>

                </div>

                <div className="border-t border-gray-800 my-4" />

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 text-xs">
                      Price
                    </p>

                    <p className="text-2xl font-bold">
                      ₹{sweet.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOrder(sweet)}
                    className="
                      bg-orange-500
                      hover:bg-orange-600
                      text-black
                      font-bold
                      px-4
                      py-2.5
                      rounded-xl
                      transition
                      hover:scale-105
                      active:scale-95
                    "
                  >
                    Order Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}
