import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "/about" },
  ];

  const handleSectionClick = (e, href) => {
    e.preventDefault();

    const sectionId = href.replace("#", "");

    // If already on homepage, just scroll
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If on another page, go home first
      navigate("/");

      // Wait for homepage to render, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <header className="w-full fixed z-50 bg-white/95 px-4 py-4 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between transition-all duration-300 sm:px-6 lg:px-0">

        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to home"
          className="shrink-0 font-mono text-xl font-bold tracking-tight text-slate-950 transition-colors duration-200 hover:text-cyan-600 sm:text-2xl"
        >
          Gaurab<span className="text-cyan-600">.dev</span>
        </Link>

        {/* Navigation */}
        <div className="ml-auto">
          <ul className="flex items-center gap-1 font-mono text-sm font-semibold text-slate-500 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="block whitespace-nowrap rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 sm:px-3.5"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="block whitespace-nowrap rounded-lg px-2.5 py-2 transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 sm:px-3.5"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;