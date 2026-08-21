import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    onSearch(search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full"
    >
      <div
        className="w-full flex items-center
                   bg-gray-900 border border-gray-700
                   rounded-xl p-2
                   focus-within:border-orange-500
                   transition"
      >

        {/* Search Icon */}
        <div className="px-4 text-gray-400 text-xl">
          🔍
        </div>

        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for meals, recipes or cuisines..."
          className="flex-1 bg-transparent outline-none
                     text-white placeholder-gray-500
                     px-2 py-3"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600
                     text-white font-semibold
                     px-7 py-3 rounded-lg
                     transition"
        >
          Search
        </button>

      </div>
    </form>
  );
}
