import { useEffect, useState } from "react";
import { business } from "../data/business";

const navLinks = [
  { href: "#organizasyonlar", label: "Organizasyonlar" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#mekan", label: "Mekan" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="container navbar-inner">
          <a href="#top" className="navbar-logo" onClick={closeMenu}>
            {business.shortName}
            <span>Akhisar · Manisa</span>
          </a>

          <nav className="navbar-links" aria-label="Ana menü">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={business.whatsappUrl(
              "Merhaba, Vip Organizasyon Merkezi hakkında bilgi almak istiyorum."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar-cta"
          >
            Teklif Al
            <svg className="icon" aria-hidden="true">
              <use href="/icons.svg#icon-arrow" />
            </svg>
          </a>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <svg className="icon" aria-hidden="true">
              <use href={`/icons.svg#icon-${isMenuOpen ? "close" : "menu"}`} />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={business.whatsappUrl(
            "Merhaba, Vip Organizasyon Merkezi hakkında bilgi almak istiyorum."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={closeMenu}
        >
          Teklif Al
          <svg className="icon" aria-hidden="true">
            <use href="/icons.svg#icon-arrow" />
          </svg>
        </a>
      </div>
    </>
  );
}
