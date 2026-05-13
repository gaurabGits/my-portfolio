const codeLines = [
  { number: "01", text: 'const LANGUAGES = ["English", "Nepali", "Hindi"];', color: "text-slate-400" },
  { number: "02", text: "", color: "text-slate-500" },
  {
    number: "03",
    text: "const developer = {",
    color: "text-slate-200",
  },
  { number: "04", text: '  nickName: "guri",', color: "text-cyan-200" },
  {
    number: "05",
    text: '  fullName: "Gaurab Bishwarkarma",',
    color: "text-emerald-200",
  },
  {
    number: "06",
    text: "  birthDate: new Date(2005, 5, 5), // June 05, 2005",
    color: "text-slate-300",
  },
  { number: "07", text: '  role: "Web Developer",', color: "text-cyan-200" },
  {
    number: "08",
    text: '  location: "Kathmandu, Nepal",',
    color: "text-emerald-200",
  },
  { number: "09", text: '  email: "gaurabbishwakarma22@gmail.com",', color: "text-amber-200" },
  {
    number: "10",
    text: '  availability: "Open to opportunities - On-site - Remote",',
    color: "text-pink-200",
  },
  {
    number: "11",
    text: '  skills: ["Frontend Development", "Backend Development", "Database Management"],',
    color: "text-pink-200",
  },
  {
    number: "12",
    text: "  hardWorker: true, quickLearning: true, problemSolver: true,",
    color: "text-emerald-200",
  },
  {
    number: "13",
    text: "  preferredLanguages: LANGUAGES,",
    color: "text-amber-200",
  },
  {
    number: "14",
    text: "  connect() {",
    color: "text-slate-200",
  },
  {
    number: "15",
    text: '    return "Let\'s build something amazing together!";',
    color: "text-emerald-200",
  },
  { number: "16", text: "  },", color: "text-slate-200" },
  { number: "17", text: "};", color: "text-slate-200" },
];

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:py-24 sm:scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-12">
        <div className="min-w-0">
          <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">01 / About</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            About Me,
          </h2>
          <p className="mt-5 text-left leading-7 text-slate-700 dark:text-slate-300 sm:mt-6 sm:leading-8 md:text-justify">
            I&apos;m a web developer with a passion for crafting engaging and efficient web applications. With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences and solving complex problems. I thrive in collaborative environments and am always eager to learn new skills and stay updated with the latest industry trends. Open to opportunities, on-site work, and remote-first collaboration.
          </p>
          <a
            href="/resume.pdf"
            download
            className="animated-button mt-8 inline-flex rounded-full px-7 py-3 font-semibold text-white dark:text-slate-950"
          >
            <span className="relative z-10">My Resume</span>
          </a>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/95 shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-black/30 sm:rounded-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-pink-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-xs text-slate-500">about.js</span>
          </div>

          <div className="overflow-x-auto p-4 font-mono text-xs leading-7 sm:p-5 sm:text-base sm:leading-8">
            {codeLines.map((line) => (
              <div key={`${line.number}-${line.text}`} className="flex min-w-max gap-4 sm:gap-5">
                <span className="select-none text-slate-600">{line.number}</span>
                <span className={line.color || "text-slate-300"}>
                  {line.text || "\u00A0"}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-white/3 px-4 py-4 font-mono text-xs leading-6 text-slate-400 sm:px-5 sm:text-sm">
            <span className="text-emerald-300">Output:</span> Open to
            opportunities, on-site, and remote work.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
