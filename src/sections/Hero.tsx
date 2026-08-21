import { useEffect, useState } from "react";
import { business } from "../data/business";

// PLACEHOLDER IMAGE:
// Bu görseller Unsplash'tan örnek amaçlı kullanılmaktadır.
// Yayına almadan önce işletmenin gerçek etkinlik fotoğraflarıyla değiştirilmelidir.
const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=80",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`hero-bg-layer ${i === activeIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          {business.city.toUpperCase()} • {business.region.toUpperCase()}
        </p>
        <h1 className="hero-title">
          ÖZEL ANLARINIZI
          <br />
          UNUTULMAZ
          <br />
          <em>GECELERE</em> DÖNÜŞTÜRÜN.
        </h1>
        <p className="hero-desc">
          Düğün, nişan, kına ve özel organizasyonlarınız için dekorasyon,
          müzik ve etkinlik çözümleri.
        </p>
        <div className="hero-actions">
          <a
            href={business.whatsappUrl(
              "Merhaba, Vip Organizasyon Merkezi'nden teklif almak istiyorum."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Teklif Al
            <svg className="icon" aria-hidden="true">
              <use href="/icons.svg#icon-arrow" />
            </svg>
          </a>
          <a href="#organizasyonlar" className="btn btn-outline">
            Organizasyonları Keşfet
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
