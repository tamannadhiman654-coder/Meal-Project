import React from "react";

export default function Mexican() {
  const mexicanFoods = [
    {
      name: "Chicken Tacos",
      price: "₹249",
      rating: "★★★★★",
      time: "20 min",
      image: "🌮",
    },
    {
      name: "Beef Tacos",
      price: "₹299",
      rating: "★★★★☆",
      time: "25 min",
      image: "🌮",
    },
    {
      name: "Veggie Tacos",
      price: "₹199",
      rating: "★★★★★",
      time: "15 min",
      image: "🌮",
    },
    {
      name: "Cheese Quesadilla",
      price: "₹229",
      rating: "★★★★★",
      time: "15 min",
      image: "🫓",
    },
    {
      name: "Chicken Quesadilla",
      price: "₹279",
      rating: "★★★★☆",
      time: "20 min",
      image: "🫓",
    },
    {
      name: "Veg Quesadilla",
      price: "₹219",
      rating: "★★★★★",
      time: "15 min",
      image: "🫓",
    },
    {
      name: "Chicken Burrito",
      price: "₹299",
      rating: "★★★★★",
      time: "25 min",
      image: "🌯",
    },
    {
      name: "Veg Burrito",
      price: "₹249",
      rating: "★★★★☆",
      time: "20 min",
      image: "🌯",
    },
    {
      name: "Beef Burrito",
      price: "₹329",
      rating: "★★★★☆",
      time: "30 min",
      image: "🌯",
    },
    {
      name: "Bean Burrito",
      price: "₹229",
      rating: "★★★★★",
      time: "20 min",
      image: "🌯",
    },
    {
      name: "Chicken Enchiladas",
      price: "₹319",
      rating: "★★★★★",
      time: "30 min",
      image: "🌮",
    },
    {
      name: "Cheese Enchiladas",
      price: "₹269",
      rating: "★★★★☆",
      time: "25 min",
      image: "🌮",
    },
    {
      name: "Mexican Rice",
      price: "₹179",
      rating: "★★★★★",
      time: "20 min",
      image: "🍚",
    },
    {
      name: "Spanish Rice",
      price: "₹189",
      rating: "★★★★☆",
      time: "20 min",
      image: "🍚",
    },
    {
      name: "Mexican Street Corn",
      price: "₹159",
      rating: "★★★★★",
      time: "15 min",
      image: "🌽",
    },
    {
      name: "Nachos Supreme",
      price: "₹249",
      rating: "★★★★★",
      time: "15 min",
      image: "🧀",
    },
    {
      name: "Cheese Nachos",
      price: "₹199",
      rating: "★★★★☆",
      time: "10 min",
      image: "🧀",
    },
    {
      name: "Chicken Nachos",
      price: "₹279",
      rating: "★★★★★",
      time: "20 min",
      image: "🧀",
    },
    {
      name: "Guacamole Nachos",
      price: "₹229",
      rating: "★★★★☆",
      time: "15 min",
      image: "🥑",
    },
    {
      name: "Chicken Fajitas",
      price: "₹329",
      rating: "★★★★★",
      time: "30 min",
      image: "🌯",
    },
    {
      name: "Veg Fajitas",
      price: "₹259",
      rating: "★★★★☆",
      time: "25 min",
      image: "🌯",
    },
    {
      name: "Beef Fajitas",
      price: "₹349",
      rating: "★★★★★",
      time: "30 min",
      image: "🌯",
    },
    {
      name: "Mexican Chicken Bowl",
      price: "₹299",
      rating: "★★★★★",
      time: "25 min",
      image: "🍲",
    },
    {
      name: "Veg Mexican Bowl",
      price: "₹249",
      rating: "★★★★☆",
      time: "20 min",
      image: "🍲",
    },
    {
      name: "Chicken Chimichanga",
      price: "₹329",
      rating: "★★★★★",
      time: "30 min",
      image: "🌯",
    },
    {
      name: "Bean Chimichanga",
      price: "₹269",
      rating: "★★★★☆",
      time: "25 min",
      image: "🌯",
    },
    {
      name: "Mexican Bean Salad",
      price: "₹199",
      rating: "★★★★★",
      time: "10 min",
      image: "🥗",
    },
    {
      name: "Avocado Salad",
      price: "₹229",
      rating: "★★★★★",
      time: "10 min",
      image: "🥑",
    },
    {
      name: "Mexican Soup",
      price: "₹189",
      rating: "★★★★☆",
      time: "20 min",
      image: "🍲",
    },
    {
      name: "Chicken Tortilla Soup",
      price: "₹249",
      rating: "★★★★★",
      time: "25 min",
      image: "🍲",
    },
    {
      name: "Mexican Hot Wings",
      price: "₹279",
      rating: "★★★★★",
      time: "25 min",
      image: "🍗",
    },
    {
      name: "Spicy Chicken Wings",
      price: "₹289",
      rating: "★★★★☆",
      time: "25 min",
      image: "🍗",
    },
    {
      name: "Mexican Cheese Dip",
      price: "₹169",
      rating: "★★★★★",
      time: "10 min",
      image: "🧀",
    },
    {
      name: "Salsa Dip",
      price: "₹149",
      rating: "★★★★☆",
      time: "10 min",
      image: "🌶️",
    },
    {
      name: "Churros",
      price: "₹179",
      rating: "★★★★★",
      time: "20 min",
      image: "🍩",
    },
    {
      name: "Mexican Chocolate Cake",
      price: "₹229",
      rating: "★★★★☆",
      time: "35 min",
      image: "🍰",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Mexican Cuisine
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            🌮 Mexican <span className="text-orange-500">Food</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Explore delicious Mexican dishes full of flavor and spice.
          </p>

        </div>

        {/* Food Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {mexicanFoods.map((food) => (

            <div
              key={food.name}
              className="group bg-gray-900 border border-gray-800
                         rounded-2xl overflow-hidden
                         hover:border-orange-500
                         hover:-translate-y-1
                         transition duration-300"
            >

              {/* Food Image */}
              <div className="h-52 bg-gray-800 flex items-center justify-center
                              text-8xl overflow-hidden">

                <span className="group-hover:scale-110 transition duration-300">
                  {food.image}
                </span>

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name */}
                <h2 className="text-xl font-semibold">
                  {food.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center justify-between mt-2">

                  <span className="text-yellow-400 text-sm">
                    {food.rating}
                  </span>

                  <span className="text-gray-400 text-sm">
                    ⏱️ {food.time}
                  </span>

                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-5">

                  <span className="text-2xl font-bold text-orange-500">
                    {food.price}
                  </span>

                  {/* Order Button */}
                  <button
                    className="bg-orange-500
                               hover:bg-orange-600
                               text-white
                               px-4 py-2
                               rounded-lg
                               font-semibold
                               text-sm
                               transition"
                  >
                    Order Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}