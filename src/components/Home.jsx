import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
const meals = [
  {
    name: "Fast-Food",
    category: "Crunchy-Bites",
    time: "20 min",
    emoji: "🍝",
    to: "/Fast-Food",
  },
  {
    name: "Beverages",
    category: "Juicy-Sip",
    time: "15 min",
    emoji: "🍹",
    to: "/Bevrages",
  },
  {
    name: "Sweets",
    category: "Sweet-Mouth",
    time: "20 min",
    emoji: "🍰",
    to: "/Sweets",
  },
];


  const categories = [
    ["🍛", "Indian", "/indian"],
    ["🍝", "Italian", "/italian"],
    ["🍜", "Asian", "/asian"],
    ["🌮", "Mexican", "/mexican"],
    ["🥗", "Korean", "/korean"],
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden">

        {/* Background Glow */}
        <div
          className="
            absolute
            top-10
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            bg-orange-500/10
            blur-[120px]
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            pt-12
            pb-16
            md:pt-16
            md:pb-20
            grid
            md:grid-cols-[1.1fr_0.9fr]
            gap-4
            lg:gap-8
            items-center
          "
        >

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 pl-50">

            {/* Small Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-gray-900
                border
                border-gray-800
                rounded-full
                px-4
                py-2
                mb-5
              "
            >
              <span className="text-orange-500 text-lg">
                ✦
              </span>

              <span className="text-sm text-gray-300">
                Delicious meals, made simple
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.05]
              "
            >
              Good Food.
              <br />

              <span className="text-orange-500">
                Good Mood.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                text-gray-400
                text-lg
                mt-5
                max-w-xl
                leading-relaxed
              "
            >
              Discover delicious recipes, explore new flavors
              and find the perfect meal for every moment.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-7">

              <button
                onClick={() => navigate("/get-started")}
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-7
                  py-3.5
                  rounded-xl
                  font-semibold
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Find My Meals →
              </button>

              <button
                onClick={() => navigate("/recipes")}
                className="
                  border
                  border-gray-700
                  hover:border-orange-500
                  hover:text-orange-500
                  px-7
                  py-3.5
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Explore Recipes
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-9">

              <div>
                <h3 className="text-2xl font-bold">
                  500+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Recipes
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  50+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Cuisines
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  10k+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Food Lovers
                </p>
              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT FOOD VISUAL
          ===================================================== */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              md:justify-start
              lg:justify-center
              min-h-[400px]
              pr-30
            "
          >

            {/* Orange Circle */}
            <div
              className="
                absolute
                w-[300px]
                h-[300px]
                md:w-[350px]
                md:h-[350px]
                lg:w-[380px]
                lg:h-[380px]
                bg-orange-500
                rounded-full
                opacity-90
                shadow-[0_0_80px_rgba(249,115,22,0.25)]
              "
            />

            {/* Food Circle */}
            <div
              className="
                relative
                z-10
                w-[280px]
                h-[280px]
                md:w-[330px]
                md:h-[330px]
                lg:w-[360px]
                lg:h-[360px]
                rounded-full
                bg-gray-900
                border-[7px]
                border-black
                flex
                items-center
                justify-center
                shadow-2xl
                hover:scale-[1.03]
                transition-transform
                duration-500
              "
            >
              <span
                className="
                  text-[130px]
                  md:text-[160px]
                  lg:text-[180px]
                  drop-shadow-2xl
                "
              >
                🍜
              </span>
            </div>

            {/* Rating Card */}
            <div
              className="
                absolute
                z-20
                bottom-2
                left-[8%]
                md:left-0
                lg:left-[8%]
                bg-gray-900/95
                backdrop-blur-sm
                border
                border-gray-700
                rounded-2xl
                px-5
                py-4
                shadow-2xl
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10
                    h-10
                    bg-orange-500
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-orange-500/20
                  "
                >
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


      {/* =====================================================
          CATEGORIES SECTION
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">

        {/* Heading */}
        <div className="flex justify-between items-end mb-8">

          <div>
            <p className="text-orange-500 text-sm font-semibold">
              EXPLORE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Browse by Cuisine
            </h2>
          </div>

          <button
            className="
              hidden
              sm:block
              text-gray-400
              hover:text-orange-500
              transition
            "
          >
            View all →
          </button>

        </div>


        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {categories.map(([icon, name, path]) => (
            <Link to={path} key={name}>

              <div
                className="
                  bg-gray-900
                  border
                  border-gray-800
                  hover:border-orange-500
                  rounded-2xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  group
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-orange-500/10
                "
              >

                <div
                  className="
                    text-4xl
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                >
                  {icon}
                </div>

                <h3 className="mt-3 font-medium">
                  {name}
                </h3>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* =====================================================
          POPULAR MEALS
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">

        {/* Heading */}
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


        {/* Meal Cards */}
        <div className="grid md:grid-cols-3 gap-6">
{meals.map((meal) => (
  <Link
    to={meal.to}
    key={meal.name}
    className="block"
  >
    <div
      className="
        bg-gray-900
        border border-gray-800
        rounded-2xl
        overflow-hidden
        hover:border-orange-500
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-orange-500/10
        transition-all
        duration-300
      "
    >

      <div
        className="
          h-56
          bg-gray-800
          flex
          items-center
          justify-center
          text-8xl
        "
      >
        {meal.emoji}
      </div>

      <div className="p-6">

        <div className="flex justify-between items-center">

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

        <div className="flex justify-between items-center mt-5">

          <span className="text-yellow-500">
            ★★★★★
          </span>

          <span className="text-orange-500 font-bold text-lg">
            View More →
          </span>

        </div>

      </div>

    </div>
  </Link>
))}

        </div>

      </section>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <div
          className="
            relative
            overflow-hidden
            bg-orange-500
            rounded-3xl
            p-8
            md:p-14
          "
        >

          {/* CTA Content */}
          <div className="relative z-10 max-w-2xl">

            <p className="text-orange-100 font-medium">
              YOUR NEXT FAVORITE MEAL IS WAITING
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-3
              "
            >
              Hungry? Let's find something delicious.
            </h2>

            <button
              onClick={() => navigate("/get-started")}
              className="
                mt-7
                bg-black
                text-white
                px-7
                py-3.5
                rounded-xl
                font-semibold
                hover:bg-gray-900
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Start Exploring →
            </button>

          </div>


          {/* Pizza Decoration */}
          <div
            className="
              absolute
              right-10
              top-1/2
              -translate-y-1/2
              text-[160px]
              opacity-20
              pointer-events-none
            "
          >
            🍕
          </div>

        </div>

      </section>

    </div>
  );
}
