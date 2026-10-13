import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* ─── tiny SVG icons (no extra dep needed) ─── */
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── reusable contact link row ─── */
function ContactLink({ icon, label, href, display, external }) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className="group flex items-start gap-4 py-4 border-b border-gray-700 hover:border-amber-400 transition-colors duration-300"
      aria-label={`${label}: ${display}`}
    >
      {/* icon */}
      <span className="mt-0.5 text-gray-500 group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0">
        {icon}
      </span>

      {/* text */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-base font-bold font-serif text-white break-all group-hover:text-amber-400 transition-colors duration-300">
          {display}
        </p>
      </div>

      {/* arrow */}
      <span className="text-gray-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg flex-shrink-0 mt-1">
        ↗
      </span>
    </a>
  );
}

/* ─── inline error message ─── */
function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1 text-sm text-red-400 font-serif">
      {msg}
    </p>
  );
}

/* ─── main Contact component ─── */
export default function Contact() {
  const formRef = useRef(null);

  const [fields, setFields] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  /* validation */
  function validate() {
    const e = {};
    if (!fields.from_name.trim()) e.from_name = "Name is required.";
    if (!fields.from_email.trim()) {
      e.from_email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)) {
      e.from_email = "Please enter a valid email address.";
    }
    if (!fields.message.trim()) {
      e.message = "Message is required.";
    } else if (fields.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    /* honeypot check */
    const honeypot = formRef.current.querySelector('[name="website"]');
    if (honeypot && honeypot.value) return; // bot detected, silently bail

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFields({ from_name: "", from_email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  /* shared input class */
  const inputClass =
    "w-full bg-black text-white font-serif text-base px-4 py-3 rounded-lg border border-gray-700 " +
    "focus:outline-none focus:border-amber-400 placeholder:text-gray-600 transition-colors duration-200";

  return (
    <>
      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="w-full min-h-[600px] bg-black flex flex-col text-gray-600 p-8 border-b-2 border-gray-600 scroll-mt-24"
        aria-labelledby="contact-heading"
      >
        {/* heading */}
        <span
          id="contact-heading"
          className="text-6xl font-bold font-serif text-white mb-3"
        >
          Contact
        </span>
        <p className="text-base font-serif text-gray-600 mb-12 max-w-xl">
          Open to internships and collaborations.{" "}
          <span className="text-gray-500">Let's build something together.</span>
        </p>

        {/* two-column grid */}
        <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16">
          {/* ── LEFT: direct links ── */}
          <div className="w-full md:w-2/5 flex flex-col">
            <p className="text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-2">
              Reach me directly
            </p>

            <ContactLink
              icon={<MailIcon />}
              label="Email"
              href="mailto:isaacperera03@gmail.com"
              display="isaacperera03@gmail.com"
              external={false}
            />
            <ContactLink
              icon={<GithubIcon />}
              label="GitHub"
              href="https://github.com/isaac035"
              display="github.com/isaac035"
              external={true}
            />
            <ContactLink
              icon={<LinkedinIcon />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/isaac-perera-542962413"
              display="linkedin.com/in/isaac-perera"
              external={true}
            />
          </div>

          {/* ── RIGHT: contact form ── */}
          <div className="w-full md:w-3/5">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* honeypot – hidden from humans */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/* hidden to_email field for EmailJS template */}
              <input
                type="hidden"
                name="to_email"
                value="isaacperera03@gmail.com"
              />

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="from_name"
                  className="block text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-1.5"
                >
                  Name <span className="text-amber-400">*</span>
                </label>
                <input
                  id="from_name"
                  type="text"
                  name="from_name"
                  value={fields.from_name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  aria-required="true"
                  aria-describedby={errors.from_name ? "err-name" : undefined}
                  className={inputClass}
                />
                <FieldError msg={errors.from_name} />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="from_email"
                  className="block text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-1.5"
                >
                  Email <span className="text-amber-400">*</span>
                </label>
                <input
                  id="from_email"
                  type="email"
                  name="from_email"
                  value={fields.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  aria-required="true"
                  aria-describedby={errors.from_email ? "err-email" : undefined}
                  className={inputClass}
                />
                <FieldError msg={errors.from_email} />
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold font-serif text-gray-600 uppercase tracking-widest mb-1.5"
                >
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me what you have in mind…"
                  required
                  aria-required="true"
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`${inputClass} resize-none`}
                />
                <FieldError msg={errors.message} />
              </div>

              {/* hidden reply_to mirrors from_email */}
              <input
                type="hidden"
                name="reply_to"
                value={fields.from_email}
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                aria-disabled={status === "sending"}
                className="w-full sm:w-auto px-10 py-3 bg-amber-400 text-black font-bold font-serif text-lg
                           rounded-lg cursor-pointer
                           hover:bg-amber-300 active:scale-95
                           disabled:opacity-60 disabled:cursor-not-allowed
                           transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {/* Success / Error banners */}
              {status === "success" && (
                <p
                  role="status"
                  className="mt-5 text-sm font-bold font-serif text-green-400 border border-green-700 rounded-lg px-4 py-3 bg-green-950/40"
                >
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="mt-5 text-sm font-bold font-serif text-red-400 border border-red-700 rounded-lg px-4 py-3 bg-red-950/40"
                >
                  Something went wrong. Please email me directly at{" "}
                  <a
                    href="mailto:isaacperera03@gmail.com"
                    className="underline hover:text-amber-400 transition-colors"
                  >
                    isaacperera03@gmail.com
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-black px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600">
        <p className="text-sm font-serif">© 2026 Isaac Perera</p>
      </footer>
    </>
  );
}
