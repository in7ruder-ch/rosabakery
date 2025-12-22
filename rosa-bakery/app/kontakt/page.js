import Link from "next/link";

export default async function Kontakt({ searchParams }) {
  const search = await searchParams;
  const success = search?.success === "1";

  return (
    <div className="py-10 space-y-10">
      {/* ALERTA DE ÉXITO ARRIBA */}
      {success && (
        <div className="rounded-xl border border-[#4D6936]/35 bg-white px-4 py-3 text-sm text-rosa-green">
          <p className="font-medium">Danke für deine Nachricht!</p>
          <p className="text-rosa-green-muted">
            Wir melden uns in der Regel innerhalb von 1–2 Werktagen bei dir
            zurück.
          </p>
        </div>
      )}

      {/* INTRO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-rosa-gold">
            Kontakt
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-rosa-green">
            Wir freuen uns auf deine Nachricht
          </h1>
          <p className="text-sm md:text-base text-rosa-green-muted max-w-xl">
            Ob konkrete Torten-Idee, erste Anfrage oder einfach eine Frage zu
            unseren Angeboten – schreib uns gern. Wir melden uns so schnell wie
            möglich mit Rückfragen, Vorschlägen oder einer unverbindlichen
            Offerte.
          </p>
        </div>

        {/* Info-Box */}
        <div className="rounded-xl border border-[#4D6936]/35 bg-white px-6 py-7 space-y-3 text-rosa-green">
          <h2 className="text-base md:text-lg font-semibold">
            So erreichst du uns
          </h2>
          <p className="text-sm text-rosa-green-muted">
            Am besten erreichst du uns per Mail oder über das Formular. Für
            kurze Rückfragen darfst du uns auch gerne per WhatsApp schreiben.
          </p>

          <div className="text-sm space-y-1">
            <p className="font-medium">E-Mail</p>
            <a
              href="mailto:kontakt@rosabakery.ch"
              className="underline-offset-4 hover:underline text-rosa-green"
            >
              kontakt@rosabakery.ch
            </a>
          </div>

          <div className="text-sm space-y-1">
            <p className="font-medium">Telefon / WhatsApp</p>

            <div className="flex items-center gap-2">
              <a
                href="tel:+417622334462"
                className="underline-offset-4 hover:underline text-rosa-green"
              >
                +41 76 223 34 46
              </a>

              <a
                href="https://wa.me/417622334462"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#4D6936]/40 text-rosa-green hover:bg-[#D6CEA9]/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M19.11 17.48c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.45-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44 0 1.44 1.02 2.84 1.16 3.04.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
                  <path d="M16.03 3C9.38 3 4 8.38 4 15.03c0 2.65.87 5.09 2.34 7.07L4 29l7.1-2.29a11.96 11.96 0 0 0 4.93 1.03c6.65 0 12.03-5.38 12.03-12.03C28.06 8.38 22.68 3 16.03 3zm0 21.9c-1.63 0-3.14-.42-4.46-1.15l-.32-.19-4.21 1.36 1.37-4.1-.21-.34a9.85 9.85 0 0 1-1.5-5.2c0-5.44 4.42-9.86 9.86-9.86s9.86 4.42 9.86 9.86-4.42 9.86-9.86 9.86z" />
                </svg>
              </a>
            </div>
          </div>


          <p className="text-xs text-rosa-green-muted">
            Hinweis: Da wir viel in der Backstube sind, können wir nicht immer
            sofort ans Telefon – per Nachricht erreichst du uns am sichersten.
          </p>
        </div>
      </section>

      {/* FORMULAR (verde sólido) */}
      <section className="rounded-xl bg-[#4D6936] border border-[#D6CEA9]/50 px-6 py-8 text-[#FDFAE9]">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#FDFAE9]">
          Kontaktformular
        </h2>
        <p className="text-sm text-[#FDFAE9]/85 mb-6 max-w-2xl">
          Erzähl uns kurz, worum es geht – Anlass, Datum (falls schon bekannt)
          und was du dir ungefähr vorstellst. Je mehr wir wissen, desto besser
          können wir dir passende Vorschläge machen.
        </p>

        <form action="/api/kontakt" method="POST" className="space-y-5">
          {/* Name + E-Mail */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9]"
                placeholder="Vor- und Nachname"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="email">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9]"
                placeholder="deine@email.ch"
              />
            </div>
          </div>

          {/* Telefon + Datum */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="phone">
                Telefon / WhatsApp (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9]"
                placeholder="+41 ..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="date">
                Datum des Anlasses (falls bekannt)
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9]"
              />
            </div>
          </div>

          {/* Anlass */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="occasion">
              Anlass / Art der Anfrage
            </label>
            <input
              id="occasion"
              name="occasion"
              type="text"
              className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9]"
              placeholder="z.B. Geburtstag, Hochzeit, Firmenevent..."
            />
          </div>

          {/* Nachricht */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#FDFAE9]" htmlFor="message">
              Deine Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-[#D6CEA9]/70 bg-white px-3 py-2 text-sm text-[#4D6936] outline-none focus:border-[#FDFAE9] focus:ring-1 focus:ring-[#FDFAE9] resize-y"
              placeholder="Erzähl uns kurz, was du dir vorstellst..."
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#D6CEA9] text-[#4D6936] hover:bg-[#FDFAE9] transition-colors"
            >
              Nachricht senden
            </button>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#FDFAE9]/70 text-[#FDFAE9] hover:bg-white/10 transition-colors"
            >
              Per WhatsApp schreiben
            </a>
          </div>

          <p className="text-xs text-[#FDFAE9]/70 pt-1">
            Wir antworten in der Regel innerhalb von 1–2 Werktagen. Für sehr
            kurzfristige Anfragen empfehlen wir zusätzlich eine Nachricht per
            WhatsApp.
          </p>
        </form>
      </section>

      {/* DIREKTE INFO */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-green">
            Standort
          </h2>
          <p className="text-sm text-rosa-green-muted">
            Region Bern, Schweiz
            <br />
            Produktion in einer kleinen Manufaktur – Abholung nach Absprache.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-green">
            Abholung & Lieferung
          </h2>
          <p className="text-sm text-rosa-green-muted">
            Je nach Anlass und Grösse der Bestellung sind Abholung und in
            bestimmten Fällen Lieferung möglich. Schreib uns einfach, was du
            brauchst – wir schauen gemeinsam nach der besten Lösung.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-rosa-green">
            Planung
          </h2>
          <p className="text-sm text-rosa-green-muted">
            Für grössere Torten empfehlen wir eine Anfrage mindestens 3–4 Wochen
            im Voraus. Spontane Anfragen sind je nach Auslastung ebenfalls
            möglich.
          </p>
        </div>
      </section>
    </div>
  );
}
