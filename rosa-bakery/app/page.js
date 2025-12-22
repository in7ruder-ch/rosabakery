import Link from "next/link";
import { products } from "../data/products";

const featuredFesttagstorten = products
  .filter((p) => p.category === "festtagstorten" && p.featured)
  .slice(0, 3);

const featuredHochzeitstorten = products
  .filter((p) => p.category === "hochzeitstorten" && p.featured)
  .slice(0, 3);

const featuredDelikatessen = products
  .filter((p) => p.category === "delikatessen" && p.featured)
  .slice(0, 3);

export default function Home() {
  return (
    <div className="py-10 space-y-10">
      {/* HERO 3 COLUMNAS */}
      <section className="grid gap-6 md:grid-cols-3 items-stretch">
        {/* Columna izquierda - imagen */}
        <div
          className="aspect-3/4 rounded-xl bg-white border border-[#D6CEA9]/60 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/cake-1.jpeg')" }}
        />

        {/* Columna central - texto + CTA (informativa: verde sólida) */}
        <div className="rounded-xl bg-[#4D6936] border border-[#D6CEA9]/50 px-6 py-8 flex flex-col justify-center gap-4">
          <p className="text-xs tracking-[0.25em] uppercase text-[#FDFAE9]/80">
            Rosa Bäckerei
          </p>

          <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-[#FDFAE9]">
            Design-Torten für deine besonderen Momente
          </h1>

          <p className="text-sm text-[#FDFAE9]/85">
            Handgemachte Torten und Delikatessen – individuell gestaltet,
            liebevoll gebacken und perfekt für deine Feier.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#D6CEA9] text-[#4D6936] hover:bg-[#FDFAE9] transition-colors"
            >
              Jetzt bestellen
            </Link>
            <Link
              href="/produkte"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#FDFAE9]/70 text-[#FDFAE9] hover:bg-white/10 transition-colors"
            >
              Produkte ansehen
            </Link>
          </div>
        </div>

        {/* Columna derecha - imagen */}
        <div
          className="aspect-3/4 rounded-xl bg-white border border-[#D6CEA9]/60 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/cake-2.jpg')" }}
        />
      </section>

      {/* FRANJA DE NACHRICHT / MESSAGE STRIP (informativa: verde sólida) */}
      <section className="relative rounded-xl h-40 flex items-center justify-center text-center overflow-hidden"> <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-70 opacity-80" style={{ backgroundImage: "url('/img/texture-4.jpg')" }} /> <p className="relative z-10 text-sm md:text-lg tracking-wide text-rosa-white font-semibold px-4"> Alle Torten werden individuell nach deinem Geschmack und Stil kreiert. </p> </section>

      {/* PRODUKTE – FESTTAGSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Festtagstorten
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Für Geburtstage, Jubiläen und besondere Anlässe.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-rosa-green"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        {/* Producto cards: blancas con borde verde */}
        <div className="grid gap-4 md:grid-cols-3">
          {featuredFesttagstorten.map((cake) => (
            <div
              key={cake.id}
              className="group space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-lg overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – HOCHZEITSTORTEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Hochzeitstorten
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Elegante Torten für euren besonderen Tag.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-rosa-green"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredHochzeitstorten.map((cake) => (
            <div
              key={cake.id}
              className="group space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-lg overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUKTE – DELIKATESSEN */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Delikatessen
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Kleine süsse Highlights – perfekt zum Verschenken oder Geniessen.
            </p>
          </div>
          <Link
            href="/produkte"
            className="text-xs md:text-sm underline-offset-4 hover:underline text-rosa-green"
          >
            Alle Produkte ansehen
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredDelikatessen.map((cake) => (
            <div
              key={cake.id}
              className="group space-y-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              <div className="aspect-4/5 rounded-lg overflow-hidden bg-[#FFFDF5]">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${cake.image})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ÜBER UNS + CTA KONTAKT */}
      <section className="grid gap-8 md:grid-cols-3 items-center">
        {/* Informativa: verde sólida */}
        <div className="rounded-xl bg-[#4D6936] border border-[#D6CEA9]/50 p-6 md:col-span-2 space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-[#FDFAE9]/80">
            Über Rosa Bäckerei
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-[#FDFAE9]">
            Handgemachte Torten mit Herz und Design.
          </h2>
          <p className="text-sm text-[#FDFAE9]/85 leading-relaxed">
            Bei Rosa Bäckerei entstehen Torten, die genauso einzigartig sind wie
            deine Anlässe. Jede Kreation wird von Hand gebacken, liebevoll
            dekoriert und individuell auf deinen Geschmack abgestimmt – von
            festlichen Geburtstagstorten bis zu eleganten Hochzeitstorten.
          </p>
          <p className="text-sm text-[#FDFAE9]/85 leading-relaxed">
            Wir arbeiten mit ausgewählten Zutaten, viel Liebe zum Detail und
            einem Auge für Ästhetik – damit deine Torte nicht nur gut schmeckt,
            sondern auch auf jedem Foto glänzt.
          </p>

          <div className="pt-2">
            <Link
              href="/ueber-uns"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#D6CEA9] text-[#4D6936] hover:bg-[#FDFAE9] transition-colors"
            >
              Mehr über uns erfahren
            </Link>
          </div>
        </div>

        {/* CTA card (la dejamos blanca / estructura clara) */}
        <div className="rounded-xl border border-[#4D6936]/35 bg-white px-6 py-7 flex flex-col justify-center gap-4 text-rosa-green">
          <h3 className="text-base md:text-lg font-semibold">
            Eine Torte nach deinem Wunsch?
          </h3>
          <p className="text-sm text-rosa-green-muted">
            Erzähle uns von deinem Anlass und deiner Wunsch-Torte – wir melden
            uns mit Ideen, Möglichkeiten und einer unverbindlichen Offerte.
          </p>

          <ul className="text-sm space-y-1 text-rosa-green">
            <li>• Individuelles Design nach deinem Stil</li>
            <li>• Persönliche Beratung</li>
            <li>• Regionale Herstellung in kleiner Manufaktur</li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#4D6936] text-[#FDFAE9] hover:bg-[#5D764A] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/bestellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-[#4D6936] text-rosa-green hover:bg-[#D6CEA9]/40 transition-colors"
            >
              Direkt bestellen
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS (mantener blancas, borde verde suave) */}
      <section className="space-y-6">
        <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
          Was unsere Kund:innen sagen
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[#4D6936]/35 bg-white p-5 space-y-3 shadow-sm text-rosa-green">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-rosa-green">
              „Die Torte war wunderschön und hat fantastisch geschmeckt. Vielen
              Dank für die liebevolle Umsetzung!“
            </p>
            <p className="text-xs text-rosa-green-muted">– Laura, Bern</p>
          </div>

          <div className="rounded-xl border border-[#4D6936]/35 bg-white p-5 space-y-3 shadow-sm text-rosa-green">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-rosa-green">
              „Unsere Hochzeitstorte war ein Highlight! Perfekt abgestimmt auf
              unser Motto und super lecker.“
            </p>
            <p className="text-xs text-rosa-green-muted">
              – Markus &amp; Anna, Thun
            </p>
          </div>

          <div className="rounded-xl border border-[#4D6936]/35 bg-white p-5 space-y-3 shadow-sm text-rosa-green">
            <div className="text-yellow-500">★★★★★</div>
            <p className="text-sm text-rosa-green">
              „Sehr freundliche Beratung und wunderschönes Design. Immer wieder
              gern!“
            </p>
            <p className="text-xs text-rosa-green-muted">– Sophie, Zürich</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-rosa-green">
              Mehr Einblicke auf Instagram
            </h2>
            <p className="text-sm text-rosa-green-muted">
              Folge uns auf Instagram für noch mehr Torten, Delikatessen und
              Einblicke aus der Backstube.
            </p>
          </div>

          <a
            href="https://instagram.com/deinprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs md:text-sm underline-offset-4 hover:underline text-rosa-green"
          >
            @rosaBäckerei auf Instagram
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="min-w-[140px] aspect-square rounded-xl bg-white border border-[#4D6936]/35 flex items-center justify-center text-xs text-rosa-green"
            >
              Post {item}
            </div>
          ))}

          <a
            href="https://instagram.com/deinprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[140px] aspect-square rounded-xl border border-dashed border-[#4D6936]/35 flex items-center justify-center text-xs font-medium text-rosa-green hover:bg-[#FFFDF5] transition-colors"
          >
            Mehr auf Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
