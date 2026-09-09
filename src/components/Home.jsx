import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // =========================
  // FOOD SLIDER IMAGES
  // =========================
  const foodImages = [
    "/images/bevrages.jpg",
    "/images/cakes.jpg",
    "/images/pizzas.jpg",
    "/images/burger.jpg",
    "/images/bv2.jpg",
    "/images/m2.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // =========================
  // POPULAR MEALS
  // =========================
  const meals = [
    {
      name: "Fast-Food",
      category: "Crunchy-Bites",
      time: "20 min",
      image: "/images/bb1.jpg",
      to: "/Fast-Food",
    },
    {
      name: "Beverages",
      category: "Juicy-Sip",
      time: "15 min",
      image: "/images/bv2.jpg",
      to: "/Bevrages",
    },
    {
      name: "Sweets",
      category: "Sweet-Mouth",
      time: "20 min",
      image: "/images/m2.jpg",
      to: "/Sweets",
    },
  ];

  // =========================
  // CATEGORIES
  // =========================
  const categories = [
    ["/images/indian.jpg", "Indian", "/indian"],
    ["/images/italian.jpg", "Italian", "/italian"],
    ["/images/asian.jpg", "Asian", "/asian"],
    ["/images/mexican.jpg", "Mexican", "/mexican"],
    ["/images/korean.jpg", "Korean", "/korean"],
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
          <div className="relative z-10 md:pl-10 lg:pl-20">

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
              min-h-[400px]
            "
          >

            {/* Orange Circle Background */}
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

            {/* FOOD IMAGE CIRCLE */}
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
                overflow-hidden
                hover:scale-[1.03]
                transition-transform
                duration-500
              "
            >

              <img
                key={foodImages[currentImage]}
                src={foodImages[currentImage]}
                alt="Delicious food"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  rounded-full
                  block
                "
              />

            </div>

            {/* Rating Card */}
            <div
              className="
                absolute
                z-20
                bottom-2
                left-[5%]
                md:left-0
                lg:left-[5%]
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

        {/* Section Heading */}
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

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

          {categories.map(([image, name, path]) => (
            <Link
              to={path}
              key={name}
              className="block"
            >

              <div
                className="
                  bg-gray-900
                  border
                  border-gray-800
                  hover:border-orange-500
                  rounded-2xl
                  overflow-hidden
                  cursor-pointer
                  transition-all
                  duration-300
                  group
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-orange-500/10
                "
              >

                {/* Category Image */}
                <div className="h-36 overflow-hidden bg-gray-800">

                  <img
                    src={image}
                    alt={name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />

                </div>

                {/* Category Name */}
                <div className="p-4 text-center">

                  <h3 className="font-medium text-lg">
                    {name}
                  </h3>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* =====================================================
          POPULAR MEALS
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">

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
                  border
                  border-gray-800
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

                {/* MEAL IMAGE */}
                <div className="h-56 bg-gray-800 overflow-hidden">

                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

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
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            md:p-14
            shadow-2xl
            group
          "
        >

          {/* =========================
              BACKGROUND FOOD IMAGE
          ========================= */}
          <img
            src="/images/cta-food.jpg"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              opacity-20
              group-hover:opacity-25
              group-hover:scale-105
              transition-all
              duration-700
              pointer-events-none
            "
          />

          {/* Dark Gradient Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black
              via-black/90
              to-black/40
              pointer-events-none
            "
          />

          {/* Orange Light Glow */}
          <div
            className="
              absolute
              -right-20
              -top-20
              w-72
              h-72
              bg-orange-500/10
              blur-[100px]
              rounded-full
              pointer-events-none
            "
          />

          {/* CTA Content */}
          <div className="relative z-10 max-w-2xl">

            <p className="text-orange-500 font-semibold text-sm tracking-wide">
              YOUR NEXT FAVORITE MEAL IS WAITING
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-3
                leading-tight
              "
            >
              Hungry? Let's find something delicious.
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl text-base md:text-lg">
              Explore delicious recipes, discover new flavors,
              and find your next favorite meal.
            </p>

            <button
              onClick={() => navigate("/get-started")}
              className="
                mt-7
                bg-orange-500
                text-white
                px-7
                py-3.5
                rounded-xl
                font-semibold
                shadow-lg
                shadow-orange-500/20
                hover:bg-orange-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Start Exploring →
            </button>

          </div>

          {/* Food Emoji Decoration */}
          <div
            className="
              absolute
              right-8
              bottom-2
              text-[140px]
              opacity-10
              pointer-events-none
              select-none
            "
          >
            🍕
          </div>

        </div>

      </section>

    </div>
  );
}
