import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Cloud,
  Wrench,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages & CS Fundamentals",
    icon: Cpu,
    description: "Strong foundation in programming and core computer science concepts.",
    skills: [
      { name: "C++", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "DSA", icon: Cpu },
      { name: "OOPS", icon: Cpu },
      { name: "Computer Networks", icon: Cpu },
    ],
    tools: ["VS Code", "GDB", "Online Judges", "Chrome DevTools"],
  },
  {
    title: "Frontend Engineering",
    icon: Monitor,
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React", icon: Monitor },
      { name: "Next.js", icon: Monitor },
      { name: "JavaScript (ES6+)", icon: Code2 },
      { name: "Tailwind CSS", icon: Monitor },
      { name: "Bootstrap", icon: Monitor },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Code2 },
      { name: "Framer Motion", icon: Monitor },
    ],
    tools: ["Vite", "Figma", "Chrome DevTools"],
  },
  {
    title: "Backend Engineering",
    icon: Server,
    description: "Designing scalable APIs, authentication systems, and data-driven services.",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "REST APIs", icon: Server },
      { name: "JWT Authentication", icon: Server },
      { name: "MongoDB", icon: Server },
      { name: "MySQL", icon: Server },
      { name: "PostgreSQL", icon: Server },
      { name: "Google OAuth", icon: Server },
    ],
    tools: ["Postman", "Mongoose", "Thunder Client"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Deploying, automating, and maintaining production-ready applications.",
    skills: [
      { name: "AWS (EC2, S3)", icon: Cloud },
      { name: "Docker (Basics)", icon: Cloud },
      { name: "Nginx (Basics)", icon: Cloud },
      { name: "CI/CD (GitHub Actions)", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Netlify", icon: Cloud },
    ],
    tools: ["GitHub Actions", "PM2", "Linux CLI"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    description: "Tools I use daily to stay productive and maintain clean codebases.",
    skills: [
      { name: "Git & GitHub", icon: Wrench },
      { name: "VS Code", icon: Wrench },
      { name: "Postman", icon: Wrench },
      { name: "Debugging", icon: Wrench },
      { name: "Version Control", icon: Wrench },
    ],
    tools: ["ESLint", "Prettier", "GitHub Copilot"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills & <span className="text-blue-500">Stack</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl">
            Technologies and tools I use to design, build, deploy, and maintain
            real-world web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#2a2a2a] p-6 rounded-xl border border-white/10 hover:border-blue-500/40 transition"
              >
                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                  <CategoryIcon className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-black/40 rounded-full border border-white/10 hover:border-blue-500/40 hover:text-blue-400 transition"
                      >
                        <SkillIcon className="w-4 h-4" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>

                {/* Tools */}
                <div className="opacity-0 group-hover:opacity-100 transition text-sm text-gray-400">
                  <span className="font-medium text-gray-300">
                    Tools:
                  </span>{" "}
                  {category.tools.join(", ")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
