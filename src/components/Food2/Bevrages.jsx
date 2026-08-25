import React, { useState } from "react";
import { beverageData } from "./Data";

export default function Bevrages() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Coffee",
    "Shake",
    "Juice",
    "Smoothie",
    "Cooler",
    "Tea",
    "Milkshake",
    "Mocktail",
    "Lassi",
    "Soda",
  ];

  const filteredDrinks =
    selectedCategory === "All"
      ? beverageData
      : beverageData.filter(
          (drink) => drink.category === selectedCategory
        );

  const handleOrder = (drink) => {
    alert(`${drink.name} added to your order!`);
  };

  /*
    Name ke according image search query banayenge.
    Example:
    "Mango Shake" -> "mango shake beverage"
    "Chocolate Coffee" -> "chocolate coffee beverage"
  */
  const getImage = (drink) => {
    const imageMap = {
      "Classic Cold Coffee":
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",

      "Chocolate Cold Coffee":
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",

      "Hazelnut Coffee":
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",

      "Caramel Coffee":
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85",

      "Vanilla Iced Coffee":
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",

      "Mocha Frappe":
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",

      "Cappuccino":
        "https://static.toiimg.com/photo/59806598.cms",

      "Iced Latte":
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85",

      "Mango Shake":
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=85",

      "Strawberry Shake":
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",

      "Chocolate Shake":
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",

      "Oreo Shake":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpM_HuAgWERu5mth8gObScehlVAGgyCMeLNce48X9qw&s=10",

      "Vanilla Shake":
        "https://images.unsplash.com/photo-1568901839119-631418a3910d?auto=format&fit=crop&w=900&q=85",

      "Butterscotch Shake":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEciiO1ZHHix5oObDKAh9VeKYPBc91DI0maSdtGLvpgA&s=10",

      "KitKat Shake":
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",

      "Brownie Shake":
        "https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg",

      "Fresh Mango Juice":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAD7XS77Niivv6eo6gLnNJDgo9zksx_NMU_2HFCNL0Mg&s=10",

      "Fresh Orange Juice":
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=85",

      "Pineapple Juice":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET3Y4bn6lvdmIFPHBJ6hGhiZY8o4ScG6oyb_2R_xzEQ&s=10",

      "Watermelon Juice":
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=85",

      "Pomegranate Juice":
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",

      "Apple Juice":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJhKQSULxzeX2ozvWlPyjpoeOUbwkCx77XjiNar6vMw&s=10",

      "Mixed Fruit Juice":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJG31lfXU10ZU9Z1ZA9YXia_jvF8Gkbi1ycHkywPUT_w&s=10",

      "Kiwi Juice":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFmaD4DiTbcyyf6Y3527Uo-jwj5T6Ch35uDBoe2yBUA&s=10",

      "Mango Smoothie":
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",

      "Strawberry Smoothie":
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",

      "Blueberry Smoothie":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE64-dLknkZbO1lElXa63VXQPVHZD-fQD0_vs6WOhACw&s=10",

      "Banana Smoothie":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQzGAdyycbLZ6YU57uKfhm2LWDWYjkYfOMlBR5k8N-g&s=10",

      "Pineapple Smoothie":
        "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=85",

      "Green Detox Smoothie":
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=85",

      "Classic Lemonade":
        "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=85",

      "Mint Lemonade":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Strawberry Lemonade":
        "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=85",

      "Blue Lagoon Cooler":
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",

      "Green Apple Cooler":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Peach Iced Tea":
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",

      "Masala Chai":
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=85",

      "Ginger Tea":
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=85",

      "Lemon Tea":
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",

      "Green Tea":
        "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=85",

      "Peach Green Tea":
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",

      "Iced Lemon Tea":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Vanilla Milkshake":
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",

      "Chocolate Milkshake":
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",

      "Strawberry Milkshake":
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",

      "Mango Milkshake":
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=85",

      "Pistachio Milkshake":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0EElOvGdTk6ifgeAaDW0wrfA7VWenPjI5Bqi1Tomow&s=10",

      "Coffee Milkshake":
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",

      "Virgin Mojito":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Strawberry Mojito":
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",

      "Blueberry Mojito":
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",

      "Watermelon Mojito":
        "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=85",

      "Classic Lassi":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqZnyvXFKYPJy9Kjx1vzFyeqxWIJ2FFY4m3uLjSMswQ&s=10",

      "Sweet Lassi":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxQ1_MV5oZ9W2E2i3gp0905QuS9oENG8OevFMTqGxqw&s=10",

      "Mango Lassi":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9iXW-b77velUk5i6KmB9O6Kjoh6Svg3cUg9_bpMeJQ&s=10",

      "Rose Lassi":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtn4_5wl7v4S0WmZpDgm2G1sbqcmuhqpMO_IARUD8EA&s=10",

      "Fresh Lime Soda":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Mint Soda":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",

      "Masala Soda":
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",

      "Cucumber Mint Cooler":
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
    };

    return (
      imageMap[drink.name] ||
      drink.image
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

        <p className="text-orange-500 font-semibold text-sm tracking-widest">
          FRESH & REFRESHING
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
              Beverages
            </h1>

            <p className="text-gray-400 mt-3 max-w-2xl text-base md:text-lg">
              Refresh yourself with delicious coffees, shakes, juices,
              smoothies, teas, coolers and refreshing mocktails.
            </p>
          </div>

          <div className="text-gray-400 text-sm">
            <span className="text-orange-500 font-bold text-lg">
              {filteredDrinks.length}
            </span>{" "}
            Drinks Available
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


      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">

          {filteredDrinks.map((drink) => (

            <div
              key={drink.id}
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
              <div className="relative h-56 overflow-hidden">

                <img
                  src={getImage(drink)}
                  alt={drink.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                />

                <div className="absolute top-3 left-3 bg-black/75 px-3 py-1 rounded-full text-orange-400 text-xs font-semibold">
                  {drink.category}
                </div>

                <div className="absolute top-3 right-3 bg-black/75 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="text-yellow-400">
                    ★
                  </span>

                  <span className="text-xs font-semibold">
                    {drink.rating}
                  </span>
                </div>

              </div>


              {/* CONTENT */}
              <div className="p-5">

                <h2 className="text-xl font-bold group-hover:text-orange-400 transition">
                  {drink.name}
                </h2>

                <div className="flex items-center justify-between mt-3">

                  <div>
                    <span className="text-yellow-400 text-sm">
                      {drink.stars}
                    </span>

                    <span className="text-gray-500 text-xs ml-2">
                      {drink.rating}
                    </span>
                  </div>

                  <span className="text-gray-400 text-sm">
                    ⏱ {drink.time}
                  </span>

                </div>

                <div className="border-t border-gray-800 my-4" />

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 text-xs">
                      Price
                    </p>

                    <p className="text-2xl font-bold">
                      ₹{drink.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOrder(drink)}
                    className="
                      bg-orange-500
                      hover:bg-orange-600
                      text-black
                      font-bold
                      px-4 py-2.5
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
