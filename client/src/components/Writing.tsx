/**
 * DESIGN: Holographic Dark Writing & Talks
 * Dark list with holographic hover glow on each row
 * Prismatic type badges
 */

const writings = [
  {
    type: "Talk",
    title: "AWS re:Invent 2018: Use Alexa to Reach New Customers by Developing for Multiple Screens",
    venue: "Amazon Web Services",
    date: "2018",
    description: "Learn how the Alexa Presentation Language (APL) makes it easy to develop interactive voice and touch experiences portable to any Alexa-enabled device with a screen — tablets, TVs, Echo Show, Echo Spot, and more.",
    url: "https://www.youtube.com/watch?v=tzJ_SHObBMk",
    color: "#ff9900",
  },
  {
    type: "Video",
    title: "Introducing Aria Gen 2",
    venue: "Meta Open Source",
    date: "2024",
    description: "Since its launch in 2020, Project Aria has propelled research across the world to advance the state of the art in machine perception and AI, through access to cutting-edge research hardware and open-source datasets, models, and tooling.",
    url: "https://www.youtube.com/watch?v=GjZo2On_oOI",
    color: "#00f5ff",
  },
  {
    type: "Video",
    title: "Meta Open Source Overview",
    venue: "Meta Open Source",
    date: "2023",
    description: "An overview of various open-source projects and tools developed by Meta across different technological domains.",
    url: "https://www.youtube.com/watch?v=k2krwqLyALE",
    color: "#00f5ff",
  },
  {
    type: "Video",
    title: "How to Contribute to Open Source",
    venue: "Facebook Open Source",
    date: "2022",
    description: "A beginner's guide on how to find and contribute to open source projects on GitHub. Meta's most-watched how-to video across all open source channels.",
    url: "https://www.youtube.com/watch?v=c6b6B9oN4Vg",
    color: "#7dff6b",
  },
  {
    type: "Video",
    title: "Top Features in Oculus Developer Hub",
    venue: "Meta Quest / Oculus for Developers",
    date: "2021",
    description: "Developer Advocate Cami Williams and Product Manager Clorama Dorvilias showcase the top features of Oculus Developer Hub (ODH) for optimal VR development.",
    url: "https://www.youtube.com/watch?v=Hm0iizWXUUc",
    color: "#bf5fff",
  },
  {
    type: "Video",
    title: "Hand Tracking Updates and Resources",
    venue: "Meta Quest / Oculus for Developers",
    date: "2021",
    description: "Developer Advocate Cami Williams shares the latest updates to hand tracking and what developers should know before starting implementation.",
    url: "https://www.youtube.com/watch?v=HJ2oO2FfZBs",
    color: "#bf5fff",
  },
  {
    type: "Video",
    title: "Oculus Virtual Reality Checks (VRCs)",
    venue: "Oculus for Developers",
    date: "2021",
    description: "An overview of Oculus Virtual Reality Checks (VRCs), explaining their purpose and importance for developers, with examples of performance, functional, and accessibility guidelines.",
    url: "https://www.youtube.com/watch?v=_4Z4TlF2ZAc",
    color: "#bf5fff",
  },
  {
    type: "Video",
    title: "Asset Guidelines for Product Display Page",
    venue: "Oculus for Developers",
    date: "2021",
    description: "A comprehensive overview of the Oculus Store asset guidelines, detailing requirements and best practices for creating branded assets, cover images, icons, screenshots, and trailers.",
    url: "https://www.youtube.com/watch?v=8mu99jWoUWU",
    color: "#bf5fff",
  },
  {
    type: "Article",
    title: "Contributing to PyTorch: by someone who doesn't know a ton about PyTorch",
    venue: "Medium",
    date: "September 2019",
    description: "A firsthand account of making open source contributions to PyTorch after a week of intensive learning with the engineering team — no prior PyTorch experience required.",
    url: "https://medium.com/@cwillycs/committing-to-pytorch-by-someone-who-doesnt-know-a-ton-about-pytorch-fa222253cf2d",
    color: "#00f5ff",
  },
  {
    type: "Article",
    title: "Day 1 at GDC 2018: Redefining the Gaming World with Voice",
    venue: "Amazon Alexa Blog",
    date: "March 2018",
    description: "Covered the intersection of voice technology and gaming at one of the world's largest game developer conferences.",
    url: "https://www.linkedin.com/pulse/day-1-gdc-2018-redefining-gaming-world-voice-camryn-williams/",
    color: "#00f5ff",
  },
  {
    type: "Podcast",
    title: "Meta Tech Podcast: Episode 43",
    venue: "Meta Tech Podcast",
    date: "2022",
    description: "Discussing developer advocacy, open source strategy, and the evolving role of developer relations at scale.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#bf5fff",
  },
  {
    type: "Podcast",
    title: "Stack Overflow Podcast",
    venue: "Stack Overflow",
    date: "2022",
    description: "The intersection of developer advocacy, open source community building, and scaling developer education programs.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#bf5fff",
  },
  {
    type: "Talk",
    title: "GDC 2018: Voice Technology in Gaming",
    venue: "Game Developers Conference",
    date: "March 2018",
    description: "Representing Amazon Alexa at GDC, exploring how voice interfaces were redefining player experiences.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#ff2d78",
  },
  {
    type: "Talk",
    title: "All Things Open",
    venue: "All Things Open Conference",
    date: "2022",
    description: "Representing Meta Open Source at one of the largest open source conferences in the US.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#ff2d78",
  },
  {
    type: "Talk",
    title: "Remix Conf",
    venue: "Remix Conference",
    date: "2022",
    description: "Representing Meta's React ecosystem at Remix Conf, engaging with the broader React community.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#ff2d78",
  },
  {
    type: "Podcast",
    title: "Dev Morning Show at Night",
    venue: "Dev Morning Show at Night",
    date: "2022",
    description: "Conversations on developer advocacy, community building, and navigating a career at the intersection of engineering and communication.",
    url: "https://www.linkedin.com/in/camrynwilliams/",
    color: "#bf5fff",
  },
];

export default function Writing() {
  return (
    <section
      id="writing"
      className="py-28 relative"
      style={{ background: "#0A0A14" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, rgba(0,245,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-16 fade-up">
          <span className="label-mono" style={{ color: "rgba(125,255,107,0.7)" }}>04 / Content</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(125,255,107,0.3), transparent)" }} />
        </div>

        <div className="max-w-4xl">
          {writings.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up group flex gap-6 py-7 -mx-4 px-4 transition-all duration-300"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `rgba(${
                  item.color === "#00f5ff" ? "0,245,255" :
                  item.color === "#bf5fff" ? "191,95,255" :
                  item.color === "#ff2d78" ? "255,45,120" : "125,255,107"
                },0.04)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {/* Date */}
              <div className="hidden sm:block w-24 flex-shrink-0 pt-1">
                <div className="label-mono text-[0.62rem]" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="label-mono text-[0.6rem] px-2 py-0.5"
                    style={{
                      color: item.color,
                      border: `1px solid ${item.color}40`,
                      background: `${item.color}10`,
                    }}
                  >
                    {item.type}
                  </span>
                  <span className="label-mono text-[0.62rem]" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {item.venue}
                  </span>
                </div>
                <h3
                  className="font-['Plus_Jakarta_Sans'] font-semibold text-base mb-2 transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-[1.75] font-['Inter']"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="hidden sm:flex items-start pt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: item.color }}
              >
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
