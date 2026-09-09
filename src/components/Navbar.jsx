import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              🍴
            </div>

            <h1 className="text-2xl font-bold">
              Meal<span className="text-orange-500">Box</span>
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to ="/Home"
              href="#"
              className="text-orange-500 font-medium"
            >
              Home
            </Link>

            <Link
              to="/Recipes"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Recipes
            </Link>

            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Categories
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              About
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/Login"className="px-5 py-2.5 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition">
            Join MealBox 
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}
