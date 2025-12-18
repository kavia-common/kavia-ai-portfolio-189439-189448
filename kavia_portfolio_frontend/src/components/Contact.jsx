import React, { useMemo, useState } from "react";

function normalizeBaseUrl(raw) {
  const v = (raw || "").trim();
  if (!v) return "";
  return v.replace(/\/+$/, "");
}

function isValidEmail(email) {
  // Lightweight validation (not RFC-perfect, good for client-side UX)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

// PUBLIC_INTERFACE
export default function Contact() {
  /** Contact section with client-side validation and graceful no-backend behavior. */
  const apiBase = useMemo(() => {
    const base =
      normalizeBaseUrl(process.env.REACT_APP_API_BASE) ||
      normalizeBaseUrl(process.env.REACT_APP_BACKEND_URL) ||
      "";
    return base;
  }, []);

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!isValidEmail(values.email)) next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    else if (values.message.trim().length < 10) next.message = "Please provide a bit more detail (10+ characters).";
    return next;
  };

  const submitToApi = async (payload) => {
    const url = `${apiBase}/contact`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Request failed (${res.status}). ${text}`.trim());
    }

    // Attempt JSON, but don’t require it.
    try {
      return await res.json();
    } catch {
      return { ok: true };
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      source: "kavia-portfolio"
    };

    setStatus({ state: "submitting", message: "Sending..." });

    // If no API base is configured, gracefully degrade: log locally.
    if (!apiBase) {
      // eslint-disable-next-line no-console
      console.log("[Contact form] No REACT_APP_API_BASE/REACT_APP_BACKEND_URL set. Payload:", payload);
      setStatus({
        state: "success",
        message: "Thanks! (No backend configured — message logged to console.)"
      });
      setValues({ name: "", email: "", message: "" });
      return;
    }

    try {
      await submitToApi(payload);
      setStatus({ state: "success", message: "Message sent. We’ll get back to you soon." });
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message: `Could not send message. ${err?.message || "Please try again later."}`
      });
    }
  };

  return (
    <section id="contact" className="section section--alt" aria-label="Contact">
      <div className="container">
        <header className="section-header">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let’s build something helpful</h2>
          <p className="section-subtitle">
            Send a message and we’ll respond soon. The form works without a backend (it will log to console).
          </p>
        </header>

        <div className="contact-grid">
          <form className="form" onSubmit={onSubmit} noValidate aria-label="Contact form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={onChange}
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <div id="name-error" className="field-error">
                  {errors.name}
                </div>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                autoComplete="email"
                placeholder="you@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <div id="email-error" className="field-error">
                  {errors.email}
                </div>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={onChange}
                placeholder="Tell us what you’d like to build with Kavia..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <div id="message-error" className="field-error">
                  {errors.message}
                </div>
              ) : null}
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" type="submit" disabled={status.state === "submitting"}>
                {status.state === "submitting" ? "Sending..." : "Send message"}
              </button>
              <span className="form-status" role="status" aria-live="polite">
                {status.message}
              </span>
            </div>
          </form>

          <aside className="notice" aria-label="Contact details">
            <h3>Details</h3>
            <p>
              Prefer email or want to integrate a backend? Configure{" "}
              <strong>REACT_APP_API_BASE</strong> (or <strong>REACT_APP_BACKEND_URL</strong>) and the form will POST to{" "}
              <code> /contact</code>.
            </p>

            <div className="kv" role="list" aria-label="Environment information">
              <div className="kv-item" role="listitem">
                <div className="kv-label">API Base</div>
                <div className="kv-value">{apiBase || "(not configured)"}</div>
              </div>
              <div className="kv-item" role="listitem">
                <div className="kv-label">Frontend URL</div>
                <div className="kv-value">{(process.env.REACT_APP_FRONTEND_URL || "").trim() || "(not set)"}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
