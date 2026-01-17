import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-400">Atharv Aggarwal</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            <span className="typewriter">Full Stack Developer</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            I design and develop intelligent web applications powered by MERN,
            cloud infrastructure, and AI automation.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-lg font-medium transition transform hover:-translate-y-1 hover:bg-blue-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">

              {/* Neon Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-400/40 blur-sm animate-pulse"></div>

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-2xl opacity-40"></div>

              {/* Profile Image */}
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src={assets.profileImg}
                alt="Profile"
                className="
                  relative z-10
                  w-64 h-64 md:w-80 md:h-80
                  object-cover
                  rounded-full
                  
                  shadow-2xl
                "
              />
            </div>
          </div>


      </div>
    </motion.div>
  );
};

export default Hero;
