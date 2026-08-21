import { business } from "../data/business";
import Reveal from "../components/Reveal";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal className="final-cta-inner">
          <span className="gold-rule" />
          <h2 className="final-cta-title">
            GECENİZİ
            <br />
            <em>BİRLİKTE</em> PLANLAYALIM.
          </h2>
          <p className="body-text" style={{ maxWidth: "46ch" }}>
            Organizasyonunuz için detayları konuşmak ve teklif almak için bize
            ulaşın.
          </p>
          <div className="final-cta-actions">
            <a
              href={business.whatsappUrl(
                "Merhaba, Vip Organizasyon Merkezi'nden teklif almak istiyorum."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp'tan Teklif Al
              <svg className="icon" aria-hidden="true">
                <use href="/icons.svg#icon-arrow" />
              </svg>
            </a>
            <a href={`tel:${business.phone}`} className="btn btn-outline">
              Ara: {business.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
