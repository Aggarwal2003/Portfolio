import { motion } from "framer-motion";
import { BookOpen, Code2, Server, Cloud, Shield, Rocket } from "lucide-react";

const timeline = [
  {
    title: "Programming & CS Foundations",
    period: "Mid 2024",
    description:
      "Strengthened core programming skills in C++, JavaScript, and Object-Oriented Programming. Focused on Data Structures & Algorithms using C++ to build problem-solving ability and understand performance trade-offs in software systems.",
    icon: BookOpen,
  },
  {
    title: "Frontend Development & UI Engineering",
    period: "Late 2024",
    description:
      "Built responsive and accessible user interfaces using HTML, CSS, and React. Learned component-based architecture, state management, and modern styling with Tailwind CSS for scalable frontend development.",
    icon: Code2,
  },
  {
    title: "Backend Systems & API Design",
    period: "Early 2025",
    description:
      "Designed modular REST APIs using Node.js and Express. Implemented JWT-based authentication, input validation, and structured database models with MongoDB, MySQL, and PostgreSQL for reliable backend services.",
    icon: Server,
  },
  {
    title: "Full Stack Projects & Deployment",
    period: "Aug 2025 – Sep 2025",
    description:
      "Built and deployed the Smart Tasks productivity platform. Focused on clean backend architecture, secure authentication flows, and responsive UI. Deployed frontend and tested APIs using Postman.",
    icon: Cloud,
  },
  {
    title: "E-Commerce Systems & Admin Dashboards",
    period: "Oct 2025 – Nov 2025",
    description:
      "Developed the Stylo / Clothify e-commerce platform with role-based access control, admin dashboards, and complete cart-to-checkout flow. Emphasized scalable data models and production-ready frontend deployment.",
    icon: Shield,
  },
  {
    title: "Cloud, DevOps & Engineering Growth",
    period: "Present",
    description:
      "Exploring AWS EC2 deployment, CI/CD pipelines with GitHub Actions, Docker basics, and server configuration with Nginx. Actively seeking internships and entry-level roles in Full Stack and Cloud Engineering.",
    icon: Rocket,
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-24 bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-blue-500">Growth</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl">
            A timeline of how I’ve grown from programming fundamentals to building,
            deploying, and securing full-stack applications in real-world environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-[#2a2a2a] border border-blue-500/40 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>

                {/* Card */}
                <div className="bg-[#2a2a2a] p-6 rounded-xl border border-white/10 hover:border-blue-500/40 transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
