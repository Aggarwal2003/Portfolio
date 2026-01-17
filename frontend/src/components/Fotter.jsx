import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Let’s Build Something <span className="text-blue-500">Impactful</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Open to internships, full-time roles, and collaborative projects in
            Full Stack, MERN, and Cloud Engineering.
          </p>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">
              Atharv <span className="text-blue-500">Aggarwal</span>
            </h4>
            <p className="text-gray-400 text-sm mt-2">
              Full Stack Developer • MERN • Cloud Engineering
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#journey" className="hover:text-blue-400 transition">Growth</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/Aggarwal2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#2a2a2a] hover:bg-blue-500/20 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aggarwal-atharv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#2a2a2a] hover:bg-blue-500/20 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=atharvaggarwal606@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-[#2a2a2a] hover:bg-blue-500/20 transition"
            >
            <Mail className="w-5 h-5" />
            </a>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Atharv Aggarwal. Built with React, Tailwind & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
