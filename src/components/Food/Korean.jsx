import React from "react";

export default function Korean() {
  const foods = [
    {
      name: "Bibimbap",
      image:
        "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "25 min",
      price: "₹299",
    },
    {
      name: "Tteokbokki",
      image:
        "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹229",
    },
    {
      name: "Bulgogi",
      image:
        "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "30 min",
      price: "₹399",
    },
    {
      name: "Japchae",
      image:
        "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹279",
    },
    {
      name: "Korean Fried Chicken",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "30 min",
      price: "₹349",
    },
    {
      name: "Kimchi Fried Rice",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹249",
    },
    {
      name: "Kimbap",
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹219",
    },
    {
      name: "Samgyeopsal",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "35 min",
      price: "₹449",
    },
    {
      name: "Galbi",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "40 min",
      price: "₹499",
    },
    {
      name: "Kimchi Jjigae",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹279",
    },
    {
      name: "Sundubu Jjigae",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹269",
    },
    {
      name: "Doenjang Jjigae",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹249",
    },
    {
      name: "Samgyetang",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "45 min",
      price: "₹399",
    },
    {
      name: "Naengmyeon",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹299",
    },
    {
      name: "Mandu",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹229",
    },
    {
      name: "Kimchi Mandu",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "25 min",
      price: "₹249",
    },
    {
      name: "Vegetable Mandu",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹219",
    },
    {
      name: "Haemul Pajeon",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹279",
    },
    {
      name: "Kimchi Pancake",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹249",
    },
    {
      name: "Korean BBQ Beef",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "35 min",
      price: "₹449",
    },
    {
      name: "Spicy Pork Bulgogi",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "35 min",
      price: "₹379",
    },
    {
      name: "Dakgalbi",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "35 min",
      price: "₹349",
    },
    {
      name: "Jajangmyeon",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "25 min",
      price: "₹279",
    },
    {
      name: "Ramyeon",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹199",
    },
    {
      name: "Cheese Ramyeon",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹229",
    },
    {
      name: "Rabokki",
      image:
        "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹249",
    },
    {
      name: "Korean Corn Dog",
      image:
        "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹199",
    },
    {
      name: "Gyeran Ppang",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "15 min",
      price: "₹159",
    },
    {
      name: "Hotteok",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹149",
    },
    {
      name: "Bingsu",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "10 min",
      price: "₹249",
    },
    {
      name: "Mango Bingsu",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "10 min",
      price: "₹279",
    },
    {
      name: "Patbingsu",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "10 min",
      price: "₹249",
    },
    {
      name: "Korean Sweet Pancake",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹159",
    },
    {
      name: "Korean Egg Roll",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹179",
    },
    {
      name: "Korean Toast",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹189",
    },
    {
      name: "Korean Chicken Wings",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "30 min",
      price: "₹329",
    },
    {
      name: "Soy Garlic Chicken",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹349",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-orange-500 uppercase tracking-widest font-semibold text-sm">
          Authentic Korean Flavours
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          🇰🇷 Korean <span className="text-orange-500">Food</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore delicious Korean classics, street food, BBQ,
          noodles, rice dishes and sweet treats.
        </p>
      </div>

      {/* Food Grid */}
      <div
        className="max-w-7xl mx-auto
                   grid grid-cols-1 sm:grid-cols-2
                   lg:grid-cols-3 xl:grid-cols-4
                   gap-6"
      >
        {foods.map((food) => (
          <div
            key={food.name}
            className="group bg-gray-900 border border-gray-800
                       rounded-2xl overflow-hidden
                       hover:border-orange-500
                       hover:-translate-y-1
                       transition duration-300"
          >

            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover
                           group-hover:scale-110
                           transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {food.name}
              </h2>

              {/* Rating + Time */}
              <div className="flex items-center justify-between mt-3">

                <span className="text-yellow-400">
                  ★★★★★
                  <span className="text-gray-400 text-sm ml-2">
                    {food.rating}
                  </span>
                </span>

                <span className="text-gray-400 text-sm">
                  ⏱️ {food.time}
                </span>

              </div>

              {/* Price + Order */}
              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold text-orange-500">
                  {food.price}
                </span>

                <button
                  className="bg-orange-500
                             hover:bg-orange-600
                             text-white
                             px-4 py-2.5
                             rounded-lg
                             font-semibold
                             transition"
                >
                  🛒 Order Now
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}