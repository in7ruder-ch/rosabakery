import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rosa Bakery",
  description: "Rosa Bakery - Design-Torten und Delikatessen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-slate-900">
        {/* HEADER */}
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo / Marca */}
            <div className="text-lg font-semibold tracking-wide">
              {/* Más adelante acá podemos poner el logo como imagen */}
              <span>Rosa Bakery</span>
            </div>

            {/* Navegación */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-rose-600 transition-colors">
                Home
              </Link>
              <Link
                href="/produkte"
                className="hover:text-rose-600 transition-colors"
              >
                Produkte
              </Link>
              <Link
                href="/ueber-uns"
                className="hover:text-rose-600 transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className="hover:text-rose-600 transition-colors"
              >
                Kontakt
              </Link>
              <Link
                href="/bestellen"
                className="hover:text-rose-600 transition-colors"
              >
                Bestellen
              </Link>

              {/* Instagram (placeholder por ahora) */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-rose-600 transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-200 py-10">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">

            {/* Columna 1 */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">Rosa Bakery</h3>
              <p className="text-sm text-slate-600">
                Handgemachte Torten & Delikatessen aus der Region.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Navigation</p>
              <div className="flex flex-col text-sm text-slate-700 space-y-1">
                <Link href="/">Home</Link>
                <Link href="/produkte">Produkte</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/bestellen">Bestellen</Link>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-1 text-sm text-slate-700">
              <p className="font-medium">Kontakt</p>
              <p>Bern, Schweiz</p>
              <p>rosa.bakery@email.com</p>
              <p>+41 00 000 00 00</p>
            </div>

            
          </div>

          {/* Footer bottom line */}
          <div className="text-center text-xs text-slate-500 mt-8">
            © {new Date().getFullYear()} Rosa Bakery — Alle Rechte vorbehalten.
          </div>
        </footer>

      </body>
    </html>
  );
}
