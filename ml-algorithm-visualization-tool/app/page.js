import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10">

        <h1 className="text-5xl font-bold mb-6">
          Machine Learning Visualization Tool
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          Learn machine learning step-by-step through interactive visualization.
          Upload datasets, preprocess data, train models, and evaluate results
          all in one place.
        </p>

        <div className="flex gap-6">

          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Login
          </a>

          <a
            href="/register"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Register
          </a>

          <a
            href="/dashboard"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Go to Dashboard
          </a>

        </div>

      </main>
    </div>
  );
}
