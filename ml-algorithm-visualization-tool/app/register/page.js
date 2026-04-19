"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

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
      setError(error.response?.data?.message || "Registration Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">ML</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join Us</h1>
          <p className="text-gray-400">Create your ML Visualizer account today</p>
        </div>

        {/* Registration Form Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          {error && (
            <div className="mb-6 p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 bg-opacity-50 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 bg-opacity-50 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 bg-opacity-50 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 bg-opacity-50 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Terms & Conditions */}
            <label className="flex items-start gap-3 text-gray-300 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded mt-1" />
              <span className="text-sm">I agree to the Terms of Service and Privacy Policy</span>
            </label>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-600 to-cyan-500 text-white font-semibold hover:from-green-700 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-900 text-gray-400">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <a
            href="/login"
            className="w-full py-3 rounded-lg border border-slate-600 text-center text-green-400 font-semibold hover:bg-slate-700 hover:bg-opacity-50 transition-all"
          >
            Sign In
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          By creating an account, you agree to our Terms
        </p>
      </div>
    </div>
  );
}
