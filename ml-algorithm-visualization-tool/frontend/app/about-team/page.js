import Navbar from "../components/navbar";

export default function AboutTeamPage() {
  return (
    <div>
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          About Development Team
        </h1>

        <p>
          Fr. C. Rodrigues Institute of Technology
        </p>

        <p>
          Vashi, Navi Mumbai
        </p>

        <p>
          Department of Computer Engineering
        </p>

        <p>
          Subject: Full Stack Development Laboratory
        </p>

        <br />

        <h2 className="text-xl font-bold">
          Team Name: ML Innovators
        </h2>

        <p>Member 1 – Roll No.</p>
        <p>Member 2 – Roll No.</p>
        <p>Member 3 – Roll No.</p>
        <p>Member 4 – Roll No.</p>
        <p>Member 5 – Roll No.</p>
        <p>Member 6 – Roll No.</p>
      </div>
    </div>
  );
}
