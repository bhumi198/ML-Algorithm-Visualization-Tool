export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-700 p-6 fixed left-0 top-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Workflow Pipeline
          </h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Upload Dataset
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Preprocessing
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Train-Test Split
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Train Model
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Evaluation
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Tutorials</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
