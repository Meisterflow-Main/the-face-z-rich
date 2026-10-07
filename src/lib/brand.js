export const BRAND = {
  name: "THE FACE®",
  owner: "Denise Claire Gadient",
  street: "Rämistrasse 27",
  city: "8001 Zürich",
  locationNote: "vis-à-vis Parkhaus Hohe Promenade",
  phone: "+41 76 426 09 99",
  phoneRaw: "41764260999",
  email: "thefacezuerich@gmail.com",
  website: "theface-zuerich.ch",
  instagram: "https://www.instagram.com/thefacezuerich/",
  booking: "https://phorest.com/book/salons/thefacedeniseclairegadient",
  whatsapp: "https://wa.me/41764260999",
  // Verified Google Business listing (Rämistrasse 27, 8001 Zürich) – pins the practice, not just the street.
  maps: "https://www.google.com/maps?cid=15883321555023348624",
  googleReview:
    "https://www.google.com/maps/place/THE+FACE+Denise+Claire+Gadient/data=!4m2!3m1!1s0x0:0xdc6ce4cd0478c390?sa=X&ved=1t:2428&ictx=111",
};

// Single source for availability wording. Add client-approved opening hours to `hours`
// (e.g. { days: "Di – Fr", time: "09:00 – 18:00" }) – they then appear everywhere automatically.
export const AVAILABILITY = {
  hours: [],
  summary: "Termine nach Vereinbarung",
  booking: "Online-Buchung rund um die Uhr",
  onRequest: ["Auf Anfrage auch sonntags möglich", "Home Service auf Anfrage möglich", "Schaan & Vaduz (FL): ca. alle 6 Wochen für einen Tag – oder auf Anfrage"],
};

export const WEBHOOK =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export const ASSETS = {
  logo: "https://theface-zuerich.ch/wp-content/uploads/2026/02/logo.png",
  hero: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/f1b81e5fc_WhatsAppImage2026-09-30at165915.jpeg",
  banner: "https://theface-zuerich.ch/wp-content/uploads/2026/02/banner.png",
  partner1: "https://theface-zuerich.ch/wp-content/uploads/2026/02/partner1.png",
  partner2: "https://theface-zuerich.ch/wp-content/uploads/2026/02/partner2.png",
  partner3: "https://theface-zuerich.ch/wp-content/uploads/2026/02/partner3.png",
  partner4: "https://theface-zuerich.ch/wp-content/uploads/2026/02/partner4.png",
  janeIredale: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/bb753e413_ChatGPTImageSep30202607_25_17PM.png",
  madeleineWeleda: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/e0d877d06_ChatGPTImageSep30202607_39_04PM.png",
  instagram:
    "https://theface-zuerich.ch/wp-content/uploads/2026/08/Instagram_Glyph_Black-150x150.png",
};

// Partner brands with their role in the practice. Descriptions appear beneath
// each logo in the Stats section. Names marked CONFIRM need client verification.
export const PARTNER_BRANDS = [
  { logo: ASSETS.partner1, name: "Dermalogica", desc: "Meine Hauptmarke für professionelle Gesichtspflege – Clean Skincare, auf jeden Hautzustand abgestimmt." },
  { logo: ASSETS.partner2, name: "glo Skin Beauty", desc: "Clean Cosmetics für langlebige Make-up-Looks." },
  { logo: ASSETS.janeIredale, name: "Jane Iredale", desc: "Mineral Make-up & Clean Cosmetics für einen natürlichen Look." },
  { logo: ASSETS.partner4, name: "Phytomer", desc: "Spa- und Körperpflege mit marinen Wirkstoffen." },
  { logo: ASSETS.madeleineWeleda, name: "Minlen", desc: "Naturkosmetik für Kinder, Teenager und Erwachsene." },
];

export const TREATMENTS = [
  {
    title: "Hautanalyse",
    desc: "Persönliche Beratung und gründliche Analyse Deiner Haut inklusive chinesischer Hautlesung, die Basis jeder Behandlung.",
    benefit: "Erkenntnis & Massgeschneiderte Pflege",
    to: "/behandlungen/hautanalyse",
  },
  {
    title: "Pro Skin Treatment",
    desc: "Auf Deine Haut abgestimmte Premium-Behandlung mit hochwertigen Dermalogica-Produkten und sanften Händen.",
    benefit: "Tiefenwirksam & Revitalisierend",
    to: "/behandlungen/pro-skin-treatments",
  },
  {
    title: "Longevity Glow Treatment",
    desc: "Innovatives Skin Longevity-Treatment für nachhaltigen Glow und strahlende, jugendliche Haut.",
    benefit: "Jugendlich & strahlend",
    to: "/behandlungen/longevity-glow-treatment",
  },
  {
    title: "Revitalisierung",
    desc: "Wirkungsvolle Behandlungsgeräte für nachhaltige Regeneration und sichtbare Erneuerung der Haut.",
    benefit: "Regeneration & Elastizität",
    to: "/behandlungen/medical-skin-treatments",
  },
  {
    title: "Make-up & Visagistik",
    desc: "Als Visagistin schminke ich Dir ein natürliches, auf Dich abgestimmtes Make-up für jeden Anlass.",
    benefit: "Natürliche Schönheit",
    to: "/behandlungen/make-up",
  },
  {
    title: "Produkt-Empfehlungen",
    desc: "Individuelle Empfehlungen hochwertiger Clean-Produkte für Deine tägliche Pflegeroutine zuhause.",
    benefit: "Pflege für Zuhause",
    to: "/behandlungen",
  },
  {
    title: "PHYTOMER SPA RÜCKENBEHANDLUNG MIT MASSAGE UND ALGENPACKUNG",
    desc: "Wohltuende Rückenbehandlung mit Phytomer, entspannender Massage und pflegender Algenpackung für revitalisierte Haut.",
    benefit: "Entspannung & Revitalisierung",
    to: "/behandlungen/back-relax-revitalize",
  },
];

export const SKIN_CONCERNS = [
  "Jugend- und Altersakne",
  "Fältchen und Falten",
  "Hyperpigmentation",
  "Sensible Haut",
  "Teenager",
  "Erwachsene",
  "Silverager",
];

export const STATS = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "EFZ", label: "Zertifizierte Kosmetikerin" },
  { value: "VNISSG", label: "Haut & Pigmente Spezialistin" },
  { value: "100%", label: "Persönliche Beratung" },
];

export const FAQS = [
  {
    q: "Wie kann ich einen Termin buchen?",
    a: "Ganz einfach über meine Online-Buchung. Klicke auf „Termin buchen“ und wähle den gewünschten Zeitpunkt. Bei Fragen sende mir gerne eine WhatsApp.",
  },
  {
    q: "Für wen sind die Behandlungen geeignet?",
    a: "Für Kids, Teenager, Frauen, Männer und Senioren – jede Behandlung ist individuell auf Dich und Deinen Hautzustand abgestimmt. Ob Jugend- und Altersakne, Fältchen und Falten, Hyperpigmentation oder sensible Haut: ich passe jede Sitzung an Deine Bedürfnisse an.",
  },
  {
    q: "Welche Produkte werden verwendet?",
    a: "Ich arbeite ausschliesslich mit sorgfältig ausgewählten, zertifizierten Partnermarken – Clean Skincare & Clean Cosmetics. Dermalogica ist meine Hauptmarke für professionelle Gesichtspflege, individuell auf Deinen Hautzustand abgestimmt. glo Skin Beauty verwende ich für langlebige Make-up-Looks. Jane Iredale setze ich als Mineral Make-up für einen natürlichen Look ein. Phytomer nutze ich für Spa- und Körperbehandlungen mit marinen Wirkstoffen. Minlen ergänzt als Naturkosmetik für die ganze Familie – Kinder, Teenager und Erwachsene.",
  },
  {
    q: "Brauche ich eine Hautanalyse vor der ersten Behandlung?",
    a: "Ja, jede Beratung beginnt mit einer persönlichen Hautanalyse. So stelle ich sicher, dass die Behandlung optimal auf die Bedürfnisse Deiner Haut abgestimmt ist.",
  },
  {
    q: "Wo befindet sich die Praxis?",
    a: "Meine Praxis befindet sich an der Rämistrasse 27, 8001 Zürich, vis-à-vis Parkhaus Hohe Promenade. Alle Behandlungen finden an dieser Adresse statt.",
  },
  {
    q: "Wann sind Termine möglich?",
    a: "Termine vergebe ich nach Vereinbarung, bequem online buchbar. Auf Anfrage sind auch Termine am Sonntag möglich, ebenso Home Service auf Anfrage.",
  },
];