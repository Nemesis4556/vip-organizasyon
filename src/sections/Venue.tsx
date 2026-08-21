import { business } from "../data/business";
import Reveal from "../components/Reveal";

// PLACEHOLDER IMAGE:
// Bu görsel Unsplash'tan örnek amaçlı kullanılmaktadır.
// Yayına almadan önce mekânın gerçek fotoğrafıyla değiştirilmelidir.
const venueImage =
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1400&q=80";

export default function Venue() {
  return (
    <section className="section" id="mekan">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">05 — Mekan</span>
          <h2 className="section-title">
            GECENİZİN
            <br />
            <em>SAHNESİ.</em>
          </h2>
        </Reveal>

        <div className="venue-grid">
          <Reveal variant="scale" className="venue-figure">
            <img src={venueImage} alt="Vip Organizasyon Merkezi mekân atmosferi" loading="lazy" />
          </Reveal>

          <Reveal className="venue-text">
            <h3 className="venue-name">{business.name}</h3>
            <span className="venue-location">
              <svg className="icon" aria-hidden="true">
                <use href="/icons.svg#icon-pin" />
              </svg>
              {business.city} / {business.region}
            </span>
            <p className="body-text">
              Sıcak, altın tonlu ışıklandırma ve gece etkinliği atmosferiyle
              organizasyonunuza uygun bir sahne sunuyoruz.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
