import React, { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/Auth/login", { username, password });
      login(res.data.token, { username });
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex min-h-screen justify-center static bg-gray-100">
      <div className="w-full max-w-md absolute rounded-2xl bg-white p-8 shadow-lg  mt-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-grey-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-grey-600">
              User Name :{" "}
            </label>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-grey-600">
              Password :{" "}
            </label>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <button type="submit"
          className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700">Login</button>
        </form>
      </div>
    </div>
  );
}
