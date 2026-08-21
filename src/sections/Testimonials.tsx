import { business } from "../data/business";
import Reveal from "../components/Reveal";

// GERÇEK VERİ UYARISI:
// Google yorumlarının gerçek metinleri doğrulanıp
// entegrasyon yapılmadan burada gösterilmemelidir.

export default function Testimonials() {
  const fullStars = Math.round(business.rating);

  return (
    <section className="section">
      <div className="container">
        <Reveal className="testimonials-head">
          <span className="section-number">06 — Değerlendirmeler</span>
          <h2 className="section-title">
            GERÇEK
            <br />
            <em>DENEYİMLER.</em>
          </h2>

          <div className="rating-summary">
            <div className="rating-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  className="icon"
                  key={i}
                  style={{ opacity: i < fullStars ? 1 : 0.25 }}
                >
                  <use href="/icons.svg#icon-star" />
                </svg>
              ))}
            </div>
            <span className="rating-number">{business.rating.toFixed(1)} / 5</span>
            <span className="rating-count">{business.reviewCount} Google yorumu</span>
          </div>
        </Reveal>

        <Reveal className="testimonial-placeholder">
          Google yorumları yakında burada gösterilecektir.
        </Reveal>
      </div>
    </section>
  );
}
