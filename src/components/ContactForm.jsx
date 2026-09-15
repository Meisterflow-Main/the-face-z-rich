import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND, WEBHOOK } from "@/lib/brand";
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const STATUS = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };

export default function ContactForm() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte gib Deinen Namen ein.";
    if (!form.email.trim()) e.email = "Bitte gib Deine E-Mail ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ungültige E-Mail-Adresse.";
    if (!form.phone.trim()) e.phone = "Bitte gib Deine Telefonnummer ein.";
    if (!form.description.trim()) e.description = "Bitte beschreibe Dein Anliegen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // honeypot
    if (form.website) return;
    if (!validate()) return;
    setStatus(STATUS.LOADING);
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          description: form.description,
        }),
      });
      if (!res.ok) throw new Error("Webhook failed");
      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", phone: "", description: "" });
    } catch (err) {
      setStatus(STATUS.ERROR);
    }
  };

  const field = (name, label, type = "text", textarea = false) => (
    <div>
      <label className="block text-sm font-medium text-charcoal/70 mb-2">{label}</label>
      {textarea ? (
        <textarea
          rows={4}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-gold/20 bg-card px-4 py-3.5 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
          placeholder="Wie kann ich Dir helfen?"
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-gold/20 bg-card px-4 py-3.5 text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      )}
      {errors[name] && <p className="text-destructive text-xs mt-1.5">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="kontakt" className="py-24 sm:py-32 px-5 sm:px-8 bg-sand">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
              Kontakt
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-semibold text-foreground mb-6 leading-[1.12]">
              Beratung anfragen
            </h2>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/60 leading-relaxed mb-8">
              Hast Du Fragen? Sende mir eine Nachricht – ich melde mich gerne persönlich
              bei Dir. Oder buche direkt Deinen Termin online.
            </p>

            <div className="space-y-4">
              <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-card border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Phone size={18} className="text-gold group-hover:text-white transition-colors" />
                </span>
                <span className="text-charcoal/70 group-hover:text-gold transition-colors">{BRAND.phone}</span>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-card border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Mail size={18} className="text-gold group-hover:text-white transition-colors" />
                </span>
                <span className="text-charcoal/70 group-hover:text-gold transition-colors">{BRAND.email}</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-card border border-gold/20 flex items-center justify-center">
                  <MapPin size={18} className="text-gold" />
                </span>
                <span className="text-charcoal/70">
                  {BRAND.street}, {BRAND.city}
                  <br />
                  <span className="text-charcoal/50 text-sm">{BRAND.locationNote}</span>
                </span>
              </div>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-card border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Instagram size={18} className="text-gold group-hover:text-white transition-colors" />
                </span>
                <span className="text-charcoal/70 group-hover:text-gold transition-colors">@thefacezuerich</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 border border-gold/20 space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website || ""}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {field("name", "Name")}
              {field("email", "E-Mail", "email")}
              {field("phone", "Telefon", "tel")}
              {field("description", "Dein Anliegen", "text", true)}

              <p className="text-xs text-charcoal/50 leading-relaxed">
                Mit dem Absenden erklärst Du Dich mit der Verarbeitung Deiner Angaben gemäss meiner{" "}
                <Link to="/datenschutz" className="text-gold underline">Datenschutzerklärung</Link> einverstanden.
              </p>

              <button
                type="submit"
                disabled={status === STATUS.LOADING}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-lg transition-all"
              >
                {status === STATUS.LOADING && <Loader2 size={18} className="animate-spin" />}
                {status === STATUS.SUCCESS && <CheckCircle2 size={18} />}
                {status === STATUS.ERROR && <AlertCircle size={18} />}
                {status === STATUS.IDLE && <Send size={18} />}
                {status === STATUS.LOADING ? "Wird gesendet…" : "Anfrage senden"}
              </button>

              {status === STATUS.SUCCESS && (
                <p className="text-center text-sm text-green-700 bg-green-50 rounded-lg py-3 px-4">
                  Vielen Dank! Deine Anfrage ist eingegangen. Ich melde mich bald bei Dir.
                </p>
              )}
              {status === STATUS.ERROR && (
                <p className="text-center text-sm text-destructive bg-destructive/10 rounded-lg py-3 px-4">
                  Da ist leider etwas schiefgelaufen. Bitte versuche es später erneut oder
                  schreibe mir direkt per WhatsApp.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}