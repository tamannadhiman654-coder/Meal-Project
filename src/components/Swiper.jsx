import React from "react";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Swiper() {
  const categories = [
    {
      name: "Veg Food",
      emoji: "🥗",
      images: [
        {
          name: "Paneer Tikka",
          image:
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Veg Biryani",
          image:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Fresh Salad",
          image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Veg Pasta",
          image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Vegetable Curry",
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Masala Dosa",
          image:
            "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=90",
        },
      ],
    },

    {
      name: "Fast Food",
      emoji: "🍔",
      images: [
        {
          name: "Cheese Burger",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Pizza",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "French Fries",
          image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Hot Dog",
          image:
            "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Tacos",
          image:
            "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Chicken Burger",
          image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=90",
        },
      ],
    },

    {
      name: "Sweets",
      emoji: "🍰",
      images: [
        {
          name: "Chocolate Cake",
          image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Donuts",
          image:
            "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Ice Cream",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Cupcake",
          image:
            "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Pancakes",
          image:
            "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Waffles",
          image:
            "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=90",
        },
      ],
    },

    {
      name: "Beverages",
      emoji: "🥤",
      images: [
        {
          name: "Fresh Juice",
          image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Coffee",
          image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Milkshake",
          image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Iced Coffee",
          image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Smoothie",
          image:
            "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=90",
        },
        {
          name: "Lemonade",
          image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=90",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-8 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Main Category Swiper */}
        <SwiperSlider
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >

          {categories.map((category) => (

            <SwiperSlide key={category.name}>

              {/* Category Heading */}
              <div className=" text-2xl mb-6">

                <p className="text-orange-500 font-semibold text-2xl uppercase text-sm">
                  Explore
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-1 text-white">
                  {category.emoji} {category.name}
                </h2>

              </div>

              {/* Food Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                {category.images.map((food) => (

                  <div
                    key={food.name}
                    className="
                      group
                      bg-gray-900
                      border border-gray-800
                      rounded-2xl
                      overflow-hidden
                      hover:border-orange-500
                      transition
                      duration-300
                    "
                  >

                    {/* Image */}
                    <div className="h-48 md:h-52 overflow-hidden">

                      <img
                        src={food.image}
                        alt={food.name}
                        className="
                          w-full
                          h-full
                          object-cover
                          text-5xl
                          group-hover:scale-110
                          transition
                          duration-500
                        "
                      />

                    </div>

                    {/* Food Name */}
                    <div className="p-4">

                      <h3 className="font-semibold text-white text-sm md:text-base">
                        {food.name}
                      </h3>

                      <button
                        className="
                          text-orange-500
                          hover:text-orange-400
                          text-xs
                          md:text-sm
                          mt-2
                          transition
                        "
                      >
                        View Recipe →
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </SwiperSlide>

          ))}

        </SwiperSlider>

      </div>

    </div>
  );
}