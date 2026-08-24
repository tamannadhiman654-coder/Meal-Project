import React from "react";

export default function Asian() {
  const asianFoods = [
    {
      name: "Ramen",
      category: "Japanese",
      price: 249,
      time: "20 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      description: "Warm Japanese noodles served with vegetables and flavorful broth.",
    },
    {
      name: "Sushi Platter",
      category: "Japanese",
      price: 499,
      time: "35 min",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      description: "Fresh sushi rolls prepared with rice, vegetables and delicious fillings.",
    },
    {
      name: "Chicken Teriyaki",
      category: "Japanese",
      price: 349,
      time: "25 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      description: "Juicy chicken glazed with sweet and savory teriyaki sauce.",
    },
    {
      name: "Chicken Katsu",
      category: "Japanese",
      price: 329,
      time: "30 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      description: "Crispy Japanese-style chicken cutlet served with savory sauce.",
    },
    {
      name: "Gyoza",
      category: "Japanese",
      price: 199,
      time: "15 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      description: "Golden Japanese dumplings filled with vegetables and flavorful filling.",
    },
    {
      name: "Tempura",
      category: "Japanese",
      price: 299,
      time: "25 min",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=800&q=80",
      description: "Light and crispy battered vegetables and seafood.",
    },
    {
      name: "Pad Thai",
      category: "Thai",
      price: 279,
      time: "20 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80",
      description: "Classic Thai noodles tossed with vegetables and tangy sauce.",
    },
    {
      name: "Thai Green Curry",
      category: "Thai",
      price: 329,
      time: "30 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
      description: "Creamy Thai green curry packed with herbs and vegetables.",
    },
    {
      name: "Thai Red Curry",
      category: "Thai",
      price: 329,
      time: "30 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
      description: "Spicy and creamy red curry with authentic Thai flavors.",
    },
    {
      name: "Tom Yum Soup",
      category: "Thai",
      price: 229,
      time: "20 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      description: "Hot and sour Thai soup with herbs and aromatic spices.",
    },
    {
      name: "Spring Rolls",
      category: "Chinese",
      price: 179,
      time: "15 min",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1548507200-4c9d5d1d9c2b?auto=format&fit=crop&w=800&q=80",
      description: "Crispy rolls filled with fresh vegetables and Asian spices.",
    },
    {
      name: "Chicken Manchurian",
      category: "Chinese",
      price: 299,
      time: "25 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Crispy chicken tossed in a spicy and tangy Manchurian sauce.",
    },
    {
      name: "Chow Mein",
      category: "Chinese",
      price: 249,
      time: "20 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Stir-fried noodles with vegetables and delicious Asian sauces.",
    },
    {
      name: "Fried Rice",
      category: "Chinese",
      price: 219,
      time: "18 min",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Fragrant fried rice cooked with vegetables and Asian seasonings.",
    },
    {
      name: "Dim Sum",
      category: "Chinese",
      price: 269,
      time: "25 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      description: "Soft and delicious steamed dumplings with flavorful filling.",
    },
    {
      name: "Kung Pao Chicken",
      category: "Chinese",
      price: 349,
      time: "30 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
      description: "Spicy chicken stir-fried with peanuts and vegetables.",
    },
    {
      name: "Sweet & Sour Chicken",
      category: "Chinese",
      price: 329,
      time: "25 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Crispy chicken coated in a sweet and tangy sauce.",
    },
    {
      name: "Mapo Tofu",
      category: "Chinese",
      price: 279,
      time: "25 min",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      description: "Soft tofu cooked in a spicy Sichuan-style sauce.",
    },
    {
      name: "Bibimbap",
      category: "Korean",
      price: 349,
      time: "25 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80",
      description: "Korean rice bowl topped with vegetables, egg and spicy sauce.",
    },
    {
      name: "Korean Fried Chicken",
      category: "Korean",
      price: 399,
      time: "30 min",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
      description: "Crispy fried chicken coated in a sweet and spicy Korean glaze.",
    },
    {
      name: "Kimchi Fried Rice",
      category: "Korean",
      price: 269,
      time: "20 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Spicy fried rice prepared with Korean kimchi and vegetables.",
    },
    {
      name: "Japchae",
      category: "Korean",
      price: 299,
      time: "25 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
      description: "Korean glass noodles stir-fried with vegetables and sesame.",
    },
    {
      name: "Miso Ramen",
      category: "Japanese",
      price: 299,
      time: "25 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      description: "Rich miso broth with noodles, vegetables and Japanese toppings.",
    },
    {
      name: "Soba Noodles",
      category: "Japanese",
      price: 249,
      time: "20 min",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80",
      description: "Healthy Japanese buckwheat noodles served with fresh toppings.",
    },
    {
      name: "Teriyaki Rice Bowl",
      category: "Japanese",
      price: 319,
      time: "25 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      description: "Steamed rice topped with teriyaki chicken and fresh vegetables.",
    },
    {
      name: "Mongolian Chicken",
      category: "Asian",
      price: 329,
      time: "25 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
      description: "Tender chicken cooked in a rich sweet and savory Asian sauce.",
    },
    {
      name: "Singapore Noodles",
      category: "Singaporean",
      price: 279,
      time: "20 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Flavorful rice noodles tossed with vegetables and aromatic spices.",
    },
    {
      name: "Hakka Noodles",
      category: "Indo-Chinese",
      price: 229,
      time: "18 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Classic stir-fried noodles with crunchy vegetables and sauces.",
    },
    {
      name: "Chilli Paneer",
      category: "Indo-Chinese",
      price: 289,
      time: "22 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
      description: "Crispy paneer tossed with peppers in a spicy Asian sauce.",
    },
    {
      name: "Veg Manchurian",
      category: "Indo-Chinese",
      price: 249,
      time: "25 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1548507200-4c9d5d1d9c2b?auto=format&fit=crop&w=800&q=80",
      description: "Crispy vegetable balls tossed in a flavorful Manchurian sauce.",
    },
    {
      name: "Schezwan Noodles",
      category: "Indo-Chinese",
      price: 259,
      time: "20 min",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      description: "Spicy noodles made with bold Schezwan sauce and vegetables.",
    },
    {
      name: "Thai Basil Chicken",
      category: "Thai",
      price: 349,
      time: "25 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
      description: "Tender chicken stir-fried with Thai basil and aromatic spices.",
    },
    {
      name: "Mango Sticky Rice",
      category: "Thai Dessert",
      price: 199,
      time: "15 min",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
      description: "Sweet sticky rice served with fresh mango and creamy coconut.",
    },
    {
      name: "Korean Tteokbokki",
      category: "Korean",
      price: 249,
      time: "20 min",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80",
      description: "Soft rice cakes cooked in a spicy and sweet Korean sauce.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Explore Asian Cuisine
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Asian <span className="text-orange-500">Food</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover delicious dishes from Japan, China, Korea,
            Thailand and other Asian cuisines.
          </p>

        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {asianFoods.map((food) => (

            <div
              key={food.name}
              className="
                group
                bg-gray-900
                border border-gray-800
                rounded-2xl
                overflow-hidden
                hover:border-orange-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <div className="h-56 overflow-hidden">

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

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Category + Rating */}
                <div className="flex justify-between items-center">

                  <span className="text-orange-500 text-sm font-medium">
                    {food.category}
                  </span>

                  <span className="text-yellow-400 text-sm">
                    ★ {food.rating}
                  </span>

                </div>

                {/* Name */}
                <h2 className="text-xl font-bold mt-2">
                  {food.name}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {food.description}
                </p>

                {/* Time + Price */}
                <div className="flex justify-between items-center mt-4">

                  <span className="text-gray-400 text-sm">
                    ⏱️ {food.time}
                  </span>

                  <span className="text-white text-xl font-bold">
                    ₹{food.price}
                  </span>

                </div>

                {/* Order Button */}
                <button
                  className="
                    w-full
                    mt-5
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    py-3
                    rounded-xl
                    transition
                    duration-200
                  "
                >
                  🛒 Order Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}