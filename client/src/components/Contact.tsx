/**
 * DESIGN: Holographic Dark Contact
 * Dark section with holographic gradient heading
 * Prismatic CTA buttons with glow
 */

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "#07070F" }}
    >
      {/* Large radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(191,95,255,0.08) 0%, rgba(0,245,255,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Holographic foil strip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #00f5ff, #bf5fff, #ff2d78, #7dff6b, transparent)",
          backgroundSize: "300% 100%",
          animation: "holo-shift 4s ease infinite",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl fade-up">
          {/* Label */}
          <div className="label-mono mb-6" style={{ color: "rgba(191,95,255,0.7)" }}>
            05 / Get in Touch
          </div>

          {/* Heading */}
          <h2
            className="font-['Plus_Jakarta_Sans'] font-extrabold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            <span className="text-white">Let's build something</span>
            <br />
            <span className="holo-text">meaningful together.</span>
          </h2>

          <p
            className="text-lg leading-[1.75] font-['Inter'] mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Whether you're looking to collaborate on open source, discuss developer relations
            strategy, or explore speaking opportunities. I'd love to connect.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/camrynwilliams/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 label-mono px-7 py-4 text-[#07070F] font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
              style={{
                background: "linear-gradient(135deg, #00f5ff, #bf5fff, #ff2d78)",
                backgroundSize: "200% 200%",
                animation: "holo-shift 4s ease infinite",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:cwillycs@gmail.com"
              className="inline-flex items-center gap-3 label-mono px-7 py-4 text-white transition-all duration-300 hover:text-[#00f5ff] hover:border-[#00f5ff]/40"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an Email
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.25)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="font-['Inter'] text-sm">Cary, North Carolina, United States</span>
          </div>
        </div>
      </div>
    </section>
  );
}
