import React from "react";

export default function Indian() {
  const foods = [
    {
      name: "Butter Chicken",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "30 min",
      price: "₹299",
    },
    {
      name: "Paneer Tikka",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹249",
    },
    {
      name: "Chicken Biryani",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "40 min",
      price: "₹299",
    },
    {
      name: "Veg Biryani",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "35 min",
      price: "₹219",
    },
    {
      name: "Masala Dosa",
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹149",
    },
    {
      name: "Chole Bhature",
      image:
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "25 min",
      price: "₹179",
    },
    {
      name: "Palak Paneer",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹229",
    },
    {
      name: "Dal Makhani",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "35 min",
      price: "₹199",
    },
    {
      name: "Tandoori Chicken",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "45 min",
      price: "₹349",
    },
    {
      name: "Pav Bhaji",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹159",
    },
    {
      name: "Rajma Chawal",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "30 min",
      price: "₹179",
    },
    {
      name: "Aloo Paratha",
      image:
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹129",
    },
    {
      name: "Matar Paneer",
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹219",
    },
    {
      name: "Kadai Paneer",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹239",
    },
    {
      name: "Chicken Tikka",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "35 min",
      price: "₹329",
    },
    {
      name: "Rogan Josh",
      image:
        "https://images.unsplash.com/photo-1455853659719-4b521ed01717?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "45 min",
      price: "₹349",
    },
    {
      name: "Malai Kofta",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "35 min",
      price: "₹239",
    },
    {
      name: "Shahi Paneer",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹249",
    },
    {
      name: "Pani Puri",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "15 min",
      price: "₹99",
    },
    {
      name: "Samosa",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹79",
    },
    {
      name: "Dahi Puri",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "15 min",
      price: "₹119",
    },
    {
      name: "Vada Pav",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹89",
    },
    {
      name: "Idli Sambar",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹129",
    },
    {
      name: "Medu Vada",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹119",
    },
    {
      name: "Pulao",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "30 min",
      price: "₹169",
    },
    {
      name: "Amritsari Kulcha",
      image:
        "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹159",
    },
    {
      name: "Mango Lassi",
      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "10 min",
      price: "₹99",
    },
    {
      name: "Gulab Jamun",
      image:
        "https://images.unsplash.com/photo-1601303516534-0e7b1e7e5e95?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "15 min",
      price: "₹119",
    },
    {
      name: "Rasmalai",
      image:
        "https://images.unsplash.com/photo-1666190094766-4c4d6f4a8c2c?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹149",
    },
    {
      name: "Jalebi",
      image:
        "https://images.unsplash.com/photo-1601303516534-0e7b1e7e5e95?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹99",
    },
    {
      name: "Kheer",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹129",
    },
    {
      name: "Gajar Ka Halwa",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "40 min",
      price: "₹149",
    },
    {
      name: "Chicken Curry",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "40 min",
      price: "₹299",
    },
    {
      name: "Fish Curry",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "40 min",
      price: "₹329",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">

        <p className="text-orange-500 uppercase tracking-widest font-semibold text-sm">
          Authentic Indian Flavours
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          🇮🇳 Indian <span className="text-orange-500">Food</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore delicious Indian dishes from different regions,
          prepared with authentic spices and traditional flavours.
        </p>

      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

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

              {/* Price */}
              <div className="flex items-center justify-between mt-5">

                <span className="text-2xl font-bold text-orange-500">
                  {food.price}
                </span>

                <button
                  className="bg-orange-500 hover:bg-orange-600
                             text-white px-4 py-2.5
                             rounded-lg font-semibold
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