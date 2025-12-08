import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 space-y-10">
      {/* HERO 3 COLUMNAS */}
      <section className="grid gap-6 md:grid-cols-3 items-stretch">
        {/* Columna izquierda - imagen */}
        <div className="aspect-[3/4] rounded-xl bg-gray-100 overflow-hidden">
          {/* Más adelante acá va una imagen real */}
        </div>

        {/* Columna central - texto + CTA */}
        <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-8 flex flex-col justify-center gap-4">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
            Rosa Bakery
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Design-Torten für deine besonderen Momente
          </h1>
          <p className="text-sm text-slate-600">
            Handgemachte Torten und Delikatessen – individuell gestaltet,
            liebevoll gebacken und perfekt für deine Feier.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Jetzt bestellen
            </Link>
            <Link
              href="/produkte"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-slate-300 text-slate-800 hover:border-slate-500 hover:text-slate-900 transition-colors"
            >
              Produkte ansehen
            </Link>
          </div>
        </div>

        {/* Columna derecha - imagen */}
        <div className="aspect-[3/4] rounded-xl bg-gray-100 overflow-hidden">
          {/* Más adelante acá va otra imagen real */}
        </div>
      </section>

      {/* FRANJA DE MENSAJE */}
      <section className="border border-dashed border-slate-200 rounded-xl py-6 px-4 text-center bg-slate-50">
        <p className="text-sm md:text-base tracking-wide text-slate-700">
          Alle Torten werden individuell nach deinem Geschmack und Stil kreiert.
        </p>
      </section>

      {/* PRODUKTE – FESTTAGSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Festtagstorten
            </h2>
            <p className="text-sm text-slate-600">
              Für Geburtstage, Jubiläen und besondere Anlässe.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-slate-700"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-slate-200 bg-white p-2"
            >
              <div className="aspect-[4/5] rounded-lg bg-gray-100" />
              <div className="px-1 pb-2">
                <p className="text-sm font-medium">Festtagstorte {item}</p>
                <p className="text-xs text-slate-500">Ab CHF 80.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – HOCHZEITSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Hochzeitstorten
            </h2>
            <p className="text-sm text-slate-600">
              Elegante Torten für euren besonderen Tag.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-slate-700"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-slate-200 bg-white p-2"
            >
              <div className="aspect-[4/5] rounded-lg bg-gray-100" />
              <div className="px-1 pb-2">
                <p className="text-sm font-medium">Hochzeitstorte {item}</p>
                <p className="text-xs text-slate-500">Ab CHF 150.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – DELIKATESSEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Delikatessen</h2>
            <p className="text-sm text-slate-600">
              Kleine süsse Highlights – perfekt zum Verschenken oder Geniessen.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-slate-700"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-xl border border-slate-200 bg-white p-2"
            >
              <div className="aspect-[4/5] rounded-lg bg-gray-100" />
              <div className="px-1 pb-2">
                <p className="text-sm font-medium">Delikatesse {item}</p>
                <p className="text-xs text-slate-500">Ab CHF 5.–</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ÜBER UNS + CTA KONTAKT */}
      <section className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Columna izquierda - About (ocupa 2 columnas en desktop) */}
        <div className="space-y-4 md:col-span-2">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
            Über Rosa Bakery
          </p>
          <h2 className="text-lg md:text-xl font-semibold">
            Handgemachte Torten mit Herz und Design.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Bei Rosa Bakery entstehen Torten, die genauso einzigartig sind wie
            deine Anlässe. Jede Kreation wird von Hand gebacken, liebevoll
            dekoriert und individuell auf deinen Geschmack abgestimmt – von
            festlichen Geburtstagstorten bis zu eleganten Hochzeitstorten.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Wir arbeiten mit ausgewählten Zutaten, viel Liebe zum Detail und
            einem Auge für Ästhetik – damit deine Torte nicht nur gut schmeckt,
            sondern auch auf jedem Foto glänzt.
          </p>
        </div>

        {/* Columna derecha - CTA Kontakt */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-7 flex flex-col justify-center gap-4">
          <h3 className="text-base md:text-lg font-semibold">
            Eine Torte nach deinem Wunsch?
          </h3>
          <p className="text-sm text-slate-600">
            Erzähle uns von deinem Anlass und deiner Wunsch-Torte – wir melden
            uns mit Ideen, Möglichkeiten und einer unverbindlichen Offerte.
          </p>

          <ul className="text-sm text-slate-600 space-y-1">
            <li>• Individuelles Design nach deinem Stil</li>
            <li>• Persönliche Beratung</li>
            <li>• Regionale Herstellung in kleiner Manufaktur</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-slate-300 text-slate-800 hover:border-slate-500 hover:text-slate-900 transition-colors"
            >
              Direkt bestellen
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold">
          Was unsere Kund:innen sagen
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Review 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-slate-700">
              „Die Torte war wunderschön und hat fantastisch geschmeckt. Vielen
              Dank für die liebevolle Umsetzung!“
            </p>
            <p className="text-xs text-slate-500">– Laura, Bern</p>
          </div>

          {/* Review 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-slate-700">
              „Unsere Hochzeitstorte war ein Highlight! Perfekt abgestimmt auf
              unser Motto und super lecker.“
            </p>
            <p className="text-xs text-slate-500">– Markus & Anna, Thun</p>
          </div>

          {/* Review 3 */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-slate-700">
              „Sehr freundliche Beratung und wunderschönes Design. Immer wieder
              gern!“
            </p>
            <p className="text-xs text-slate-500">– Sophie, Zürich</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Mehr Einblicke auf Instagram
            </h2>
            <p className="text-sm text-slate-600">
              Folge uns auf Instagram für noch mehr Torten, Delikatessen und
              Einblicke aus der Backstube.
            </p>
          </div>

          <a
            href="https://instagram.com/deinprofil" // TODO: aquí va tu perfil real
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs md:text-sm underline-offset-4 hover:underline text-slate-700"
          >
            @rosabakery auf Instagram
          </a>
        </div>

        {/* Galería horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="min-w-[140px] aspect-square rounded-xl bg-gray-100 border border-slate-200 flex items-center justify-center text-xs text-slate-400"
            >
              Post {item}
            </div>
          ))}

          {/* Card final con CTA */}
          <a
            href="https://instagram.com/deinprofil" // mismo perfil real
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[140px] aspect-square rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            Mehr auf Instagram
          </a>
        </div>
      </section>


    </div>
  );
}
