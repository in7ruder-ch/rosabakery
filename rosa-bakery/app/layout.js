"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="de">
      {/* Canvas blanco + texto base verde */}
      <body className="min-h-screen bg-white text-rosa-green">
        {/* HEADER */}
        <header className="border-b border-[#D6CEA9]/60 py-6 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* TOP BAR (mobile: logo center / burger right) */}
            <div className="relative flex items-center justify-center">
              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <img
                  src="/img/logo.png"
                  alt="Rosa Bäckerei Logo"
                  className="w-[140px] md:w-[160px] object-contain"
                />
              </Link>

              {/* BURGER (mobile only) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden absolute right-0 text-rosa-green"
                aria-label="Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex justify-center mt-4 items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-rosa-green-soft transition-colors">
                Home
              </Link>
              <Link href="/produkte" className="hover:text-rosa-green-soft transition-colors">
                Produkte
              </Link>
              <Link href="/ueber-uns" className="hover:text-rosa-green-soft transition-colors">
                Über uns
              </Link>
              <Link href="/kontakt" className="hover:text-rosa-green-soft transition-colors">
                Kontakt
              </Link>
              <Link href="/bestellen" className="hover:text-rosa-green-soft transition-colors">
                Bestellen
              </Link>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rosa-green-soft transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 7.5h.008v.008H16.5V7.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                  />
                </svg>
              </a>
            </nav>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden border-t border-[#D6CEA9]/40 mt-4 bg-white">
              <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
                <Link onClick={() => setMenuOpen(false)} href="/">
                  Home
                </Link>
                <Link onClick={() => setMenuOpen(false)} href="/produkte">
                  Produkte
                </Link>
                <Link onClick={() => setMenuOpen(false)} href="/ueber-uns">
                  Über uns
                </Link>
                <Link onClick={() => setMenuOpen(false)} href="/kontakt">
                  Kontakt
                </Link>
                <Link onClick={() => setMenuOpen(false)} href="/bestellen">
                  Bestellen
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-[#D6CEA9]/60 py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-rosa-green">
                Rosa Bäckerei
              </h3>
              <p className="text-sm text-rosa-green-muted">
                Handgemachte Torten &amp; Delikatessen aus der Region.
              </p>
            </div>

            <div className="space-y-1 text-sm text-rosa-green-muted">
              <p className="font-medium text-rosa-green">Kontakt</p>
              <p>Bern, Schweiz</p>
              <a href="mailto:kontakt@rosabakery.ch" className="hover:underline">
                kontakt@rosabakery.ch
              </a>
              <a href="tel:+410762234462" className="hover:underline block">
                +41 076 223 44 62
              </a>
            </div>

            <div className="space-y-2 text-sm text-rosa-green-muted">
              <p className="font-medium text-rosa-green">Navigation</p>
              <div className="flex flex-col space-y-1">
                <Link href="/">Home</Link>
                <Link href="/produkte">Produkte</Link>
                <Link href="/ueber-uns">Über uns</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/bestellen">Bestellen</Link>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-rosa-green-muted mt-8">
            © {new Date().getFullYear()} Rezai Bäckerei — Alle Rechte vorbehalten.
          </div>
        </footer>

        {/* WHATSAPP FLOAT (en blanco conviene verde para contraste) */}
        <a
          href="https://wa.me/41000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#4D6936] text-[#FDFAE9] flex items-center justify-center shadow-lg hover:bg-[#5D764A] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-current"
          >
            <path d="M19.11 17.48c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.21-.45-2.31-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.33.45-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44 0 1.44 1.02 2.84 1.16 3.04.15.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
            <path d="M16.03 3C9.38 3 4 8.38 4 15.03c0 2.65.87 5.09 2.34 7.07L4 29l7.1-2.29a11.96 11.96 0 0 0 4.93 1.03c6.65 0 12.03-5.38 12.03-12.03C28.06 8.38 22.68 3 16.03 3zm0 21.9c-1.63 0-3.14-.42-4.46-1.15l-.32-.19-4.21 1.36 1.37-4.1-.21-.34a9.85 9.85 0 0 1-1.5-5.2c0-5.44 4.42-9.86 9.86-9.86s9.86 4.42 9.86 9.86-4.42 9.86-9.86 9.86z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
