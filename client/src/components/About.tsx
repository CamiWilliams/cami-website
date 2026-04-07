/**
 * DESIGN: Holographic Dark About
 * Dark section with glassmorphism cards, holographic accent borders
 * Pull-quote with prismatic left border
 */

import speakingImg from "../img/ghc.png";
const SPEAKING_IMG = speakingImg;

const stats = [
  { value: "10+", label: "Years in DevRel", color: "#00f5ff" },
  { value: "100+", label: "Talks & Podcasts", color: "#ff2d78" },
  { value: "1K+", label: "LinkedIn Followers", color: "#7dff6b" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative" style={{ background: "#07070F" }}>
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,245,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-16 fade-up">
          <span className="label-mono" style={{ color: "rgba(0,245,255,0.7)" }}>01 / About</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image */}
          <div className="lg:col-span-5 fade-up">
            <div className="relative">
              {/* Holographic border frame */}
              <div
                className="absolute -inset-[3px] z-0"
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #bf5fff, #ff2d78, #7dff6b, #00f5ff)",
                  backgroundSize: "300% 300%",
                  animation: "holo-shift 5s ease infinite",
                }}
              />
              <img
                src={SPEAKING_IMG}
                alt="Camryn Williams"
                className="relative z-10 w-full object-cover object-top"
                style={{ minHeight: "520px", maxHeight: "680px" }}
              />
              <div className="mt-4">
                <span className="label-mono" style={{ color: "rgba(191,95,255,0.7)" }}>
                  Developer Advocate · Speaker · Community Builder
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="fade-up mb-8">
              <h2
                className="font-['Plus_Jakarta_Sans'] font-extrabold leading-tight mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                <span className="text-white">Howdy! I am Cami!</span>
              </h2>
            </div>

            <div
              className="fade-up space-y-5 text-[0.975rem] leading-[1.8] font-['Inter'] mb-10"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              <p>
                I am a technical leader and developer advocate with over a decade of
                experience at the intersection of engineering, community, and communication.
                Currently, I lead Developer Advocacy at Meta, working across open source
                project health, developer education, and content strategy for some of the
                world's most widely used frameworks.
              </p>
              <p>
                My career has spanned some of the most consequential open source projects of
                the last decade: PyTorch, React, React Native, WhatsApp Business Platform,
                and Meta's broader open source ecosystem. I've built developer education
                programs, led cross-functional teams, authored technical content that has
                reached thousands of practitioners, and helped establish the React Foundation.
              </p>
              <p>
                Before Meta, I have worked at Amazon, Google, Apple, Microsoft, and Clarifai.
                Throughout my career, I've led with a simple conviction: there is joy in
                learning, and equally there is joy in teaching. Share what you know and
                uplevel others where you can.
              </p>
            </div>


            {/* Philosophy cards */}
            <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
              {/* Advocacy philosophy */}
              <div
                className="p-6"
                style={{
                  background: "rgba(0,245,255,0.04)",
                  border: "1px solid rgba(0,245,255,0.12)",
                }}
              >
                <div className="label-mono mb-3" style={{ color: "#00f5ff" }}>Advocacy Philosophy</div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-white text-base leading-snug mb-3">
                  Inspire. Engage. Activate.
                </p>
                <p className="text-sm leading-[1.75] font-['Inter']" style={{ color: "rgba(255,255,255,0.62)" }}>
                  Effective developer advocacy is a flywheel, not a broadcast. Every outbound
                  effort (a talk, a video, a tutorial) must be paired with inbound listening:
                  surfacing friction, feeding product teams, and converting engaged developers
                  into community evangelists who carry the message further than any one advocate
                  ever could.
                </p>
              </div>
              {/* Management philosophy */}
              <div
                className="p-6"
                style={{
                  background: "rgba(191,95,255,0.04)",
                  border: "1px solid rgba(191,95,255,0.12)",
                }}
              >
                <div className="label-mono mb-3" style={{ color: "#bf5fff" }}>Management Philosophy</div>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-white text-base leading-snug mb-3">
                  Invest in people. Grow leaders.
                </p>
                <p className="text-sm leading-[1.75] font-['Inter']" style={{ color: "rgba(255,255,255,0.62)" }}>
                  I lead with an affiliative, coaching-first style, meeting people where they
                  are, investing in their growth, and creating the conditions for them to do the
                  best work of their careers. The measure of a leader isn't how high they rise;
                  it's how many people they bring with them.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="label-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
