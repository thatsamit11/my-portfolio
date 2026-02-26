import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">
            Amit Thakur
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/80 text-center py-4 space-y-4">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
      >
        <div className="text-center max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-cyan-400">Amit Thakur</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl text-gray-300">
            Full Stack MERN Developer
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Entry-level Full Stack Developer with 6 months of industrial training in MERN Stack development.
            Strong understanding of frontend, backend, REST APIs, JWT authentication and database integration.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6 bg-slate-900"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl">
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT Authentication",
            "Role-Based Access Control",
            "CRUD Operations",
            "Git & GitHub",
          ].map((skill, i) => (
            <div
              key={i}
              className="p-5 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-cyan-400 hover:scale-105 transition text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6 bg-black"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Featured Project
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 max-w-xl hover:border-cyan-400 transition text-center">
          <h3 className="text-xl font-bold mb-4">
            Jobly – Job Portal (MERN Stack)
          </h3>

          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Full-stack job portal with JWT authentication, recruiter & candidate dashboards,
            CRUD operations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/thatsamit11"
              target="_blank"
              className="px-4 py-2 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub Code
            </a>

            <a
              href="https://job-frontend-6i8k.onrender.com"
              target="_blank"
              className="px-4 py-2 bg-cyan-400 text-black rounded-full hover:scale-105 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 bg-slate-900 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <div className="space-y-4 text-gray-300 text-sm sm:text-base">
          <p>📞 9805769280</p>
          <p>📧 amitthakur91107@gmail.com</p>
          <p>
            💻{" "}
            <a
              href="https://github.com/thatsamit11"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              github.com/thatsamit11
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black border-t border-white/10 text-sm">
        © {new Date().getFullYear()} Amit Thakur | MERN Developer
      </footer>
    </div>
  );
}