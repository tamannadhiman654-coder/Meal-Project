import React from "react";

const fastFoodData = [
  {
    id: 1,
    name: "Classic Veg Burger",
    price: 99,
    rating: 4.8,
    stars: "★★★★★",
    time: "12 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Aloo Tikki Burger",
    price: 89,
    rating: 4.6,
    stars: "★★★★★",
    time: "10 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Cheese Burst Burger",
    price: 149,
    rating: 4.9,
    stars: "★★★★★",
    time: "15 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Paneer Tandoori Burger",
    price: 159,
    rating: 4.8,
    stars: "★★★★★",
    time: "17 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mexican Veg Burger",
    price: 139,
    rating: 4.7,
    stars: "★★★★★",
    time: "14 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Double Cheese Veg Burger",
    price: 179,
    rating: 4.8,
    stars: "★★★★★",
    time: "16 min",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Margherita Pizza",
    price: 199,
    rating: 4.8,
    stars: "★★★★★",
    time: "22 min",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Farmhouse Pizza",
    price: 299,
    rating: 4.9,
    stars: "★★★★★",
    time: "27 min",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Paneer Tikka Pizza",
    price: 319,
    rating: 4.8,
    stars: "★★★★★",
    time: "28 min",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Mexican Fiesta Pizza",
    price: 289,
    rating: 4.7,
    stars: "★★★★★",
    time: "25 min",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    name: "Paneer Tikka Wrap",
    price: 149,
    rating: 4.8,
    stars: "★★★★★",
    time: "14 min",
    category: "Wrap",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Mexican Veg Wrap",
    price: 139,
    rating: 4.6,
    stars: "★★★★★",
    time: "13 min",
    category: "Wrap",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Cheese Paneer Wrap",
    price: 169,
    rating: 4.8,
    stars: "★★★★★",
    time: "15 min",
    category: "Wrap",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Aloo Masala Wrap",
    price: 99,
    rating: 4.5,
    stars: "★★★★☆",
    time: "11 min",
    category: "Wrap",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 15,
    name: "Classic French Fries",
    price: 99,
    rating: 4.6,
    stars: "★★★★★",
    time: "8 min",
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Peri Peri Fries",
    price: 129,
    rating: 4.8,
    stars: "★★★★★",
    time: "9 min",
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Cheese Loaded Fries",
    price: 159,
    rating: 4.9,
    stars: "★★★★★",
    time: "11 min",
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Masala Fries",
    price: 109,
    rating: 4.6,
    stars: "★★★★★",
    time: "9 min",
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1598679253544-2c97992403ea?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 19,
    name: "Veg Cheese Nuggets",
    price: 139,
    rating: 4.6,
    stars: "★★★★★",
    time: "11 min",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Crispy Veg Bites",
    price: 119,
    rating: 4.5,
    stars: "★★★★☆",
    time: "10 min",
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 21,
    name: "Classic Veg Momos",
    price: 119,
    rating: 4.7,
    stars: "★★★★★",
    time: "14 min",
    category: "Momos",
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 22,
    name: "Fried Veg Momos",
    price: 139,
    rating: 4.8,
    stars: "★★★★★",
    time: "15 min",
    category: "Momos",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 23,
    name: "Paneer Momos",
    price: 149,
    rating: 4.8,
    stars: "★★★★★",
    time: "16 min",
    category: "Momos",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 24,
    name: "Garlic Bread",
    price: 109,
    rating: 4.6,
    stars: "★★★★★",
    time: "10 min",
    category: "Sides",
    image:
      "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-garlic-bread.jpg",
  },
  {
    id: 25,
    name: "Cheese Garlic Bread",
    price: 149,
    rating: 4.8,
    stars: "★★★★★",
    time: "12 min",
    category: "Sides",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpver9vBfDpbvupknOgIqTDnb61bi3mXeT9ZoCQSYkqTSgwCbS71yFIKc&s=10",
  },

  {
    id: 26,
    name: "Veg Cheese Pasta",
    price: 179,
    rating: 4.7,
    stars: "★★★★★",
    time: "20 min",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 27,
    name: "Creamy Alfredo Veg Pasta",
    price: 219,
    rating: 4.9,
    stars: "★★★★★",
    time: "22 min",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 28,
    name: "Arrabbiata Pasta",
    price: 189,
    rating: 4.6,
    stars: "★★★★★",
    time: "19 min",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 29,
    name: "Momos",
    price: 149,
    rating: 4.8,
    stars: "★★★★★",
    time: "7 min",
    category: "Beverage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2-2Ofzn4Zwsuea2cuNo61z6avtnVm725DBaTmlCuQ&s=10",
  },
  {
    id: 30,
    name: "Fried Momos",
    price: 169,
    rating: 4.9,
    stars: "★★★★★",
    time: "8 min",
    category: "Beverage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWV9fHtPIJJ-UmC0RqZuS1C_clidf1IHZmhJOYuxFSg&s=10",
  },
];

export default function Fast() {
  const handleOrder = (food) => {
    alert(`${food.name} added to your order!`);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <p className="text-orange-500 font-semibold text-sm">
          100% VEGETARIAN
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          Fast Food
        </h1>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Delicious vegetarian burgers, pizzas, wraps, fries,
          momos and more.
        </p>
      </div>

      {/* Food Cards */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {fastFoodData.map((food) => (
          <div
            key={food.id}
            className="
              group
              bg-gray-900
              border border-gray-800
              rounded-2xl
              overflow-hidden
              hover:border-orange-500
              hover:-translate-y-1
              hover:shadow-2xl
              hover:shadow-orange-500/10
              transition-all
              duration-300
            "
          >
            {/* Dish Image */}
            <div className="relative h-56 overflow-hidden bg-gray-800">

              <img
                src={food.image}
                alt={food.name}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              />

              {/* Category */}
              <span
                className="
                  absolute
                  top-4
                  left-4
                  bg-black/75
                  backdrop-blur-sm
                  text-orange-400
                  text-xs
                  font-semibold
                  px-3
                  py-1.5
                  rounded-full
                "
              >
                {food.category}
              </span>
            </div>

            {/* Details */}
            <div className="p-5">

              <h2 className="text-xl font-bold group-hover:text-orange-400 transition">
                {food.name}
              </h2>

              <div className="flex items-center justify-between mt-3">

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">
                    {food.stars}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {food.rating}
                  </span>
                </div>

                <span className="text-gray-400 text-sm">
                  ⏱ {food.time}
                </span>
              </div>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">

                <div>
                  <p className="text-gray-500 text-xs">
                    Price
                  </p>

                  <p className="text-2xl font-bold">
                    ₹{food.price}
                  </p>
                </div>

                <button
                  onClick={() => handleOrder(food)}
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-black
                    font-bold
                    px-5
                    py-2.5
                    rounded-xl
                    hover:scale-105
                    active:scale-95
                    transition-all
                  "
                >
                  Order Now
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
