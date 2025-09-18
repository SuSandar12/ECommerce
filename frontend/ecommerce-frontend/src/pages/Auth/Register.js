import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      country: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="flex justify-center py-10 bg-gray-50 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Create Account
        </h2>
        <hr className="my-4 border-gray-300" />
        <div className="grid grid-cols-2 gap-6">
          {/* Username */}
          <label className="text-right pr-4 font-medium flex items-center">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />

          {/* Email */}
          <label className="text-right pr-4 font-medium flex items-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />

          {/* Password */}
          <label className="text-right pr-4 font-medium flex items-center">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />

          {/* Confirm Password */}
          <label className="text-right pr-4 font-medium flex items-center">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />
        </div>
        <div className="flex items-center mt-6 mb-4">
          <h3 className="text-lg font-semibold text-green-600 mr-4">
            Delivery Information
          </h3>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <label className="text-right pr-4 font-medium flex items-center">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
          />

          {/* Address */}
          <label className="text-right pr-4 font-medium flex items-center">
            Default Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
          />

          {/* Country */}
          <label className="text-right pr-4 font-medium flex items-center">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
          />
        </div>

        <div className="flex mt-8 text-center justify-center gap-4">
          <button
            type="reset"
            onClick={handleReset}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
