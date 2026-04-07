/**
 * DESIGN: Holographic Dark Experience
 * Full career timeline, Meta, Amazon, Google, Clarifai, internships, advisory
 * Holographic accent lines, glassmorphism cards, Plus Jakarta Sans headings, Inter body
 */

const experiences = [
  {
    company: "Meta",
    role: "Lead Developer Advocate, Developer Success Solutions",
    period: "2019 / Present",
    location: "Cary, NC",
    current: true,
    accentColor: "#00f5ff",
    description:
      "Lead Developer Advocate at Meta driving external developer engagement, open source community health, and content strategy across Meta's most widely used frameworks, including PyTorch, React, React Native, and the WhatsApp Business Platform. For the first five years, served as a people manager, directly managing and developing tens of individual contributors across IC levels.",
    highlights: [
      "Managed a multi-million dollar program budget; team growth funded entirely by partner organizations, including Reality Labs, WhatsApp, and AI Infra",
      "Scaled the team 3× from its original size; held standing support relationships with 20+ teams across Meta",
      "Drove 25.5M impressions and 14% share of voice within the global open source community",
      "Generated 5M+ engagements across external channels spanning talks, videos, blogs, podcasts, press, and code samples, with 94% favorability across DA-published channels",
      "Produced the most-watched 'how to open source' video across all Meta channels, part of 77 technical videos and courses published on Meta Open Source, Meta for Developers, PyTorch, Quest for Developers, and Coursera",
      "Helped establish the React Foundation and PyTorch Foundation as independent, community-governed projects",
      "Serves as Meta's board member representative across 9 open source foundations, including ECMA International, the Linux Foundation, and the Apache Software Foundation",
      "Represented Meta at major industry events including All Things Open, Remix Conf, and global developer summits",
    ],
    tags: ["Open Source", "AI/ML", "React", "PyTorch", "Developer Relations", "Team Leadership"],
  },
  {
    company: "Amazon / Alexa",
    role: "Senior Technical Evangelist, Alexa",
    period: "Sep 2017 / Jun 2019",
    location: "Seattle, WA",
    current: false,
    accentColor: "#bf5fff",
    description:
      "Contributed to the global third-party developer relations and technology evangelism strategy for Amazon Alexa. Led evangelism for Alexa Multimodal, In-Skill Purchasing, Kids Experiences, and Games.",
    highlights: [
      "Drove technical thought-leadership for Amazon and Alexa at Tier-1 events: keynotes, conferences, trade shows, and press events including GDC 2018 ('Redefining the Gaming World with Voice')",
      "Built the Alexa Multimodal educational program, partnering with businesses to build the first UI/UX experiences on multi-modal devices",
      "Created technical tutorials, sample code, and documentation for the Alexa Skills Kit",
      "Advocated for developers internally and externally, collaborating with Engineering, Product, Marketing, and cross-functional teams",
      "Authored content for the Amazon Alexa Blog; grew developer community across gaming, IoT, and consumer verticals",
    ],
    tags: ["Voice Technology", "Alexa Skills Kit", "Developer Education", "Evangelism", "Community"],
  },
  {
    company: "Google",
    role: "Software Engineer",
    period: "Jul 2016 / Aug 2017",
    location: "New York, NY",
    current: false,
    accentColor: "#7dff6b",
    description:
      "Worked as a software engineer across multiple Google teams. Alongside engineering, founded and led the Google NYC Diversity and Inclusion Council.",
    highlights: [
      "Back-end infrastructure engineer on the Google Classroom team",
      "Full-stack engineer on Google Suite Special Projects, developing a new team and application",
      "Front-end engineer on the Google Slides team",
      "Founded and led the Google NYC Diversity and Inclusion Council, partnering with Made with Code for the Global Citizens Festival and the Google NYC New Hire Mentorship program",
    ],
    tags: ["Software Engineering", "Back-End", "Front-End", "Google Classroom", "D&I Leadership"],
  },
  {
    company: "Clarifai",
    role: "Software Engineer & Developer Evangelist",
    period: "Aug 2015 / Jun 2016",
    location: "New York, NY",
    current: false,
    accentColor: "#ff2d78",
    description:
      "Founding member of the Back-End API and Developer Evangelist teams at an AI image recognition startup. Worked closely with Research Engineers, Sales, and Advisors to build APIs and communities around convolutional neural networks.",
    highlights: [
      "Helped technically develop back-end integrations and partnerships for 3P businesses",
      "Traveled to 50+ cities to deliver technical presentations and keynotes on the company's AI offering",
      "Established the Advocacy Ambassador program to train Software Engineers on effective technology evangelism",
    ],
    tags: ["AI/ML", "Computer Vision", "API Development", "Developer Evangelism", "Startup"],
  },
];

const otherExperiences = [
  {
    company: "Kibo School",
    role: "Advisor & Mentor",
    period: "Oct 2022 / Jan 2024",
    accentColor: "#00f5ff",
    description: "Helping to build the next generation of technology leaders, starting in Sub-Saharan Africa.",
  },
  {
    company: "O'Reilly Media",
    role: "Instructor",
    period: "Jan 2015 / Present",
    accentColor: "#bf5fff",
    description: "HTML and CSS video course instructor.",
  },
];

const internships = [
  {
    company: "Apple",
    role: "Software Engineer Intern",
    period: "May / Aug 2015",
    description: "Mobile Applications Engineering team as a server-side iOS engineer.",
    accentColor: "#00f5ff",
  },
  {
    company: "Google",
    role: "Software Engineer Intern",
    period: "May / Aug 2014",
    description: "Google Legal Corporate Engineering team as a full-stack engineer.",
    accentColor: "#7dff6b",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    period: "May / Aug 2013",
    description: "Windows Phone Store team as a desktop application engineer.",
    accentColor: "#bf5fff",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 relative"
      style={{ background: "#0A0A14" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, rgba(191,95,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-16 fade-up">
          <span className="label-mono" style={{ color: "rgba(191,95,255,0.7)" }}>02 / Experience</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(191,95,255,0.3), transparent)" }} />
        </div>

        {/* Full-time roles */}
        <div className="space-y-0 mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="fade-up grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {/* Left: Year */}
              <div className="lg:col-span-3">
                <div className="label-mono mb-1" style={{ color: exp.accentColor, opacity: 0.85 }}>
                  {exp.period}
                </div>
                <div className="label-mono text-[0.62rem]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {exp.location}
                </div>
                {exp.current && (
                  <span
                    className="inline-block mt-3 label-mono text-[0.6rem] px-2 py-1"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,95,255,0.15))",
                      border: "1px solid rgba(0,245,255,0.3)",
                      color: "#00f5ff",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-9">
                <div className="mb-1">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-white">
                    {exp.role}
                  </span>
                </div>
                <div className="label-mono mb-4" style={{ color: exp.accentColor }}>
                  {exp.company}
                </div>
                <p
                  className="leading-[1.8] font-['Inter'] mb-5 text-sm"
                  style={{ color: "rgba(255,255,255,0.68)" }}
                >
                  {exp.description}
                </p>

                {exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-[1.75] font-['Inter']"
                        style={{ color: "rgba(255,255,255,0.68)" }}
                      >
                        <span style={{ color: exp.accentColor }} className="mt-0.5 flex-shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label-mono text-[0.58rem] px-2 py-0.5"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internships */}
        <div className="fade-up mb-16">
          <div className="flex items-center gap-5 mb-10">
            <span className="label-mono" style={{ color: "rgba(125,255,107,0.6)" }}>Internships</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(125,255,107,0.2), transparent)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {internships.map((intern, idx) => (
              <div
                key={idx}
                className="holo-card p-6"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <div
                  className="w-full h-[1px] mb-5"
                  style={{ background: `linear-gradient(90deg, ${intern.accentColor}60, transparent)` }}
                />
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-white mb-1">{intern.company}</div>
                <div className="label-mono mb-2" style={{ color: intern.accentColor, opacity: 0.8 }}>{intern.role}</div>
                <div className="label-mono text-[0.62rem] mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>{intern.period}</div>
                <p className="text-sm leading-[1.7] font-['Inter']" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {intern.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory & Instruction */}
        <div className="fade-up">
          <div className="flex items-center gap-5 mb-10">
            <span className="label-mono" style={{ color: "rgba(0,245,255,0.5)" }}>Advisory & Instruction</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.15), transparent)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherExperiences.map((item, idx) => (
              <div
                key={idx}
                className="holo-card p-6"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="w-full h-[1px] mb-5"
                  style={{ background: `linear-gradient(90deg, ${item.accentColor}50, transparent)` }}
                />
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-white mb-1">{item.company}</div>
                <div className="label-mono mb-2" style={{ color: item.accentColor, opacity: 0.8 }}>{item.role}</div>
                <div className="label-mono text-[0.62rem] mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>{item.period}</div>
                <p className="text-sm leading-[1.7] font-['Inter']" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="fade-up mt-16 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-5 mb-8">
            <span className="label-mono" style={{ color: "rgba(255,45,120,0.6)" }}>Education</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,45,120,0.2), transparent)" }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <div className="label-mono" style={{ color: "rgba(255,45,120,0.7)" }}>2011 / 2015</div>
              <div className="label-mono text-[0.62rem] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>Ames, IA</div>
            </div>
            <div className="lg:col-span-9">
              <div className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-white mb-1">
                B.S. Computer Science, Minor in Spanish
              </div>
              <div className="label-mono" style={{ color: "rgba(255,45,120,0.8)" }}>Iowa State University</div>
              <p className="text-sm leading-[1.75] font-['Inter'] mt-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                College of Liberal Arts and Sciences. Foundation in computer science, communication, and interdisciplinary problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
