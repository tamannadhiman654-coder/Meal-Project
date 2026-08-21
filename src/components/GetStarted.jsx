import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-500 rounded-xl text-2xl mb-5">
            🍴
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Let's Build Your Perfect{" "}
            <span className="text-orange-500">Meal Plan</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tell us a little about yourself and we'll help you discover
            delicious meals that fit your lifestyle.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-10">

          {/* Step 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                1
              </span>

              <h2 className="text-xl font-semibold">
                What's your goal?
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">

              <button
                onClick={() => setGoal("healthy")}
                className={`p-5 rounded-xl border text-left transition ${
                  goal === "healthy"
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-700 hover:border-orange-500"
                }`}
              >
                <div className="text-3xl mb-3">🥗</div>
                <h3 className="font-semibold">Eat Healthy</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Nutritious everyday meals
                </p>
              </button>

              <button
                onClick={() => setGoal("fitness")}
                className={`p-5 rounded-xl border text-left transition ${
                  goal === "fitness"
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-700 hover:border-orange-500"
                }`}
              >
                <div className="text-3xl mb-3">💪</div>
                <h3 className="font-semibold">Build Muscle</h3>
                <p className="text-sm text-gray-400 mt-1">
                  High protein meals
                </p>
              </button>

              <button
                onClick={() => setGoal("weight")}
                className={`p-5 rounded-xl border text-left transition ${
                  goal === "weight"
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-gray-700 hover:border-orange-500"
                }`}
              >
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="font-semibold">Lose Weight</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Light & balanced meals
                </p>
              </button>

            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                2
              </span>

              <h2 className="text-xl font-semibold">
                Choose your diet
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">

              {["Vegetarian", "Non-Vegetarian", "Vegan"].map((item) => (
                <button
                  key={item}
                  onClick={() => setDiet(item)}
                  className={`p-4 rounded-xl border transition ${
                    diet === item
                      ? "border-orange-500 bg-orange-500/10 text-orange-500"
                      : "border-gray-700 text-gray-300 hover:border-orange-500"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                3
              </span>

              <h2 className="text-xl font-semibold">
                How many meals per day?
              </h2>
            </div>

            <select
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3
                         text-gray-300 focus:outline-none focus:border-orange-500"
            >
              <option>3 meals</option>
              <option>4 meals</option>
              <option>5 meals</option>
              <option>6 meals</option>
            </select>
          </div>

          {/* Button */}
          <Link to ='/Plan'
            className="w-full bg-orange-500 hover:bg-orange-600
                       text-white font-semibold py-3.5 rounded-lg
                       transition"
          >
            Create My Meal Plan →
          </Link>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Your preferences can be changed anytime.
        </p>

      </div>
    </div>
  );
}
