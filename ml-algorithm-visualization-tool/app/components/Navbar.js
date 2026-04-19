export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
            ML
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ML Visualizer
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <a href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            Dashboard
          </a>
          <a href="/about-team" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            About Team
          </a>
          <a href="/login" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
