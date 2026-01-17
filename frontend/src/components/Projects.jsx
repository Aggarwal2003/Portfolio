import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Smart Tasks",
    subtitle: "MERN Productivity App",
    tech: ["MongoDB", "Express", "Node.js", "JWT", "REST API"],
    live: "https://smarttasks-hub.netlify.app/",
    code: "https://github.com/Aggarwal2003/stylo-ecommerce",
    accent: "from-blue-500/30 to-pink-500/30",
    preview: "/previews/smarttask.png",
  },
  {
    title: "Stylo / Clothify",
    subtitle: "MERN E-Commerce Platform",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Admin Panel"],
    live: "https://stylo-clothify.vercel.app/",
    code: "https://github.com/Aggarwal2003/smarttasks-backend",
    accent: "from-blue-500/30 to-blue-500/30",
    preview: "/previews/clothify.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl">
            A small selection of products I’ve designed, built, and shipped.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative bg-[#2a2a2a]/70 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10 transition
                         hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Glow Accent */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Preview Area */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                {project.preview ? (
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/40">
                    <Layers className="w-12 h-12 text-blue-400" />
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                                bg-black/70 backdrop-blur-md
                                border border-blue-500
                                transition transform
                                hover:-translate-y-1 hover:bg-black/90 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                    <Github className="w-4 h-4" />
                    Code
                    </a>

                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-blue-400 text-sm mb-4">
                  {project.subtitle}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-black/40 rounded-full border border-white/10 transition
                                 hover:border-blue-500/40 hover:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
