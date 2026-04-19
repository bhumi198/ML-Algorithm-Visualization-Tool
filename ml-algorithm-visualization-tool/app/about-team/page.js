import Navbar from "../components/Navbar";

export default function AboutTeamPage() {
  const teamMembers = [
    { id: 1, name: "Member 1", role: "Roll No.", color: "from-blue-500 to-cyan-500" },
    { id: 2, name: "Member 2", role: "Roll No.", color: "from-purple-500 to-pink-500" },
    { id: 3, name: "Member 3", role: "Roll No.", color: "from-green-500 to-emerald-500" },
    { id: 4, name: "Member 4", role: "Roll No.", color: "from-orange-500 to-yellow-500" },
    { id: 5, name: "Member 5", role: "Roll No.", color: "from-rose-500 to-pink-500" },
    { id: 6, name: "Member 6", role: "Roll No.", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About Our Team
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We are a dedicated team of computer engineering students passionate about machine learning and visualization. This project is part of our Full Stack Development Laboratory course.
            </p>
          </div>

          {/* Institution Info */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-12 mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Fr. C. Rodrigues Institute of Technology</h2>
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <p className="text-2xl font-bold">Vashi, Navi Mumbai</p>
                <p className="text-blue-100 text-sm mt-2">Location</p>
              </div>
              <div>
                <p className="text-2xl font-bold">Computer Engineering</p>
                <p className="text-blue-100 text-sm mt-2">Department</p>
              </div>
              <div>
                <p className="text-2xl font-bold">FSDL</p>
                <p className="text-blue-100 text-sm mt-2">Subject</p>
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">👥</div>
              <h2 className="text-2xl font-bold text-white">Team: ML Innovators</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team is dedicated to creating an innovative platform for machine learning visualization. We combine our expertise in full-stack development, data science, and UI/UX design to deliver an intuitive and powerful tool for learning machine learning concepts.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-slate-700 bg-opacity-50 rounded-lg border border-slate-600">
                <p className="text-blue-400 font-semibold mb-2">Our Mission</p>
                <p className="text-gray-300 text-sm">To make machine learning visualization accessible, interactive, and educational for everyone</p>
              </div>
              <div className="p-4 bg-slate-700 bg-opacity-50 rounded-lg border border-slate-600">
                <p className="text-cyan-400 font-semibold mb-2">Our Vision</p>
                <p className="text-gray-300 text-sm">To build the most intuitive ML learning platform with cutting-edge visualization techniques</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Team Members</h2>
              <p className="text-gray-400">Meet the brilliant minds behind ML Visualizer</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/20 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-lg mb-6 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform`}>
                    {member.id}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                  <div className="flex gap-2">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">LinkedIn</a>
                    <span className="text-gray-600">•</span>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-10 mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Technologies We Use</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "TailwindCSS", icon: "🎨" },
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "FastAPI", icon: "⚡" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Matplotlib", icon: "📊" },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="bg-slate-700 bg-opacity-50 border border-slate-600 rounded-lg p-4 text-center hover:border-blue-500 transition-all group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{tech.icon}</div>
                  <p className="text-gray-300 font-medium text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-6">Have questions? We'd love to hear from you!</p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
