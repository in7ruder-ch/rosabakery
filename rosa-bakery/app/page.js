import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 space-y-10">
      {/* HERO 3 COLUMNAS */}
      <section className="grid gap-6 md:grid-cols-3 items-stretch">
        {/* Columna izquierda - imagen */}
        <div className="aspect-3/4 rounded-xl bg-white/10 border border-[#D6CEA9]/50 overflow-hidden">
          {/* Más adelante acá va una imagen real */}
        </div>

        {/* Columna central - texto + CTA */}
        <div className="rounded-xl bg-white/90 border border-[#D6CEA9]/80 px-6 py-8 flex flex-col justify-center gap-4 text-[#4D6936]">
          <p className="text-xs tracking-[0.25em] uppercase text-[#A6A086]">
            Rosa Bakery
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Design-Torten für deine besonderen Momente
          </h1>
          <p className="text-sm">
            Handgemachte Torten und Delikatessen – individuell gestaltet,
            liebevoll gebacken und perfekt für deine Feier.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-[#D6CEA9] hover:bg-[#5D764A] transition-colors"
            >
              Jetzt bestellen
            </Link>
            <Link
              href="/produkte"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-[#4D6936] hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Produkte ansehen
            </Link>
          </div>
        </div>

        {/* Columna derecha - imagen */}
        <div className="aspect-3/4 rounded-xl bg-white/10 border border-[#D6CEA9]/50 overflow-hidden">
          {/* Más adelante acá va otra imagen real */}
        </div>
      </section>

      {/* FRANJA DE MENSAJE */}
      <section className="border border-dashed border-[#D6CEA9] rounded-xl py-6 px-4 text-center bg-transparent">
        <p className="text-sm md:text-base tracking-wide text-[#D6CEA9]">
          Alle Torten werden individuell nach deinem Geschmack und Stil
          kreiert.
        </p>
      </section>

      {/* PRODUKTE – FESTTAGSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#D6CEA9]">
              Festtagstorten
            </h2>
            <p className="text-sm text-[#EADFC0]">
              Für Geburtstage, Jubiläen und besondere Anlässe.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-[#D6CEA9]"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-2"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-[#4D6936]">
                <p className="text-sm font-medium">Festtagstorte {item}</p>
                <p className="text-xs text-[#6B8360]">Ab CHF 80.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – HOCHZEITSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#D6CEA9]">
              Hochzeitstorten
            </h2>
            <p className="text-sm text-[#EADFC0]">
              Elegante Torten für euren besonderen Tag.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-[#D6CEA9]"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-2"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-[#4D6936]">
                <p className="text-sm font-medium">Hochzeitstorte {item}</p>
                <p className="text-xs text-[#6B8360]">Ab CHF 150.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – DELIKATESSEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#D6CEA9]">
              Delikatessen
            </h2>
            <p className="text-sm text-[#EADFC0]">
              Kleine süsse Highlights – perfekt zum Verschenken oder Geniessen.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-[#D6CEA9]"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-[#D6CEA9]/70 bg-white p-2"
            >
              <div className="aspect-4/5 rounded-lg bg-[#F5F1E2]" />
              <div className="px-1 pb-2 text-[#4D6936]">
                <p className="text-sm font-medium">Delikatesse {item}</p>
                <p className="text-xs text-[#6B8360]">Ab CHF 5.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ÜBER UNS + CTA KONTAKT */}
      <section className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Columna izquierda - About (ocupa 2 columnas en desktop) */}
        <div className="space-y-4 md:col-span-2 text-[#D6CEA9]">
          <p className="text-xs tracking-[0.25em] uppercase text-[#EADFC0]">
            Über Rosa Bakery
          </p>
          <h2 className="text-lg md:text-xl font-semibold">
            Handgemachte Torten mit Herz und Design.
          </h2>
          <p className="text-sm leading-relaxed">
            Bei Rosa Bakery entstehen Torten, die genauso einzigartig sind wie
            deine Anlässe. Jede Kreation wird von Hand gebacken, liebevoll
            dekoriert und individuell auf deinen Geschmack abgestimmt – von
            festlichen Geburtstagstorten bis zu eleganten Hochzeitstorten.
          </p>
          <p className="text-sm leading-relaxed">
            Wir arbeiten mit ausgewählten Zutaten, viel Liebe zum Detail und
            einem Auge für Ästhetik – damit deine Torte nicht nur gut schmeckt,
            sondern auch auf jedem Foto glänzt.
          </p>
        </div>

        {/* Columna derecha - CTA Kontakt */}
        <div className="rounded-xl border border-[#D6CEA9]/70 bg-white px-6 py-7 flex flex-col justify-center gap-4 text-[#4D6936]">
          <h3 className="text-base md:text-lg font-semibold">
            Eine Torte nach deinem Wunsch?
          </h3>
          <p className="text-sm">
            Erzähle uns von deinem Anlass und deiner Wunsch-Torte – wir melden
            uns mit Ideen, Möglichkeiten und einer unverbindlichen Offerte.
          </p>

          <ul className="text-sm space-y-1">
            <li>• Individuelles Design nach deinem Stil</li>
            <li>• Persönliche Beratung</li>
            <li>• Regionale Herstellung in kleiner Manufaktur</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-[#D6CEA9] hover:bg-[#5D764A] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-[#4D6936] hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Direkt bestellen
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-[#D6CEA9]">
          Was unsere Kund:innen sagen
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Review 1 */}
          <div className="rounded-xl border border-[#D6CEA9]/70 bg-white p-5 space-y-3 shadow-sm text-[#4D6936]">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm">
              „Die Torte war wunderschön und hat fantastisch geschmeckt. Vielen
              Dank für die liebevolle Umsetzung!“
            </p>
            <p className="text-xs text-[#6B8360]">– Laura, Bern</p>
          </div>

          {/* Review 2 */}
          <div className="rounded-xl border border-[#D6CEA9]/70 bg-white p-5 space-y-3 shadow-sm text-[#4D6936]">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm">
              „Unsere Hochzeitstorte war ein Highlight! Perfekt abgestimmt auf
              unser Motto und super lecker.“
            </p>
            <p className="text-xs text-[#6B8360]">– Markus &amp; Anna, Thun</p>
          </div>

          {/* Review 3 */}
          <div className="rounded-xl border border-[#D6CEA9]/70 bg-white p-5 space-y-3 shadow-sm text-[#4D6936]">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm">
              „Sehr freundliche Beratung und wunderschönes Design. Immer wieder
              gern!“
            </p>
            <p className="text-xs text-[#6B8360]">– Sophie, Zürich</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#D6CEA9]">
              Mehr Einblicke auf Instagram
            </h2>
            <p className="text-sm text-[#EADFC0]">
              Folge uns auf Instagram für noch mehr Torten, Delikatessen und
              Einblicke aus der Backstube.
            </p>
          </div>

          <a
            href="https://instagram.com/deinprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs md:text-sm underline-offset-4 hover:underline text-[#D6CEA9]"
          >
            @rosabakery auf Instagram
          </a>
        </div>

        {/* Galería horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="min-w-[140px] aspect-square rounded-xl bg-white border border-[#D6CEA9]/70 flex items-center justify-center text-xs text-[#4D6936]"
            >
              Post {item}
            </div>
          ))}

          {/* Card final con CTA */}
          <a
            href="https://instagram.com/deinprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[140px] aspect-square rounded-xl border border-dashed border-[#D6CEA9]/80 flex items-center justify-center text-xs font-medium text-[#D6CEA9] hover:bg-white/10"
          >
            Mehr auf Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
