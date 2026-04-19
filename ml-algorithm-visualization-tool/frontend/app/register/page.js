"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          fullName,
          email,
          password
        }
      );

      alert("Registration Successful");
      window.location.href = "/login";

    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Register
      </h1>

      <input
        className="border p-2 block mb-3"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="border p-2 block mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 block mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="bg-green-600 text-white px-4 py-2"
      >
        Register
      </button>
    </div>
  );
}
