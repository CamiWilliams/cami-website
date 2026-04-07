/**
 * DESIGN: Holographic Dark Projects
 * Glassmorphism cards with holographic hover glow
 * Holographic section background image
 */

const SECTION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663386245554/8sSjKgLmG6Hv2B8bYmZMak/holo-section-bg-mFEwKZgShqPDCPxszJoAtq.webp";

const projects = [
  {
    name: "PyTorch Foundation",
    org: "Meta / Linux Foundation",
    type: "Community Leadership",
    description:
      "Helped establish the PyTorch Foundation as an independent, vendor-neutral home for PyTorch under the Linux Foundation, ensuring the world's leading AI research framework remains community-governed and accessible to all.",
    impact: "Global AI/ML research community",
    accentColor: "#ff2d78",
    tags: ["PyTorch", "AI/ML", "Open Source Governance", "Linux Foundation"],
  },
  {
    name: "Reality Labs Developer Advocacy",
    org: "Meta / Reality Labs",
    type: "Developer Relations",
    description:
      "Led developer advocacy for the Reality Labs ecosystem, driving adoption and education across the Oculus developer platform. Produced content, documentation, and programs to empower the global XR developer community.",
    impact: "XR developer ecosystem growth",
    accentColor: "#bf5fff",
    tags: ["VR/AR", "Reality Labs", "Developer Education", "XR"],
  },
  {
    name: "Oculus Developer Hub",
    org: "Meta / Oculus",
    type: "Developer Tooling Education",
    description:
      "Produced the official developer education series for Oculus Developer Hub (ODH), the desktop companion app for VR development on Windows and Mac. Covered top features for optimal VR development workflows.",
    impact: "Oculus for Developers channel",
    accentColor: "#00f5ff",
    url: "https://www.youtube.com/watch?v=Hm0iizWXUUc",
    tags: ["Oculus", "VR Development", "Developer Tooling", "Meta Quest"],
  },
  {
    name: "Oculus LaunchPad",
    org: "Meta / Oculus",
    type: "Community Program",
    description:
      "Supported Oculus LaunchPad, a program designed to fund and accelerate underrepresented creators building immersive VR experiences, fostering diversity and inclusion within the XR developer community.",
    impact: "Underrepresented XR creators",
    accentColor: "#7dff6b",
    tags: ["Oculus", "Diversity", "VR", "Community"],
  },
  {
    name: "Oculus Developer Series",
    org: "Meta / Oculus",
    type: "Developer Education",
    description:
      "Hosted and produced the Oculus Developer Series, a video education program covering VR development best practices including hand tracking, Virtual Reality Checks (VRCs), store asset guidelines, and platform submission requirements.",
    impact: "Oculus for Developers channel",
    accentColor: "#ffd700",
    url: "https://www.youtube.com/watch?v=HJ2oO2FfZBs",
    tags: ["Oculus", "VR", "Hand Tracking", "Developer Education"],
  },
  {
    name: "React Foundation",
    org: "Meta / Open Source",
    type: "Community Leadership",
    description:
      "Helped establish React as an independent project under the React Foundation, ensuring that companies of all sizes can benefit from a robust, community-driven framework with community governance.",
    impact: "Millions of developers worldwide",
    accentColor: "#ff2d78",
    tags: ["React", "Open Source Governance", "Community"],
  },
  {
    name: "WhatsApp Business Platform",
    org: "Meta",
    type: "Developer Education",
    description:
      "Developed comprehensive educational materials including a popular Coursera course, empowering thousands of developers to integrate secure, scalable messaging solutions into their applications.",
    impact: "Coursera course · thousands of developers",
    accentColor: "#7dff6b",
    tags: ["WhatsApp API", "Coursera", "Developer Education"],
  },
  {
    name: "PyTorch Developer Advocacy",
    org: "Meta / Facebook",
    type: "Community + Education",
    description:
      "Led developer advocacy for PyTorch, helping lower barriers to entry for AI/ML researchers and practitioners through clear documentation, reusable code samples, and community coordination.",
    impact: "Global AI/ML community impact",
    accentColor: "#00f5ff",
    tags: ["PyTorch", "AI/ML", "Open Source", "Education"],
  },
  {
    name: "Alexa Multimodal Program",
    org: "Amazon",
    type: "Developer Education",
    description:
      "Built the Alexa Multimodal educational program from the ground up, partnering with businesses to design and build the first generation of UI/UX experiences on multi-modal Alexa devices.",
    impact: "First-gen multimodal developer ecosystem",
    accentColor: "#bf5fff",
    tags: ["Alexa Skills Kit", "Multimodal", "Voice UI", "Education"],
  },
  {
    name: "Clarifai Developer Ecosystem",
    org: "Clarifai",
    type: "Engineering + Evangelism",
    description:
      "As a founding team member, helped build the back-end API and developer community for an AI image recognition startup. Traveled to 50+ cities delivering technical keynotes and established the Advocacy Ambassador program.",
    impact: "50+ city tour · Ambassador program launched",
    accentColor: "#ffd700",
    tags: ["AI/ML", "Computer Vision", "API Design", "Evangelism"],
  },
  {
    name: "O'Reilly HTML & CSS Course",
    org: "O'Reilly Media",
    type: "Technical Instruction",
    description:
      "Video course instructor for HTML and CSS on O'Reilly Media's learning platform, making foundational web development skills accessible to a broad audience of learners.",
    impact: "Ongoing since 2015",
    accentColor: "#00f5ff",
    tags: ["HTML", "CSS", "Web Development", "Education"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{ background: "#07070F" }}
    >
      {/* Holographic section background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${SECTION_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      {/* Glow accents */}
      <div
        className="absolute bottom-0 left-1/3 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(255,45,120,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-16 fade-up">
          <span className="label-mono" style={{ color: "rgba(255,45,120,0.7)" }}>03 / Projects & Impact</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,45,120,0.3), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="fade-up holo-card p-7 group"
              style={{ background: "rgba(255,255,255,0.025)", cursor: (proj as any).url ? 'pointer' : 'default' }}
              onClick={() => { if ((proj as any).url) window.open((proj as any).url, '_blank'); }}
            >
              {/* Accent top line */}
              <div
                className="w-full h-[2px] mb-6 opacity-60"
                style={{
                  background: `linear-gradient(90deg, ${proj.accentColor}, transparent)`,
                }}
              />

              {/* Type label */}
              <div className="label-mono mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                {proj.type}
              </div>

              {/* Name */}
              <h3
                className="font-['Plus_Jakarta_Sans'] font-bold text-lg mb-1 text-white group-hover:transition-colors"
                style={{ transition: "color 0.2s" }}
              >
                <span
                  className="group-hover:holo-text"
                  style={{ color: "inherit" }}
                >
                  {proj.name}
                </span>
              </h3>
              <div
                className="label-mono mb-4"
                style={{ color: proj.accentColor, opacity: 0.8 }}
              >
                {proj.org}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-[1.75] font-['Inter'] mb-5"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {proj.description}
              </p>

              {/* Impact */}
              <div
                className="px-3 py-2 mb-5"
                style={{
                  background: `rgba(${proj.accentColor === "#00f5ff" ? "0,245,255" : proj.accentColor === "#bf5fff" ? "191,95,255" : proj.accentColor === "#ff2d78" ? "255,45,120" : proj.accentColor === "#7dff6b" ? "125,255,107" : "255,215,0"},0.06)`,
                  borderLeft: `2px solid ${proj.accentColor}`,
                }}
              >
                <span className="label-mono text-[0.6rem]" style={{ color: proj.accentColor }}>Impact: </span>
                <span className="font-['Inter'] text-xs font-medium text-white/80">
                  {proj.impact}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-mono text-[0.58rem] px-2 py-0.5"
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
