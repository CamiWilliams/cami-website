/**
 * DESIGN: Holographic Dark Footer
 * Minimal dark footer with holographic gradient top border
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 relative"
      style={{
        background: "#04040A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Holographic top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), rgba(191,95,255,0.3), rgba(255,45,120,0.3), transparent)",
        }}
      />

      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-['Syne'] font-bold text-white/80 text-sm">
          Camryn Williams
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/camrynwilliams/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono transition-colors duration-200"
            style={{ color: "rgba(0,245,255,0.4)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00f5ff")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(0,245,255,0.4)")}
          >
            LinkedIn
          </a>
          <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
          <a
            href="mailto:cwillycs@gmail.com"
            className="label-mono transition-colors duration-200"
            style={{ color: "rgba(191,95,255,0.4)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#bf5fff")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(191,95,255,0.4)")}
          >
            Email
          </a>
        </div>

        <div className="label-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
          © {year} Camryn Williams
        </div>
      </div>
    </footer>
  );
}
