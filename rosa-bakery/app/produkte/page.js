"use client";

import Link from "next/link";

const festtagstorten = [
  { id: 1, name: "Festtagstorte Beeren", price: "Ab CHF 80.–" },
  { id: 2, name: "Schokoladen-Traum", price: "Ab CHF 85.–" },
  { id: 3, name: "Zitronen-Torte", price: "Ab CHF 80.–" },
  { id: 4, name: "Nuss-Karamell", price: "Ab CHF 90.–" },
];

const hochzeitstorten = [
  { id: 1, name: "Hochzeitstorte Klassik", price: "Ab CHF 150.–" },
  { id: 2, name: "Semi-Naked Torte", price: "Ab CHF 180.–" },
  { id: 3, name: "Blumentorte 3-stöckig", price: "Ab CHF 220.–" },
];

const delikatessen = [
  { id: 1, name: "Cupcakes Mixed Box (6 Stk.)", price: "Ab CHF 30.–" },
  { id: 2, name: "Macarons Selection", price: "Ab CHF 32.–" },
  { id: 3, name: "Mini-Törtchen", price: "Ab CHF 28.–" },
  { id: 4, name: "Brownie Bites", price: "Ab CHF 24.–" },
];

export default function Produkte() {
  const handleScrollTo = (id) => (event) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-10 space-y-10">
      {/* Intro */}
      <section className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rosa-cream">
          Sortiment
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-rosa-white">
          Torten &amp; Delikatessen von Rosa Bakery
        </h1>
        <p className="text-sm md:text-base text-rosa-cream max-w-2xl">
          Hier findest du eine Auswahl unserer Festtags- und Hochzeitstorten
          sowie süsser Delikatessen. Jede Kreation wird individuell an deinen
          Anlass angepasst – Geschmacksrichtungen, Farben und Dekor besprechen
          wir gern persönlich mit dir.
        </p>
      </section>

      {/* Navegación interna de Kategorien */}
      <section className="flex flex-wrap gap-3 text-xs md:text-sm">
        <button
          type="button"
          onClick={handleScrollTo("festtagstorten")}
          className="rounded-full cursor-pointer border border-[#D6CEA9] px-4 py-2 text-rosa-gold hover:bg-white/10 transition-colors"
        >
          Festtagstorten
        </button>
        <button
          type="button"
          onClick={handleScrollTo("hochzeitstorten")}
          className="rounded-full cursor-pointer border border-[#D6CEA9] px-4 py-2 text-rosa-gold hover:bg-white/10 transition-colors"
        >
          Hochzeitstorten
        </button>
        <button
          type="button"
          onClick={handleScrollTo("delikatessen")}
          className="rounded-full cursor-pointer border border-[#D6CEA9] px-4 py-2 text-rosa-gold hover:bg-white/10 transition-colors"
        >
          Delikatessen
        </button>
        <Link
          href="/bestellen"
          className="rounded-full px-4 py-2 text-rosa-green bg-[#D6CEA9] text-xs md:text-sm font-medium hover:bg-[#E5DFC7] transition-colors"
        >
          Individuelle Torte anfragen
        </Link>
      </section>

      {/* FESTTAGSTORTEN */}
      <section id="festtagstorten" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-white">
              Festtagstorten
            </h2>
            <p className="text-sm text-rosa-cream">
              Für Geburtstage, Jubiläen, Abschlüsse und alle besonderen Momente.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {festtagstorten.map((cake) => (
            <article
              key={cake.id}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-3"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-rosa-green space-y-1">
                <h3 className="text-sm font-semibold">{cake.name}</h3>
                <p className="text-xs text-rosa-green-muted">{cake.price}</p>
                <p className="text-xs text-rosa-green-detail">
                  Geschmacksrichtungen &amp; Design nach Absprache.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOCHZEITSTORTEN */}
      <section id="hochzeitstorten" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-white">
              Hochzeitstorten
            </h2>
            <p className="text-sm text-rosa-cream">
              Elegante Torten, abgestimmt auf euer Hochzeitskonzept.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {hochzeitstorten.map((cake) => (
            <article
              key={cake.id}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-3"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-rosa-green space-y-1">
                <h3 className="text-sm font-semibold">{cake.name}</h3>
                <p className="text-xs text-rosa-green-muted">{cake.price}</p>
                <p className="text-xs text-rosa-green-detail">
                  Grössen (Stockwerke), Blumen &amp; Dekor personalisierbar.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DELIKATESSEN */}
      <section id="delikatessen" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-white">
              Delikatessen
            </h2>
            <p className="text-sm text-rosa-cream">
              Kleine süsse Highlights – ideal für Apéros, Geschenke oder Candy
              Tables.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {delikatessen.map((item) => (
            <article
              key={item.id}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-3"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-rosa-green space-y-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-xs text-rosa-green-muted">{item.price}</p>
                <p className="text-xs text-rosa-green-detail">
                  Ideal kombinierbar mit Torten oder als eigenes Sweet-Table.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rounded-xl border border-[#D6CEA9]/70 bg-white/90 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-rosa-green">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-lg md:text-xl font-semibold">
            Du hast eine konkrete Torten-Idee?
          </h2>
          <p className="text-sm">
            Schick uns deine Vorstellungen – Anlass, Personenzahl, gewünschte
            Geschmacksrichtung und ein paar Stichworte zum Design. Wir melden
            uns mit einer unverbindlichen Offerte.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bestellen"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-rosa-gold hover:bg-[#5D764A] transition-colors"
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
