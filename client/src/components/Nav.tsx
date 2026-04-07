/**
 * DESIGN: Holographic Dark Nav
 * Glassmorphism dark nav with holographic gradient border on scroll
 * Syne font for name, Space Mono for links
 */

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Content", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(7,7,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.12)" : "none",
        boxShadow: scrolled ? "0 0 40px rgba(0,245,255,0.04)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Name */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="holo-text">CW</span>
          <span className="text-white/70 ml-2 font-light text-sm hidden sm:inline">Camryn Williams</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="label-mono text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/camrynwilliams/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative label-mono text-[#00f5ff] px-4 py-2 overflow-hidden group"
            style={{
              border: "1px solid rgba(0,245,255,0.4)",
            }}
          >
            <span className="relative z-10">LinkedIn ↗</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,95,255,0.15))",
              }}
            />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-8 flex flex-col gap-6"
          style={{
            background: "rgba(7,7,15,0.97)",
            borderTop: "1px solid rgba(0,245,255,0.1)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="label-mono text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/camrynwilliams/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono text-[#00f5ff]"
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </header>
  );
}
