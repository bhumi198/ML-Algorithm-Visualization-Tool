import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome to your Machine Learning Visualization Tool</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Total Projects</p>
                  <p className="text-3xl font-bold text-white mt-2">12</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center text-blue-400 text-xl">📊</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Models Trained</p>
                  <p className="text-3xl font-bold text-white mt-2">8</p>
                </div>
                <div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center text-cyan-400 text-xl">🤖</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Datasets</p>
                  <p className="text-3xl font-bold text-white mt-2">24</p>
                </div>
                <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center text-purple-400 text-xl">💾</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-green-500 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Accuracy (Avg)</p>
                  <p className="text-3xl font-bold text-white mt-2">92%</p>
                </div>
                <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center text-green-400 text-xl">✓</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Card - Recent Projects */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Projects</h2>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">View all →</a>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-700 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer border border-slate-600 hover:border-blue-500">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">P{i}</div>
                      <div>
                        <p className="text-white font-medium">ML Project {i}</p>
                        <p className="text-gray-400 text-sm">Last updated 2 hours ago</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 text-sm font-medium">92% Accuracy</p>
                      <p className="text-gray-400 text-xs">24 samples</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center gap-2">
                  <span>📤</span> Upload Dataset
                </button>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all flex items-center justify-center gap-2">
                  <span>🤖</span> Create Model
                </button>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-cyan-600 transition-all flex items-center justify-center gap-2">
                  <span>📊</span> Visualize Data
                </button>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all flex items-center justify-center gap-2">
                  <span>📈</span> View Results
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Model Performance */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Model Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Linear Regression</span>
                    <span className="text-blue-400 font-semibold">89%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Decision Tree</span>
                    <span className="text-cyan-400 font-semibold">94%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Random Forest</span>
                    <span className="text-purple-400 font-semibold">96%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '96%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Usage */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Resource Usage</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700 bg-opacity-30 rounded-lg border border-slate-600">
                  <span className="text-gray-300">CPU Usage</span>
                  <span className="text-blue-400 font-semibold">45%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700 bg-opacity-30 rounded-lg border border-slate-600">
                  <span className="text-gray-300">Memory</span>
                  <span className="text-green-400 font-semibold">62%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700 bg-opacity-30 rounded-lg border border-slate-600">
                  <span className="text-gray-300">Storage</span>
                  <span className="text-purple-400 font-semibold">28%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700 bg-opacity-30 rounded-lg border border-slate-600">
                  <span className="text-gray-300">API Calls</span>
                  <span className="text-cyan-400 font-semibold">1,234</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
