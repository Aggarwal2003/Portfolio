import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl">
            A quick snapshot of who I am, what I build, and how I approach engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              I'm <span className="text-blue-500">Atharv Aggarwal</span>
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a Full Stack Developer who enjoys building scalable, real-world web
              applications using the MERN stack and modern cloud tools. I focus on
              writing clean, maintainable code and creating interfaces that feel fast,
              intuitive, and reliable.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              My learning path is driven by real projects — from designing REST APIs
              and authentication systems to deploying applications on cloud platforms.
              I’m actively improving my skills in backend architecture, DevOps
              fundamentals, and system design to prepare for production-level
              engineering roles.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Let's Talk
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-500 rounded-lg font-medium transition transform hover:-translate-y-1 hover:bg-blue-500/20"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Stats + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Built", value: "5+" },
                { label: "Primary Stack", value: "MERN" },
                { label: "Learning Focus", value: "Cloud & DevOps" },
                { label: "Status", value: "Open to Opportunities" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#2a2a2a] p-5 rounded-xl border border-white/10 hover:border-blue-500/40 transition"
                >
                  <h4 className="text-2xl font-bold text-blue-500">
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills Chips */}
            <div>
              <h4 className="text-lg font-semibold mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "MySQL",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "AWS (EC2, S3)",
                  "Git & GitHub",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-white/10 hover:border-blue-500/40 hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
