import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rosa Bakery",
  description: "Rosa Bakery - Design-Torten und Delikatessen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-[#4D6936] text-rosa-gold">
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
              <h3 className="text-base font-semibold text-rosa-white">
                Rosa Bakery
              </h3>
              <p className="text-sm text-rosa-gold-soft">
                Handgemachte Torten &amp; Delikatessen aus der Region.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="space-y-1 text-sm text-rosa-gold-soft">
              <p className="font-medium text-rosa-white">Kontakt</p>
              <p>Bern, Schweiz</p>
              <a
                href="mailto:rosa.bakery@email.com"
                className="hover:underline underline-offset-4"
              >
                rosa.bakery@email.com
              </a>

              <a
                href="tel:+41000000000"
                className="hover:underline underline-offset-4 block"
              >
                +41 00 000 00 00
              </a>
            </div>

            {/* Columna 3 */}
            <div className="space-y-2 text-sm text-rosa-gold-soft">
              <p className="font-medium text-rosa-white">Navigation</p>
              <div className="flex flex-col space-y-1">
                <Link href="/">Home</Link>
                <Link href="/produkte">Produkte</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/bestellen">Bestellen</Link>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-rosa-gold-subtle mt-8">
            © {new Date().getFullYear()} Rosa Bakery — Alle Rechte vorbehalten.
          </div>
        </footer>
        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/41000000000" // ← pon tu número real aquí
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-white text-rosa-green font-medium px-4 py-3 rounded-full shadow-lg border border-[#D6CEA9] hover:bg-[#FFF8E8] transition-colors"
        >

          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04.25C6.34.25 1.55 5.04 1.55 10.74c0 1.9.5 3.76 1.45 5.41L.28 23.69l7.77-2.66a11.86 11.86 0 0 0 3.99.68h.01c5.7 0 10.49-4.79 10.49-10.49 0-2.78-1.08-5.39-3.02-7.34Zm-8.48 18.1h-.01a10.04 10.04 0 0 1-3.63-.66l-.26-.1-4.61 1.58 1.53-4.49-.11-.27a9.97 9.97 0 0 1-1.3-4.96c0-5.52 4.49-10.01 10.01-10.01 2.67 0 5.18 1.04 7.07 2.93a9.94 9.94 0 0 1 2.94 7.08c0 5.52-4.49 10.01-10.03 10.01Zm5.52-7.55c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.64.15-.19.3-.74.97-.91 1.17-.17.2-.33.22-.63.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.86 1.22 3.06.15.2 2.1 3.22 5.1 4.5.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>


      </body>
    </html>
  );
}
