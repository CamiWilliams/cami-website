/**
 * DESIGN: Holographic Dark Hero
 * Full-viewport hero with holographic foil background image
 * Prismatic gradient text on name, dark overlay for readability
 * Animated scan line effect, floating orb decoration
 */

import { useEffect, useState } from "react";
import heroBg from "../img/background.webp";
import headshot from "../img/headshot.png";

const HERO_BG = heroBg;
const HEADSHOT = headshot;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#07070F" }}
    >
      {/* Holographic background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55,
        }}
      />

      {/* Dark gradient overlay, bottom fade to black */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(7,7,15,0.3) 0%, rgba(7,7,15,0.1) 40%, rgba(7,7,15,0.7) 80%, rgba(7,7,15,1) 100%)",
        }}
      />

      {/* Animated scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)",
          animation: "scan-line 8s linear infinite",
          zIndex: 2,
        }}
      />

      {/* Headshot, right side */}
      <div
        className="absolute right-[3%] top-[5%] bottom-0 w-[42vw] max-w-[540px] pointer-events-none hidden lg:flex items-end"
        style={{ zIndex: 1 }}
      >
        <div className="relative w-full h-full">
          {/* Holographic glow ring behind photo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,245,255,0.15) 0%, rgba(191,95,255,0.1) 40%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.1)",
            }}
          />
          <img
            src={HEADSHOT}
            alt="Camryn Williams"
            className="w-full h-full object-cover object-top"
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`label-mono mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "rgba(0,245,255,0.7)" }}
          >
            Developer Advocate · Technical Leader · Open Source
          </div>

          {/* Name */}
          <h1
            className={`font-['Plus_Jakarta_Sans'] font-extrabold leading-[0.92] mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontSize: "clamp(3rem, 8.5vw, 8rem)" }}
          >
            <span className="block text-white">Camryn</span>
            <span className="block holo-text">Williams</span>
          </h1>

          {/* Bio */}
          <div
            className={`max-w-xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p
              className="text-lg leading-[1.75] mb-8 font-['Inter'] font-normal"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Lead Developer Advocate at Meta. Over a decade building bridges between
              engineering teams and the developers who depend on them, through open
              source, community, and the belief in lifting while you climb.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block label-mono px-7 py-3.5 text-[#07070F] font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #bf5fff, #ff2d78)",
                  backgroundSize: "200% 200%",
                  animation: "holo-shift 4s ease infinite",
                }}
              >
                Read More
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block label-mono px-7 py-3.5 text-white transition-all duration-300 hover:text-[#00f5ff]"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-8 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="w-px h-14"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,245,255,0.6))",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <span className="label-mono" style={{ color: "rgba(0,245,255,0.5)" }}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
