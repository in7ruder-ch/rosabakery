import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rosa Bakery",
  description: "Rosa Bakery - Design-Torten und Delikatessen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-[#4D6936] text-[#D6CEA9]">
        {/* HEADER */}
        <header className="border-b border-[#D6CEA9]/60 bg-[#4D6936]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo / Marca */}
            <div className="text-lg font-semibold tracking-wide">
              Rosa Bakery
            </div>

            {/* Navegación */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/produkte"
                className="hover:text-white transition-colors"
              >
                Produkte
              </Link>
              <Link
                href="/ueber-uns"
                className="hover:text-white transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className="hover:text-white transition-colors"
              >
                Kontakt
              </Link>
              <Link
                href="/bestellen"
                className="hover:text-white transition-colors"
              >
                Bestellen
              </Link>

              {/* Instagram (placeholder) */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-[#D6CEA9]/60 bg-[#4D6936] py-10">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
            {/* Columna 1 */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">Rosa Bakery</h3>
              <p className="text-sm text-[#D6CEA9CC]">
                Handgemachte Torten &amp; Delikatessen aus der Region.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="space-y-1 text-sm text-[#D6CEA9CC]">
              <p className="font-medium text-[#D6CEA9]">Kontakt</p>
              <p>Bern, Schweiz</p>
              <p>rosa.bakery@email.com</p>
              <p>+41 00 000 00 00</p>
            </div>

            {/* Columna 3 */}
            <div className="space-y-2 text-sm text-[#D6CEA9CC]">
              <p className="font-medium text-[#D6CEA9]">Navigation</p>
              <div className="flex flex-col space-y-1">
                <Link href="/">Home</Link>
                <Link href="/produkte">Produkte</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/bestellen">Bestellen</Link>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-[#D6CEA9B3] mt-8">
            © {new Date().getFullYear()} Rosa Bakery — Alle Rechte vorbehalten.
          </div>
        </footer>
      </body>
    </html>
  );
}
