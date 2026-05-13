import { FaReact } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar({ theme, onToggleTheme }) {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-1.5 sm:top-4 sm:px-3">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-1.5 rounded-full border border-slate-300 bg-white/90 px-2 py-2 shadow-2xl shadow-slate-300/40 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/20 sm:gap-3 sm:px-5 sm:py-3">
        <a
          href="#home"
          className="group flex min-w-0 shrink-0 items-center gap-2 text-sm font-bold tracking-wide text-slate-950 dark:text-white sm:gap-3"
          aria-label="Go to home"
        >
          <span className="react-logo-wrap relative grid h-10 w-10 place-items-center rounded-full sm:h-12 sm:w-12">
            <FaReact className="react-logo-spin absolute inset-0 h-full w-full text-cyan-600 drop-shadow-[0_0_16px_rgba(8,145,178,0.45)] dark:text-cyan-300 dark:drop-shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
            <span className="absolute h-6 w-6 rounded-full bg-white shadow-[0_0_20px_rgba(148,163,184,0.45)] dark:bg-slate-950 dark:shadow-[0_0_20px_rgba(2,6,23,0.9)] sm:h-7 sm:w-7" />
            <span className="relative grid h-5 w-5 place-items-center rounded-full bg-slate-950 text-xs font-black text-white transition duration-300 group-hover:scale-110 group-hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:group-hover:bg-cyan-200 sm:h-6 sm:w-6 sm:text-sm">
              G
            </span>
          </span>
          <span className="hidden sm:block">
            <span className="block leading-none">Gaurab</span>
            <span className="mt-1 block font-mono text-[10px] font-semibold tracking-[0.22em] text-cyan-700 dark:text-cyan-300/80">
              DEV
            </span>
          </span>
        </a>

        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <ul className="flex min-w-0 items-center gap-0.5 rounded-full bg-slate-100 p-0.5 text-[10px] font-semibold text-slate-700 dark:bg-white/4 dark:text-slate-300 min-[380px]:text-xs sm:gap-1 sm:p-1 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-1.5 py-1.5 transition hover:bg-white hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white min-[380px]:px-2 sm:px-4 sm:py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            className="animated-icon-button grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-base text-slate-800 shadow-sm hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300 sm:h-10 sm:w-10 sm:text-lg"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
