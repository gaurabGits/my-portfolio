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

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-8 pt-20 text-slate-600 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* ================= TOP CONTENT ================= */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label="Go to homepage"
              className="inline-block text-xl font-black tracking-tight text-slate-950 transition-colors hover:text-cyan-600"
            >
              Gaurab Bishwarkarma
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
              Developer focused on building thoughtful, reliable web
              experiences with modern technologies.
            </p>

            <a
              href="mailto:gaurabbishwakarma22@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-600"
            >
              <MdEmail className="text-lg text-slate-400" />
              gaurabbishwakarma22@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Navigation
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Connect
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  <Icon className="text-base text-slate-400 transition-colors group-hover:text-cyan-600" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Based in
            </h2>

            <div className="mt-5 flex items-start gap-2.5 text-sm text-slate-600">
              <MdLocationOn className="mt-0.5 shrink-0 text-lg text-slate-400" />

              <div>
                <p className="font-medium text-slate-700">
                  Kathmandu, Nepal
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-16 h-px bg-slate-200/80" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Gaurab Bishwarkarma. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-1.5 font-medium text-slate-500 transition-colors hover:text-slate-950"
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