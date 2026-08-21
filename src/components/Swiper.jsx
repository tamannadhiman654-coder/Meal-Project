import React from "react";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Swiper() {
  const foods = [
    {
      name: "Delicious Pizza",
      category: "Italian",
      description: "Crispy, cheesy & full of flavor",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Butter Chicken",
      category: "Indian",
      description: "Rich, creamy & delicious",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Spicy Ramen",
      category: "Asian",
      description: "Hot, flavorful & comforting",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="w-full">
      <SwiperSlider
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="rounded-3xl"
      >
        {foods.map((food) => (
          <SwiperSlide key={food.name}>
            <div className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden">

              {/* Food Image */}
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Food Details */}
              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-orange-500 font-semibold uppercase text-sm">
                  {food.category}
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {food.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {food.description}
                </p>

                <button
                  className="mt-5 bg-orange-500
                             hover:bg-orange-600
                             px-5 py-3 rounded-xl
                             font-semibold transition"
                >
                  View Recipe →
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
