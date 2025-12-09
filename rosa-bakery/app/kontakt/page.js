import Link from "next/link";

export default async function Kontakt({ searchParams }) {
  const search = await searchParams;
  const success = search?.success === "1";

  return (
    <div className="py-10 space-y-10">
      {/* ALERTA DE ÉXITO ARRIBA */}
      {success && (
        <div className="rounded-xl border border-[#D6CEA9]/70 bg-white/90 px-4 py-3 text-sm text-rosa-green">
          <p className="font-medium">Danke für deine Nachricht!</p>
          <p className="text-rosa-green-detail">
            Wir melden uns in der Regel innerhalb von 1–2 Werktagen bei dir zurück.
          </p>
        </div>
      )}

      {/* INTRO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-rosa-cream">
            Kontakt
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-rosa-white">
            Wir freuen uns auf deine Nachricht
          </h1>
          <p className="text-sm md:text-base text-rosa-cream max-w-xl">
            Ob konkrete Torten-Idee, erste Anfrage oder einfach eine Frage zu
            unseren Angeboten – schreib uns gern. Wir melden uns so schnell wie
            möglich mit Rückfragen, Vorschlägen oder einer unverbindlichen
            Offerte.
          </p>
        </div>

        {/* Info-Box */}
        <div className="rounded-xl border border-[#D6CEA9]/60 bg-white/90 px-6 py-7 space-y-3 text-rosa-green">
          <h2 className="text-base md:text-lg font-semibold">
            So erreichst du uns
          </h2>
          <p className="text-sm">
            Am besten erreichst du uns per Mail oder über das Formular. Für
            kurze Rückfragen darfst du uns auch gerne per WhatsApp schreiben.
          </p>
          <div className="text-sm space-y-1">
            <p className="font-medium">E-Mail</p>
            <a
              href="mailto:rosa.bakery@email.com"
              className="underline-offset-4 hover:underline text-rosa-green"
            >
              rosa.bakery@email.com
            </a>
          </div>
          <div className="text-sm space-y-1">
            <p className="font-medium">Telefon / WhatsApp</p>

            <a
              href="tel:+41000000000"
              className="underline-offset-4 hover:underline text-rosa-green"
            >
              +41 00 000 00 00
            </a>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline text-rosa-green block"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-xs text-rosa-green-muted">
            Hinweis: Da wir viel in der Backstube sind, können wir nicht immer
            sofort ans Telefon – per Nachricht erreichst du uns am sichersten.
          </p>
        </div>
      </section>

      {/* FORMULAR */}
      <section className="rounded-xl border border-[#D6CEA9]/70 bg-white px-6 py-8 text-rosa-green">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Kontaktformular
        </h2>
        <p className="text-sm text-rosa-green-detail mb-6">
          Erzähl uns kurz, worum es geht – Anlass, Datum (falls schon bekannt)
          und was du dir ungefähr vorstellst. Je mehr wir wissen, desto besser
          können wir dir passende Vorschläge machen.
        </p>

        <form
          action="/api/kontakt"
          method="POST"
          className="space-y-5"
        >
          {/* Name + E-Mail */}
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

          {/* Telefon + Datum */}
          <div className="grid gap-4 md:grid-cols-2">
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
              <label className="text-sm font-medium" htmlFor="date">
                Datum des Anlasses (falls bekannt)
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
              />
            </div>
          </div>

          {/* Anlass */}
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="occasion">
              Anlass / Art der Anfrage
            </label>
            <input
              id="occasion"
              name="occasion"
              type="text"
              className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936]"
              placeholder="z.B. Geburtstag, Hochzeit, Firmenevent..."
            />
          </div>

          {/* Nachricht */}
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="message">
              Deine Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm outline-none focus:border-[#4D6936] focus:ring-1 focus:ring-[#4D6936] resize-y"
              placeholder="Erzähl uns kurz, was du dir vorstellst..."
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-rosa-gold hover:bg-[#5D764A] hover:text-rosa-white transition-colors"
            >
              Nachricht senden
            </button>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-rosa-green hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Per WhatsApp schreiben
            </a>
          </div>

          <p className="text-xs text-rosa-green-detail pt-1">
            Wir antworten in der Regel innerhalb von 1–2 Werktagen. Für sehr
            kurzfristige Anfragen empfehlen wir zusätzlich eine Nachricht per
            WhatsApp.
          </p>
        </form>
      </section>

      {/* DIREKTE INFO */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-white">
            Standort
          </h2>
          <p className="text-sm text-rosa-cream">
            Region Bern, Schweiz
            <br />
            Produktion in einer kleinen Manufaktur – Abholung nach Absprache.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-white">
            Abholung & Lieferung
          </h2>
          <p className="text-sm text-rosa-cream">
            Je nach Anlass und Grösse der Bestellung sind Abholung und in
            bestimmten Fällen Lieferung möglich. Schreib uns einfach, was du
            brauchst – wir schauen gemeinsam nach der besten Lösung.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-white">
            Planung
          </h2>
          <p className="text-sm text-rosa-cream">
            Für grössere Torten empfehlen wir eine Anfrage mindestens 3–4 Wochen
            im Voraus. Spontane Anfragen sind je nach Auslastung ebenfalls
            möglich.
          </p>
        </div>
      </section>
    </div>
  );
}
