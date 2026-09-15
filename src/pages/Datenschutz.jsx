import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight, ArrowLeft, ShieldCheck, Database, Cookie, Lock, UserCheck, FileText, MapPin, MessageCircle, Calendar, Globe, Instagram, Star } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const SECTIONS = [
  { id: "verantwortlich", label: "Verantwortliche Stelle" },
  { id: "allgemein", label: "Allgemeine Hinweise" },
  { id: "daten", label: "Erhobene Daten" },
  { id: "zweck", label: "Zweck der Verarbeitung" },
  { id: "kontaktformular", label: "Kontaktformular" },
  { id: "bewertung", label: "Bewertungs-Feedback" },
  { id: "terminbuchung", label: "Terminbuchung (Phorest)" },
  { id: "google", label: "Google Maps & Bewertungen" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "social", label: "Social Media" },
  { id: "hosting", label: "Hosting & Schriftarten" },
  { id: "cookies", label: "Cookies" },
  { id: "analyse", label: "Analyse & Tracking" },
  { id: "speicherung", label: "Speicherdauer" },
  { id: "sicherheit", label: "Datensicherheit" },
  { id: "rechte", label: "Deine Rechte" },
  { id: "aenderungen", label: "Änderungen" },
  { id: "kontakt", label: "Kontakt" },
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
          <Icon size={16} className="text-gold" />
        </span>
        <h2 className="font-heading text-xl font-semibold text-charcoal">{title}</h2>
      </div>
      <div className="text-charcoal/70 text-sm leading-relaxed space-y-3 pl-10 sm:pl-11">{children}</div>
    </section>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-card border border-gold/15 rounded-2xl p-6">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-gold" />
        </span>
        <h3 className="font-heading text-base font-semibold text-charcoal">{title}</h3>
      </div>
      <div className="text-charcoal/70 text-sm leading-relaxed space-y-1.5">{children}</div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Datenschutzerklärung – THE FACE® Zürich",
  url: "https://theface-zuerich.ch/datenschutz",
  inLanguage: "de-CH",
  publisher: { "@type": "Organization", name: "THE FACE® Denise Claire Gadient" },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Datenschutzerklärung | THE FACE® Zürich"
        description="Informationen zur Verarbeitung personenbezogener Daten und zum Datenschutz bei THE FACE® Denise Claire Gadient in Zürich."
        jsonLd={jsonLd}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Datenschutz" }]} />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-24">
        <article className="mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">Datenschutz</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal mb-4 leading-tight">Datenschutzerklärung</h1>
            <p className="text-sm text-charcoal/45 mb-6">Stand: September 2026</p>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed max-w-2xl mb-6">
              Datenschutz ist mir ein wichtiges Anliegen. Ich verarbeite Deine personenbezogenen Daten transparent,
              zweckgebunden und so sparsam wie möglich – im Einklang mit dem Schweizer Datenschutzgesetz (DSG) und,
              soweit relevant, der Datenschutz-Grundverordnung (DSGVO). Auf dieser Seite erkläre ich Dir verständlich,
              welche Daten beim Besuch meiner Website, über meine Kontakt- und Bewertungsformulare sowie bei der
              Terminbuchung anfallen, wofür ich sie verwende, wie lange sie gespeichert werden und welche Rechte
              Dir zustehen. So weisst Du jederzeit nachvollziehbar, was mit Deinen Angaben geschieht.
            </p>
            <p className="text-charcoal/60 text-sm">
              Angaben zum Unternehmen findest Du im{" "}
              <Link to="/impressum" className="text-gold hover:underline">Impressum</Link>.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <div className="bg-sand rounded-2xl border border-gold/15 p-6 sm:p-7">
              <p className="font-heading text-sm font-semibold text-charcoal mb-4 tracking-wide">Inhaltsverzeichnis</p>
              <nav className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-gold transition-colors"
                  >
                    <span className="text-gold/60 text-xs w-6">{String(i + 1).padStart(2, "0")}</span>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            <Section id="verantwortlich" icon={UserCheck} title="1. Verantwortliche Stelle">
              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website im Sinne des DSG
                und der DSGVO bin ich:
              </p>
              <p className="font-medium text-charcoal">
                THE FACE® Denise Claire Gadient
                <br />
                {BRAND.street}, 8001 Zürich, Schweiz
                <br />
                Telefon: <a href={`tel:${BRAND.phoneRaw}`} className="text-gold hover:underline">{BRAND.phone}</a>
                <br />
                E-Mail: <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">{BRAND.email}</a>
                <br />
                Website: <a href={`https://${BRAND.website}`} className="text-gold hover:underline">{BRAND.website}</a>
              </p>
            </Section>

            <Section id="allgemein" icon={FileText} title="2. Allgemeine Hinweise">
              <p>
                Personenbezogene Daten sind alle Angaben, die sich auf eine identifizierte oder identifizierbare
                Person beziehen. Ich verarbeite solche Daten nach den Grundsätzen des Schweizer DSG: transparent,
                zweckgebunden, verhältnismässig und so sparsam wie möglich.
              </p>
              <p>
                Daten werden erhoben, wenn Du mir eine Nachricht sendest, einen Termin buchst, eine Bewertung
                abgibst oder diese Website besuchst. Die Verarbeitung erfolgt auf Grundlage Deiner Einwilligung
                (Art. 6 DSG), zur Erfüllung vorvertraglicher oder vertraglicher Massnahmen (Art. 6 Abs. 2 DSG)
                oder zur Bearbeitung Deiner Anfrage. Eine erteilte Einwilligung kannst Du jederzeit mit Wirkung
                für die Zukunft widerrufen.
              </p>
            </Section>

            <Section id="daten" icon={Database} title="3. Erhobene Daten">
              <p>Je nach Nutzung können folgende Daten verarbeitet werden:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kontaktformular:</strong> Name, E-Mail, Telefon, Dein Anliegen.</li>
                <li><strong>Bewertungs-Feedback:</strong> Sternebewertung und optionaler Text.</li>
                <li><strong>Terminbuchung:</strong> Name, E-Mail, Telefon, gewählte Behandlung und Termin.</li>
                <li><strong>Websitebesuch:</strong> IP-Adresse, Datum, Uhrzeit, abgerufene Seiten, Browser- und Geräteinformationen in Server-Logfiles.</li>
                <li><strong>Cookies & lokale Speicherung:</strong> Deine Einwilligungsentscheidung.</li>
              </ul>
              <p className="text-charcoal/50 text-xs pt-1">Datei-Uploads werden nicht angeboten.</p>
            </Section>

            <Section id="zweck" icon={ShieldCheck} title="4. Zweck der Datenverarbeitung">
              <p>Ich verarbeite Deine Daten ausschliesslich für folgende Zwecke:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bearbeitung Deiner Kontakt- und Behandlungsanfragen.</li>
                <li>Terminbuchung und Terminverwaltung.</li>
                <li>Qualitätssicherung anhand Deines Feedbacks.</li>
                <li>Betrieb, Sicherheit und Stabilität dieser Website.</li>
              </ul>
              <p className="text-charcoal/50 text-xs pt-1">Eine Analyse des Nutzungsverhaltens findet nicht statt.</p>
            </Section>

            <Section id="kontaktformular" icon={Mail} title="5. Kontaktformular">
              <p>
                Über das Kontaktformular erhebe ich Name, E-Mail, Telefon und Dein Anliegen. Diese Daten werden
                über eine verschlüsselte Verbindung an meinen Webhook-Anbieter MeisterFlow übermittelt und dort
                zur Bearbeitung gespeichert. Ich benötige diese Angaben, um Deine Anfrage beantworten und
                bearbeiten zu können. Mit dem Absenden erklärst Du Dich mit dieser Verarbeitung einverstanden.
              </p>
            </Section>

            <Section id="bewertung" icon={Star} title="6. Bewertungs-Feedback">
              <p>
                Im Bewertungsbogen bewertest Du Deine Behandlung mit Sternen und optional mit Text. Dieses Feedback
                wird über eine verschlüsselte Verbindung an MeisterFlow übermittelt und intern zur
                Qualitätssicherung ausgewertet. Bewertungen mit 1 bis 3 Sternen werden nicht öffentlich geteilt.
                Bei 4 bis 5 Sternen leite ich Dich auf eine öffentliche Google-Bewertung weiter. Die Übermittlung
                an Google erfolgt erst, wenn Du den entsprechenden Link selbst aufrufst.
              </p>
            </Section>

            <Section id="terminbuchung" icon={Calendar} title="7. Terminbuchung (Phorest)">
              <p>
                Wenn Du einen Termin über den Buchungslink buchst, werden Deine Buchungsdaten (Name, E-Mail,
                Telefon, gewählte Behandlung und Termin) an Phorest, meinen Buchungs- und
                Terminverwaltungsdienst, übermittelt und dort verarbeitet. Phorest ist Auftragsverarbeiterin;
                massgeblich sind die Datenschutzbestimmungen von Phorest. Für die Buchung gelten die AGB und die
                Datenschutzerklärung von Phorest.
              </p>
            </Section>

            <Section id="google" icon={MapPin} title="8. Google Maps & Bewertungen">
              <p>
                Auf der Bewertungsseite binde ich eine Google-Maps-Karte ein, um die Standortsuche zu erleichtern.
                Beim Aufruf der Karte können durch Google technische Daten (u. a. IP-Adresse) verarbeitet werden;
                massgeblich sind die Datenschutzbestimmungen von Google. Ausserdem verlinke ich auf mein
                öffentliches Google-Business-Profil. Eine Übermittlung Deiner Daten an Google erfolgt erst, wenn
                Du die Karte oder den Link selbst aufrufst.
              </p>
              <p className="text-charcoal/50 text-xs">Ausser der Karten- und Profil-Verlinkung werden keine weiteren Google-Dienste eingesetzt.</p>
            </Section>

            <Section id="whatsapp" icon={MessageCircle} title="9. WhatsApp">
              <p>
                Über die WhatsApp-Verlinkung kannst Du mich direkt kontaktieren. Die Nutzung von WhatsApp erfolgt
                freiwillig und setzt ein eigenes WhatsApp-Konto voraus. Wenn Du WhatsApp nutzt, werden
                Deine Telefonnummer, Nachrichteninhalte und Metadaten an Meta bzw. WhatsApp LLC (USA) übermittelt.
                Ich habe keinen Einfluss auf diese Datenverarbeitung durch Meta. Für eine datenschutzfreundliche
                Alternative kannst Du mich per E-Mail oder Telefon kontaktieren.
              </p>
            </Section>

            <Section id="social" icon={Instagram} title="10. Social Media">
              <p>
                Ich verlinke auf mein Instagram-Profil. Beim Aufruf dieses Links verlässt Du meine Website; die
                Datenverarbeitung dort obliegt Meta. Von meiner Website aus werden keine Plugins oder Pixel Dritter
                eingebunden. Weitere soziale Netzwerke werden nicht eingesetzt.
              </p>
            </Section>

            <Section id="hosting" icon={Globe} title="11. Hosting & Schriftarten">
              <p>
                Diese Website wird auf der Plattform Base44 gehostet. Beim Aufruf werden technische Daten
                (IP-Adresse, Datum, Uhrzeit, abgerufene Seiten) in Server-Logfiles verarbeitet, soweit dies für
                den Betrieb und die Sicherheit der Website erforderlich ist. Die Schriftarten werden über
                Bunny.net ausgeliefert – einen datenschutzfreundlichen Font-Dienst ohne Tracking und ohne
                Übermittlung Deiner IP an Drittanbieter wie Google.
              </p>
            </Section>

            <Section id="cookies" icon={Cookie} title="12. Cookies">
              <p>
                Diese Website verwendet Cookies und lokale Speicherung (localStorage) zur Funktion und zur
                Speicherung Deiner Einwilligung. Im Cookie-Banner unterscheidest Du zwischen notwendigen,
                statistischen und Marketing-Cookies. Notwendige Cookies sind für den Betrieb erforderlich und
                können nicht abgewählt werden. Statistik- und Marketing-Cookies sind derzeit nicht eingesetzt.
              </p>
              <p>
                Du kannst Deine Einwilligung jederzeit über den Link „Cookie-Einstellungen" im Footer widerrufen
                oder ändern.
              </p>
            </Section>

            <Section id="analyse" icon={ShieldCheck} title="13. Analyse & Tracking">
              <p>
                Es werden keine Analyse- oder Tracking-Tools eingesetzt. Eine Auswertung des Nutzungsverhaltens
                findet nicht statt, und es wird kein Consent Mode verwendet.
              </p>
            </Section>

            <Section id="speicherung" icon={Database} title="14. Speicherdauer">
              <p>
                Ich speichere Deine personenbezogenen Daten nur so lange, wie es für den jeweiligen Zweck
                erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Anfragedaten aus dem
                Kontaktformular und dem Bewertungsbogen werden nach Abschluss der jeweiligen Anfrage gelöscht,
                sofern keine gesetzliche Aufbewahrungspflicht besteht. Buchungsdaten unterliegen der
                Aufbewahrungspraxis von Phorest. Konkrete starre Fristen werden nicht festgelegt; massgeblich
                ist jeweils der Zweckbindung.
              </p>
            </Section>

            <Section id="sicherheit" icon={Lock} title="15. Datensicherheit">
              <p>Ich schütze Deine Daten durch angemessene Massnahmen:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>SSL-Verschlüsselung:</strong> Diese Website wird verschlüsselt ausgeliefert.</li>
                <li><strong>Technische Massnahmen:</strong> Zugriffskontrolle und regelmässige Updates.</li>
                <li><strong>Organisatorische Massnahmen:</strong> Zugang zu Daten nur für mich als Inhaberin.</li>
                <li><strong>Zugriffsschutz:</strong> Vertrauliche Verarbeitung bei meinen Auftragsverarbeiterinnen.</li>
              </ul>
            </Section>

            <Section id="rechte" icon={UserCheck} title="16. Deine Rechte">
              <p>Du hast jederzeit das Recht auf:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Auskunft</strong> über Deine verarbeiteten Daten.</li>
                <li><strong>Berichtigung</strong> unrichtiger Angaben.</li>
                <li><strong>Löschung</strong> Deiner Daten, soweit gesetzlich zulässig.</li>
                <li><strong>Einschränkung</strong> der Verarbeitung.</li>
                <li><strong>Widerspruch</strong> gegen die Verarbeitung sowie Widerruf einer erteilten Einwilligung.</li>
                <li><strong>Datenherausgabe</strong> in einem strukturierten Format, soweit anwendbar.</li>
              </ul>
              <p>Wende Dich dafür bitte an die unter Ziffer 1 genannte Kontaktadresse.</p>
            </Section>

            <Section id="aenderungen" icon={FileText} title="17. Änderungen">
              <p>
                Diese Datenschutzerklärung entspricht dem Stand September 2026. Ich behalte mir vor, sie bei
                Änderungen der eingesetzten Dienste oder der Rechtslage anzupassen. Es gilt jeweils die aktuelle
                Version, die auf dieser Website veröffentlicht ist.
              </p>
            </Section>

            <Section id="kontakt" icon={Phone} title="18. Kontakt">
              <p>Bei Fragen zum Datenschutz erreiche ich Dich gerne persönlich:</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href={`tel:${BRAND.phoneRaw}`} className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-5 py-3 rounded-lg transition-all hover:border-gold whitespace-nowrap">
                  <Phone size={16} className="text-gold" /> {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-5 py-3 rounded-lg transition-all hover:border-gold whitespace-nowrap">
                  <Mail size={16} className="text-gold" /> {BRAND.email}
                </a>
                <Link to="/#kontakt" className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-5 py-3 rounded-lg transition-all whitespace-nowrap">
                  <ArrowRight size={16} /> Kontaktformular
                </Link>
              </div>
            </Section>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mt-12">
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}