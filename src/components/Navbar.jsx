import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "/about" },
];

const menuMotion = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.04 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: "easeIn" } },
};

const menuItemMotion = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);

  // Close on Escape, return focus to toggle
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  // Header scroll effect (shadow only, no bottom border)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to update active link based on scroll
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href.substring(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;
        let bestRatio = 0;
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        }
        if (bestEntry) {
          const id = bestEntry.target.id;
          setActiveLink(`#${id}`);
        } else {
          // No section in view means activeLink = null (hero is visible)
          setActiveLink(null);
        }
      },
      {
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);


  const handleSectionClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink(href);
    if (window.history.pushState) {
      window.history.pushState(null, "", href);
    }
    const sectionId = href.replace("#", "");
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink("/about");
    navigate("/about");
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };
  // Logo click: go to hero, set active to null (no highlight)
  const handleLogoClick = () => {
    setMenuOpen(false);
    setActiveLink(null);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }, 100);
    }
  };
  const currentActiveLink = location.pathname !== "/" ? "/about" : location.hash || activeLink;

  // No bottom border: only color changes when active.
  const linkClass = (href) => {
    const isActive = currentActiveLink === href;
    return `block whitespace-nowrap rounded-md px-3 py-2 font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2954E5] focus-visible:ring-offset-2 ${
      isActive
        ? "text-[#2954E5]"
        : "text-[#5B6472] hover:text-[#2954E5]"
    }`;
  };

  const mobileLinkClass = (href) => {
    const isActive = currentActiveLink === href;
    return `block w-full rounded-md px-3 py-2.5 font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2954E5] focus-visible:ring-offset-2 ${
      isActive
        ? "bg-[#EEF2FF] text-[#2954E5]"
        : "text-[#5B6472] hover:text-[#2954E5] hover:bg-[#F8FAFC]"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full backdrop-blur-xl transition-[padding,box-shadow,background] duration-300 ${
        scrolled
          ? "bg-white/90 py-2 shadow-[0_1px_2px_rgba(20,24,31,0.04)]"
          : "bg-white/60 py-4 shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleLogoClick}
          aria-label="Go to home"
          className="shrink-0 rounded-md font-mono text-lg font-bold tracking-tight text-[#14181F] transition-colors duration-200 hover:text-[#2954E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2954E5] focus-visible:ring-offset-2 sm:text-xl cursor-pointer"
        >
          Gaurab<span className="text-[#2954E5]">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 font-mono text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  onClick={handleAboutClick}
                  aria-current={currentActiveLink === link.href ? "page" : undefined}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          ref={toggleRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex items-center justify-center rounded-md border border-[#E3E1DC] bg-white p-2 text-[#14181F] transition-colors duration-200 hover:border-[#14181F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2954E5] focus-visible:ring-offset-2 md:hidden"
        >
          {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuMotion}
            initial="hidden"
            animate="show"
            exit="exit"
            className="mx-auto max-w-6xl px-4 pt-3 md:hidden"
          >
            <ul className="flex flex-col gap-1 rounded-lg border border-[#E3E1DC] bg-white p-2 font-mono text-sm shadow-[0_8px_24px_-16px_rgba(20,24,31,0.25)]">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={menuItemMotion}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleSectionClick(e, link.href)}
                      className={mobileLinkClass(link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={handleAboutClick}
                      aria-current={currentActiveLink === link.href ? "page" : undefined}
                      className={mobileLinkClass(link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;