"use client";

import Link from "next/link";
import { products } from "../../data/products";

const festtagstorten = products.filter((p) => p.category === "festtagstorten");
const hochzeitstorten = products.filter((p) => p.category === "hochzeitstorten");
const delikatessen = products.filter((p) => p.category === "delikatessen");

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
      {/* INTRO */}
      <section className="space-y-3">
        <p className="text-xs tracking-[0.25em] uppercase text-rosa-gold">
          Sortiment
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-rosa-green">
          Torten &amp; Delikatessen von Rosa Bäckerei
        </h1>
        <p className="text-sm md:text-base text-rosa-green-muted max-w-2xl">
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
          className="rounded-full cursor-pointer border border-[#4D6936]/40 bg-white px-4 py-2 text-rosa-green hover:bg-[#FFFDF5] transition-colors"
        >
          Festtagstorten
        </button>
        <button
          type="button"
          onClick={handleScrollTo("hochzeitstorten")}
          className="rounded-full cursor-pointer border border-[#4D6936]/40 bg-white px-4 py-2 text-rosa-green hover:bg-[#FFFDF5] transition-colors"
        >
          Hochzeitstorten
        </button>
        <button
          type="button"
          onClick={handleScrollTo("delikatessen")}
          className="rounded-full cursor-pointer border border-[#4D6936]/40 bg-white px-4 py-2 text-rosa-green hover:bg-[#FFFDF5] transition-colors"
        >
          Delikatessen
        </button>

        <Link
          href="/bestellen"
          className="rounded-full px-4 py-2 bg-[#4D6936] text-[#FDFAE9] text-xs md:text-sm font-medium hover:bg-[#5D764A] transition-colors"
        >
          Individuelle Torte anfragen
        </Link>
      </section>

      {/* FESTTAGSTORTEN */}
      <section id="festtagstorten" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Festtagstorten
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Für Geburtstage, Jubiläen, Abschlüsse und alle besonderen Momente.
              Geschmacksrichtungen &amp; Design nach Absprache.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {festtagstorten.map((cake) => (
            <article
              key={cake.id}
              className="group space-y-2 rounded-xl bg-white p-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOCHZEITSTORTEN */}
      <section id="hochzeitstorten" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Hochzeitstorten
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Elegante Torten, abgestimmt auf euer Hochzeitskonzept. Grössen
              (Stockwerke), Blumen &amp; Dekor personalisierbar.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {hochzeitstorten.map((cake) => (
            <article
              key={cake.id}
              className="group space-y-2 rounded-xl bg-white p-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DELIKATESSEN */}
      <section id="delikatessen" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Delikatessen
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Kleine süsse Highlights – ideal für Apéros, Geschenke oder Candy
              Tables. Ideal kombinierbar mit Torten oder als eigenes Sweet-Table.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {delikatessen.map((cake) => (
            <article
              key={cake.id}
              className="group space-y-2 rounded-xl bg-white p-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL (informativa: verde sólida) */}
      <section className="rounded-xl bg-[#4D6936] border border-[#D6CEA9]/50 px-6 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-lg md:text-xl font-semibold text-[#FDFAE9]">
            Du hast eine konkrete Torten-Idee?
          </h2>
          <p className="text-sm text-[#FDFAE9]/85">
            Schick uns deine Vorstellungen – Anlass, Personenzahl, gewünschte
            Geschmacksrichtung und ein paar Stichworte zum Design. Wir melden
            uns mit einer unverbindlichen Offerte.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/bestellen"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#D6CEA9] text-[#4D6936] hover:bg-[#FDFAE9] transition-colors"
          >
            Anfrage senden
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#FDFAE9]/70 text-[#FDFAE9] hover:bg-white/10 transition-colors"
          >
            Persönlich kontaktieren
          </Link>
        </div>
      </section>
    </div>
  );
}
