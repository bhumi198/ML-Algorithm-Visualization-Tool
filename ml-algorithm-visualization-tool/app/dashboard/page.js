import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="p-6 flex-1">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-4">
            Welcome to Machine Learning Visualization Tool
          </p>
        </main>
      </div>
    </div>
  );
}
