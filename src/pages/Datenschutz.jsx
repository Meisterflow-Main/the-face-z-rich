import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-charcoal/45 mb-8">Stand: September 2026</p>
          <div className="hairline w-16 mb-8" />

          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">1. Verantwortliche Stelle</h2>
              <p>
                THE FACE® Denise Claire Gadient, {BRAND.street}, {BRAND.city}, Telefon {BRAND.phone},
                E-Mail {BRAND.email}. Verantwortlich für die Datenverarbeitung auf dieser Website bin ich,
                Denise Claire Gadient.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">2. Grundsätze</h2>
              <p>
                Ich verarbeite Deine personenbezogenen Daten nach den Grundsätzen des Schweizer
                Datenschutzgesetzes (DSG): transparent, zweckgebunden, verhältnismässig und so sparsam
                wie möglich. Personenbezogene Daten sind alle Angaben, die sich auf eine identifizierte
                oder identifizierbare Person beziehen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">3. Rechtsgrundlage</h2>
              <p>
                Die Verarbeitung erfolgt auf Grundlage Deiner Einwilligung (Art. 6 DSG), zur
                Erfüllung vorvertraglicher Massnahmen (Art. 6 Abs. 2 DSG) oder zur Bearbeitung Deiner
                Anfrage. Soweit Du eine Einwilligung erteilst, kannst Du diese jederzeit mit Wirkung
                für die Zukunft widerrufen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">4. Kontaktformular</h2>
              <p>
                Wenn Du mir über das Kontaktformular schreibst, erhebe ich folgende Daten: Name,
                E-Mail, Telefon und Dein Anliegen. Diese Daten verwende ich ausschliesslich zur
                Bearbeitung Deiner Anfrage. Die Daten werden über eine verschlüsselte Verbindung an
                meinen Webhook-Anbieter MeisterFlow übermittelt und dort zur Bearbeitung gespeichert.
                Mit dem Absenden erklärst Du Dich mit dieser Verarbeitung einverstanden.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">5. Bewertungs-Feedback</h2>
              <p>
                Im Bewertungsbogen bewertest Du Deine Behandlung mit Sternen und optional mit Text.
                Dieses Feedback wird über eine verschlüsselte Verbindung an MeisterFlow übermittelt
                und intern zur Qualitätssicherung ausgewertet. Bewertungen mit 1 bis 3 Sternen werden
                nicht öffentlich geteilt. Bei 4 bis 5 Sternen leite ich Dich auf eine öffentliche
                Google-Bewertung weiter. Die Übermittlung an Google erfolgt erst, wenn Du den
                entsprechenden Link selbst aufrufst.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">6. Buchungssystem (Phorest)</h2>
              <p>
                Wenn Du einen Termin über den Buchungslink buchst, werden Deine Buchungsdaten (Name,
                E-Mail, Telefon, gewählte Behandlung und Termin) an Phorest, meinen Buchungs- und
                Terminverwaltungsdienst, übermittelt und dort verarbeitet. Phorest ist
                Auftragsverarbeiterin; massgeblich sind die Datenschutzbestimmungen von Phorest. Für
                die Buchung gelten die AGB und die Datenschutzerklärung von Phorest.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">7. WhatsApp</h2>
              <p>
                Über die WhatsApp-Verlinkung kannst Du mich direkt kontaktieren. Wenn Du WhatsApp
                nutzt, werden Deine Telefonnummer, Nachrichteninhalte und Metadaten an Meta bzw.
                WhatsApp LLC (USA) übermittelt. Ich habe keinen Einfluss auf diese Datenverarbeitung
                durch Meta. Für eine datenschutzfreundliche Alternative kannst Du mich per E-Mail
                oder Telefon kontaktieren.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">8. Hosting und Schriftarten</h2>
              <p>
                Diese Website wird auf der Plattform Base44 gehostet. Beim Aufruf der Website werden
                technische Daten (IP-Adresse, Datum, Uhrzeit, abgerufene Seiten) in Server-Logfiles
                verarbeitet, soweit dies für den Betrieb und die Sicherheit der Website erforderlich
                ist. Die Schriftarten werden über einen datenschutzfreundlichen Font-Dienst ohne
                Tracking ausgeliefert.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">9. Cookies und Einwilligung</h2>
              <p>
                Diese Website verwendet Cookies und lokale Speicherung (localStorage) zur Funktion
                und zur Speicherung Deiner Einwilligung. Du kannst im Cookie-Banner zwischen
                notwendigen, statistischen und Marketing-Cookies wählen oder alle ablehnen.
                Notwendige Cookies sind für den Betrieb erforderlich und können nicht abgewählt
                werden. Du kannst Deine Einwilligung jederzeit über den Link „Cookie-Einstellungen"
                im Footer widerrufen oder ändern.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">10. Aufbewahrungsfristen</h2>
              <p>
                Ich speichere Deine Daten nur so lange, wie es für den genannten Zweck erforderlich
                ist. Anfragedaten aus dem Kontaktformular und dem Bewertungsbogen werden nach
                Abschluss der jeweiligen Anfrage gelöscht, spätestens jedoch 24 Monate nach letztem
                Kontakt, sofern keine gesetzliche Aufbewahrungspflicht besteht. Buchungsdaten
                unterliegen der Aufbewahrungspraxis von Phorest.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">11. Datenübermittlung ins Ausland</h2>
              <p>
                Soweit Daten an Dienstleister im Ausland übermittelt werden (insbesondere
                WhatsApp/Meta in den USA und Phorest), erfolgt dies zur Erfüllung der genannten
                Zwecke. Für Übermittlungen in Staaten ohne angemessenen Datenschutz gemäss DSG bzw.
                DSGVO werden die erforderlichen Garantien berücksichtigt, soweit dies in meiner
                Einflussmöglichkeit liegt.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">12. Deine Rechte</h2>
              <p>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung Deiner personenbezogenen Daten sowie das Recht, eine erteilte
                Einwilligung zu widerrufen. Wende Dich dafür bitte an die unter Ziffer 1 genannte
                Kontaktadresse.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">13. Hinweis für Besucherinnen und Besucher aus der EU / EWR</h2>
              <p>
                Soweit Du aus der EU oder dem EWR zugreifst, können Dir die Rechte der
                Datenschutz-Grundverordnung (DSGVO) zustehen. Die vorliegende Datenschutzerklärung
                ist so gestaltet, dass sie den Kernanforderungen der DSGVO entspricht.
                Verantwortliche Stelle im Sinne der DSGVO ist die unter Ziffer 1 genannte Person.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">14. Social-Media-Links</h2>
              <p>
                Ich verlinke auf Profile in sozialen Netzwerken (Instagram). Beim Aufruf dieser
                Links verlässt Du meine Website; die Datenverarbeitung dort obliegt dem jeweiligen
                Anbieter. Von meiner Website aus werden keine Plugins oder Pixel Dritter
                eingebunden.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">15. Aktualität</h2>
              <p>
                Diese Datenschutzerklärung entspricht dem Stand September 2026. Ich behalte mir vor,
                sie bei Änderungen der eingesetzten Dienste oder der Rechtslage anzupassen.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}