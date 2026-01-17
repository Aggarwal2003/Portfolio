import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Growth", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  // Scroll Progress + Hide-on-scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (currentScroll / docHeight) * 100;
      setScrollProgress(progress);

      // Hide on scroll down, show on scroll up
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScroll;

      // Active link tracking
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(link.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed w-full z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        bg-black/70 backdrop-blur-2xl border-b border-white/10`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-8">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-3xl font-bold text-white group"
          >
            <span>Atharv</span>
            <span className="text-blue-400">Aggarwal</span>
           
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition-all duration-300 group
                  ${
                    active === link.name
                      ? "text-blue-300"
                      : "text-white/80 hover:text-blue-300"
                  }
                `}
              >
                <span className="tracking-wide">{link.name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
                    ${
                      active === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-2xl rounded-lg p-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
            ${showMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="m-4 bg-[#2a2a2a]/80 backdrop-blur-xl rounded-2xl 
            p-6 flex flex-col space-y-6 border border-white/10 shadow-xl">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setShowMenu(false)}
                className={`relative transition-all duration-300 group
                  ${
                    active === link.name
                      ? "text-blue-400"
                      : "text-white/80 hover:text-blue-400"
                  }
                `}
              >
                <span className="text-lg">{link.name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
                    ${
                      active === link.name
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
