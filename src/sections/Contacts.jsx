import { useEffect, useRef, useState } from "react";
import { MdWork, MdArrowOutward } from "react-icons/md";
import emailjs from "@emailjs/browser";

const availability = {
  label: "Availability",
  value: "Open to opportunities · On-site · Remote",
  icon: MdWork,
};

function Contacts() {
  const AvailabilityIcon = availability.icon;
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [messageLength, setMessageLength] = useState(0);
  const statusTimeoutRef = useRef(null);

  const statusStyles = {
    idle: "border-transparent bg-transparent text-transparent",
    sending:
      "border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-700 dark:text-cyan-200",
    success:
      "border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-700 dark:text-emerald-200",
    error: "border-rose-400/30 bg-rose-400/[0.06] text-rose-700 dark:text-rose-200",
  };

  const dotStyles = {
    idle: "bg-transparent",
    sending: "bg-cyan-400 animate-pulse",
    success: "bg-emerald-400",
    error: "bg-rose-400",
  };

  const showStatus = (type, message, autoHide = true) => {
    if (statusTimeoutRef.current) clearTimeout(statusTimeoutRef.current);
    setStatusType(type);
    setStatusMessage(message);
    if (autoHide) {
      statusTimeoutRef.current = setTimeout(() => {
        setStatusType("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const validateForm = (form) => {
    const formData = new FormData(form);
    const name = formData.get("from_name").trim();
    const email = formData.get("from_email").trim().toLowerCase();
    const message = formData.get("message").trim();
    const namePattern = /^[a-zA-Z][a-zA-Z\s.'-]{1,59}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const blockedDomains = [
      "example.com",
      "fake.com",
      "test.com",
      "mailinator.com",
      "tempmail.com",
      "10minutemail.com",
    ];
    const emailDomain = email.split("@")[1];
    const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;

    if (!namePattern.test(name)) {
      showStatus("error", "Please enter a real name.");
      return false;
    }
    if (!emailPattern.test(email) || blockedDomains.includes(emailDomain)) {
      showStatus("error", "Please enter a valid email address.");
      return false;
    }
    if (message.length < 10) {
      showStatus("error", "Please write a little more about your message.");
      return false;
    }
    if (message.length > 700 || linkCount > 1) {
      showStatus("error", "Please remove spam-like text or extra links.");
      return false;
    }
    return true;
  };

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) clearTimeout(statusTimeoutRef.current);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateForm(form)) return;

    setIsSending(true);
    showStatus("sending", "Sending your message...", false);

    emailjs
      .sendForm("service_9u7lc4d", "template_9ul3gan", form, "Qoj0iNb29Y1NMf-q3")
      .then(
        () => {
          showStatus("success", "Message sent successfully. I'll reply soon.");
          form.reset();
          setMessageLength(0);
        },
        (error) => {
          showStatus("error", "Message failed to send. Please try again.");
          console.log(error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-16 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:py-24 sm:scroll-mt-28"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none sm:rounded-[28px]">
        {/* ambient accent glow, signature element */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.14] blur-[90px] dark:bg-cyan-400/[0.12]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.5fr_1fr] lg:items-stretch lg:gap-0 lg:p-0">
          {/* Left: intro */}
          <div className="min-w-0 lg:border-r lg:border-slate-200 lg:p-12 lg:dark:border-white/[0.08]">
            <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">04 / Contact </p>
            <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl">
              Let&apos;s build
              <br className="hidden sm:block" /> something together.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
              Available for opportunities, on-site roles, and remote
              collaboration. Send a message and I&apos;ll get back to you
              soon.
            </p>

            <div className="mt-9 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-colors duration-300 hover:border-cyan-400/40 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-cyan-300/30">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-slate-950 text-lg text-white dark:bg-white dark:text-slate-950">
                <AvailabilityIcon />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {availability.label}
                </span>
                <span className="mt-1 block text-sm font-medium leading-5 text-slate-700 dark:text-slate-200">
                  {availability.value}
                </span>
              </span>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={sendEmail}
            className="min-w-0 p-6 sm:p-10 lg:p-12"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white">
                Send a message
              </h3>
            </div>

            <div className="mt-6 grid gap-4">
              <label className="group text-sm font-medium text-slate-600 dark:text-slate-300">
                Name
                <input
                  type="text"
                  name="from_name"
                  required
                  minLength={2}
                  maxLength={60}
                  disabled={isSending}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:hover:border-white/[0.16] dark:focus:border-cyan-300/70 dark:focus:bg-white/[0.05]"
                  placeholder="Your name"
                />
              </label>

              <label className="group text-sm font-medium text-slate-600 dark:text-slate-300">
                Email
                <input
                  type="email"
                  name="from_email"
                  required
                  maxLength={120}
                  disabled={isSending}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:hover:border-white/[0.16] dark:focus:border-cyan-300/70 dark:focus:bg-white/[0.05]"
                  placeholder="your@email.com"
                />
              </label>

              <label className="group text-sm font-medium text-slate-600 dark:text-slate-300">
                <span className="flex items-center justify-between">
                  Message
                  <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                    {messageLength}/700
                  </span>
                </span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={700}
                  rows={5}
                  disabled={isSending}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/[0.08] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:hover:border-white/[0.16] dark:focus:border-cyan-300/70 dark:focus:bg-white/[0.05]"
                  placeholder="Tell me about your project"
                />
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="group relative mt-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:transition-all duration-400 ease-in-out hover:-translate-y-1 active:translate-y-0 "
              >

                {isSending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-slate-950/25 dark:border-t-slate-950" />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <MdArrowOutward className="text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <div
                aria-live="polite"
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-center text-sm font-medium transition-colors duration-300 ${statusStyles[statusType]}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[statusType]}`} />
                <span className={statusMessage ? "opacity-100" : "opacity-0"}>
                  {statusMessage || "Message status"}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;