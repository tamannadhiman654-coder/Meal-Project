import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Rr() {
  const navigate = useNavigate();

  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [time, setTime] = useState("");
  const [spice, setSpice] = useState("");

  const createMealPlan = () => {
    if (!cuisine || !mealType || !time || !spice) {
      alert("Please select all preferences first!");
      return;
    }

    navigate("/meal-plan");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl text-3xl mb-5">
            🍽️
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Find Meals You’ll{" "}
            <span className="text-orange-500">Love</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Customize your food preferences and discover meals that match
            your taste, time and mood.
          </p>

        </div>

        {/* Main Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-10">

          {/* Cuisine */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-5">
              🌎 Choose your favorite cuisine
            </h2>
email
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                ["Indian", "🍛"],
                ["Italian", "🍝"],
                ["Mexican", "🌮"],
                ["Asian", "🍜"],
              ].map(([name, icon]) => (
                <button
                  key={name}
                  onClick={() => setCuisine(name)}
                  className={`p-5 rounded-xl border transition ${
                    cuisine === name
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-orange-500"
                  }`}
                >
                  <div className="text-3xl mb-2">{icon}</div>

                  <p className="font-medium">
                    {name}
                  </p>
                </button>
              ))}

            </div>
          </div>

          {/* Meal Type */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-5">
              🍴 What are you looking for?
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {[
                ["Quick Meal", "Ready in under 20 minutes"],
                ["Family Dinner", "Perfect for everyone"],
                ["Weekend Special", "Something a little different"],
              ].map(([name, description]) => (
                <button
                  key={name}
                  onClick={() => setMealType(name)}
                  className={`p-5 rounded-xl border text-left transition ${
                    mealType === name
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-orange-500"
                  }`}
                >
                  <h3 className="font-semibold">
                    {name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {description}
                  </p>
                </button>
              ))}

            </div>
          </div>

          {/* Cooking Time */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-5">
              ⏱️ How much time do you have?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                "10 Minutes",
                "20 Minutes",
                "30 Minutes",
                "1 Hour+",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setTime(item)}
                  className={`py-4 rounded-xl border transition ${
                    time === item
                      ? "border-orange-500 bg-orange-500/10 text-orange-500"
                      : "border-gray-700 hover:border-orange-500"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

          {/* Spice Level */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold mb-5">
              🌶️ Pick your spice level
            </h2>

            <div className="grid grid-cols-3 gap-4">

              {[
                ["Mild", "🌶️"],
                ["Medium", "🌶️🌶️"],
                ["Spicy", "🌶️🌶️🌶️"],
              ].map(([name, icon]) => (
                <button
                  key={name}
                  onClick={() => setSpice(name)}
                  className={`py-5 rounded-xl border transition ${
                    spice === name
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 hover:border-orange-500"
                  }`}
                >
                  <div className="mb-2">{icon}</div>

                  <span className="font-medium">
                    {name}
                  </span>
                </button>
              ))}

            </div>
          </div>

          {/* Button */}
         <Link to='/MealPlan'>
          <button
            onClick={createMealPlan}
            className="w-full bg-orange-500 hover:bg-orange-600
                       py-4 rounded-xl font-semibold text-lg
                       transition duration-200"
          >
            ✨ Find My Meals →
          </button>
         </Link>

        </div>

        {/* Bottom */}
        <p className="text-center text-gray-600 text-sm mt-6">
          You can change your preferences anytime.
        </p>

      </div>
    </div>
  );
}
