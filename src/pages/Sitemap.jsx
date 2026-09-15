import React from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/services";
import { REGIONS } from "@/lib/regions";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Sitemap | THE FACE® Zürich" description="Übersicht aller Seiten von THE FACE® Zürich." />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Sitemap" }]} />
      <main className="px-5 sm:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-4xl font-semibold text-charcoal mb-2">Sitemap</h1>
          <div className="hairline w-16 mb-10" />

          <div className="grid sm:grid-cols-2 gap-10">
            <Group title="Hauptseiten">
              <Item to="/">Home</Item>
              <Item to="/behandlungen">Behandlungen</Item>
              <Item to="/regionen">Regionen</Item>
              <Item to="/bewertung">Bewertung</Item>
              <Item to="/impressum">Impressum</Item>
              <Item to="/datenschutz">Datenschutz</Item>
            </Group>

            <Group title="Behandlungen">
              {SERVICES.map((s) => (
                <Item key={s.slug} to={`/behandlungen/${s.slug}`}>
                  {s.name}
                </Item>
              ))}
            </Group>

            <Group title="Regionen">
              {REGIONS.map((r) => (
                <Item key={r.slug} to={`/regionen/${r.slug}`}>
                  Gesichtsbehandlung {r.short}
                </Item>
              ))}
            </Group>

            <Group title="Behandlung + Ort (Money Pages)">
              {SERVICES.slice(0, 4).map((s) =>
                REGIONS.slice(0, 3).map((r) => (
                  <Item key={`${s.slug}-${r.slug}`} to={`/behandlungen/${s.slug}/${r.slug}`}>
                    {s.short} {r.short}
                  </Item>
                ))
              )}
              <li className="text-charcoal/45 text-sm italic pt-1">
                …weitere Kombinationen über die jeweiligen Behandlungs- und Standortseiten erreichbar.
              </li>
            </Group>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Group({ title, children }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-semibold text-gold mb-3">{title}</h2>
      <ul className="space-y-2 text-sm text-charcoal/70">{children}</ul>
    </div>
  );
}

function Item({ to, children }) {
  return (
    <li>
      <Link to={to} className="hover:text-gold transition-colors">
        {children}
      </Link>
    </li>
  );
}