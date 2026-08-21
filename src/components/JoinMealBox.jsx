import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function JoinMealBox() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    const nameRegex = /^[A-Z][a-zA-Z ]*$/;

    // Phone validation - exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;

    // Lowercase Gmail validation
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;

    if (!nameRegex.test(name)) {
      alert("It should be compulsory to write first letter of name in capital letter. Name....🚫");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert(" 10 digits are required.Mobile....🚫");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter lowercase email.Gmail....🚫");
      return;
    }

    // Everything valid
    navigate("/get-started");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          <div
            className="inline-flex items-center justify-center w-16 h-16
                       bg-orange-500 rounded-2xl text-3xl mb-4"
          >
            🍽️
          </div>

          <h1 className="text-3xl font-bold">
            Join Meal<span className="text-orange-500">Box</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Let's get to know you before we find your perfect meals.
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-5">

              <label className="block text-gray-300 text-sm mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name...."
                className="w-full bg-black border border-gray-700
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-600
                           focus:outline-none focus:border-orange-500
                           transition"
              />

            </div>

            {/* Phone */}
            <div className="mb-5">

              <label className="block text-gray-300 text-sm mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value;

                  // Sirf numbers allow karo
                  if (/^[0-9]*$/.test(value)) {
                    setPhone(value);
                  }
                }}
                placeholder="phone......"
                className="w-full bg-black border border-gray-700
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-600
                           focus:outline-none focus:border-orange-500
                           transition"
              />

            </div>

            {/* Email */}
            <div className="mb-6">

              <label className="block text-gray-300 text-sm mb-2">
                Gmail Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="gmail....  "
                className="w-full bg-black border border-gray-700
                           rounded-lg px-4 py-3 text-white
                           placeholder-gray-600
                           focus:outline-none focus:border-orange-500
                           transition"
              />

            </div>

            {/* Submit */}
            <Link to="/join">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600
              text-white font-semibold py-3.5 rounded-lg
              transition duration-200"
              >
              Join MealBox →
            </button>
              </Link>

          </form>

          <p className="text-gray-600 text-xs text-center mt-5">
            Your information is safe with us.
          </p>

        </div>

      </div>

    </div>
  );
}
