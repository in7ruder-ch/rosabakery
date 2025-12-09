import Link from "next/link";

export default async function Bestellen({ searchParams }) {
  const search = await searchParams;
  const success = search?.success === "1";

  return (
    <div className="py-10 space-y-10">
      {/* ALERTA DE ÉXITO ARRIBA */}
      {success && (
        <div className="rounded-xl border border-[#D6CEA9]/70 bg-white/90 px-4 py-3 text-sm text-rosa-green">
          <p className="font-medium">Danke für deine Anfrage!</p>
          <p className="text-rosa-green-detail">
            Wir prüfen Datum, Machbarkeit und melden uns mit Vorschlägen und einer unverbindlichen Offerte.
          </p>
        </div>
      )}

      {/* INTRO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-rosa-cream">
            Bestellung
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-rosa-white">
            Deine Wunsch-Torte anfragen
          </h1>
          <p className="text-sm md:text-base text-rosa-cream max-w-xl">
            Mit diesem Formular kannst du uns alle wichtigen Infos für deine
            Torten-Anfrage schicken. Wir melden uns mit Vorschlägen, Varianten
            und einer unverbindlichen Offerte – persönlich und ohne
            Standardkatalog.
          </p>
          <p className="text-xs md:text-sm text-rosa-cream max-w-xl">
            Tipp: Je mehr du uns erzählst (Anlass, Stil, Geschmackswünsche),
            desto genauer können wir planen.
          </p>
        </div>

        {/* Infobox Prozess */}
        <div className="rounded-xl border border-[#D6CEA9]/60 bg-white/90 px-6 py-7 space-y-3 text-rosa-green">
          <h2 className="text-base md:text-lg font-semibold">
            So läuft eine Anfrage ab
          </h2>
          <ol className="text-sm space-y-1 list-decimal list-inside">
            <li>Du füllst das Formular mit deinen Wünschen aus.</li>
            <li>Wir prüfen Datum, Machbarkeit und senden dir Vorschläge.</li>
            <li>Du entscheidest dich für eine Variante und bestätigst.</li>
            <li>Wir backen und dekorieren deine Torte zum vereinbarten Termin.</li>
          </ol>
          <p className="text-xs text-rosa-green-muted">
            Für kurzfristige Anfragen oder sehr spezielle Wünsche kannst du uns
            zusätzlich per WhatsApp kontaktieren.
          </p>
        </div>
      </section>

      {/* FORMULAR GESAMT */}
      <section className="rounded-xl border border-[#D6CEA9]/70 bg-white px-6 py-8 text-rosa-green">
        <form
          className="space-y-8"
          action="/api/bestellen"
          method="POST"
        >
          {/* 1. ANLASS & TORTENART */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              1. Anlass & Tortenart
            </h2>

            {/* Tortenart als Pills */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Tortenart</p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg:white/40 hover:bg-white/40">
                  <input
                    type="radio"
                    name="tortenart"
                    value="festtagstorte"
                    className="h-3 w-3"
                    defaultChecked
                  />
                  <span>Festtagstorte</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="tortenart"
                    value="hochzeitstorte"
                    className="h-3 w-3"
                  />
                  <span>Hochzeitstorte</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="tortenart"
                    value="delikatessen"
                    className="h-3 w-3"
                  />
                  <span>Delikatessen / Sweet-Table</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="tortenart"
                    value="anderes"
                    className="h-3 w-3"
                  />
                  <span>Sonstiges (z.B. Firmenanlass)</span>
                </label>
              </div>
            </div>

            {/* Anlass & Personen */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1 md:col-span-2">
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
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="persons">
                  Für wie viele Personen?
                </label>
                <input
                  id="persons"
                  name="persons"
                  type="number"
                  min="1"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="z.B. 12"
                />
              </div>
            </div>

            {/* Form der Torte */}
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="shape">
                Form der Torte
              </label>
              <select
                id="shape"
                name="shape"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
              >
                <option>Rund</option>
                <option>Eckig</option>
                <option>Herzform</option>
                <option>Mehrstöckig</option>
                <option>Noch offen / keine Präferenz</option>
              </select>
            </div>
          </div>

          {/* 2. GESCHMACK & FÜLLUNG */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              2. Geschmack & Füllung
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="baseFlavor">
                  Basisgeschmack des Teigs
                </label>
                <select
                  id="baseFlavor"
                  name="baseFlavor"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                >
                  <option>Vanille</option>
                  <option>Schokolade</option>
                  <option>Marmorkuchen</option>
                  <option>Zitrone</option>
                  <option>Nuss</option>
                  <option>Noch offen / Vorschläge erwünscht</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="filling">
                  Füllung
                </label>
                <select
                  id="filling"
                  name="filling"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg:white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936] bg-white"
                >
                  <option>Vanillecreme</option>
                  <option>Schokoladen-Ganache</option>
                  <option>Beerenfüllung</option>
                  <option>Zitruscreme</option>
                  <option>Nuss / Karamell</option>
                  <option>Leichter Rahm / Frischkäse</option>
                  <option>Noch offen / Vorschläge erwünscht</option>
                </select>
              </div>
            </div>

            {/* Toppings */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Topping / Dekor</p>
              <p className="text-xs text-rosa-green-detail">
                Wähle aus beliebten Dekor-Elementen aus oder lass uns freie Hand.
                Aufwändige Spezial-Dekore klären wir im persönlichen Austausch.
              </p>

              <div className="grid gap-2 md:grid-cols-2 text-sm">
                {/* Klassiker */}
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="buttercreme" className="h-3 w-3" />
                  <span>Buttercreme glatt</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="meringue" className="h-3 w-3" />
                  <span>Meringue-Topping</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="schoko_glasur" className="h-3 w-3" />
                  <span>Schokoladenglasur</span>
                </label>

                {/* Früchte */}
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="beeren" className="h-3 w-3" />
                  <span>Frische Beeren</span>
                </label>

                {/* Dekor */}
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="essbare_blumen" className="h-3 w-3" />
                  <span>Essbare Blumen</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="goldflakes" className="h-3 w-3" />
                  <span>Goldflakes / Blattgold</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="drip" className="h-3 w-3" />
                  <span>Drip (Schokolade oder Karamell)</span>
                </label>

                {/* Texturen */}
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="krokant" className="h-3 w-3" />
                  <span>Krokant / Crunch</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="semi_naked" className="h-3 w-3" />
                  <span>Semi-Naked Finish</span>
                </label>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" name="toppings" value="naked" className="h-3 w-3" />
                  <span>Naked Cake Look</span>
                </label>
              </div>

              <p className="text-xs text-rosa-green-detail">
                Wenn du etwas Bestimmtes im Kopf hast (z.B. Pinterest-Bild), kannst du es später im Feld “Referenzen” beschreiben.
              </p>
            </div>

            {/* Ernährungsoptionen */}
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Besondere Wünsche / Ernährung
              </p>
              <div className="grid gap-2 md:grid-cols-2 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="diet"
                    value="vegetarisch"
                    className="h-3 w-3"
                  />
                  <span>Vegetarisch (ohne Gelatine)</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="diet"
                    value="glutenreduziert"
                    className="h-3 w-3"
                  />
                  <span>Glutenreduziert (nach Absprache)</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="diet"
                    value="laktosearm"
                    className="h-3 w-3"
                  />
                  <span>Laktosearm (nach Absprache)</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="diet"
                    value="keine_nuesse"
                    className="h-3 w-3"
                  />
                  <span>Ohne Nüsse / Allergien beachten</span>
                </label>
              </div>
              <p className="text-xs text-rosa-green-detail">
                Wichtige Allergien bitte im Nachrichtenfeld genauer beschreiben.
              </p>
            </div>
          </div>

          {/* 3. DESIGN & PERSONALISIERUNG */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              3. Design & Personalisierung
            </h2>

            {/* Level der Personalisierung */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Wie individuell soll es sein?</p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="personalization"
                    value="klassisch_schoen"
                    className="h-3 w-3"
                    defaultChecked
                  />
                  <span>Schlichte, schöne Torte</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="personalization"
                    value="mit_details"
                    className="h-3 w-3"
                  />
                  <span>Mit Details (Farben, Blumen, Thema)</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-full border border-[#D6CEA9] px-4 py-2 cursor-pointer hover:bg-white/40">
                  <input
                    type="radio"
                    name="personalization"
                    value="full_custom"
                    className="h-3 w-3"
                  />
                  <span>Voll personalisiert (Moodboard / Bilder)</span>
                </label>
              </div>
            </div>

            {/* Text auf der Torte */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="cakeText">
                  Text auf der Torte (optional)
                </label>
                <input
                  id="cakeText"
                  name="cakeText"
                  type="text"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder='z.B. "Happy Birthday Lea"'
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="colors">
                  Farben / Stil
                </label>
                <input
                  id="colors"
                  name="colors"
                  type="text"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="z.B. Pastell, natürlich, Boho, Rosa-Gold..."
                />
              </div>
            </div>

            {/* Bild-Referenz Platzhalter */}
            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="reference">
                Inspirationsbilder / Referenzen
              </label>
              <p className="text-xs text-rosa-green-detail mb-1">
                Hier kannst du kurz beschreiben, ob du bereits Bilder oder
                Inspiration (z.B. Pinterest) hast. Ein Upload-Feld können wir
                später ergänzen.
              </p>
              <textarea
                id="reference"
                name="reference"
                rows={3}
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936] resize-y"
                placeholder="z.B. Link zu Bildern, Beschreibung des Stils..."
              />
            </div>
          </div>

          {/* 4. ANLASSDETAILS & BUDGET */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              4. Anlass & Rahmen
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="date">
                  Datum des Anlasses
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium" htmlFor="location">
                  Ort / Abholung & Lieferung
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="z.B. Bern, Abholung; Bern Umgebung, evtl. Lieferung"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="budget">
                Budget-Rahmen (optional)
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                placeholder="z.B. CHF 150–250, offene Empfehlung"
              />
              <p className="text-xs text-rosa-green-detail">
                Ein Budget-Rahmen hilft uns, passende Vorschläge zu machen (Grösse,
                Dekor, Stockwerke etc.).
              </p>
            </div>
          </div>

          {/* 5. KONTAKTDATEN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              5. Kontaktdaten
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="Vor- und Nachname"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="email">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                  placeholder="deine@email.ch"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="phone">
                Telefon / WhatsApp (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
                placeholder="+41 ..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium" htmlFor="notes">
                Ergänzende Hinweise (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936] resize-y"
                placeholder="z.B. bestimmte Uhrzeit, Allergien, besondere Wünsche..."
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-rosa-gold hover:bg-[#5D764A] hover:text-rosa-white transition-colors"
            >
              Anfrage absenden
            </button>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-rosa-green hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Lieber per WhatsApp anfragen
            </a>
          </div>

          <p className="text-xs text-rosa-green-detail pt-1">
            Wir melden uns in der Regel innerhalb von 1–3 Werktagen mit ersten
            Ideen und einer unverbindlichen Offerte. Für sehr kurzfristige
            Anlässe empfehlen wir zusätzlich eine Nachricht per WhatsApp.
          </p>
        </form>
      </section>
    </div>
  );
}
