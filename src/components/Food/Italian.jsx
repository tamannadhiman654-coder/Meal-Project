import React from "react";

export default function Italian() {
  const foods = [
    {
      name: "Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "20 min",
      price: "₹299",
    },
    {
      name: "Pepperoni Pizza",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹349",
    },
    {
      name: "Four Cheese Pizza",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹379",
    },
    {
      name: "Veggie Pizza",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹299",
    },
    {
      name: "Pasta Alfredo",
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "25 min",
      price: "₹279",
    },
    {
      name: "Spaghetti Carbonara",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹299",
    },
    {
      name: "Penne Arrabbiata",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹249",
    },
    {
      name: "Pesto Pasta",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹269",
    },
    {
      name: "Lasagna",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "40 min",
      price: "₹349",
    },
    {
      name: "Chicken Lasagna",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "45 min",
      price: "₹399",
    },
    {
      name: "Ravioli",
      image:
        "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹329",
    },
    {
      name: "Gnocchi",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "30 min",
      price: "₹299",
    },
    {
      name: "Risotto",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "35 min",
      price: "₹329",
    },
    {
      name: "Mushroom Risotto",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "35 min",
      price: "₹319",
    },
    {
      name: "Bruschetta",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹199",
    },
    {
      name: "Garlic Bread",
      image:
        "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "15 min",
      price: "₹149",
    },
    {
      name: "Cheese Garlic Bread",
      image:
        "https://images.unsplash.com/photo-1619531040576-f9416740661a?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "15 min",
      price: "₹179",
    },
    {
      name: "Caprese Salad",
      image:
        "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "10 min",
      price: "₹229",
    },
    {
      name: "Caesar Salad",
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "15 min",
      price: "₹249",
    },
    {
      name: "Italian Bruschetta",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "15 min",
      price: "₹199",
    },
    {
      name: "Chicken Parmesan",
      image:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "35 min",
      price: "₹399",
    },
    {
      name: "Chicken Piccata",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹379",
    },
    {
      name: "Chicken Marsala",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "35 min",
      price: "₹389",
    },
    {
      name: "Focaccia",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      rating: "4.6",
      time: "30 min",
      price: "₹179",
    },
    {
      name: "Calzone",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "30 min",
      price: "₹329",
    },
    {
      name: "Italian Meatballs",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "30 min",
      price: "₹329",
    },
    {
      name: "Tortellini",
      image:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹319",
    },
    {
      name: "Fettuccine",
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "25 min",
      price: "₹279",
    },
    {
      name: "Macaroni Cheese",
      image:
        "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹249",
    },
    {
      name: "Tomato Pasta",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹229",
    },
    {
      name: "Creamy Mushroom Pasta",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "25 min",
      price: "₹289",
    },
    {
      name: "Tiramisu",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "15 min",
      price: "₹229",
    },
    {
      name: "Panna Cotta",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
      rating: "4.8",
      time: "20 min",
      price: "₹219",
    },
    {
      name: "Cannoli",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
      rating: "4.7",
      time: "20 min",
      price: "₹199",
    },
    {
      name: "Italian Gelato",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      rating: "4.9",
      time: "10 min",
      price: "₹159",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">

        <p className="text-orange-500 uppercase tracking-widest font-semibold text-sm">
          Authentic Italian Flavours
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          🇮🇹 Italian <span className="text-orange-500">Food</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover delicious Italian classics including pizza, pasta,
          risotto, desserts and much more.
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
            className="group bg-gray-900
                       border border-gray-800
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