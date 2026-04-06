import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md 
                bg-gradient-to-r from-gray-900/80 via-blue-900/70 to-gray-900/80 
                border-b border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            className="text-lg font-medium tracking-wide 
               bg-gradient-to-r from-blue-400 to-purple-500 
               bg-clip-text text-transparent"
          >
            Build • Create • Deploy
          </h1>

          {/* Menu */}
          <ul className="flex gap-10 text-sm font-medium text-gray-300">
            <li
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer hover:text-white transition"
            >
              Home
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Projects
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Skills
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("education")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Education
            </li>

            <li
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-white transition"
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 relative max-w-6xl mx-auto text-center py-28 px-6">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full absolute top-[-100px] left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I'm{" "}
          <span
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                   bg-clip-text text-transparent"
          >
            Muskan
          </span>{" "}
          👋
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          MERN Stack Developer crafting modern, scalable and user-friendly web
          experiences with clean UI & powerful backend.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 flex-wrap">
          {/* Primary Button */}
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            View Projects 🚀
          </button>

          {/* Secondary Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 
                 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Download Resume 📄
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card */}
          {[
            {
              title: "Airbnb Clone (MERN)",
              desc: "Full-stack property listing platform with authentication and MVC architecture.",
              github:
                "https://github.com/Muskankashyap09/airbnb_clone_project.git",
              live: "https://airbnb-clone-project-qm7d.onrender.com",
            },
            {
              title: "React Product Store",
              desc: "Responsive store with API integration and modern UI.",
              github:
                "https://github.com/Muskankashyap09/react_product_store.git",
            },
            {
              title: "Myntra Clone",
              desc: "E-commerce UI with login and signup functionality.",
              github: "https://github.com/Muskankashyap09/Myntra-Clone-.git",
            },
            {
              title: "Beauty Salon Website",
              desc: "Responsive website with services and pricing UI.",
              github:
                "https://github.com/Muskankashyap09/Beauty-salon-website.git",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
            >
              {/* Glow (NOW DYNAMIC 🔥) */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-20 blur-xl group-hover:opacity-40 transition`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-900 border border-gray-800 p-6 rounded-2xl backdrop-blur-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-bold mb-20 text-center tracking-tight">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Frontend",
              color: "from-blue-500 to-cyan-400",
              skills: [
                "🌐 HTML",
                "🎨 CSS",
                "🟨 JavaScript",
                "⚛️ React",
                "💨 Tailwind",
              ],
            },
            {
              title: "Backend",
              color: "from-purple-500 to-pink-500",
              skills: ["🟢 Node.js", "🚀 Express", "🔗 REST API"],
            },
            {
              title: "Database",
              color: "from-green-400 to-emerald-500",
              skills: ["🍃 MongoDB", "🗄️ MySQL"],
            },
            {
              title: "Tools",
              color: "from-yellow-400 to-orange-500",
              skills: ["🐙 GitHub", "🔧 Git", "💻 VS Code"],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br hover:scale-[1.03] transition duration-300"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.color} opacity-20 blur-xl`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm bg-gray-800/70 border border-gray-700 
                           rounded-full hover:bg-gray-700 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]
                           transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education + Training Section */}
      <section id="education" className="max-w-6xl mx-auto px-6 pb-24">
        {/* ===== EDUCATION ===== */}
        <h2 className="text-5xl font-bold text-center mb-16 tracking-tight">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-xl"></div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-gray-400 text-sm">
                  Universal Group of Institutions
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-500 text-sm">2022 – 2026</p>
                <p className="text-blue-400 text-sm mt-1">CGPA: 8.0</p>
              </div>
            </div>
          </motion.div>

          {/* Class 12 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl"></div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Class XII (CBSE)</h3>
                <p className="text-gray-400 text-sm">
                  St. Attri Senior Secondary School
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-500 text-sm">2020 – 2022</p>
                <p className="text-blue-400 text-sm mt-1">73.2%</p>
              </div>
            </div>
          </motion.div>

          {/* Class 10 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-xl"></div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Class X (CBSE)</h3>
                <p className="text-gray-400 text-sm">
                  God Blessing Public School
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-500 text-sm">2018 – 2020</p>
                <p className="text-blue-400 text-sm mt-1">78.2%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== TRAINING ===== */}
        <h2 className="text-5xl font-bold text-center mb-16 tracking-tight">
          Training
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend Training */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 opacity-20 blur-xl"></div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">
                Frontend Development Training
              </h3>
              <p className="text-gray-400 text-sm">
                Excellence Technology, Mohali
              </p>
              <p className="text-gray-500 text-sm mt-2">
                HTML, CSS, JavaScript, React
              </p>
            </div>
          </motion.div>

          {/* Backend Training */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 blur-xl"></div>

            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">
                Backend Development Training
              </h3>
              <p className="text-gray-400 text-sm">KnowledgeGate</p>
              <p className="text-gray-500 text-sm mt-2">
                Node.js, Express.js, REST APIs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-16">Let's Connect</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Email",
              icon: "📩",
              value: "muskankashyap9779@gmail.com",
              link: "mailto:muskankashyap9779@gmail.com",
              btn: "Send Email →",
              color: "from-blue-500 to-purple-500",
            },
            {
              title: "GitHub",
              icon: "💻",
              value: "github.com/Muskankashyap09",
              link: "https://github.com/Muskankashyap09",
              btn: "View Profile →",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "LinkedIn",
              icon: "🔗",
              value: "linkedin.com/in/Kashyapmuskan",
              link: "https://www.linkedin.com/in/Kashyapmuskan",
              btn: "Connect →",
              color: "from-green-400 to-blue-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group p-[1px] rounded-2xl hover:scale-[1.03] transition duration-300"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-900 border border-gray-800 p-6 rounded-2xl backdrop-blur-xl text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.value}</p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  {item.btn}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
      text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Let's Work Together 🚀
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
