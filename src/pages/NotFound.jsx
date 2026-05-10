import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 text-center text-slate-950 transition-colors duration-300 dark:bg-[#070b12] dark:text-white">
      <section className="max-w-xl">
        <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">
          404 / Page not found
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          The page may have moved, or the link may be incorrect.
        </p>
        <Link
          to="/"
          className="animated-button mt-8 inline-flex rounded-full px-7 py-3 font-semibold text-white dark:text-slate-950"
        >
          <span className="relative z-10">Back home</span>
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
