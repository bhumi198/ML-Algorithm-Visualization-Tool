export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        ML Visualizer
      </h1>

      <div className="space-x-4">
        <a href="/dashboard">Dashboard</a>
        <a href="/about-team">About Team</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
