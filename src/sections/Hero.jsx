import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const containerMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const handleResume = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1-7yDNaQpFJ-j-7KK0qRrurZDgvUmYo1H/view";
  window.open(resumeUrl, "_blank", "noopener noreferrer");
};

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-22 text-center text-slate-950 sm:px-6"
    >
      <motion.div
        className="mx-auto w-full max-w-xl"
        variants={containerMotion}
        initial="hidden"
        animate="show"
      >
        {/* Profile Photo with Glow */}
        <motion.div className="flex justify-center" variants={itemMotion}>
          <div className="relative">
            <span
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-cyan-400/20 blur-2xl"
              aria-hidden="true"
            />
            <img
              src="../../../LinkedPP.png" // adjust path as needed
              alt="Gaurab Bishwakarma"
              className="h-56 w-56 rounded-full object-cover shadow-xl ring-4 ring-white sm:h-64 sm:w-64"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className="hidden h-56 w-56 items-center justify-center rounded-full bg-slate-900 font-mono text-3xl font-semibold text-white shadow-xl ring-4 ring-white sm:h-64 sm:w-64"
              aria-hidden="true"
            >
              GB
            </div>
          </div>
        </motion.div>

        {/* Name & Description (from first version) */}
        <motion.h1
          className="mt-6 text-3xl font-bold leading-snug sm:text-4xl"
          variants={itemMotion}
        >
          <span className="text-slate-950">Gaurab Bishwakarma</span>
        </motion.h1>

        {/* Buttons (Resume + View Projects) */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          variants={itemMotion}
        >
          <button
            onClick={handleResume}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/50 px-7 py-3 text-sm font-medium text-slate-800 transition-all duration-200 hover:border-slate-600 hover:bg-white hover:shadow-sm backdrop-blur-sm"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-5 text-2xl text-slate-700"
          variants={itemMotion}
        >
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Connect
            </span>
            <span className="h-4 w-px bg-slate-300" />
            <div className="flex items-center gap-4 text-2xl">
                <a
                  href="mailto:gaurabbishwakarma22@gmail.com"
                  className="transition-colors hover:text-cyan-600"
                  aria-label="Email"
                >
                  <HiOutlineMail />
                </a>
                <a
                  href="https://github.com/gaurabGits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-600"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaurab-lohar-a7a66a272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/ab_gau036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-600"
                  aria-label="X"
                >
                  <FaSquareXTwitter />
                </a>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;