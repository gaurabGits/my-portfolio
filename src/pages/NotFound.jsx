import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";

function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-50 px-6 text-slate-950">
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-[120px]" />

      <section className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative inline-block">
          <span
            aria-hidden="true"
            className="absolute inset-0 text-[9rem] font-black leading-none tracking-[-0.08em] text-cyan-400/10 blur-sm sm:text-[12rem]"
          >
            404
          </span>

          <p className="relative font-mono text-7xl font-black leading-none tracking-[-0.06em] text-slate-900 sm:text-9xl">
            404
          </p>
        </div>

        <p className="mt-8 font-mono text-sm font-semibold text-cyan-600">
          Page not found
        </p>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
          Looks like you took a wrong turn.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
          The page you're looking for doesn't exist or may have
          been moved somewhere else.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
          >
            <HiArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back home
          </Link>

          <a
            href="mailto:gaurabbishwakarma22@gmail.com"
            className="group inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-950"
          >
            Need help?
            <HiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default NotFound;