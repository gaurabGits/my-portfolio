import { useEffect, useRef, useState } from "react";
import { MdWork } from "react-icons/md";
import emailjs from "@emailjs/browser";

const availability = {
  label: "Availability",
  value: "Open to opportunities - On-site - Remote",
  icon: MdWork,
};

function Contacts() {
  const AvailabilityIcon = availability.icon;
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const statusTimeoutRef = useRef(null);

  const statusStyles = {
    idle: "border-transparent bg-transparent text-transparent",
    sending: "border-cyan-300 bg-cyan-50 text-cyan-800 dark:border-cyan-300/40 dark:bg-cyan-300/10 dark:text-cyan-200",
    success: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-300/40 dark:bg-emerald-300/10 dark:text-emerald-200",
    error: "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-300/40 dark:bg-rose-300/10 dark:text-rose-200",
  };

  const dotStyles = {
    idle: "bg-transparent",
    sending: "bg-cyan-500",
    success: "bg-emerald-500",
    error: "bg-rose-500",
  };

  const showStatus = (type, message, autoHide = true) => {
    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
    }

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
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm(form)) {
      return;
    }

    setIsSending(true);
    showStatus("sending", "Sending your message...", false);

    emailjs
      .sendForm(
        "service_9u7lc4d",
        "template_9ul3gan",
        form,
        "Qoj0iNb29Y1NMf-q3"
      )
      .then(
        () => {
          showStatus("success", "Message sent successfully. I'll reply soon.");
          form.reset();
        },
        (error) => {
          showStatus("error", "Message failed to send. Please try again.");
          console.log(error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:py-24 sm:scroll-mt-28">
      <div className="mx-auto max-w-6xl rounded-xl border border-slate-300 bg-white p-4 shadow-xl shadow-slate-300/60 dark:border-white/10 dark:bg-white/3 dark:shadow-none sm:rounded-3xl sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="min-w-0">
            <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">04 / Contact</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Let&apos;s build together.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-700 dark:text-slate-300">
              Available for opportunities, on-site roles, and remote
              collaboration. Send a message and I&apos;ll get back to you.
            </p>

            <h4
              className="mt-8 flex cursor-default items-center gap-4 rounded-2xl border border-slate-300 bg-slate-100 p-4 transition dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-cyan-300/50 dark:hover:bg-slate-950/70"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-slate-950 text-xl text-white dark:bg-white dark:text-slate-950">
                <AvailabilityIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-600 dark:text-slate-500">
                  {availability.label}
                </span>
                <span className="block font-medium leading-6 text-slate-700 dark:text-slate-200">
                  {availability.value}
                </span>
              </span>
            </h4>
          </div>

          <form
            onSubmit={sendEmail}
            className="min-w-0 rounded-xl border border-slate-300 bg-slate-100 p-4 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/40 sm:rounded-2xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-950 dark:text-white sm:text-sm sm:tracking-[0.2em]">
                Send Message
              </h3>
            </div>

            <div className="mt-5 grid gap-4">
              <label className="text-sm font-semibold text-slate-700 transition-colors duration-300 focus-within:text-cyan-700 dark:text-slate-200 dark:focus-within:text-cyan-300">
                Name
                <input
                  type="text"
                  name="from_name"
                  required
                  minLength={2}
                  maxLength={60}
                  disabled={isSending}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10 focus:-translate-y-0.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/60 dark:focus:border-cyan-300"
                  placeholder="Your name"
                />
              </label>

              <label className="text-sm font-semibold text-slate-700 transition-colors duration-300 focus-within:text-cyan-700 dark:text-slate-200 dark:focus-within:text-cyan-300">
                Email
                <input
                  type="email"
                  name="from_email"
                  required
                  maxLength={120}
                  disabled={isSending}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10 focus:-translate-y-0.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/60 dark:focus:border-cyan-300"
                  placeholder="your@email.com"
                />
              </label>

              <label className="text-sm font-semibold text-slate-700 transition-colors duration-300 focus-within:text-cyan-700 dark:text-slate-200 dark:focus-within:text-cyan-300">
                Message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={700}
                  rows={5}
                  disabled={isSending}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10 focus:-translate-y-0.5 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/60 dark:focus:border-cyan-300"
                  placeholder="Tell me about your project"
                />
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="animated-button cursor-pointer rounded-full px-7 py-3 text-center font-semibold text-white dark:text-slate-950"
              >
                {isSending ? (
                  <span className="inline-flex items-center gap-3">
                    <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin dark:border-slate-950/30 dark:border-t-slate-950" />
                    Sending...
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              <div
                aria-live="polite"
                className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 text-center text-sm font-semibold transition-colors duration-300 ${statusStyles[statusType]}`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${dotStyles[statusType]}`}
                />
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
