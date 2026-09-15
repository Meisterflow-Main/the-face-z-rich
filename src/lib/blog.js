// Blog data for THE FACE® Zürich — central knowledge hub.
// Articles are authored in Swiss Hochdeutsch by Denise Claire Gadient.

const IMG = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const BLOG_INTRO = `Willkommen im Blog von THE FACE® Zürich. Hier teile ich mein Wissen aus über 30 Jahren Erfahrung in holistischer Gesichtspflege. Du findest Ratgeber zu Hautanalyse, Anti-Aging und Clean Beauty, praktische Tipps für Deine tägliche Pflegeroutine, Anleitungen zur Vorbereitung auf Deine erste Gesichtsbehandlung sowie Einblicke in meine Dienstleistungen und lokale Themen rund um Zürich. Der Blog richtet sich an Kundinnen und Kunden, die ihre Haut verstehen und bewusst pflegen möchten – ob Teenager mit Jugendakne, Erwachsene mit Hyperpigmentation oder Silverager mit Fältchen. Regelmässiges Lesen lohnt sich, weil ich aktuelle Erkenntnisse, neue Behandlungsmethoden und ehrliche Pflegetipps verständlich erkläre. So triffst Du informierte Entscheidungen für Deine Haut und verstehst, warum eine professionelle Hautanalyse der erste Schritt zu nachhaltig strahlender Haut ist. Stöbere in den Kategorien, entdecke passende Behandlungen und lass Dich inspirieren.`;

export const ARTICLES = [
  {
    slug: "hautanalyse-zuerich-erster-schritt",
    title: "Hautanalyse in Zürich: Warum sie der erste Schritt zu strahlender Haut ist",
    category: "Ratgeber",
    excerpt:
      "Eine professionelle Hautanalyse ist die Grundlage jeder wirksamen Behandlung. Erfahre, wie die FACE-MAP funktioniert, was sie Dir über Deine Haut verrät und warum sie in Zürich bei THE FACE® den Anfang jeder Pflege bildet.",
    date: "2026-09-01",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1570172619644-dfd03ed5d881"),
    metaTitle: "Hautanalyse in Zürich: Der erste Schritt zu strahlender Haut | THE FACE® Blog",
    metaDescription:
      "Warum eine professionelle Hautanalyse mit der FACE-MAP die Basis jeder Gesichtsbehandlung ist – erklärt von Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "Warum die Hautanalyse der Anfang von allem ist",
        paragraphs: [
          "Jede Haut ist anders. Bevor ich eine Behandlung empfehle, analysiere ich Deine Haut mit der Dermalogica FACE-MAP und FACE-FIT – Zone für Zone. So erkenne ich Hauttyp, Hautzustand, Spannung, Pigmentveränderungen und Empfindlichkeiten. Erst aus diesem Bild leite ich ab, was Deine Haut wirklich braucht.",
          "Ohne Analyse wäre eine Behandlung Raterei. Mit ihr wird Pflege zur Massarbeit. Deshalb beginnt jede Beratung bei THE FACE® mit dieser gründlichen Untersuchung, inklusive eines Quickboosts, der Deiner Haut sofort etwas Gutes tut.",
        ],
      },
      {
        heading: "Was die FACE-MAP über Deine Haut verrät",
        paragraphs: [
          "Die FACE-MAP teilt Dein Gesicht in Zonen ein und liest sie wie eine Karte. Rötungen in der T-Zone deuten auf andere Bedürfnisse hin als Trockenheit an den Wangen oder Pigmentflecken am Dekolleté. So sehe ich, ob Deine Haut Feuchtigkeit, Klärung, Beruhigung oder Aufhellung braucht.",
          "Die FACE-FIT ergänzt das Bild um Spannung und Elastizität. Gemeinsam entsteht ein Pflegeplan, der genau zu Deinem aktuellen Hautzustand passt – und sich mit Dir entwickelt, wenn sich Deine Haut verändert.",
        ],
      },
      {
        heading: "Für wen sich die Analyse besonders lohnt",
        paragraphs: [
          "Für alle, die ihre Haut ernst nehmen möchten: Teenager, die ihre erste Pflege lernen, Erwachsene mit Akne oder Pigmentflecken, Silverager mit Fältchen. Wer weiss, was seine Haut braucht, kauft nicht mehr blind – und spart sich Fehlkäufe.",
          "Auch wenn Du schon eine Routine hast, lohnt sich ein Check: Haut verändert sich mit Jahreszeit, Stress und Alter. Eine jährliche Analyse hält Deine Pflege aktuell.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert die Hautanalyse?",
        a: "Die Analyse inklusive Quickboost dauert rund 30 Minuten.",
      },
      {
        q: "Brauche ich die Analyse vor der ersten Behandlung?",
        a: "Ja. Jede Beratung beginnt mit der persönlichen Hautanalyse, damit die Behandlung optimal auf Deine Haut abgestimmt ist.",
      },
      {
        q: "Ist die Analyse auch für sensible Haut geeignet?",
        a: "Absolut. Gerade bei sensibler Haut ist die schonende Untersuchung wichtig, um keine falschen Produkte zu empfehlen.",
      },
    ],
    related: ["welches-treatment-passt-zu-dir", "clean-beauty-was-wirklich-dahinter-steckt", "vorbereitung-erste-gesichtsbehandlung"],
  },
  {
    slug: "clean-beauty-was-wirklich-dahinter-steckt",
    title: "Clean Beauty: Was wirklich hinter dem Begriff steckt",
    category: "Ratgeber",
    excerpt:
      "Clean Beauty ist mehr als ein Trend. Erfahre, was hochwertige Clean-Produkte auszeichnet, warum sie Deine Haut schonen und worauf Du beim nächsten Produktkauf in Zürich achten solltest.",
    date: "2026-08-22",
    author: "Denise Claire Gadient",
    readTime: 6,
    hero: IMG("1616394584738-fc6e612e71b9"),
    metaTitle: "Clean Beauty erklärt: Was wirklich dahinter steckt | THE FACE® Blog",
    metaDescription:
      "Clean Beauty verständlich erklärt: hochwertige, sanfte Produkte, die Deine Haut schonen. Ein Ratgeber von Kosmetikerin Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "Was Clean Beauty tatsächlich bedeutet",
        paragraphs: [
          "Clean Beauty steht für Pflege, die auf unnötige Belastungen verzichtet: keine aggressiven Konservierungsstoffe, keine überflüssigen Duftstoffe, dafür sorgfältig ausgewählte Wirkstoffe. Es geht nicht um Perfektion, sondern um Verträglichkeit und Transparenz.",
          "Bei THE FACE® arbeite ich ausschliesslich mit hochwertigen und innovativen Clean-Produkten, die Deine Haut sanft und nachhaltig pflegen. Sie sind die Basis jeder Behandlung – und jeder Empfehlung für zuhause.",
        ],
      },
      {
        heading: "Warum sanfte Produkte langfristig gewinnen",
        paragraphs: [
          "Aggressive Pflege kann die Hautbarriere schwächen – mit dem paradoxen Ergebnis, dass die Haut empfindlicher wird. Clean-Produkte respektieren die Barriere und unterstützen sie. So bleibt die Haut widerstandsfähig statt überreizt.",
          "Wer auf Verträglichkeit setzt, sieht oft erst nach Wochen den Unterschied – aber er ist nachhaltig. Die Haut beruhigt sich, der Teint wird gleichmässiger, und Du brauchst weniger, nicht mehr.",
        ],
      },
      {
        heading: "Worauf Du beim Kauf achten solltest",
        paragraphs: [
          "Kurze Inhaltsstoffe, transparente Herkunft und ein Hauttyp, der zu Dir passt. Lass Dich nicht von Marketingbegriffen blenden – massgeblich ist, wie Dein Hautbild reagiert. Eine Hautanalyse gibt Dir die Sicherheit, die richtigen Produkte zu erkennen.",
          "Wer unsicher ist, bringt seine Produkte gerne zur Beratung mit. Gemeinsam prüfen wir, ob sie zu Deiner Haut passen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Sind Clean-Produkte teurer?",
        a: "Hochwertige Wirkstoffe kosten mehr, sind aber oft ergiebiger. Du brauchst weniger Produkt und pflegst nachhaltiger.",
      },
      {
        q: "Hilft Clean Beauty bei Akne?",
        a: "Sanfte, klärende Produkte können die Haut beruhigen, ohne sie auszutrocknen. Bei Akne kombiniere ich sie mit gezielten Treatments wie Pro Clear.",
      },
      {
        q: "Wo finde ich die richtigen Produkte?",
        a: "In der Praxis erhältst Du nach der Hautanalyse individuelle Empfehlungen für Deine Pflegeroutine zuhause.",
      },
    ],
    related: ["hautanalyse-zuerich-erster-schritt", "welches-treatment-passt-zu-dir", "anti-aging-ohne-eingriff-longevity-glow"],
  },
  {
    slug: "anti-aging-ohne-eingriff-longevity-glow",
    title: "Anti-Aging ohne Eingriff: Der Longevity Glow Ansatz",
    category: "Tipps",
    excerpt:
      "Falten müssen nicht immer Spritzen bedeuten. Erfahre, wie das Longevity Glow Treatment und die Lumin Fusion Nanoneedling-Infusion sanft für jugendliche Ausstrahlung sorgen – ganz ohne invasive Eingriffe.",
    date: "2026-08-10",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1552693673-1bf958298935"),
    metaTitle: "Anti-Aging ohne Eingriff: Longevity Glow erklärt | THE FACE® Blog",
    metaDescription:
      "Sanftes Anti-Aging mit Longevity Glow und Lumin Fusion Nanoneedling – jugendliche Ausstrahlung ohne invasive Eingriffe. Ein Beitrag von THE FACE® Zürich.",
    sections: [
      {
        heading: "Warum sanft oft mehr bewirkt",
        paragraphs: [
          "Viele denken bei Anti-Aging sofort an Spritzen. Doch die Haut lässt sich auch schonend zur Erneuerung anregen. Das Longevity Glow Treat bringt tiefe Nährstoffe in die Haut und regt die Regeneration an – für sichtbar frische, jugendliche Ausstrahlung.",
          "Der Vorteil: kein Eingriff, kaum Erholungszeit, natürliche Ergebnisse. Wer es dezent mag, ist hier richtig.",
        ],
      },
      {
        heading: "Wie die Lumin Fusion Nanoneedling-Infusion wirkt",
        paragraphs: [
          "Die Lumin Fusion arbeitet mit Nanoneedling, das feine Nährstoffe tief in die Haut bringt, ohne die Barriere stark zu beanspruchen. So verbessert sich die Hautstruktur, der Teint wirkt frischer und Fältchen werden weicher.",
          "Vorab analysiere ich Deine Haut, um die passende Methode und Intensität zu wählen. Für nachhaltige Ergebnisse empfehle ich alle vier bis sechs Wochen.",
        ],
      },
      {
        heading: "Für wen sich der Ansatz eignet",
        paragraphs: [
          "Besonders für reifere, fältchenbetonte Haut, die sich Regeneration ohne Kompromisse wünscht. Aber auch, wer erste Zeichen der Zeit sanft begegnen möchte, profitiert. Eine Beratung zeigt, ob Longevity Glow oder ein Pro Skin Treatment besser passt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ist Nanoneedling schmerzhaft?",
        a: "Nein. Die Lumin Fusion arbeitet mit feinen Nanones sanft an der Hautoberfläche. Die meisten Kundinnen empfinden es als angenehm.",
      },
      {
        q: "Wie schnell sehe ich Ergebnisse?",
        a: "Ein frischerer Teint ist oft direkt sichtbar. Für nachhaltige Strukturverbesserung empfehle ich eine Serie im Abstand von vier bis sechs Wochen.",
      },
      {
        q: "Kann ich es mit anderen Treatments kombinieren?",
        a: "Ja. Longevity Glow lässt sich wunderbar mit der Hautanalyse und Pro Skin Treatments ergänzen.",
      },
    ],
    related: ["welches-treatment-passt-zu-dir", "hautanalyse-zuerich-erster-schritt", "hyperpigmentation-behandeln"],
  },
  {
    slug: "vorbereitung-erste-gesichtsbehandlung",
    title: "So bereitest Du Dich auf Deine erste Gesichtsbehandlung vor",
    category: "Anleitungen",
    excerpt:
      "Deine erste Gesichtsbehandlung steht an? Mit dieser einfachen Anleitung weisst Du, was Du vorab tun kannst, was Du vermeiden solltest und wie Du das Beste aus Deinem Termin bei THE FACE® herausholst.",
    date: "2026-07-28",
    author: "Denise Claire Gadient",
    readTime: 4,
    hero: IMG("1731514771613-991a02407132"),
    metaTitle: "Erste Gesichtsbehandlung: So bereitest Du Dich vor | THE FACE® Blog",
    metaDescription:
      "Praktische Anleitung zur Vorbereitung auf Deine erste Gesichtsbehandlung in Zürich – Tipps von Kosmetikerin Denise Claire Gadient, THE FACE®.",
    sections: [
      {
        heading: "Eine Woche vorher: Haut beruhigen",
        paragraphs: [
          "Verzichte eine Woche vor dem Termin auf starke Peelings, neue Produkte oder intensive Sonneneinstrahlung. Die Haut soll entspannt und ungereizt in die Behandlung gehen. So kann ich sie klar analysieren.",
          "Neue Pflege kurz vor dem Termin kann Rötungen verursachen, die die Hautanalyse erschweren. Bleib bei Deiner gewohnten, sanften Routine.",
        ],
      },
      {
        heading: "Am Tag selbst: ungeschminkt kommen",
        paragraphs: [
          "Komm idealerweise ungeschminkt oder mit nur leichter Pflege. So spare ich Reinigungszeit und Deine Haut hat mehr von der Behandlung. Wenn das nicht klappt, kein Problem – die Reinigung ist Teil jedes Treatments.",
          "Verzichte auf Cremes mit hohem Lichtschutzfaktor direkt vor der Behandlung, falls wir peelend arbeiten. Ich berate Dich individuell.",
        ],
      },
      {
        heading: "Nach der Behandlung: Pflege geben, Reize meiden",
        paragraphs: [
          "Nach der Behandlung ist Deine Haut aufnahmebereit und gleichzeitig empfindlich. Verzichte 24 Stunden auf Make-up, Sport und heisse Duschen. Schütze Deine Haut tagsüber mit SPF, besonders nach peelenden Treatments.",
          "Ich gebe Dir nach jedem Termin einen individuellen Pflegetipp für zuhause mit – passend zu Deiner Haut und der Behandlung.",
        ],
      },
    ],
    faqs: [
      {
        q: "Darf ich vor der Behandlung Make-up tragen?",
        a: "Idealerweise kommst Du ungeschminkt. Falls nicht, ist die Reinigung Teil der Behandlung und kein Problem.",
      },
      {
        q: "Wie lange dauert die Erholung?",
        a: "Bei den meisten Treatments gibt es keine Ausfallzeit. Nach peelenden Behandlungen kann die Haut kurz gerötet sein und erholt sich rasch.",
      },
      {
        q: "Sollte ich vorab essen?",
        a: "Eine leichte Mahlzeit ist gut – eine entspannte Behandlung beginnt mit einem entspannten Gefühl.",
      },
    ],
    related: ["hautanalyse-zuerich-erster-schritt", "welches-treatment-passt-zu-dir", "kosmetikerin-zuerich-finden"],
  },
  {
    slug: "welches-treatment-passt-zu-dir",
    title: "Gesichtsbehandlung in Zürich: Welches Treatment passt zu Dir?",
    category: "Dienstleistungen",
    excerpt:
      "Von Pro Skin 45 bis Ultra Skin 120 – die Auswahl kann verwirren. Dieser Überblick hilft Dir, das passende Treatment für Deine Haut, Deine Zeit und Deine Ziele bei THE FACE® zu finden.",
    date: "2026-07-15",
    author: "Denise Claire Gadient",
    readTime: 6,
    hero: IMG("1643684391140-c5056cfd3436"),
    metaTitle: "Welches Gesichtsbehandlung-Treatment passt zu Dir? | THE FACE® Blog",
    metaDescription:
      "Überblick über die Pro Skin, Targeted und Medical Skin Treatments bei THE FACE® Zürich – damit Du das passende Treatment für Deine Haut findest.",
    sections: [
      {
        heading: "Pro Skin Treatments: die Premium-Klassiker",
        paragraphs: [
          "Die Dermalogica Signature Pro Skin Treatments sind auf Deinen Hautzustand abgestimmt – mit Tiefenreinigung, Peeling und Maske. Von der kompakten 45-Minuten-Klärbehandlung bis zur zweistündigen Ultra Skin 120 wählst Du die Dauer, die zu Dir passt.",
          "Pro Skin 45 eignet sich, wenn Du schnell Klärung willst. Pro Skin 60 ist die klassische Premium-Behandlung, Pro Skin 90 ausgiebiger und Ultra Skin 120 das rundum-Verwöhn-Treatment.",
        ],
      },
      {
        heading: "Targeted Skin Solutions: gezielt bei konkreten Anliegen",
        paragraphs: [
          "Wenn Du ein klares Hautanliegen hast – Akne, Pigmentflecken, sensible Haut oder Rücken –, sind die Targeted Skin Solutions richtig. Pro Clear behandelt unreine Haut, Pro Bright hellt Pigmente auf, Pro Calm beruhigt gereizte Haut.",
          "Für Teenager gibt es Pro Clear Young, sanft und aufklärend. So lernt die junge Haut früh, sich richtig zu pflegen.",
        ],
      },
      {
        heading: "Medical Skin Treatments: wenn Tiefe gefragt ist",
        paragraphs: [
          "Für verfeinerte Hautstruktur und Narben empfehle ich das Exoboost Treatment mit Mikrodermabrasion oder Microneedling 0.5. Hier arbeite ich medizinisch präzise, aber mit sanfter Hand. Vorab erfolgt eine ausführliche FACE-MAP Beratung.",
          "Welcher Weg der richtige ist, entscheidet die Hautanalyse. Sie ist der Schlüssel zu jeder Empfehlung.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welches Treatment für Anfänger?",
        a: "Pro Skin 60 ist ein idealer Einstieg – Premium-Pflege, auf Deine Haut abgestimmt, in einer Stunde.",
      },
      {
        q: "Was hilft gegen Akne?",
        a: "Pro Clear behandelt unreine Haut bei Erwachsenen gezielt. Für Teenager gibt es Pro Clear Young.",
      },
      {
        q: "Kann ich Treatments kombinieren?",
        a: "Ja. Viele Kundinnen kombinieren ein Pro Skin Treatment mit Add-ons wie Lashlift oder gezielten Solutions.",
      },
    ],
    related: ["hautanalyse-zuerich-erster-schritt", "anti-aging-ohne-eingriff-longevity-glow", "clean-beauty-was-wirklich-dahinter-steckt"],
  },
  {
    slug: "hyperpigmentation-behandeln",
    title: "Hyperpigmentation behandeln: Ursachen und Lösungen",
    category: "Ratgeber",
    excerpt:
      "Pigmentflecken können das Hautbild ungleichmässig wirken lassen. Erfahre, wie sie entstehen, was sie verstärkt und welche Behandlung bei THE FACE® für einen ebenmässigeren Teint sorgt.",
    date: "2026-06-30",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1761718210089-ba3bb5ccb54f"),
    metaTitle: "Hyperpigmentation behandeln: Ursachen & Lösungen | THE FACE® Blog",
    metaDescription:
      "Wie Pigmentflecken entstehen und welche Behandlung hilft – Pro Bright und sanfte Pflege für einen ebenmässigen Teint. Ein Ratgeber von THE FACE® Zürich.",
    sections: [
      {
        heading: "Wie Hyperpigmentation entsteht",
        paragraphs: [
          "Pigmentflecken entstehen, wenn Melanin ungleichmässig produziert wird – oft durch UV-Strahlung, Hormone oder Entzündungen. Die Haut reagiert mit dunkleren Stellen, die das Bild unruhig wirken lassen.",
          "Wichtig: Pigmentflecken sind meist harmlos. Dennoch empfehle ich, auffällige Veränderungen dermatologisch abklären zu lassen, bevor wir pflegend arbeiten.",
        ],
      },
      {
        heading: "Was Pigmentflecken verstärkt",
        paragraphs: [
          "UV-Strahlung ist der grösste Treiber. Wer sich ungeschützt der Sonne aussetzt, verstärkt bestehende Flecken und fördert neue. Auch hormonelle Schwankungen und Pickel können Spuren hinterlassen.",
          "Täglicher Lichtschutz ist daher nicht optional – er ist die wichtigste Massnahme gegen eine Verschlimmerung.",
        ],
      },
      {
        heading: "Welche Behandlung hilft",
        paragraphs: [
          "Pro Bright hellt Hyperpigmentation und ungleichmässigen Teint aufhellend auf. Ich arbeite gezielt und sanft für einen ebenmässigeren Teint. Begleitend empfehle ich eine Pflege zuhause mit SPF und aufhellenden Wirkstoffen.",
          "Geduld ist entscheidend: Pigmentflecken blassen über Wochen, nicht Tage. Eine Serie bringt nachhaltigere Ergebnisse als ein einzelner Termin.",
        ],
      },
    ],
    faqs: [
      {
        q: "Verschwinden Pigmentflecken ganz?",
        a: "Sie lassen sich deutlich aufhellen. Ganz verschwinden tiefe Flecken selten, aber der Teint wirkt gleichmässiger und ruhiger.",
      },
      {
        q: "Wie oft sollte Pro Bright angewendet werden?",
        a: "Für sichtbare Ergebnisse empfehle ich eine Serie im Abstand von einigen Wochen – ergänzt durch SPF zuhause.",
      },
      {
        q: "Hilft SPF wirklich vorbeugend?",
        a: "Ja. Täglicher Lichtschutz ist die wirksamste Massnahme, um neue Pigmentflecken zu verhindern und bestehende nicht zu verstärken.",
      },
    ],
    related: ["welches-treatment-passt-zu-dir", "hautanalyse-zuerich-erster-schritt", "clean-beauty-was-wirklich-dahinter-steckt"],
  },
  {
    slug: "kosmetikerin-zuerich-finden",
    title: "Die beste Kosmetikerin in Zürich finden: Darauf solltest Du achten",
    category: "Lokale Themen",
    excerpt:
      "In Zürich gibt es viele Kosmetikstudios. Worauf kommt es wirklich an? Dieser Ratgeber hilft Dir, Qualitätskriterien zu erkennen und eine Kosmetikerin zu finden, die Deine Haut ernst nimmt.",
    date: "2026-06-12",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1761718209708-9ab9ba1c7252"),
    metaTitle: "Kosmetikerin in Zürich finden: Darauf solltest Du achten | THE FACE® Blog",
    metaDescription:
      "Kriterien für die Wahl einer guten Kosmetikerin in Zürich – Ausbildung, Beratung, Produkte und Bewertungen. Ein lokaler Ratgeber von THE FACE® an der Rämistrasse.",
    sections: [
      {
        heading: "Ausbildung und Spezialisierung",
        paragraphs: [
          "Eine Kosmetikerin mit EFZ-Ausbildung und Weiterbildungen wie VNISSG Haut & Pigmente bringt fundiertes Fachwissen mit. Spezialisierung zeigt, dass sie sich kontinuierlich weiterentwickelt – ein gutes Zeichen für Qualität.",
          "Bei THE FACE® blicke ich auf über 30 Jahre Erfahrung, EFZ und die VNISSG-Zertifizierung für Haut und Pigmente. Ausbildung ist für mich kein Abschluss, sondern eine Haltung.",
        ],
      },
      {
        heading: "Beratung statt Standardprogramm",
        paragraphs: [
          "Eine gute Kosmetikerin hört zu und analysiert, bevor sie behandelt. Eine Hautanalyse zu Beginn ist ein Qualitätsmerkmal. Wer ohne Analyse direkt behandelt, nimmt Deine Haut nicht ernst.",
          "Achte auch auf die Produkte: hochwertige, sanfte Clean-Produkte schonen die Hautbarriere und sprechen für ein bewusstes Vorgehen.",
        ],
      },
      {
        heading: "Bewertungen und Erreichbarkeit",
        paragraphs: [
          "Echte Google-Bewertungen geben Dir einen Eindruck echter Erfahrungen. Lies, was Kundinnen über Beratung, Atmosphäre und Ergebnisse schreiben. Eine 4,9-Sterne-Bewertung mit vielen Stimmen ist ein starkes Signal.",
          "Auch die Lage zählt: an der Rämistrasse im Zentrum Zürich, vis-à-vis Parkhaus Hohe Promenade, bist Du schnell da – aus allen Regionen der Stadt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wo liegt THE FACE® in Zürich?",
        a: "An der Rämistrasse 27, 8001 Zürich, vis-à-vis Parkhaus Hohe Promenade – zentral und gut erreichbar.",
      },
      {
        q: "Wie weiss ich, dass die Kosmetikerin gut ist?",
        a: "Achte auf Ausbildung, individuelle Hautanalyse, hochwertige Produkte und echte Bewertungen. Eine Kombination dieser Faktoren spricht für Qualität.",
      },
      {
        q: "Kann ich ausserhalb der Stadt kommen?",
        a: "Ja. Kundinnen und Kunden kommen aus allen Regionen Zürichs – von Altstetten bis Oerlikon. Die Rämistrasse ist gut angebunden.",
      },
    ],
    related: ["hautanalyse-zuerich-erster-schritt", "google-bewertungen-warum-echte-erfahrungen-zaehlen", "vorbereitung-erste-gesichtsbehandlung"],
  },
  {
    slug: "google-bewertungen-warum-echte-erfahrungen-zaehlen",
    title: "Google Bewertungen: Warum echte Erfahrungen zählen",
    category: "Google Bewertungen",
    excerpt:
      "Bewertungen sind heute oft die erste Entscheidungshilfe. Erfahre, warum echte Google-Bewertungen wichtig sind, wie Du sie liest und wie Du selbst eine faire Bewertung hinterlässt.",
    date: "2026-05-28",
    author: "Denise Claire Gadient",
    readTime: 4,
    hero: IMG("1713824096348-c1956e6da321"),
    metaTitle: "Google Bewertungen: Warum echte Erfahrungen zählen | THE FACE® Blog",
    metaDescription:
      "Warum echte Google-Bewertungen Vertrauen schaffen und wie Du sie richtig liest – ein Beitrag von THE FACE® Zürich mit 4,9 Sternen.",
    sections: [
      {
        heading: "Warum Bewertungen Vertrauen schaffen",
        paragraphs: [
          "Bevor Kundinnen eine Praxis besuchen, lesen sie, was andere erlebt haben. Echte Bewertungen geben ein ungeschöntes Bild – von Beratung, Atmosphäre und Ergebnissen. Sie sind heute die glaubwürdigste Form der Empfehlung.",
          "Bei THE FACE® freue ich mich über eine 4,9-Sterne-Bewertung von Kundinnen und Kunden, die ihre Erfahrungen geteilt haben. Dieses Vertrauen verdiente ich mit jeder Behandlung neu.",
        ],
      },
      {
        heading: "Wie Du Bewertungen richtig liest",
        paragraphs: [
          "Achte nicht nur auf die Sterne, sondern auf die Inhalte. Was wird gelobt, was kritisiert? Viele detaillierte Bewertungen sind aussagekräftiger als ein einzelner Extremwert. Achte auch auf Antworten der Inhaberin – sie zeigen, wie mit Feedback umgegangen wird.",
          "Ein Mix aus 4- und 5-Sterne-Bewertungen wirkt oft glaubwürdiger als ausschliesslich 5 Sterne.",
        ],
      },
      {
        heading: "Wie Du selbst fair bewertest",
        paragraphs: [
          "Nach Deiner Behandlung lade ich Dich ein, Deine Erfahrung zu teilen. Bei 4 bis 5 Sternen leite ich Dich gerne auf eine öffentliche Google-Bewertung weiter. Bei 1 bis 3 Sternen nehme ich Dein Feedback intern entgegen – es hilft mir, mich zu verbessern.",
          "Egal welches Feedback: Ehrlichkeit ist mir wichtiger als Sterne. So bleibt das Gesamtbild authentisch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wo finde ich die Google-Bewertungen von THE FACE®?",
        a: "Auf meinem öffentlichen Google-Business-Profil, verlinkt auf der Bewertungsseite dieser Website.",
      },
      {
        q: "Kann ich auch negativ bewerten?",
        a: "Ja. Bei 1 bis 3 Sternen nehme ich Dein Feedback intern entgegen, um mich zu verbessern. Bei 4 bis 5 Sternen leite ich Dich zu Google weiter.",
      },
      {
        q: "Sind die Bewertungen echt?",
        a: "Ja. Ich veröffentliche keine gekauften Bewertungen. Die Sterne stammen von Kundinnen und Kunden, die THE FACE® erlebt haben.",
      },
    ],
    related: ["kosmetikerin-zuerich-finden", "hautanalyse-zuerich-erster-schritt", "welches-treatment-passt-zu-dir"],
  },
  {
    slug: "hauttypen-erklaert",
    title: "Hauttypen erklärt: Welcher Hauttyp bist Du?",
    category: "Ratgeber",
    excerpt:
      "Trocken, fettig, Mischhaut oder sensibel? Verstehe Deinen Hauttyp, lerne die Unterschiede zwischen Hauttyp und Hautzustand und finde die Pflege, die wirklich zu Dir passt.",
    date: "2026-05-10",
    author: "Denise Claire Gadient",
    readTime: 6,
    hero: IMG("1556228720-195a672e8a03"),
    metaTitle: "Hauttypen erklärt: Welcher Hauttyp bist Du? | THE FACE® Blog",
    metaDescription:
      "Die fünf Hauttypen verständlich erklärt: trocken, fettig, Mischhaut, sensibel, reif. Lerne den Unterschied zwischen Hauttyp und Hautzustand kennen.",
    sections: [
      {
        heading: "Hauttyp vs. Hautzustand: ein wichtiger Unterschied",
        paragraphs: [
          "Viele verwechseln Hauttyp und Hautzustand. Der Hauttyp ist genetisch gegeben und bleibt ein Leben lang weitgehend stabil: trocken, fettig, Mischhaut, sensibel oder normal. Der Hautzustand dagegen verändert sich – mit Jahreszeit, Stress, Hormonen, Alter und Pflege.",
          "Du kannst beispielsweise vom Hauttyp her fettig sein, aber aktuell einen trockenen Hautzustand haben, weil die Hautbarriere gereizt ist. Genau deshalb analysiere ich bei der FACE-MAP nicht nur den Typ, sondern auch den aktuellen Zustand. Nur so wird Pflege zur Massarbeit.",
        ],
      },
      {
        heading: "Die fünf Hauttypen und ihre Merkmale",
        paragraphs: [
          "Trockene Haut spannt schnell, wirkt matt und neigt zu Fältchen. Sie braucht Feuchtigkeit und Lipide. Fettige Haut produziert viel Talg, glänzt und neigt zu Unreinheiten – hier klären und ausgleichen statt austrocknen. Mischhaut ist fettig in der T-Zone und trocken an den Wangen: unterschiedliche Zonen, unterschiedliche Pflege.",
          "Sensible Haut reagiert schnell auf Reize – Rötungen, Brennen, Spannung. Sie braucht besonders sanfte, barrierefreundliche Produkte. Normale Haut ist ausgeglichen und unkompliziert, aber auch sie braucht Pflege und Schutz, um es zu bleiben.",
        ],
      },
      {
        heading: "Wie Du Deinen Hauttyp herausfindest",
        paragraphs: [
          "Eine ehrliche Einschätzung gibt Dir die professionelle Hautanalyse. Ich untersuche Deine Haut Zone für Zone mit der FACE-MAP und FACE-FIT und bestimme Typ und Zustand. So weisst Du, was Deine Haut wirklich braucht – und kaufst nicht mehr blind.",
          "Auch zuhause kannst Du beobachten: Spannt Deine Haut nach dem Waschen? Glänzt sie am Mittag in der T-Zone? Reagiert sie auf neue Produkte mit Rötungen? Diese Beobachtungen sind wertvolle Hinweise, die Du zu Deiner Analyse mitbringst.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kann sich mein Hauttyp ändern?",
        a: "Der Hauttyp bleibt weitgehend stabil, aber der Hautzustand verändert sich mit Jahreszeit, Alter und Lebensstil. Eine regelmässige Analyse hält Deine Pflege aktuell.",
      },
      {
        q: "Was ist Mischhaut?",
        a: "Mischhaut ist fettig in der T-Zone (Stirn, Nase, Kinn) und trocken bis normal an den Wangen. Sie braucht Zonenpflege: klären in der T-Zone, feuchtigkeitsspendend an den Wangen.",
      },
      {
        q: "Wie oft sollte ich meinen Hauttyp prüfen lassen?",
        a: "Einmal pro Jahr empfehle ich eine Auffrisch-Analyse. Bei grossen Veränderungen wie Umstellung der Pflege, Hormonschwankungen oder Jahreszeitenwechsel früher.",
      },
    ],
    related: ["pflegeroutine-zuhause", "hautbarriere-reparieren", "welches-treatment-passt-zu-dir"],
  },
  {
    slug: "pflegeroutine-zuhause",
    title: "Deine Pflegeroutine für zuhause: Morgens und abends",
    category: "Anleitungen",
    excerpt:
      "Eine gute Pflegeroutine muss nicht kompliziert sein. Erfahre, welche Schritte morgens und abends wichtig sind, in welcher Reihenfolge Produkte wirken und wie Du Deine Haut nachhaltig pflegst.",
    date: "2026-04-25",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1556228453-8512a474f3b4"),
    metaTitle: "Pflegeroutine für zuhause: Morgens und abends | THE FACE® Blog",
    metaDescription:
      "Schritt-für-Schritt Anleitung für Deine tägliche Pflegeroutine: Reinigung, Toner, Serum, Feuchtigkeit, Schutz. Verständlich erklärt von Kosmetikerin Denise Claire Gadient.",
    sections: [
      {
        heading: "Morgens: Schutz und Feuchtigkeit",
        paragraphs: [
          "Die morgendliche Routine bereitet Deine Haut auf den Tag vor. Reinigung entfernt Talg und Schlafreste – lauwarmes Wasser oder ein sanfter Reiniger genügt. Danach folgt ein Toner, der den pH-Wert der Haut ausgleicht und sie aufnahmebereit macht.",
          "Anschließend trägst Du ein Serum auf, das zu Deinem Hautzustand passt – beispielsweise Vitamin C für einen frischen Teint. Danach kommt die Feuchtigkeitscreme, die die Hautbarriere unterstützt. Zuletzt und unverzichtbar: Sonnenschutz mit mindestens SPF 30, auch im Winter und bei bewölktem Himmel.",
        ],
      },
      {
        heading: "Abends: Regeneration und Pflege",
        paragraphs: [
          "Abends entfernt die Reinigung Schmutz, Make-up und Sonnenschutz gründlich. Ein sanfter Reiniger oder ein zweistufiges Reinigen mit Reinigungsöl und Wasserbasis sorgt für eine saubere Basis. Danach kann die Haut pflegende Wirkstoffe aufnehmen.",
          "Ein Nachtserum mit Wirkstoffen wie Retinol oder Peptiden unterstützt die Regeneration, während Du schläfst. Eine reichhaltigere Nachtpflege versiegelt die Feuchtigkeit. Augenspezifische Pflege rundet die Routine ab. Weniger ist oft mehr: zu viele Produkte überfordern die Haut.",
        ],
      },
      {
        heading: "Häufige Fehler und wie Du sie vermeidest",
        paragraphs: [
          "Der häufigste Fehler ist, zu viele Produkte gleichzeitig zu verwenden. Die Haut braucht Zeit, sich an neue Wirkstoffe zu gewöhnen. Führe immer nur ein neues Produkt ein und beobachte, wie Deine Haut reagiert. Ein weiterer Klassiker: SPF wird vergessen oder zu sparsam aufgetragen.",
          "Auch die Reihenfolge matters: von leichter zu reichhaltiger Textur, von wasserlöslich zu ölbasierend. Wer unsicher ist, bringt seine Produkte zur Hautanalyse mit – ich prüfe gerne, ob sie zu Deinem Hauttyp passen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich Toner?",
        a: "Ein Toner kann helfen, den pH-Wert der Haut auszugleichen und sie aufnahmebereit für nachfolgende Pflege zu machen. Bei sensibler Haut empfehle ich alkoholfreie, sanfte Formulierungen.",
      },
      {
        q: "Wie viel Produkt brauche ich?",
        a: "Meist genügt eine erbsengrosse Menge Creme für das ganze Gesicht. Mehr Produkt bedeutet nicht mehr Wirkung, sondern kann die Haut belasten.",
      },
      {
        q: "Kann ich morgens und abends dieselben Produkte verwenden?",
        a: "Teilweise. SPF gehört nur morgens, Retinol nur abends. Einige Produkte wie Reiniger und Feuchtigkeitscreme kannst Du beide Male verwenden. Ich berate Dich individuell.",
      },
    ],
    related: ["hauttypen-erklaert", "wirkstoffe-erklaert", "haeufige-pflegefehler"],
  },
  {
    slug: "saisonale-hautpflege",
    title: "Saisonale Hautpflege: Wie sich Deine Haut im Jahreslauf verändert",
    category: "Tipps",
    excerpt:
      "Im Winter trocken, im Sommer fettig: Deine Haut hat zu jeder Jahreszeit andere Bedürfnisse. Erfahre, wie Du Deine Pflege anpassen kannst und welche Behandlungen zu welcher Jahreszeit passen.",
    date: "2026-04-08",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1556228841-3e0c2c2b2a2a"),
    metaTitle: "Saisonale Hautpflege: Pflege nach Jahreszeiten | THE FACE® Blog",
    metaDescription:
      "Wie Du Deine Hautpflege an Frühling, Sommer, Herbst und Winter anpasst. Saisonale Tipps von Kosmetikerin Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "Winter: Kälte und Heizungsluft",
        paragraphs: [
          "Im Winter fordern Kälte draussen und trockene Heizungsluft drinnen die Hautbarriere heraus. Die Haut verliert mehr Feuchtigkeit, spannt und kann rissig werden. Eine reichhaltigere Pflege mit mehr Lipiden hilft, die Barriere zu stärken und Feuchtigkeit zu speichern.",
          "Auch die Reinigung sollte milder sein – keine aggressiven Schaumreiniger, die den Säureschutzmantel angreifen. Ein feuchtigkeitsspendendes Serum unter der Tagescreme gibt extra Schutz. Wer besonders trockene Haut hat, ergänzt nachts mit einer nährenden Maske.",
        ],
      },
      {
        heading: "Frühling und Sommer: Schutz und Klärung",
        paragraphs: [
          "Im Frühling weckt die Haut auf: Peeling und klärende Treatments helfen, die winterliche Mattigkeit abzubauen. Jetzt ist auch der Zeitpunkt, um die SPF-Routine aufzufrischen. Die Haut produziert bei wärmeren Temperaturen mehr Talg – eine leichtere Pflege verhindert verstopfte Poren.",
          "Im Sommer steht der Sonnenschutz im Zentrum. SPF 30 bis 50 ist täglich Pflicht, auch bei bewölktem Himmel. Nach dem Sommer empfehle ich eine aufhellende Behandlung wie Pro Bright, falls Pigmentflecken entstanden sind.",
        ],
      },
      {
        heading: "Herbst: Regeneration und Vorbereitung",
        paragraphs: [
          "Der Herbst ist die Zeit der Regeneration. Die Haut erholt sich vom Sommer und bereitet sich auf den Winter vor. Feuchtigkeitsspendende Treatments wie Pro Skin 60 oder das Longevity Glow Treatment helfen, die Barriere zu stärken und den Teint zu verfeinern.",
          "Auch eine Auffrisch-Hautanalyse lohnt sich jetzt: Mit ihr überprüfen wir, ob Deine aktuelle Pflege noch zum veränderten Hautzustand passt. So gehst Du gut vorbereitet in die kalte Jahreszeit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich im Winter andere Produkte verwenden?",
        a: "Oft ja. Eine reichhaltigere Pflege mit mehr Lipiden hilft, die Barriere in der Kälte zu stärken. Eine Hautanalyse zeigt, welche Anpassungen für Deine Haut sinnvoll sind.",
      },
      {
        q: "Brauche ich im Winter trotzdem SPF?",
        a: "Absolut. UV-Strahlung ist auch bei bewölktem Himmel und im Winter vorhanden. Täglicher Sonnenschutz ist die wichtigste Anti-Aging-Massnahme, ganzjährig.",
      },
      {
        q: "Welche Behandlung passt zu welcher Jahreszeit?",
        a: "Frühling für Klärung, Sommer für Schutz, Herbst für Regeneration, Winter für Feuchtigkeit. In der Beratung empfehle ich individuell, was zu Deiner Haut und der Saison passt.",
      },
    ],
    related: ["pflegeroutine-zuhause", "sonnenschutz-anti-aging", "hautbarriere-reparieren"],
  },
  {
    slug: "haeufige-pflegefehler",
    title: "7 häufige Pflegefehler, die Deine Haut belasten",
    category: "Ratgeber",
    excerpt:
      "Zu viel Peeling, falsche Produkte, kein Sonnenschutz: Diese sieben Fehler machen mehr Kundinnen, als Du denkst. Erfahre, wie Du sie erkennst und vermeidest.",
    date: "2026-03-20",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1556228578-8c89cb6d8d6a"),
    metaTitle: "7 häufige Pflegefehler vermeiden | THE FACE® Blog",
    metaDescription:
      "Die sieben häufigsten Fehler in der Hautpflege und wie Du sie vermeidest. Ein Ratgeber von Kosmetikerin Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "Fehler 1 bis 3: Zu viel, zu oft, zu aggressiv",
        paragraphs: [
          "Fehler 1: Zu viel Peeling. Wer täglich peelt, überfordert die Hautbarriere. Die Haut wird empfindlicher statt glatter. Zwei- bis dreimal pro Woche genügt, bei sensibler Haut seltener. Fehler 2: Aggressive Reiniger. Schaumreiniger mit starken Tensiden strippen die Haut und schwächen den Säureschutzmantel. Sanfte Reiniger reinigen genauso gründlich, ohne zu belasten.",
          "Fehler 3: Zu viele Produkte gleichzeitig. Wer fünf neue Produkte auf einmal einführt, weiss nicht, welches wirkt und welches reagiert. Führe immer nur ein neues Produkt ein und beobachte Deine Haut zwei Wochen lang.",
        ],
      },
      {
        heading: "Fehler 4 und 5: Sonnenschutz und Make-up",
        paragraphs: [
          "Fehler 4: Kein oder zu wenig Sonnenschutz. UV-Strahlung ist der grösste Treiber von Hautalterung und Pigmentflecken. Täglicher SPF 30 bis 50 ist nicht optional, sondern die wichtigste Pflege überhaupt. Auch im Winter, auch bei bewölktem Himmel.",
          "Fehler 5: Make-up entfernen ohne Reinigung. Make-up allein mit Wasser zu entfernen reicht nicht. Ein gründliches, zweistufiges Reinigen – zuerst ölbasierend, dann wasserbasierend – entfernt Make-up, Sonnenschutz und Schmutz restlos.",
        ],
      },
      {
        heading: "Fehler 6 und 7: Pflege und Ernährung",
        paragraphs: [
          "Fehler 6: Die falsche Reihenfolge. Produkte müssen von leichter zu reichhaltiger Textur aufgetragen werden. Ein Serum unter einer dicken Creme kann nicht richtig einziehen. Wasserlösliches zuerst, ölbasierendes zuletzt.",
          "Fehler 7: Hautpflege nur von aussen. Ernährung, Schlaf und Stress beeinflussen die Haut massgeblich. Wer genug trinkt, ausgewogen isst und schläft, unterstützt seine Haut von innen. Pflege ist ganzheitlich, nicht nur eine Frage der Produkte.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie oft sollte ich meine Haut peelen?",
        a: "Zwei- bis dreimal pro Woche bei normaler Haut, seltener bei sensibler Haut. Tägliches Peeling überfordert die Barriere und macht die Haut empfindlicher.",
      },
      {
        q: "Was mache ich, wenn meine Haut auf ein neues Produkt reagiert?",
        a: "Setze das Produkt ab und gib der Haut Zeit, sich zu beruhigen. Wenn die Reaktion anhält, berate ich Dich gerne in der Praxis, um die Ursache zu finden.",
      },
      {
        q: "Reicht ein Make-up-Entferner oder brauche ich zusätzlich Reinigung?",
        a: "Ein gründliches Reinigen in zwei Schritten – erst ölbasierend, dann wasserbasierend – ist sicherer als nur ein Produkt. So werden Make-up, SPF und Schmutz restlos entfernt.",
      },
    ],
    related: ["pflegeroutine-zuhause", "hautbarriere-reparieren", "wirkstoffe-erklaert"],
  },
  {
    slug: "wirkstoffe-erklaert",
    title: "Wirkstoffe erklärt: Retinol, Vitamin C, Hyaluronsäure und Co.",
    category: "Ratgeber",
    excerpt:
      "Retinol, Vitamin C, Hyaluronsäure, Niacinamid: Diese Wirkstoffe begegnen Dir überall. Erfahre, was sie bewirken, für wen sie passen und wie Du sie richtig anwendest.",
    date: "2026-03-02",
    author: "Denise Claire Gadient",
    readTime: 6,
    hero: IMG("1556228720-0d63b2c2b3a1"),
    metaTitle: "Wirkstoffe erklärt: Retinol, Vitamin C & Hyaluronsäure | THE FACE® Blog",
    metaDescription:
      "Die wichtigsten Hautpflege-Wirkstoffe verständlich erklärt: Retinol, Vitamin C, Hyaluronsäure, Niacinamid und Peptide. Ein Ratgeber von THE FACE® Zürich.",
    sections: [
      {
        heading: "Die Klassiker: Retinol und Vitamin C",
        paragraphs: [
          "Retinol (Vitamin A) ist der am besten erforschte Anti-Aging-Wirkstoff. Er regt die Zellerneuerung an, verfeinert das Hautbild und mildert Fältchen. Wichtig: langsam anfangen und nur abends verwenden, da Retinol lichtempfindlich macht. Bei sensibler Haut mit niedriger Konzentration beginnen.",
          "Vitamin C ist ein Antioxidans, das die Haut vor freien Radikalen schützt und den Teint aufhellt. Es eignet sich für die morgendliche Routine, da es den Sonnenschutz ergänzt. Aufhellend wirkt es besonders bei Hyperpigmentation und ungleichmässigem Teint.",
        ],
      },
      {
        heading: "Feuchtigkeit und Barriere: Hyaluronsäure und Niacinamid",
        paragraphs: [
          "Hyaluronsäure ist ein Feuchtigkeitsmagnet, der Wasser in der Haut bindet. Sie ist für alle Hauttypen geeignet, gut verträglich und wirkt sofort glättend. Auf feuchte Haut aufgetragen, entfaltet sie ihre volle Wirkung.",
          "Niacinamid (Vitamin B3) stärkt die Hautbarriere, reguliert die Talgproduktion und wirkt beruhigend. Es eignet sich besonders bei Mischhaut, unreiner und sensibler Haut. Ein echter Allrounder, der selten reagiert und gut mit anderen Wirkstoffen kombinierbar ist.",
        ],
      },
      {
        heading: "Peptide und wie Du Wirkstoffe kombinierst",
        paragraphs: [
          "Peptide sind kurze Aminosäureketten, die die Hautstruktur unterstützen und die Kollagenproduktion anregen. Sie sind sanft und gut verträglich, eignen sich für reifere Haut und als Alternative zu Retinol bei empfindlicher Haut.",
          "Bei der Kombination gilt: nicht alle Wirkstoffe gleichzeitig. Retinol und Vitamin C besser zu unterschiedlichen Zeiten verwenden – Retinol abends, Vitamin C morgens. Wer unsicher ist, lässt sich in der Hautanalyse beraten, welche Wirkstoffe zu seiner Haut und seinen Zielen passen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich Retinol und Vitamin C zusammen verwenden?",
        a: "Besser nicht gleichzeitig. Vitamin C morgens, Retinol abends ist die bewährte Kombination. So vermeidest Du Reizungen und nutzt die Stärken beider Wirkstoffe.",
      },
      {
        q: "Ab welchem Alter sollte ich mit Retinol beginnen?",
        a: "Ab Mitte 20 bis Anfang 30 ist Retinol als Anti-Aging-Prävention sinnvoll. Beginne mit niedriger Konzentration und baue langsam auf. Eine Beratung hilft, den richtigen Einstieg zu finden.",
      },
      {
        q: "Welcher Wirkstoff hilft gegen Pigmentflecken?",
        a: "Vitamin C und Niacinamid wirken aufhellend. In der professionellen Behandlung ergänzt Pro Bright diese Wirkstoffe gezielt. Geduld ist entscheidend: Pigmentflecken blassen über Wochen.",
      },
    ],
    related: ["pflegeroutine-zuhause", "hyperpigmentation-behandeln", "anti-aging-ohne-eingriff-longevity-glow"],
  },
  {
    slug: "hautpflege-teenager",
    title: "Hautpflege für Teenager: So lernen Jugendliche die richtige Pflege",
    category: "Ratgeber",
    excerpt:
      "Jugendakne ist belastend, aber mit der richtigen Pflege gut in den Griff zu bekommen. Erfahre, welche Produkte Teenager brauchen, welche sie meiden sollten und wie eine professionelle Behandlung hilft.",
    date: "2026-02-15",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1556228720-0a2c2b3a4b5c"),
    metaTitle: "Hautpflege für Teenager: Tipps gegen Jugendakne | THE FACE® Blog",
    metaDescription:
      "Wie Teenager ihre Haut richtig pflegen und Jugendakne in den Griff bekommen. Sanfte Produkte, einfache Routinen und die Pro Clear Young Behandlung von THE FACE® Zürich.",
    sections: [
      {
        heading: "Warum Jugendakne entsteht",
        paragraphs: [
          "In der Pubertät verändert sich der Hormonhaushalt, was die Talgproduktion anregt. Die Poren verstopfen, Bakterien vermehren sich und Entzündungen entstehen. Das ist völlig normal und hat nichts mit mangelnder Hygiene zu tun – ein wichtiges Wissen für betroffene Jugendliche.",
          "Wichtig: Jugendliche nicht mit Schuldgefühlen belasten. Akne ist keine Frage von Sauberkeit. Vielmehr braucht die junge Haut die richtige, sanfte Pflege und Geduld, um sich zu regulieren.",
        ],
      },
      {
        heading: "Eine einfache Routine für jugendliche Haut",
        paragraphs: [
          "Weniger ist mehr. Eine einfache Routine aus sanfter Reinigung, einem leichten Feuchtigkeitsspender und bei Bedarf einem klärenden Produkt genügt. Aggressive Anti-Pickel-Produkte austrocknen die Haut und verschlimmern das Problem, weil die Haut mehr Talg nachproduziert.",
          "Sonnenschutz ist auch für Teenager wichtig, besonders, wenn klärende Produkte verwendet werden, die die Haut lichtempfindlicher machen. Ein SPF 30 täglich gehört zur Grundpflege.",
        ],
      },
      {
        heading: "Wann eine professionelle Behandlung hilft",
        paragraphs: [
          "Wenn die häusliche Pflege nicht ausreicht, hilft die Pro Clear Young Behandlung, die ich speziell für jugendliche Haut anbiete. Sie ist sanft, aufklärend und lehrt Jugendliche, ihre Haut richtig zu pflegen. Vorab analysiere ich die Haut, um die Behandlung passgenau aufzustellen.",
          "Ein wichtiger Nebeneffekt: Jugendliche, die früh lernen, ihre Haut zu verstehen, pflegen ein Leben lang bewusster. Das ist eine Investition in die Zukunft ihrer Haut.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ab welchem Alter ist eine Hautanalyse sinnvoll?",
        a: "Ab der Pubertät, wenn die erste Akne auftritt, ist eine Analyse wertvoll. So lernt der Jugendliche seine Haut kennen und erhält eine passende Pflegeroutine.",
      },
      {
        q: "Sollten Teenager ihre Pickel selbst ausdrücken?",
        a: "Nein. Ausdrücken kann Narben hinterlassen und Entzündungen verschlimmern. Eine professionelle Behandlung klärt die Haut sanft, ohne die Barriere zu schädigen.",
      },
      {
        q: "Welche Produkte braucht ein Teenager?",
        a: "Einen sanften Reiniger, eine leichte Feuchtigkeit und bei Bedarf ein klärendes Produkt. Mehr überfordert die junge Haut. In der Beratung stelle ich eine einfache Routine zusammen.",
      },
    ],
    related: ["hauttypen-erklaert", "haeufige-pflegefehler", "welches-treatment-passt-zu-dir"],
  },
  {
    slug: "sonnenschutz-anti-aging",
    title: "Sonnenschutz: Warum SPF die wichtigste Anti-Aging-Massnahme ist",
    category: "Tipps",
    excerpt:
      "Sonnenschutz ist nicht nur ein Sommersache. UV-Strahlung ist der grösste Treiber von Hautalterung. Erfahre, welchen SPF Du brauchst, wie viel Du auftragen solltest und warum täglicher Schutz unverzichtbar ist.",
    date: "2026-02-01",
    author: "Denise Claire Gadient",
    readTime: 4,
    hero: IMG("1556228720-0e3c2b4a5b6c"),
    metaTitle: "Sonnenschutz: Warum SPF das wichtigste Anti-Aging ist | THE FACE® Blog",
    metaDescription:
      "Warum täglicher Sonnenschutz die wirksamste Anti-Aging-Massnahme ist. SPF-Werte, Anwendungsmenge und Tipps von Kosmetikerin Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "UV-Strahlung und Hautalterung",
        paragraphs: [
          "Bis zu 80 Prozent der sichtbaren Hautalterung sind auf UV-Strahlung zurückzuführen. UVA-Strahlung dringt tief in die Haut ein und schädigt Kollagen und Elastin. Das Ergebnis: Fältchen, Falten und ein verlust der Elastizität. UVB-Strahlung verursacht Sonnenbrand und kann die Hautbarriere schwächen.",
          "Deshalb ist Sonnenschutz nicht nur ein Sommersache, sondern die wichtigste Anti-Aging-Massnahme, die Du täglich durchführen kannst. Kein Serum und keine Creme kann den Schaden ersetzen, den ungeschützte UV-Exposition anrichtet.",
        ],
      },
      {
        heading: "Welchen SPF brauche ich?",
        paragraphs: [
          "Für den Alltag empfehle ich SPF 30 bis 50. In den Bergen, am Wasser oder bei intensiver Sonnenextraction sollte es SPF 50 sein. Wichtig ist nicht nur der Faktor, sondern die Menge: die meisten tragen zu wenig auf. Für das Gesicht brauchst Du etwa zwei Fingerlängen – Zeige- und Mittelfinger komplett.",
          "Auch nachcremen ist entscheidend: alle zwei bis drei Stunden, besonders im Freien. Wasserdichte Sonnencreme verliert trotzdem nach dem Baden an Wirkung. Ein bewölkter Himmel reduziert die UV-Last, beseitigt sie aber nicht.",
        ],
      },
      {
        heading: "Sonnenschutz in der professionellen Behandlung",
        paragraphs: [
          "Nach peelenden Behandlungen wie Mikrodermabrasion oder Microneedling ist die Haut besonders empfindlich für UV-Strahlung. Deshalb betone ich bei jeder Beratung die Wichtigkeit des täglichen Schutzes. Wer Pigmentflecken behandelt, muss konsequent SPF verwenden – sonst kehrt die Hyperpigmentation zurück.",
          "Die beste Anti-Aging-Strategie kombiniert täglichen Sonnenschutz zuhause mit professionellen Behandlungen wie dem Longevity Glow Treatment, die die Regeneration von innen anregen. So schützt und erneuerst Du gleichzeitig.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich im Winter Sonnenschutz?",
        a: "Ja. UV-Strahlung ist auch im Winter und bei bewölktem Himmel vorhanden. Täglicher SPF ist die wichtigste Anti-Aging-Massnahme, ganzjährig und unabhängig vom Wetter.",
      },
      {
        q: "Wie viel Sonnencreme brauche ich für das Gesicht?",
        a: "Etwa zwei Fingerlängen (Zeige- und Mittelfinger komplett). Die meisten tragen zu wenig auf, was den tatsächlichen Schutz halbiert.",
      },
      {
        q: "Kann ich Sonnenschutz und Make-up kombinieren?",
        a: "Ja. Trage zuerst SPF auf, lass ihn einziehen, dann folgt das Make-up. Es gibt auch getönte Sonnencremes, die beides in einem Produkt kombinieren.",
      },
    ],
    related: ["anti-aging-ohne-eingriff-longevity-glow", "saisonale-hautpflege", "hyperpigmentation-behandeln"],
  },
  {
    slug: "hautbarriere-reparieren",
    title: "Hautbarriere verstehen und reparieren: Wenn die Haut empfindlich reagiert",
    category: "Ratgeber",
    excerpt:
      "Spannen, Rötungen, Brennen: Eine geschädigte Hautbarriere macht die Haut empfindlich. Erfahre, wie die Barriere funktioniert, was sie schwächt und wie Du sie wieder aufbaust.",
    date: "2026-01-18",
    author: "Denise Claire Gadient",
    readTime: 5,
    hero: IMG("1556228720-0f4c2b5a6b7c"),
    metaTitle: "Hautbarriere reparieren: Ursachen und Lösungen | THE FACE® Blog",
    metaDescription:
      "Wie die Hautbarriere funktioniert, was sie schädigt und wie Du sie wieder aufbaust. Ein Ratgeber von Kosmetikerin Denise Claire Gadient, THE FACE® Zürich.",
    sections: [
      {
        heading: "Was die Hautbarriere leistet",
        paragraphs: [
          "Die Hautbarriere ist die äusserste Schicht der Haut und hat eine zentrale Aufgabe: Sie hält Feuchtigkeit im Inneren und schützt vor Reizen von aussen – Bakterien, Umweltbelastungen, Allergenen. Eine intakte Barriere ist die Voraussetzung für gesunde, widerstandsfähige Haut.",
          "Ist die Barriere geschädigt, dringen Reize ein und Feuchtigkeit entweicht. Die Folge: Spannen, Rötungen, Brennen und eine empfindlicher reagierende Haut. Auch Produkte, die vorher gut vertragen wurden, können plötzlich reagieren.",
        ],
      },
      {
        heading: "Was die Barriere schwächt",
        paragraphs: [
          "Die häufigsten Ursachen sind zu aggressives Peeling, übermässige Reinigung, zu viele Produkte gleichzeitig und extreme Wetterbedingungen. Auch Stress, Schlafmangel und eine unausgewogene Ernährung können die Barriere beeinträchtigen. Manchmal ist es eine Kombination mehrerer Faktoren.",
          "Wer bemerkt, dass seine Haut plötzlich empfindlicher reagiert, sollte die Pflege vereinfachen: zurück auf ein sanftes Reinigungs- und Pflegeprogramm, keine neuen Produkte, kein Peeling für einige Wochen. Die Haut braucht Zeit, um sich zu regenerieren.",
        ],
      },
      {
        heading: "Wie Du die Barriere wieder aufbaust",
        paragraphs: [
          "Der Aufbau braucht Geduld und die richtigen Inhaltsstoffe. Ceramide, Hyaluronsäure und Niacinamid stärken die Barriere und helfen, Feuchtigkeit zu speichern. Sanfte, barrierefreundliche Clean-Produkte respektieren die Haut und unterstützen den Aufbau. Weniger ist hier mehr.",
          "In der Praxis biete ich mit Pro Calm Treat eine Behandlung an, die gereizte, sensible Haut beruhigt und die Barriere unterstützt. Vorab analysiere ich Deine Haut, um die Ursache der Empfindlichkeit zu verstehen und eine passende Pflege zu empfehlen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert der Aufbau der Hautbarriere?",
        a: "Je nach Ausprägung einige Wochen bis Monate. Wichtig ist, die Pflege in dieser Zeit konstant zu halten und keine neuen Produkte einzuführen. Geduld zahlt sich aus.",
      },
      {
        q: "Kann ich während des Aufbaus peelen?",
        a: "Besser nicht. Peeling kann die Barriere zusätzlich belasten. Warte, bis die Haut sich beruhigt hat, und beginne dann langsam mit einem sanften Peeling.",
      },
      {
        q: "Welche Behandlung hilft bei sensibler Haut?",
        a: "Pro Calm Treat ist speziell für gereizte, sensible Haut konzipiert. Es beruhigt und stärkt die Barriere. In der Hautanalyse prüfe ich, ob es für Deine Haut passend ist.",
      },
    ],
    related: ["hauttypen-erklaert", "haeufige-pflegefehler", "clean-beauty-was-wirklich-dahinter-steckt"],
  },
];

export const CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))];

export const getArticleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);

export const getRelatedArticles = (slug, n = 3) => {
  const base = getArticleBySlug(slug);
  if (!base) return ARTICLES.filter((a) => a.slug !== slug).slice(0, n);
  const rel = ARTICLES.filter((a) => base.related.includes(a.slug));
  return rel.length >= n ? rel : ARTICLES.filter((a) => a.slug !== slug).slice(0, n);
};

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("de-CH", { day: "2-digit", month: "long", year: "numeric" });

export const ARTICLE_SERVICE_MAP = {
  "hautanalyse-zuerich-erster-schritt": ["hautanalyse", "pro-skin-treatments"],
  "clean-beauty-was-wirklich-dahinter-steckt": ["hautanalyse", "targeted-skin-solutions"],
  "anti-aging-ohne-eingriff-longevity-glow": ["longevity-glow-treatment", "medical-skin-treatments"],
  "vorbereitung-erste-gesichtsbehandlung": ["hautanalyse", "pro-skin-treatments"],
  "welches-treatment-passt-zu-dir": ["pro-skin-treatments", "targeted-skin-solutions", "medical-skin-treatments"],
  "hyperpigmentation-behandeln": ["targeted-skin-solutions", "longevity-glow-treatment"],
  "kosmetikerin-zuerich-finden": ["hautanalyse", "pro-skin-treatments"],
  "google-bewertungen-warum-echte-erfahrungen-zaehlen": ["hautanalyse"],
  "hauttypen-erklaert": ["hautanalyse", "targeted-skin-solutions"],
  "pflegeroutine-zuhause": ["hautanalyse", "pro-skin-treatments"],
  "saisonale-hautpflege": ["pro-skin-treatments", "longevity-glow-treatment"],
  "haeufige-pflegefehler": ["hautanalyse", "targeted-skin-solutions"],
  "wirkstoffe-erklaert": ["longevity-glow-treatment", "medical-skin-treatments"],
  "hautpflege-teenager": ["targeted-skin-solutions"],
  "sonnenschutz-anti-aging": ["longevity-glow-treatment", "targeted-skin-solutions"],
  "hautbarriere-reparieren": ["targeted-skin-solutions", "hautanalyse"],
};

export const getRelatedServices = (slug) => {
  const slugs = ARTICLE_SERVICE_MAP[slug] || [];
  return slugs;
};