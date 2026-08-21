import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const containerMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemMotion = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-32 text-center text-slate-950 sm:px-6"
    >
      <motion.div
        className="mx-auto w-full max-w-xl"
        variants={containerMotion}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-2xl mt-[-30px] leading-snug sm:text-3xl"
          variants={itemMotion}
        >
          <span className="font-bold text-slate-950">
            Hi, I&apos;m Gaurab
          </span>
          <span className="text-slate-600">
            , a web developer with a focus on full-stack applications.
          </span>
        </motion.h1>

        <motion.div className="mt-10 flex justify-center" variants={itemMotion}>
          <div className="relative">
            <span
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-cyan-400/20 blur-2xl"
              aria-hidden="true"
            />
            <img
              src="../../../LinkedPP.png"
              alt="Gaurab Bishwakarma"
              className="h-56 w-56 rounded-full object-cover shadow-xl ring-4 ring-white sm:h-64 sm:w-64"
              onError={(e) => {
                console.log("Image failed to load");
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

        <motion.div
          className="mt-7 flex items-center justify-center gap-5 text-2xl text-slate-700"
          variants={itemMotion}
        >
          <a
            href="mailto:gaurabbishwakarma22@gmail.com"
            className="transition-colors hover:text-cyan-600"
            aria-label="Email Gaurab"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://github.com/gaurabGits"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-600"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurab-lohar-a7a66a272/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-600"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ab_gau036"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-600"
            aria-label="X profile"
          >
            <FaSquareXTwitter />
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.div variants={itemMotion} className="mt-8">
          <button
            onClick={handleResume}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            <span>Resume</span>
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
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;