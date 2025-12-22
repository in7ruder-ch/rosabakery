"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const servingsOptions = [
  { value: "8-10", label: "Für 8–10 Personen" },
  { value: "15", label: "Für 15 Personen" },
  { value: "20", label: "Für 20 Personen" },
  { value: "30", label: "Für 30 Personen" },
  { value: "40", label: "Für 40 Personen" },
  { value: "35", label: "Für 35 Personen" },
  { value: "50-60", label: "Für 50–60 Personen" },
  { value: "70-75", label: "Für 70–75 Personen" },
  { value: "100-120", label: "Für 100–120 Personen" },
  { value: "140-150", label: "Für 140–150 Personen" },
];

// IGUAL al ejemplo (IDs para backend + placeholders)
const FLAVOURS = {
  sponge: [
    { id: "choco", label: "Schoko", icon: "/icons/sponge/choco.svg" },
    { id: "vanilla", label: "Vanille", icon: "/icons/sponge/vanilla.svg" },
    { id: "red-velvet", label: "Red Velvet", icon: "/icons/sponge/red-velvet.svg" },
    { id: "lemon", label: "Zitrone", icon: "/icons/sponge/lemon.svg" },
    { id: "cinnamon", label: "Zimt", icon: "/icons/sponge/cinnamon.svg" },
  ],
  filling: [
    {
      id: "strawberry-no-fresh",
      label: "Erdbeere (ohne frische Erdbeeren)",
      icon: "/icons/filling/strawberry.svg",
    },
    { id: "vanilla", label: "Vanille", icon: "/icons/filling/vanilla.svg" },
    { id: "oreo", label: "Oreo", icon: "/icons/filling/oreo.svg" },
    { id: "cream-cheese", label: "Cream Cheese", icon: "/icons/filling/cream-cheese.svg" },
    { id: "coconut", label: "Kokos", icon: "/icons/filling/coconut.svg" },
    { id: "chocolate", label: "Schokolade", icon: "/icons/filling/chocolate.svg" },
    { id: "banana", label: "Banane", icon: "/icons/filling/banana.svg" },
  ],
  extras: [
    { id: "fresh-strawberry", label: "Frische Erdbeeren", icon: "/icons/extras/fresh-strawberry.svg" },
    { id: "fresh-raspberry", label: "Frische Himbeeren", icon: "/icons/extras/fresh-raspberry.svg" },
    { id: "raffaello", label: "Raffaello", icon: "/icons/extras/raffaello.svg" },
    { id: "nuts", label: "Nüsse", icon: "/icons/extras/nuts.svg" },
    { id: "nutella", label: "Nutella", icon: "/icons/extras/nutella.svg" },
    { id: "lotus-biscoff", label: "Lotus Biscoff", icon: "/icons/extras/lotus-biscoff.svg" },
  ],
  shape: [
    { id: "circle", label: "Rund", icon: "/icons/shape/circle.svg" },
    { id: "rectangle", label: "Rechteckig", icon: "/icons/shape/rectangle.svg" },
    { id: "heart", label: "Herz", icon: "/icons/shape/heart.svg" },
    { id: "square", label: "Quadratisch", icon: "/icons/shape/square.svg" },
    { id: "other", label: "Andere", icon: "" }, // <-- Other: sin imagen
  ],
};

function OptionRow({ item, selected, onClick, noIcon = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 text-left"
      aria-pressed={selected}
    >
      {/* Icono (sin borde, más grande, hover scale 1.10 smooth) */}
      {!noIcon && item.icon ? (
        <span className="group inline-flex items-center gap-3">
          <span className="w-14 h-14 flex items-center justify-center">
            <img
              src={item.icon}
              alt=""
              className="w-11 h-11 object-contain transition-transform duration-100 ease-out group-hover:scale-120"
              loading="lazy"
            />
          </span>
        </span>
      ) : (
        // placeholder de espacio para alinear filas sin icono
        <span className="w-14 h-14" />
      )}

      {/* Label (también con hover scale suave para acompañar) */}
      <span className="group flex items-center gap-2">
        <span
          className={[
            "text-sm font-medium",
            selected ? "text-[#4D6936]" : "text-rosa-green",
          ].join(" ")}
        >
          {item.label}
        </span>
      </span>

      {/* Check */}
      <span className="ml-auto">
        <span
          className={[
            "inline-flex w-5 h-5 rounded-full border items-center justify-center",
            selected ? "border-[#4D6936] bg-[#4D6936] text-[#FDFAE9]" : "border-[#4D6936]/35",
          ].join(" ")}
        >
          {selected ? (
            <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
              <path d="M7.7 13.4 4.9 10.6 3.9 11.6 7.7 15.4 16.1 7l-1-1z" />
            </svg>
          ) : null}
        </span>
      </span>
    </button>
  );
}

export default function Bestellen() {
  const params = useSearchParams();
  const success = params?.get("success") === "1";

  const [sponge, setSponge] = useState("");
  const [filling, setFilling] = useState("");
  const [shape, setShape] = useState("");
  const [extras, setExtras] = useState([]);

  const extrasValue = useMemo(() => extras.join(","), [extras]);

  const toggleExtra = (id) => {
    setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="py-10 space-y-10">
      {/* ALERTA DE ÉXITO ARRIBA */}
      {success && (
        <div className="rounded-xl border border-[#4D6936]/35 bg-white px-4 py-3 text-sm text-rosa-green">
          <p className="font-medium">Danke für deine Anfrage!</p>
          <p className="text-rosa-green-muted">
            Wir prüfen Datum und Machbarkeit und melden uns mit Vorschlägen und einer unverbindlichen Offerte.
          </p>
        </div>
      )}

      {/* INTRO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-rosa-gold">
            Bestellung
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-rosa-green">
            Deine Wunsch-Torte anfragen
          </h1>
          <p className="text-sm md:text-base text-rosa-green-muted max-w-xl">
            Mit diesem Formular kannst du uns alle wichtigen Infos für deine Torten-Anfrage schicken.
            Wir melden uns mit Vorschlägen, Varianten und einer unverbindlichen Offerte – persönlich und ohne Standardkatalog.
          </p>
          <p className="text-xs md:text-sm text-rosa-green-muted max-w-xl">
            Tipp: Je mehr du uns erzählst (Anlass, Stil, Geschmackswünsche), desto genauer können wir planen.
          </p>
        </div>

        {/* Infobox Prozess */}
        <div className="rounded-xl border border-[#4D6936]/35 bg-white px-6 py-7 space-y-3 text-rosa-green">
          <h2 className="text-base md:text-lg font-semibold">
            So läuft eine Anfrage ab
          </h2>
          <ol className="text-sm space-y-1 list-decimal list-inside text-rosa-green">
            <li>Du füllst das Formular mit deinen Wünschen aus.</li>
            <li>Wir prüfen Datum, Machbarkeit und senden dir Vorschläge.</li>
            <li>Du entscheidest dich für eine Variante und bestätigst.</li>
            <li>Wir backen und dekorieren deine Torte zum vereinbarten Termin.</li>
          </ol>
          <p className="text-xs text-rosa-green-muted">
            Für kurzfristige Anfragen oder sehr spezielle Wünsche kannst du uns zusätzlich per WhatsApp kontaktieren.
          </p>
        </div>
      </section>

      {/* FORMULAR GESAMT */}
      <section className="rounded-xl border border-[#4D6936]/35 bg-white px-6 py-8 text-rosa-green">
        <form className="space-y-10" action="/api/bestellen" method="POST">
          {/* Hidden values desde Flavours UI */}
          <input type="hidden" name="sponge_flavour" value={sponge} />
          <input type="hidden" name="filling_flavour" value={filling} />
          <input type="hidden" name="cake_shape" value={shape} />
          <input type="hidden" name="extras" value={extrasValue} />

          {/* 1. ANLASS & TORTENART */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              1. Anlass & Tortenart
            </h2>

            {/* Tortenart Pills */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Tortenart</p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <label className="inline-flex items-center gap-2 rounded-full border border-[#4D6936]/35 px-4 py-2 cursor-pointer hover:bg-[#D6CEA9]/20">
                  <input type="radio" name="tortenart" value="festtagstorte" className="h-3 w-3" defaultChecked />
                  <span>Festtagstorte</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#4D6936]/35 px-4 py-2 cursor-pointer hover:bg-[#D6CEA9]/20">
                  <input type="radio" name="tortenart" value="hochzeitstorte" className="h-3 w-3" />
                  <span>Hochzeitstorte</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#4D6936]/35 px-4 py-2 cursor-pointer hover:bg-[#D6CEA9]/20">
                  <input type="radio" name="tortenart" value="delikatessen" className="h-3 w-3" />
                  <span>Delikatessen / Sweet-Table</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#4D6936]/35 px-4 py-2 cursor-pointer hover:bg-[#D6CEA9]/20">
                  <input type="radio" name="tortenart" value="anderes" className="h-3 w-3" />
                  <span>Sonstiges (z.B. Firmenanlass)</span>
                </label>
              </div>
            </div>

            {/* Anlass */}
            <div className="grid gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="occasion">
                  Anlass
                </label>
                <input
                  id="occasion"
                  name="occasion"
                  type="text"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="z.B. 30. Geburtstag, Hochzeit, Taufe..."
                />
              </div>
            </div>
          </div>

          {/* 2. TORTENGRÖSSE (Guía + select) */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              2. Tortengrösse
            </h2>

            <div className="rounded-xl border border-[#4D6936]/35 bg-white overflow-hidden">
              <img
                src="/img/cake-size.svg"
                alt="Grössenübersicht für Tortenportionen"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="servings" className="text-sm font-medium">
                Anzahl Portionen <span className="text-rosa-gold">*</span>
              </label>

              <select
                id="servings"
                name="servings"
                required
                defaultValue=""
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
              >
                <option value="" disabled>
                  — Bitte auswählen —
                </option>
                {servingsOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. GESCHMACK (Icon Selector) */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              3. Geschmack auswählen
            </h2>

            <div className="grid gap-8 lg:grid-cols-4">
              {/* Sponge */}
              <div className="space-y-3">
                <p className="text-sm font-medium">
                  Teig (Sponge) <span className="text-rosa-gold">*</span>
                </p>
                <div className="space-y-3">
                  {FLAVOURS.sponge.map((it) => (
                    <OptionRow
                      key={it.id}
                      item={it}
                      selected={sponge === it.id}
                      onClick={() => setSponge(it.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Filling */}
              <div className="space-y-3">
                <p className="text-sm font-medium">
                  Füllung <span className="text-rosa-gold">*</span>
                </p>
                <div className="space-y-3">
                  {FLAVOURS.filling.map((it) => (
                    <OptionRow
                      key={it.id}
                      item={it}
                      selected={filling === it.id}
                      onClick={() => setFilling(it.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="space-y-3">
                <p className="text-sm font-medium">
                  Extras (Aufpreis möglich)
                </p>
                <div className="space-y-3">
                  {FLAVOURS.extras.map((it) => (
                    <OptionRow
                      key={it.id}
                      item={it}
                      selected={extras.includes(it.id)}
                      onClick={() => toggleExtra(it.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Shape */}
              <div className="space-y-3">
                <p className="text-sm font-medium">
                  Tortenform <span className="text-rosa-gold">*</span>
                </p>
                <div className="space-y-3">
                  {FLAVOURS.shape.map((it) => (
                    <OptionRow
                      key={it.id}
                      item={it}
                      selected={shape === it.id}
                      onClick={() => setShape(it.id)}
                      noIcon={it.id === "other"}
                    />
                  ))}
                </div>

                {shape === "other" && (
                  <p className="text-xs text-rosa-green-muted">
                    Bitte beschreibe die gewünschte Form unten bei{" "}
                    <span className="font-medium">Spezielle Hinweise</span>.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-[#D6CEA9]/60 bg-white px-4 py-3 text-xs text-rosa-green-muted">
              <p>
                Hinweis: Bitte wähle <span className="font-medium">Teig</span>,{" "}
                <span className="font-medium">Füllung</span> und{" "}
                <span className="font-medium">Tortenform</span> aus (Pflichtfelder).
              </p>
            </div>
          </div>

          {/* 4. SPEZIELLE HINWEISE */}
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-semibold">
              4. Spezielle Hinweise
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Gibt es zusätzliche Wünsche oder Details (z.B. Name, Farben, Deko, Allergien)?
            </p>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              rows={5}
              className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936] resize-y"
              placeholder="z.B. Name auf der Torte, bestimmte Farben, extra Dekor, Allergien..."
            />
          </div>

          {/* 5. KONTAKTDATEN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              5. Kontaktdaten
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="name">
                  Name <span className="text-rosa-gold">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="Vor- und Nachname"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="email">
                  E-Mail <span className="text-rosa-gold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="deine@email.ch"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="phone">
                  Telefon <span className="text-rosa-gold">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="+41 ..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="instagram">
                  Instagram Benutzername <span className="text-rosa-gold">*</span>
                </label>
                <input
                  id="instagram"
                  name="instagram"
                  type="text"
                  required
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="@"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="dateTime">
                Datum & Uhrzeit <span className="text-rosa-gold">*</span>
              </label>
              <input
                id="dateTime"
                name="dateTime"
                type="datetime-local"
                required
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
              />
              <p className="text-xs text-rosa-green-muted">
                Falls dein Wunschdatum nicht möglich ist, melden wir uns mit Alternativen.
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-[#FDFAE9] hover:bg-[#5D764A] transition-colors"
            >
              Anfrage absenden
            </button>

            <a
              href="https://wa.me/410762234462"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-rosa-green hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Lieber per WhatsApp anfragen
            </a>
          </div>

          <p className="text-xs text-rosa-green-muted pt-1">
            Wir melden uns in der Regel innerhalb von 1–3 Werktagen mit ersten Ideen und einer unverbindlichen Offerte.
          </p>
        </form>
      </section>
    </div>
  );
}
