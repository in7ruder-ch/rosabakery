"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="de">
      <body className="min-h-screen bg-[#4D6936] text-rosa-cream">
        {/* HEADER */}
        <header className="border-b border-[#D6CEA9]/60 py-6">
          <div className="max-w-6xl mx-auto px-4">

            {/* TOP BAR (mobile: logo left / burger right) */}
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
                className="md:hidden absolute right-0 text-rosa-cream"
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
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/produkte" className="hover:text-white transition-colors">
                Produkte
              </Link>
              <Link href="/ueber-uns" className="hover:text-white transition-colors">
                Über uns
              </Link>
              <Link href="/kontakt" className="hover:text-white transition-colors">
                Kontakt
              </Link>
              <Link href="/bestellen" className="hover:text-white transition-colors">
                Bestellen
              </Link>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
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
            <div className="md:hidden border-t border-[#D6CEA9]/40 mt-4">
              <nav className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
                <Link onClick={() => setMenuOpen(false)} href="/">Home</Link>
                <Link onClick={() => setMenuOpen(false)} href="/produkte">Produkte</Link>
                <Link onClick={() => setMenuOpen(false)} href="/ueber-uns">Über uns</Link>
                <Link onClick={() => setMenuOpen(false)} href="/kontakt">Kontakt</Link>
                <Link onClick={() => setMenuOpen(false)} href="/bestellen">Bestellen</Link>
              </nav>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* FOOTER (sin cambios) */}
        <footer className="mt-16 border-t border-[#D6CEA9]/60 py-10">
          <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-rosa-white">
                Rosa Bäckerei
              </h3>
              <p className="text-sm text-rosa-gold-soft">
                Handgemachte Torten &amp; Delikatessen aus der Region.
              </p>
            </div>

            <div className="space-y-1 text-sm text-rosa-gold-soft">
              <p className="font-medium text-rosa-white">Kontakt</p>
              <p>Bern, Schweiz</p>
              <a href="mailto:rosa.Bäckerei@email.com" className="hover:underline">
                rosa.Bäckerei@email.com
              </a>
              <a href="tel:+41000000000" className="hover:underline block">
                +41 00 000 00 00
              </a>
            </div>

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
            © {new Date().getFullYear()} Rosa Bäckerei — Alle Rechte vorbehalten.
          </div>
        </footer>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/41000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-white text-rosa-green px-4 py-3 rounded-full shadow-lg border border-[#D6CEA9] hover:bg-[#FFF8E8] transition-colors"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
