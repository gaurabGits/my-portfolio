import { useEffect, useRef, useState } from "react";
import { MdArrowOutward, MdWork } from "react-icons/md";
import emailjs from "@emailjs/browser";

const availability = {
  label: "Currently available",
  value: "Open to opportunities",
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
    idle: "text-transparent",
    sending: "text-cyan-600",
    success: "text-emerald-600",
    error: "text-rose-600",
  };

  const dotStyles = {
    idle: "bg-transparent",
    sending: "bg-cyan-500 animate-pulse",
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

    const name = formData.get("from_name")?.trim() || "";
    const email = formData.get("from_email")?.trim().toLowerCase() || "";
    const message = formData.get("message")?.trim() || "";

    const namePattern = /^[a-zA-Z][a-zA-Z\s.'-]{1,59}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const allowedDomains = [
      "gmail.com",
      "outlook.com",
      "yahoo.com",
      "hotmail.com",
    ];

    const emailDomain = email.split("@")[1];

    const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;

    if (!namePattern.test(name)) {
      showStatus("error", "Please enter a valid name.");
      return false;
    }

    if (!emailPattern.test(email) || !allowedDomains.includes(emailDomain)) {
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

    if (!validateForm(form)) return;

    setIsSending(true);
    showStatus("sending", "Sending your message...", false);

    emailjs
      .sendForm("service_9u7lc4d", "template_9ul3gan", form, "Qoj0iNb29Y1NMf-q3")
      .then(() => {
        showStatus("success", "Message sent successfully. I'll get back to you soon.");
        form.reset();
        setMessageLength(0);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        showStatus("error", "Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 py-20 text-slate-950 transition-colors duration-300 sm:px-6 sm:py-28 sm:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-600" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              04 / Contact
            </p>
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Let's talk about what{" "}
            <span className="text-slate-500 dark:text-slate-400">you're building.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have a project, opportunity, or idea you'd like to discuss?
            Send me a message and let's start a conversation.
          </p>
        </div>

        {/* ================= CONTACT AREA ================= */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-between bg-slate-50/70 p-7 sm:p-10 lg:p-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Get in touch
              </p>

              <h3 className="mt-5 max-w-sm text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                Have something worth building?
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Tell me what you're working on, what you're trying to
                solve, or simply what you'd like to build. I'll take a
                look and get back to you.
              </p>
            </div>

            {/* Availability */}
            <div className="mt-12">
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-lg text-white shadow-sm">
                  <AvailabilityIcon />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {availability.label}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {availability.value}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Send a message
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                I'll usually get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={sendEmail}>
              <div className="space-y-6">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="from_name" className="mb-2 block text-xs font-medium text-slate-600">
                      Your name
                    </label>

                    <input
                      id="from_name"
                      type="text"
                      name="from_name"
                      required
                      minLength={2}
                      maxLength={60}
                      disabled={isSending}
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/5 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="from_email" className="mb-2 block text-xs font-medium text-slate-600">
                      Email address
                    </label>

                    <input
                      id="from_email"
                      type="email"
                      name="from_email"
                      required
                      maxLength={120}
                      disabled={isSending}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/5 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="message" className="text-xs font-medium text-slate-600">
                      Your message
                    </label>

                    <span className="font-mono text-[10px] text-slate-400">
                      {messageLength}/700
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={700}
                    rows={7}
                    disabled={isSending}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="min-h-[180px] w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-7 text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-200 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/5 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex h-12 cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <MdArrowOutward className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {/* Status */}
                <div
                  aria-live="polite"
                  className={`flex min-h-5 items-center justify-center gap-2 text-xs font-medium transition-all duration-300 ${statusStyles[statusType]}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[statusType]}`} />
                  {statusMessage || "Message status"}
                </div>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Usually replies within 24 hours.
        </p>
      </div>
    </section>
  );
}

export default Contacts;