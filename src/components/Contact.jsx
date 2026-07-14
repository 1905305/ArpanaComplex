import { useState } from "react";
import Reveal from "./Reveal";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "715b3fad-b926-484d-9978-4927a7556780";

const SHOP_OPTIONS = [
  "General enquiry",
  "Shop 01",
  "Shop 02",
  "Shop 03",
  "Shop 04",
  "Shop 05",
  "Shop 06",
  "Shop 07",
];

export default function Contact({ selectedShop, setSelectedShop, contactRef }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        setSelectedShop("General enquiry");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact section-pad" id="contact" ref={contactRef}>
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Let's talk shop
        </Reveal>
        <Reveal as="h2" className="section-title">
          Enquire about
          <br />a unit.
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div" className="contact-info">
            <h3>Reach us directly</h3>
            <p>
              Call, message, or send the enquiry form — we'll get back to you with availability and rent for the
              unit you're interested in.
            </p>

            <div className="contact-line">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a href="tel:+916294382553">+91 62943 82553</a>
            </div>
            <div className="contact-line">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2z" />
              </svg>
              <a href="tel:+919934102334">+91 99341 02334</a>
            </div>
            <div className="contact-line">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              </svg>
              <span>Arpana Complex, Kutiyatu, Namkom, Jharkhand — 834010</span>
            </div>

            <div className="quick-actions">
              <a className="btn btn-primary" href="https://wa.me/916294382553" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
              <a className="btn btn-ghost" href="tel:+916294382553">
                Call now
              </a>
            </div>
          </Reveal>

          <Reveal as="form" className="form-card" onSubmit={handleSubmit}>
            {status === "success" && (
              <div className="success-msg show">
                &#10003; Thanks — your enquiry is noted. We'll call you back shortly.
              </div>
            )}
            {status === "error" && (
              <div className="success-msg show" style={{ background: "#5a2323", borderColor: "#8a3a3a" }}>
                &#9888; Couldn't send that — please call or WhatsApp us instead.
              </div>
            )}

            {/* Web3Forms configuration */}
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value="New enquiry — Arpana Complex website" />
            <input type="hidden" name="from_name" value="Arpana Complex website" />
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <div className="form-row">
              <label htmlFor="fname">Full name</label>
              <input type="text" id="fname" name="name" placeholder="Your name" required />
            </div>

            <div className="two-col">
              <div className="form-row">
                <label htmlFor="fphone">Phone number</label>
                <input type="tel" id="fphone" name="phone" placeholder="10-digit mobile" required pattern="[0-9]{10}" />
              </div>
              <div className="form-row">
                <label htmlFor="femail">Email (optional)</label>
                <input type="email" id="femail" name="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="fshop">Shop you're interested in</label>
              <select id="fshop" name="shop" value={selectedShop} onChange={(e) => setSelectedShop(e.target.value)}>
                {SHOP_OPTIONS.map((opt) => (
                  <option value={opt} key={opt}>
                    {opt === "General enquiry" ? "General enquiry — any unit" : opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="fmsg">Message</label>
              <textarea
                id="fmsg"
                name="message"
                placeholder="Tell us about your business and what you're looking for"
              />
            </div>

            <button type="submit" className="form-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
            <p className="form-note">
              This form sends straight to our inbox via Web3Forms. For a guaranteed response right now, call or
              WhatsApp the numbers above.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
