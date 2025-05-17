import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpageadmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${API}/auth/loginadmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Login response:", response.status, data);
      if (!response.ok) throw new Error(data.message || "Login failed");

      // เก็บ token แล้วไปหน้า Home
      localStorage.setItem("accessToken", data.token);
      navigate("/home");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    }
  };

  return (
    <div className="bg-[#e9f2f9] flex items-center justify-center min-h-screen">
      <div className="bg-[#f1f7f9] p-8 rounded-xl max-w-sm w-full shadow-lg relative">
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          …{/* (icon) */}
        </button>

        <h2 className="text-xl font-semibold mb-1">Admin Login</h2>
        <p className="text-xs text-gray-400 mb-6">
          Please enter your credentials to login
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-xs font-semibold mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-xs placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-xs font-semibold mb-1 block"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-xs placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpageadmin;
