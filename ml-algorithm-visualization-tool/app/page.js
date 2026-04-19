import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Machine Learning
                  </span>
                  <br />
                  <span className="text-gray-100">Visualization Tool</span>
                </h1>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Learn machine learning step-by-step through interactive visualization. Upload datasets, preprocess data, train models, and evaluate results all in one powerful platform.
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="/dashboard"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Go to Dashboard
                </a>
                <a
                  href="/register"
                  className="px-8 py-3 rounded-lg border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:bg-opacity-10 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">📊</div>
                <h3 className="text-white font-semibold mb-2">Data Visualization</h3>
                <p className="text-gray-400 text-sm">Interactive charts and graphs to understand your data</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">🤖</div>
                <h3 className="text-white font-semibold mb-2">Model Training</h3>
                <p className="text-gray-400 text-sm">Train and evaluate ML models with ease</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold">⚙️</div>
                <h3 className="text-white font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-400 text-sm">Fast data processing and instant results</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to explore ML?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Create an account or login to start visualizing machine learning algorithms</p>
            <div className="flex gap-4 justify-center">
              <a
                href="/register"
                className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all"
              >
                Register
              </a>
              <a
                href="/login"
                className="px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
