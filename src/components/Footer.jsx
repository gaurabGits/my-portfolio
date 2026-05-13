import { FaGithub, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { MdEmail, MdKeyboardArrowUp, MdLocationOn } from "react-icons/md";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gaurabGits",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gaurab-lohar-a7a66a272/",
    icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/gaurab-lohar",
    icon: FaSquareTwitter,
  },
];

function Footer() {
  return (
    <footer className="footer-root border-t border-slate-200 bg-white px-4 py-10 text-slate-600 transition-colors duration-300 dark:border-white/10 dark:text-slate-300 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="footer-panel grid gap-8 rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm shadow-slate-200/70 transition-colors duration-300 dark:border-white/10 dark:shadow-black/20 sm:rounded-3xl sm:p-8 lg:items-start">
          <div className="min-w-0 max-w-md">
            <a
              href="#home"
              className="text-xl font-black tracking-tight text-slate-950 transition hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300"
              aria-label="Go to home"
            >
              Gaurab Bishwarkarma
            </a>
            <p className="mt-3 text-sm leading-6">
              A developer passionate about crafting efficient and scalable products.<br className="hidden sm:block" />
              I love to explore new technologies and continuously improve my skills.
            </p>
          </div>

          <div className="grid min-w-0 gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="min-w-0">
              <h2 className="footer-section-title text-sm font-bold uppercase text-slate-950 dark:text-white">
                Get in Touch
              </h2>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="mailto:gaurabbishwakarma22@gmail.com"
                  className="flex min-w-0 items-center gap-3 transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-lg text-cyan-700 shadow-sm dark:bg-slate-950/70 dark:text-cyan-300">
                    <MdEmail />
                  </span>
                  <span className="min-w-0 break-all">gaurabbishwakarma22@gmail.com</span>
                </a>
                <p className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-lg text-emerald-700 shadow-sm dark:bg-slate-950/70 dark:text-emerald-300">
                    <MdLocationOn />
                  </span>
                  <span>Kathmandu, Nepal</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="footer-section-title text-sm font-bold uppercase text-slate-950 dark:text-white">
                Connect
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-3 transition hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    <span className="animated-icon-button grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-lg text-slate-800 shadow-sm group-hover:border-cyan-500 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200">
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Gaurab Bishwarkarma
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-1 font-semibold text-slate-700 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
          >
            Back to top
            <MdKeyboardArrowUp className="text-xl" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
