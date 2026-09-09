import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const pricePerItem = 4999;
  const shippingFee = 99;
  const subtotal = pricePerItem * quantity;
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order Placed Successfully!\n\nThank you, ${formData.fullName}.`
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Complete Your{' '}
            <span className="text-orange-500">Order</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Enter your details and choose your preferred payment method.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Left Section */}
            <div className="space-y-6 lg:col-span-2">

              {/* Customer Details */}
              <div className="rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-2xl sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                    1
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      Customer Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      Enter your delivery information
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Delivery Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House no., street, area..."
                      rows="3"
                      required
                      className="w-full resize-none rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* ZIP */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      ZIP / PIN Code
                    </label>

                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="000000"
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-2xl sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                    2
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      Product Quantity
                    </h2>

                    <p className="text-sm text-gray-500">
                      Select the number of items
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#0d0d0d] p-4">
                  <div>
                    <p className="font-semibold text-white">
                      Premium Product
                    </p>

                    <p className="mt-1 text-sm text-orange-500">
                      ₹{pricePerItem.toLocaleString('en-IN')} / item
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-[#1f1f1f] text-xl font-bold text-white transition hover:border-orange-500 hover:text-orange-500"
                    >
                      −
                    </button>

                    <span className="w-8 text-center text-lg font-bold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-xl font-bold text-black transition hover:bg-orange-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl border border-gray-800 bg-[#171717] p-5 shadow-2xl sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                    3
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      Payment Method
                    </h2>

                    <p className="text-sm text-gray-500">
                      Select your preferred payment option
                    </p>
                  </div>
                </div>

                <div className="space-y-3">

                  {/* COD */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                      paymentMethod === 'cod'
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 bg-[#0d0d0d] hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-orange-500"
                      />

                      <div>
                        <p className="font-semibold">
                          Cash on Delivery
                        </p>

                        <p className="text-xs text-gray-500">
                          Pay when your order arrives
                        </p>
                      </div>
                    </div>

                    <span className="text-orange-500">COD</span>
                  </label>

                  {/* UPI */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                      paymentMethod === 'upi'
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 bg-[#0d0d0d] hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-orange-500"
                      />

                      <div>
                        <p className="font-semibold">
                          UPI / Online Payment
                        </p>

                        <p className="text-xs text-gray-500">
                          Pay securely online
                        </p>
                      </div>
                    </div>

                    <span className="text-orange-500">UPI</span>
                  </label>

                  {/* Card */}
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                      paymentMethod === 'card'
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 bg-[#0d0d0d] hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-orange-500"
                      />

                      <div>
                        <p className="font-semibold">
                          Credit / Debit Card
                        </p>

                        <p className="text-xs text-gray-500">
                          Visa, Mastercard and more
                        </p>
                      </div>
                    </div>

                    <span className="text-orange-500">CARD</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-2xl">

                <h2 className="mb-6 text-2xl font-bold">
                  Order <span className="text-orange-500">Summary</span>
                </h2>

                {/* Product */}
                <div className="mb-5 rounded-xl border border-gray-800 bg-[#0d0d0d] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        Premium Product
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {quantity}
                      </p>
                    </div>

                    <p className="font-bold text-orange-500">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Price Details */}
                <div className="space-y-4 border-b border-gray-800 pb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Price
                    </span>

                    <span>
                      ₹{pricePerItem.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Quantity
                    </span>

                    <span>{quantity}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Shipping
                    </span>

                    <span>
                      ₹{shippingFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-5">
                  <span className="text-lg font-bold">
                    Total Amount
                  </span>

                  <span className="text-2xl font-extrabold text-orange-500">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Submit */}
              <Link to="/Place order">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-500 px-5 py-4 font-bold text-black shadow-lg shadow-orange-500/20 transition duration-200 hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.98]"
                >
                  Place Order
                </button>
              </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Your information is secure</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
