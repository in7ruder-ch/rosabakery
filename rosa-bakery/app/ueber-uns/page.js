import Link from "next/link";

export default function UeberUns() {
  return (
    <div className="py-10 space-y-10">
      {/* HERO: TEXT + FOTO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-rosa-cream">
            Über uns
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-rosa-white">
            Eine junge Familienbäckerei mit viel Herz
          </h1>
          <p className="text-sm md:text-base text-rosa-cream max-w-xl">
            Rosa Bäckerei ist eine neue, familiengeführte Manufaktur für
            Design-Torten und Delikatessen. Wir verbinden hochwertige Zutaten,
            sorgfältige Handarbeit und persönliche Betreuung – von der ersten
            Anfrage bis zur fertigen Torte.
          </p>
          <p className="text-sm md:text-base text-rosa-cream max-w-xl leading-relaxed">
            Unser Ziel ist es, jede Bestellung so persönlich wie möglich zu
            begleiten. Wir nehmen uns Zeit, hören zu und entwickeln gemeinsam mit
            dir eine Torte, die nicht nur geschmacklich überzeugt, sondern sich
            nach „dir“ anfühlt – individuell, liebevoll und einzigartig.
          </p>
        </div>

        {/* FOTO 1 */}
        <div className="group aspect-[4/5] md:aspect-[3/4] rounded-xl border border-[#D6CEA9]/60 overflow-hidden bg-white/10">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ backgroundImage: "url('/img/we-1.jpg')" }}
          />
        </div>
      </section>

      {/* STORY BLOCK */}
      <section className="space-y-4">
        <div className="rounded-xl border border-[#D6CEA9]/40 bg-white/5 px-6 py-7 space-y-3">
          <h2 className="text-lg text-center md:text-xl font-semibold text-rosa-white">
            Handgemacht, ehrlich und nahbar
          </h2>
          <p className="text-sm md:text-base text-rosa-cream leading-relaxed">
            Als junge Firma kennen wir den Unterschied zwischen „einfach eine
            Torte bestellen“ und „sich wirklich gesehen fühlen“. Jede Anfrage
            landet nicht in einem anonymen System, sondern direkt bei uns – als
            Familie, die überlegt, wie deine Torte zu dir, zu deinem Anlass und
            zu deinen Gästen passt.
          </p>
          <p className="text-sm md:text-base text-rosa-cream leading-relaxed">
            Wir arbeiten mit Produkten, die wir selbst gerne essen: echte
            Butter, gute Schokolade, frische Früchte und sorgfältig ausgewählte
            Zutaten. Keine Massenproduktion, keine versteckten Kompromisse –
            sondern Qualität, die man schmeckt.
          </p>
          <p className="text-sm md:text-base text-rosa-cream leading-relaxed">
            Dabei legen wir grossen Wert auf einen freundlichen, klaren
            Austausch: lieber eine Frage mehr, eine Variante extra und eine
            ehrliche Empfehlung, als etwas zu versprechen, das nicht zu 100 %
            passt.
          </p>
        </div>
      </section>

      {/* QUALITÄT & SERVICE + FOTO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        {/* FOTO 2 */}
        <div className="group aspect-[4/5] md:aspect-[3/4] rounded-xl border border-[#D6CEA9]/60 overflow-hidden bg-white/10">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ backgroundImage: "url('/img/we-2.jpg')" }}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-rosa-white">
            Qualität in der Küche, Nähe im Kontakt
          </h2>
          <p className="text-sm md:text-base text-rosa-cream leading-relaxed">
            Wir glauben, dass eine gute Torte aus drei Dingen besteht: besten
            Zutaten, sauberer Handarbeit und einem offenen Ohr für deine Wünsche.
            Darum planen wir jede Bestellung individuell – statt dir eine
            Standardliste vorzusetzen.
          </p>
          <ul className="text-sm text-rosa-cream space-y-1">
            <li>• Hochwertige Produkte und sorgfältige Verarbeitung</li>
            <li>• Persönliche Beratung per Mail, Telefon oder WhatsApp</li>
            <li>• Klare Absprachen zu Preis, Menge und Ablauf</li>
          </ul>
          <p className="text-sm md:text-base text-rosa-cream leading-relaxed">
            Ob kleine Familienfeier oder grosse Hochzeit – unser Ziel ist, dass
            du dich gut begleitet fühlst und deine Torte genau so ankommt, wie
            du sie dir vorgestellt hast.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rounded-xl border border-[#D6CEA9]/70 bg-white px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-rosa-green">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-lg md:text-xl font-semibold">
            Möchtest du mit uns planen?
          </h2>
          <p className="text-sm">
            Erzähl uns von deinem Anlass, deiner Idee oder zeig uns ein
            Inspirationsbild. Wir melden uns mit Vorschlägen, Möglichkeiten und
            einer unverbindlichen Offerte – unkompliziert und persönlich.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bestellen"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-rosa-gold hover:bg-[#5D764A] hover:text-rosa-white transition-colors"
          >
            Anfrage senden
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-rosa-green hover:bg-[#D6CEA9]/40 transition-colors"
          >
            Persönlich kontaktieren
          </Link>
        </div>
      </section>
    </div>
  );
}
