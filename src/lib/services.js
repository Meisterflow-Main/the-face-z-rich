// SEO service cluster data for THE FACE® Zürich (Behandlungen).
// All content is real (sourced from the existing price list & brand data). No invented facts.

export const SERVICES = [
  {
    slug: "hautanalyse",
    name: "Hautanalyse & Beratung",
    short: "Hautanalyse",
    eyebrow: "Hautanalyse & Beratung",
    metaTitle: "Hautanalyse & Beratung in Zürich | THE FACE®",
    h1: "Hautanalyse & Beratung in Zürich",
    intro:
      "Mit der Dermalogica FACE-MAP und FACE-FIT analysiere ich Deine Haut gründlich und leite die passenden Pflegeschritte ab. Die persönliche Hautanalyse ist die Basis jeder Behandlung bei THE FACE®.",
    what:
      "Vor jeder Behandlung untersuche ich Deine Haut mit der FACE-MAP und FACE-FIT: Hauttyp, Hautzustand, Spannung, Pigmentveränderungen und Empfindlichkeiten. So weiss ich genau, was Deine Haut braucht – inklusive Quickboost.",
    benefits: [
      "Persönliche FACE-MAP & FACE-FIT Analyse",
      "Massgeschneiderte Pflegeempfehlung",
      "Basis für jede weitere Behandlung",
      "Auch für Teenager und sensible Haut",
    ],
    process: [
      "Hautanalyse mit FACE-MAP und FACE-FIT",
      "Beratung und Pflegeziel definieren",
      "Pflegeplan für zuhause",
    ],
    priceFactors: [{ label: "FACE-MAP und FACE-FIT", price: "95" }],
    faqs: [
      {
        q: "Was ist die FACE-MAP Analyse?",
        a: "Mit der Dermalogica FACE-MAP untersuche ich Deine Haut Zone für Zone und erkenne Hauttyp, Hautzustand und aktuelle Bedürfnisse. Daraus leite ich die passende Behandlung und Pflege ab.",
      },
      {
        q: "Brauche ich die Hautanalyse vor der ersten Behandlung?",
        a: "Ja. Jede Beratung beginnt mit der persönlichen Hautanalyse, damit die Behandlung optimal auf Deine Haut abgestimmt ist.",
      },
      {
        q: "Wie lange dauert die Hautanalyse?",
        a: "Die Analyse inklusive Quickboost dauert rund 30 Minuten.",
      },
    ],
    related: ["pro-skin-treatments", "targeted-skin-solutions", "longevity-glow-treatment"],
  },
  {
    slug: "pro-skin-treatments",
    name: "Pro Skin Treatments",
    short: "Pro Skin Treatments",
    eyebrow: "Dermalogica Signature Pro Skin",
    metaTitle: "Pro Skin Treatments in Zürich | THE FACE®",
    h1: "Pro Skin Treatments in Zürich",
    intro:
      "Die Dermalogica Signature Pro Skin Treatments sind auf Deinen Hautzustand abgestimmte Premium-Behandlungen mit sanfter Tiefenreinigung, Peeling und Maske, für spürbar revitalisierte Haut und einen frischen Glow.",
    what:
      "Je nach Zeit und Hautbedürfnis wähle ich die passende Dauer: von der kompakten 45-Minuten-Behandlung bis zur zweistündigen Ultra Skin 120. Jedes Treatment beginnt mit der FACE-MAP Analyse und wird auf Dich abgestimmt.",
    benefits: [
      "Auf Deinen Hautzustand abgestimmt",
      "Sanfte Tiefenreinigung, Peeling und Maske",
      "Inkl. FACE-MAP Analyse",
      "Von 45 bis 120 Minuten",
    ],
    process: [
      "Hautanalyse mit FACE-MAP",
      "Tiefenreinigung und Peeling",
      "Maske, Pflege und Abschluss",
    ],
    priceFactors: [
      { label: "Pro Skin 45: Quick Clear", price: "180" },
      { label: "Pro Skin 60", price: "225" },
      { label: "Pro Skin 90", price: "265" },
      { label: "Ultra Skin 120", price: "335" },
    ],
    faqs: [
      {
        q: "Welches Pro Skin Treatment passt zu mir?",
        a: "Das hängt von Deiner Zeit und Deinem Hautbedürfnis ab. Pro Skin 45 ist die kompakte Klärbehandlung, Pro Skin 60 die klassische Premium-Behandlung, Pro Skin 90 ausgiebiger und Ultra Skin 120 das rundum-Verwöhn-Treatment.",
      },
      {
        q: "Wie lange dauert ein Pro Skin Treatment?",
        a: "Je nach Variante 45, 60, 90 oder 120 Minuten.",
      },
      {
        q: "Sind die Produkte für sensible Haut geeignet?",
        a: "Ja. Ich arbeite mit sanften, hochwertigen Clean-Produkten und stimme die Auswahl auf Deine Haut ab.",
      },
    ],
    related: ["longevity-glow-treatment", "medical-skin-treatments", "targeted-skin-solutions"],
  },
  {
    slug: "targeted-skin-solutions",
    name: "Targeted Skin Solutions",
    short: "Targeted Skin Solutions",
    eyebrow: "Dermalogica Targeted Skin Solutions",
    metaTitle: "Targeted Skin Solutions in Zürich | THE FACE®",
    h1: "Targeted Skin Solutions in Zürich",
    intro:
      "Die Dermalogica Targeted Skin Solutions Treatments zielen auf konkrete Hautanliegen: Unreinheiten, Pigmentflecken, sensible Haut oder Rücken. Jede Behandlung ist auf Dein Hautbild abgestimmt.",
    what:
      "Ob Pro Clear bei Akne (Erwachsene und Teenager), Pro Back Clear für den Rücken, Pro Bright bei Pigmentflecken oder Pro Calm Treat bei sensibler, gereizter Haut. Ich wähle die passende Methode nach der FACE-MAP Analyse.",
    benefits: [
      "Gezielt bei Akne, Pigmenten, sensibler Haut",
      "Auch Pro Clear Young für Teenager",
      "Pro Back Clear für den Rücken",
      "Auf Dein Hautbild abgestimmt",
    ],
    process: [
      "FACE-MAP Analyse",
      "Gezielte Klär-, Aufhell- oder Beruhigungsbehandlung",
      "Pflege und Abschluss",
    ],
    priceFactors: [
      { label: "Pro Clear Young Big: Teenager", price: "160" },
      { label: "Pro Clear Young Small: Teenager", price: "100" },
      { label: "Pro Clear: Erwachsene", price: "225" },
      { label: "Pro Back Clear: Rücken", price: "100" },
      { label: "Pro Bright: Pigmentaufhellend", price: "210" },
      { label: "Pro Calm Treat: Beruhigend", price: "180" },
    ],
    faqs: [
      {
        q: "Hilft Pro Clear bei Akne?",
        a: "Ja. Pro Clear behandelt unreine Haut bei Erwachsenen gezielt und sanft. Vorab analysiere ich Deine Haut, um die Behandlung passgenau aufzustellen.",
      },
      {
        q: "Gibt es auch eine Behandlung für Teenager?",
        a: "Ja, Pro Clear Young ist speziell für jugendliche Haut – sanft und aufklärend, damit Jugendliche ihre Haut richtig pflegen lernen.",
      },
      {
        q: "Was macht Pro Bright?",
        a: "Pro Bright hellt Hyperpigmentation und ungleichmässigen Teint auf. Ich arbeite gezielt und sanft für einen ebenmässigeren Teint.",
      },
    ],
    related: ["pro-skin-treatments", "hautanalyse", "medical-skin-treatments"],
  },
  {
    slug: "medical-skin-treatments",
    name: "Medical Skin Treatments",
    short: "Medical Skin Treatments",
    eyebrow: "Dermalogica Medical Skin",
    metaTitle: "Medical Skin Treatments in Zürich | THE FACE®",
    h1: "Medical Skin Treatments in Zürich",
    intro:
      "Die Dermalogica Medical Skin Treatments verbinden medizinische Hautbehandlung mit der Pro Skin Philosophie: Exoboost mit Mikrodermabrasion oder Microneedling für sichtbar erneuerte Hautstruktur.",
    what:
      "Mit dem Exoboost Treatment wende ich entweder Mikrodermabrasion oder Microneedling 0.5 an, je nach Hautbild und Ziel. So verfeinere ich die Hautstruktur, werte Narben auf und rege die Erneuerung an.",
    benefits: [
      "Mikrodermabrasion oder Microneedling 0.5",
      "Sichtbar erneuerte Hautstruktur",
      "Für verfeinertes Hautbild und Narben",
      "Medizinische Präzision mit sanfter Hand",
    ],
    process: [
      "FACE-MAP Beratung",
      "Exoboost Mikrodermabrasion oder Microneedling",
      "Beruhigende Pflege und Abschluss",
    ],
    priceFactors: [{ label: "Exoboost Mikrodermabrasion oder Microneedling 0.5", price: "470" }],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Mikrodermabrasion und Microneedling?",
        a: "Mikrodermabrasion trägt die oberste Hautschicht sanft ab, Microneedling regt mit feinen Nadeln die Erneuerung an. Nach der FACE-MAP Beratung wähle ich die passende Methode.",
      },
      {
        q: "Hilft Microneedling bei Narben?",
        a: "Microneedling verfeinert das Hautbild und kann Narben aufwerten. Vorab analysiere ich Deine Haut, um realistisch zu beraten.",
      },
      {
        q: "Gibt es Nebenwirkungen?",
        a: "Mit sanften Clean-Produkten sind Nebenwirkungen selten. Gelegentlich eine kurze Rötung, die rasch abklingt. Ich berate Dich umfassend.",
      },
    ],
    related: ["longevity-glow-treatment", "pro-skin-treatments", "targeted-skin-solutions"],
  },
  {
    slug: "longevity-glow-treatment",
    name: "Longevity Glow Treatment",
    short: "Longevity Glow",
    eyebrow: "Longevity Glow",
    metaTitle: "Longevity Glow Treatment in Zürich | THE FACE®",
    h1: "Longevity Glow Treatment in Zürich",
    intro:
      "Das Longevity Glow Treatment und die Lumin Fusion Nanoneedling-Infusion sind innovative Anti-Aging-Behandlungen für nachhaltigen Glow und strahlende, jugendliche Haut.",
    what:
      "Mit der Lumin Fusion Nanoneedling-Infusion oder dem Longevity Glow Treat bringe ich tiefe Nährstoffe in die Haut und rege die Erneuerung an, für sichtbar frische, jugendliche Ausstrahlung.",
    benefits: [
      "Lumin Fusion Nanoneedling-Infusion",
      "Nachhaltiger Glow und jugendliche Ausstrahlung",
      "Sanft und schonend",
      "Für reifere und fältchenbetonte Haut",
    ],
    process: [
      "Hautanalyse",
      "Nanoneedling-Infusion oder Longevity Glow Treat",
      "Pflege und Abschluss",
    ],
    priceFactors: [
      { label: "Lumin Fusion Nanoneedling / Infusion", price: "245" },
      { label: "Longevity Glow Treat", price: "225" },
    ],
    faqs: [
      {
        q: "Was ist Lumin Fusion Nanoneedling?",
        a: "Eine sanfte Infusion mit Nanoneedling, die Nährstoffe tief in die Haut bringt und die Hautstruktur verbessert – für spürbaren Glow.",
      },
      {
        q: "Hilft das gegen Fältchen?",
        a: "Mit Longevity Glow und Nanoneedling behandle ich Fältchen gezielt. Vorab analysiere ich Deine Haut, um die passende Methode zu wählen.",
      },
      {
        q: "Wie oft sollte ich kommen?",
        a: "Für nachhaltige Ergebnisse empfehle ich alle vier bis sechs Wochen.",
      },
    ],
    related: ["medical-skin-treatments", "pro-skin-treatments", "hautanalyse"],
  },
  {
    slug: "make-up",
    name: "Make-up & Visagistik",
    short: "Make-up & Visagistik",
    eyebrow: "Make-up & Visagistik",
    metaTitle: "Make-up & Visagistik in Zürich | THE FACE®",
    h1: "Make-up & Visagistik in Zürich",
    intro:
      "Als Visagistin schminke ich Dich für jeden Anlass – von der Beratung über das Tages- und Abend-Make-up bis zum Brautmake-up. Natürlich, individuell und auf Dich abgestimmt.",
    what:
      "Mit Jane Iredale und Glowskinbeauty-Produkten schminke ich einen natürlichen Look, der zu Dir passt: von der farblichen Beratung bis zum langlebigen Brautmake-up für Deinen besonderen Tag.",
    benefits: [
      "Beratung, Tages-, Abend- und Brautmake-up",
      "Jane Iredale und Glowskinbeauty Produkte",
      "Natürliche, langlebige Looks",
      "Pflege und Make-up bei derselben Visagistin",
    ],
    process: [
      "Beratung und Farbabstimmung",
      "Make-up Anwendung",
      "Abschluss und Pflegetipp",
    ],
    priceFactors: [
      { label: "Make-up Beratung", price: "65" },
      { label: "Tages- & Abend-Make-up", price: "80" },
      { label: "Brautmake-up", price: "200" },
    ],
    faqs: [
      {
        q: "Bietetst Du Brautmake-up an?",
        a: "Ja, als Visagistin schminke ich Dich für Deinen grossen Tag: natürlich, individuell und langlebig.",
      },
      {
        q: "Welche Produkte werden verwendet?",
        a: "Ich arbeite mit Jane Iredale und Glowskinbeauty, hochwertigen Make-up-Marken, die sanft zur Haut sind.",
      },
      {
        q: "Brauche ich eine Voranmeldung für das Brautmake-up?",
        a: "Ja, für das Brautmake-up vereinbaren wir vorab einen Beratungstermin.",
      },
    ],
    related: ["lashlift", "hautanalyse", "pro-skin-treatments"],
  },
  {
    slug: "lashlift",
    name: "Lashlift",
    short: "Lashlift",
    eyebrow: "Ellebaana Lashlift",
    metaTitle: "Lashlift in Zürich | THE FACE®",
    h1: "Lashlift in Zürich",
    intro:
      "Der Ellebaana Wimpernlift inklusive blauschwarzer Wimpernfärbung gibt Dir einen wachen, offenen Blick, sanft und langanhaltend.",
    what:
      "Mit dem Ellebaana Wimpernlift forme ich Deine Wimpern sanft nach oben und färbe sie blauschwarz. Für einen wachen, natürlichen Blick ohne tägliche Mascara.",
    benefits: [
      "Ellebaana Wimpernlift",
      "Inkl. blauschwarzer Wimpernfärbung",
      "Wacher, offener Blick",
      "Langanhaltend und sanft",
    ],
    process: [
      "Beratung",
      "Wimpernlift und Färbung",
      "Abschluss und Pflegehinweis",
    ],
    priceFactors: [{ label: "Ellebaana Wimpernlift inkl. blauschwarzer Wimpernfärbung", price: "150" }],
    faqs: [
      {
        q: "Wie lange hält der Lashlift?",
        a: "Ein Ellebaana Wimpernlift hält in der Regel mehrere Wochen, je nach Wimpernwachstum.",
      },
      {
        q: "Ist die Wimpernfärbung inklusive?",
        a: "Ja, der Preis umfasst den Wimpernlift und die blauschwarze Wimpernfärbung.",
      },
      {
        q: "Kann ich den Lashlift mit einer Gesichtsbehandlung kombinieren?",
        a: "Ja, der Lashlift lässt sich wunderbar als Ergänzung zu einem Pro Skin Treatment einplanen.",
      },
    ],
    related: ["make-up", "pro-skin-treatments", "hautanalyse"],
  },
  {
    slug: "quantum-angel-healing",
    name: "Quantum Angel Healing®",
    short: "Quantum Angel Healing®",
    eyebrow: "Quantum Angel Healing®",
    metaTitle: "Quantum Angel Healing® in Zürich | THE FACE®",
    h1: "Quantum Angel Healing® in Zürich",
    intro:
      "Quantum Angel Healing® nach Eva-Maria Mora ist eine holistische Behandlung, die die Selbstheilung anregt. Eine besondere Ergänzung zur klassischen Gesichtspflege.",
    what:
      "Mit Quantum Angel Healing® nach Eva-Maria Mora arbeite ich energetisch und sanft, um Deinen Neustart der Selbstheilung mit Engeln zu unterstützen. Eine ruhige, achtsame Behandlung.",
    benefits: [
      "Nach Eva-Maria Mora",
      "Regt die Selbstheilung an",
      "Holistische Ergänzung",
      "Ruhig und achtsam",
    ],
    process: [
      "Vorgespräch",
      "Quantum Angel Healing® Sitzung",
      "Nachruhe und Abschluss",
    ],
    priceFactors: [{ label: "Neustart Selbstheilung mit Engeln", price: "188" }],
    faqs: [
      {
        q: "Was ist Quantum Angel Healing?",
        a: "Eine holistische Behandlung nach Eva-Maria Mora, die Selbstheilung anregt. Eine besondere Ergänzung zur klassischen Gesichtsbehandlung.",
      },
      {
        q: "Ist Quantum Angel Healing eine medizinische Behandlung?",
        a: "Nein. Es ist eine energetische, ganzheitliche Begleitung und ersetzt keine medizinische Diagnose oder Behandlung.",
      },
      {
        q: "Wie lange dauert eine Sitzung?",
        a: "Eine Sitzung dauert etwa 60 Minuten inklusive Vor- und Nachgespräch.",
      },
    ],
    related: ["hautanalyse", "pro-skin-treatments"],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);