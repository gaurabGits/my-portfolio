import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const typewriterWords = [
  "Web Developer",
  "Quick Learner",
  "Problem Solver",
  "Hard Worker"
];

const heroStars = [
  { left: "6%", top: "22%", size: "h-1 w-1", delay: "0s", duration: "4.7s" },
  { left: "10%", top: "46%", size: "h-1.5 w-1.5", delay: "1.2s", duration: "3.8s" },
  { left: "14%", top: "72%", size: "h-1 w-1", delay: "2.4s", duration: "5.4s" },
  { left: "19%", top: "31%", size: "h-1 w-1", delay: "0.7s", duration: "4.1s" },
  { left: "23%", top: "62%", size: "h-1.5 w-1.5", delay: "1.8s", duration: "5.9s" },
  { left: "29%", top: "18%", size: "h-1 w-1", delay: "3s", duration: "3.5s" },
  { left: "31%", top: "82%", size: "h-1.5 w-1.5", delay: "0.4s", duration: "6.2s" },
  { left: "38%", top: "12%", size: "h-1 w-1", delay: "2.1s", duration: "4.4s" },
  { left: "43%", top: "86%", size: "h-1 w-1", delay: "1.5s", duration: "5.1s" },
  { left: "50%", top: "9%", size: "h-1.5 w-1.5", delay: "2.8s", duration: "3.9s" },
  { left: "55%", top: "84%", size: "h-1 w-1", delay: "0.9s", duration: "5.7s" },
  { left: "62%", top: "13%", size: "h-1 w-1", delay: "3.4s", duration: "4.2s" },
  { left: "68%", top: "79%", size: "h-1.5 w-1.5", delay: "1.1s", duration: "6s" },
  { left: "72%", top: "24%", size: "h-1 w-1", delay: "2.2s", duration: "3.7s" },
  { left: "76%", top: "64%", size: "h-1.5 w-1.5", delay: "0.3s", duration: "5.5s" },
  { left: "82%", top: "38%", size: "h-1 w-1", delay: "1.7s", duration: "4.9s" },
  { left: "87%", top: "74%", size: "h-1 w-1", delay: "2.9s", duration: "6.3s" },
  { left: "91%", top: "18%", size: "h-1.5 w-1.5", delay: "0.6s", duration: "4s" },
  { left: "95%", top: "50%", size: "h-1 w-1", delay: "3.6s", duration: "5.2s" },
];

const containerMotion = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const heroItemMotion = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = typewriterWords[wordIndex];
  const typedText = currentWord.slice(0, letterIndex);

  useEffect(() => {
    const isWordComplete = letterIndex === currentWord.length;
    const isWordDeleted = letterIndex === 0;
    const delay = isDeleting ? 55 : isWordComplete ? 1200 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % typewriterWords.length);
        return;
      }

      setLetterIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, letterIndex]);

  return (
    <section
      id="home"
      className="hero-section group/hero relative isolate flex min-h-screen items-center overflow-hidden bg-slate-50 px-4 py-24 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6"
    >
      <div className="hero-scene-bg absolute inset-0 -z-20" />
      <div className="hero-grid-lines absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-light-sweep absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-soft-light absolute inset-0 -z-10 opacity-60 transition-opacity duration-700 group-hover/hero:opacity-100" />
      <div
        className="hero-outer-orb absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-700/30 dark:border-white/10"
      />
      <div className="hero-water-ripple hero-ripple-size absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div
        className="hero-inner-orb absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-600/20 bg-white/20 dark:hidden"
      />
      <div className="hero-aura absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl dark:hidden" />

      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {heroStars.map((star) => (
          <span
            key={`${star.left}-${star.top}`}
            className={`hero-star absolute ${star.size}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <motion.div
        className="mx-auto w-full max-w-4xl pt-8 text-center sm:pt-0"
        variants={containerMotion}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="hero-status-badge mx-auto mb-6 mt-1 inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-cyan-700/20 bg-white/70 px-2.5 py-2 font-mono font-semibold text-cyan-800 shadow-sm shadow-cyan-900/5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80 min-[380px]:gap-2 min-[380px]:px-3 sm:px-4"
          variants={heroItemMotion}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.8)]" aria-hidden="true" />
          <span className="shrink-0 whitespace-nowrap">Open to opportunities</span>
          <span className="h-4 w-px bg-cyan-700/20 dark:bg-white/15" aria-hidden="true" />
          <span className="hero-typewriter-word inline-flex shrink-0 justify-start whitespace-nowrap text-emerald-700 dark:text-white/80">
            I'm a &lt; {typedText}
            <span className="ml-1 animate-pulse text-cyan-700 dark:text-cyan-200 ">|</span>
            /&gt;
          </span>
        </motion.p>

        <motion.h1
          className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl"
          variants={heroItemMotion}
        >
          <span className="hero-name-gradient mx-auto mt-2 block w-fit bg-clip-text text-transparent">
            Gaurab Bishwarkarma
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8"
          variants={heroItemMotion}
        >
          Building scalable MERN stack applications with modern UI/UX.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col justify-center gap-3 min-[380px]:flex-row sm:mt-9"
          variants={heroItemMotion}
        >
          <a
            href="#projects"
            className="animated-button rounded-full px-6 py-3 text-center font-semibold text-white dark:text-slate-950 sm:px-7"
          >
            <span className="relative z-10">See projects</span>
          </a>
          <a
            href="#contact"
            className="animated-button animated-button-soft rounded-full px-6 py-3 text-center font-semibold sm:px-7"
          >
            <span className="relative z-10">Say hello</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-divider mx-auto mt-14 h-px max-w-lg"
          variants={heroItemMotion}
        />

        <motion.div
          className="mt-5 flex justify-center gap-6"
          variants={heroItemMotion}
        >
          <a
            href="https://github.com/gaurabGits"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-icon-button grid h-10 w-10 place-items-center rounded-full text-2xl text-slate-800 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurab-lohar-a7a66a272/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-icon-button grid h-10 w-10 place-items-center rounded-full text-2xl text-slate-800 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ab_gau036"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-icon-button grid h-10 w-10 place-items-center rounded-full text-2xl text-slate-800 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
            aria-label="X profile"
          >
            <FaSquareXTwitter />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="hero-scroll-cue mx-auto mt-10 grid h-11 w-7 place-items-center rounded-full border border-slate-400/50 bg-white/30 backdrop-blur-sm transition-colors hover:border-cyan-600 dark:border-white/20 dark:bg-white/[0.04] dark:hover:border-cyan-300 sm:mt-12"
          aria-label="Scroll to about section"
          variants={heroItemMotion}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-700 dark:bg-cyan-200" />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
