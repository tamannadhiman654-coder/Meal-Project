import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const meals = [
    {
      name: "Creamy Pasta",
      category: "Italian",
      time: "20 min",
      emoji: "🍝",
    },
    {
      name: "Chicken Burger",
      category: "Fast Food",
      time: "15 min",
      emoji: "🍔",
    },
    {
      name: "Butter Chicken",
      category: "Indian",
      time: "30 min",
      emoji: "🍗",
    },
  ];

  const categories = [
    ["🍛", "Indian"],
    ["🍝", "Italian"],
    ["🍜", "Asian"],
    ["🌮", "Mexican"],
    ["🥗", "Healthy"],
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2
                        w-96 h-96 bg-orange-500/20
                        blur-[120px] rounded-full">
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28
                        grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="relative z-10">

            <div className="inline-flex items-center gap-2
                            bg-gray-900 border border-gray-800
                            rounded-full px-4 py-2 mb-6">

              <span className="text-orange-500">✦</span>

              <span className="text-sm text-gray-300">
                Delicious meals, made simple
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Good Food.
              <br />

              <span className="text-orange-500">
                Good Mood.
              </span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-lg leading-relaxed">
              Discover delicious recipes, explore new flavors and find
              the perfect meal for every moment.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => navigate("/get-started")}
                className="bg-orange-500 hover:bg-orange-600
                           px-7 py-3.5 rounded-xl
                           font-semibold transition
                           shadow-lg shadow-orange-500/20"
              >
                Find My Meals →
              </button>

              <button
                className="border border-gray-700
                           hover:border-orange-500
                           hover:text-orange-500
                           px-7 py-3.5 rounded-xl
                           font-semibold transition"
              >
                Explore Recipes
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">

              <div>
                <h3 className="text-2xl font-bold">
                  500+
                </h3>

                <p className="text-gray-500 text-sm">
                  Recipes
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  50+
                </h3>

                <p className="text-gray-500 text-sm">
                  Cuisines
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  10k+
                </h3>

                <p className="text-gray-500 text-sm">
                  Food Lovers
                </p>
              </div>

            </div>

          </div>

          {/* Right Food Visual */}
          <div className="relative flex justify-center">

            {/* Orange circle */}
            <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px]
                            bg-orange-500 rounded-full
                            opacity-90">
            </div>

            {/* Food */}
            <div className="relative z-10
                            w-72 h-72 md:w-[380px] md:h-[380px]
                            rounded-full bg-gray-900
                            border-8 border-black
                            flex items-center justify-center
                            shadow-2xl">

              <span className="text-[150px] md:text-[200px]">
                🍜
              </span>

            </div>

            {/* Floating card */}
            <div className="absolute z-20 bottom-5 left-5
                            bg-gray-900 border border-gray-700
                            rounded-2xl px-5 py-4
                            shadow-xl">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 bg-orange-500
                                rounded-full flex items-center justify-center">
                  ⭐
                </div>

                <div>
                  <p className="font-semibold">
                    4.9/5
                  </p>

                  <p className="text-gray-500 text-xs">
                    User Rating
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-end mb-8">

          <div>
            <p className="text-orange-500 text-sm font-semibold">
              EXPLORE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Browse by Cuisine
            </h2>
          </div>

          <button className="hidden sm:block text-gray-400
                             hover:text-orange-500 transition">
            View all →
          </button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {categories.map(([icon, name]) => (

            <div
              key={name}
              className="bg-gray-900 border border-gray-800
                         hover:border-orange-500
                         rounded-2xl p-6 text-center
                         cursor-pointer transition duration-300
                         group"
            >

              <div className="text-4xl group-hover:scale-110
                              transition">
                {icon}
              </div>

              <h3 className="mt-3 font-medium">
                {name}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* ================= POPULAR MEALS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-8">

          <p className="text-orange-500 text-sm font-semibold">
            MOST LOVED
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Popular Meals
          </h2>

          <p className="text-gray-500 mt-2">
            Recipes everyone is talking about.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {meals.map((meal) => (

            <div
              key={meal.name}
              className="bg-gray-900 border border-gray-800
                         rounded-2xl overflow-hidden
                         hover:border-orange-500
                         transition duration-300"
            >

              {/* Food */}
              <div className="h-56 bg-gray-800
                              flex items-center justify-center
                              text-8xl">
                {meal.emoji}
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between">

                  <span className="text-orange-500 text-sm">
                    {meal.category}
                  </span>

                  <span className="text-gray-500 text-sm">
                    ⏱️ {meal.time}
                  </span>

                </div>

                <h3 className="text-xl font-semibold mt-3">
                  {meal.name}
                </h3>

                <div className="flex justify-between
                                items-center mt-5">

                  <span className="text-yellow-500">
                    ★★★★★
                  </span>

                  <button
                    className="text-orange-500
                               hover:text-orange-400
                               font-medium text-sm"
                  >
                    View Recipe →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="relative overflow-hidden
                        bg-orange-500 rounded-3xl
                        p-8 md:p-14">

          <div className="relative z-10 max-w-2xl">

            <p className="text-orange-100 font-medium">
              YOUR NEXT FAVORITE MEAL IS WAITING
            </p>

            <h2 className="text-4xl md:text-5xl
                           font-bold mt-3">
              Hungry? Let's find something delicious.
            </h2>

            <button
              onClick={() => navigate("/get-started")}
              className="mt-7 bg-black text-white
                         px-7 py-3.5 rounded-xl
                         font-semibold hover:bg-gray-900
                         transition"
            >
              Start Exploring →
            </button>

          </div>

          <div className="absolute right-10 top-1/2
                          -translate-y-1/2
                          text-[160px] opacity-20">
            🍕
          </div>

        </div>

      </section>

    </div>
  );
}
