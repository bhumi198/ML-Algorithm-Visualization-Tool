export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-100 p-4">
      <h2 className="font-bold mb-4">
        Workflow
      </h2>

      <ul className="space-y-3">
        <li>Upload Dataset</li>
        <li>Preprocessing</li>
        <li>Train-Test Split</li>
        <li>Train Model</li>
        <li>Evaluation</li>
      </ul>
    </div>
  );
}
