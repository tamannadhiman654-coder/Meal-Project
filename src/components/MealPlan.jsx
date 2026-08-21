import React from "react";
import { useNavigate } from "react-router-dom";

export default function MealPlan() {
  const navigate = useNavigate();

  const meals = [
    {
      name: "Butter Chicken",
      category: "Indian",
      time: "30 min",
      spice: "🌶️🌶️",
      image: "🍗",
      description: "Creamy, rich and flavorful Indian chicken curry.",
    },
    {
      name: "Paneer Tikka",
      category: "Indian",
      time: "25 min",
      spice: "🌶️",
      image: "🧀",
      description: "Grilled paneer with delicious spices and vegetables.",
    },
    {
      name: "Veggie Pasta",
      category: "Italian",
      time: "20 min",
      spice: "🌶️",
      image: "🍝",
      description: "Fresh vegetables tossed with creamy Italian pasta.",
    },
    {
      name: "Chicken Tacos",
      category: "Mexican",
      time: "20 min",
      spice: "🌶️🌶️🌶️",
      image: "🌮",
      description: "Crispy tacos filled with spicy grilled chicken.",
    },
    {
      name: "Ramen Bowl",
      category: "Asian",
      time: "30 min",
      spice: "🌶️🌶️",
      image: "🍜",
      description: "Warm and flavorful noodles with fresh toppings.",
    },
    {
      name: "Fresh Salad",
      category: "Healthy",
      time: "10 min",
      spice: "🌶️",
      image: "🥗",
      description: "A fresh and colorful salad packed with nutrients.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Your Recommendations
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Find Your{" "}
              <span className="text-orange-500">Meals</span>
            </h1>

            <p className="text-gray-400 mt-3 max-w-xl">
              Delicious recipes selected to match your preferences.
            </p>
          </div>

          {/* Change Preferences */}
          <button
            onClick={() => navigate("/get-started")}
            className="border border-gray-700 hover:border-orange-500
                       hover:text-orange-500 px-5 py-3 rounded-lg
                       transition"
          >
            ⚙️ Change Preferences
          </button>

        </div>

        {/* Preference Tags */}
        <div className="flex flex-wrap gap-3 mb-10">

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300">
            🍛 Indian
          </span>

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300">
            🍴 Quick Meal
          </span>

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300">
            ⏱️ 20 Minutes
          </span>

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300">
            🌶️ Medium
          </span>

        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-semibold">
            Recommended for you
          </h2>

          <p className="text-gray-500 text-sm">
            {meals.length} meals found
          </p>

        </div>

        {/* Meal Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {meals.map((meal) => (
            <div
              key={meal.name}
              className="group bg-gray-900 border border-gray-800
                         rounded-2xl overflow-hidden
                         hover:border-orange-500 transition duration-300"
            >

              {/* Image / Food Area */}
              <div className="h-48 bg-gray-800 flex items-center justify-center
                              text-7xl group-hover:scale-105 transition duration-300">
                {meal.image}
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between mb-3">

                  <span className="text-orange-500 text-sm font-medium">
                    {meal.category}
                  </span>

                  <span className="text-gray-400 text-sm">
                    ⏱️ {meal.time}
                  </span>

                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {meal.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {meal.description}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-sm">
                    {meal.spice}
                  </span>

                  <button
                    className="text-orange-500 hover:text-orange-400
                               font-medium text-sm transition"
                  >
                    View Recipe →
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
