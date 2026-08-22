import {
  FaGithub,
  FaLinkedin,
  FaSquareTwitter,
} from "react-icons/fa6";
import {
  MdEmail,
  MdKeyboardArrowUp,
  MdLocationOn,
} from "react-icons/md";

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
    label: "X",
    href: "https://twitter.com/gaurab-lohar",
    icon: FaSquareTwitter,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0E14] px-4 pb-8 pt-20 text-slate-400 sm:px-6 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-amber-400/40" />
      <div className="pointer-events-none absolute -top-40 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-10">

          {/* ================= ABOUT ================= */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label="Go to homepage"
              className="inline-block text-xl font-black tracking-tight text-white transition-colors hover:text-cyan-400"
            >
              Gaurab Bishwakarma
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Developer focused on building thoughtful, reliable web
              experiences with modern technologies.
            </p>

            <a
              href="mailto:gaurabbishwakarma22@gmail.com"
              className="mt-6 inline-flex max-w-full items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              <MdEmail className="shrink-0 text-lg text-slate-500" />

              <span className="break-all sm:break-normal">
                gaurabbishwakarma22@gmail.com
              </span>
            </a>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:flex md:items-start md:justify-end">

            {/* ================= CONNECT ================= */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Connect
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-2.5 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    <Icon className="shrink-0 text-base text-slate-500 transition-colors group-hover:text-cyan-400" />

                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ================= LOCATION ================= */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Based in
              </h2>

              <div className="mt-5 flex items-start gap-2.5 text-sm text-slate-400">
                <MdLocationOn className="mt-0.5 shrink-0 text-lg text-slate-500" />

                <div className="min-w-0">
                  <p className="font-medium text-slate-200">
                    Kathmandu, Nepal
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 h-px bg-white/10 sm:mt-16" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="text-center sm:text-left">
            © {currentYear} Gaurab Bishwakarma. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex w-full items-center justify-center gap-1.5 font-medium text-slate-400 transition-colors hover:text-cyan-400 sm:w-fit"
          >
            Back to top

            <MdKeyboardArrowUp
              className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;