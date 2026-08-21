import { business } from "../data/business";
import Reveal from "../components/Reveal";

export default function StoreInfo() {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="section" id="iletisim">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">08 — İletişim</span>
          <h2 className="section-title">PLANLAYALIM.</h2>
        </Reveal>

        <div className="store-grid">
          <Reveal className="store-details">
            <div className="store-row">
              <span className="store-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="/icons.svg#icon-pin" />
                </svg>
              </span>
              <div>
                <div className="store-label">Adres</div>
                <div className="store-value">
                  {business.name}
                  <br />
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </div>
              </div>
            </div>

            <div className="store-row">
              <span className="store-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="/icons.svg#icon-phone" />
                </svg>
              </span>
              <div>
                <div className="store-label">Telefon</div>
                <div className="store-value">
                  <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                </div>
              </div>
            </div>

            <div className="store-row">
              <span className="store-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="/icons.svg#icon-whatsapp" />
                </svg>
              </span>
              <div>
                <div className="store-label">WhatsApp</div>
                <div className="store-value">
                  <a
                    href={business.whatsappUrl(
                      "Merhaba, Vip Organizasyon Merkezi'nden teklif almak istiyorum."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="store-row">
              <span className="store-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="/icons.svg#icon-clock" />
                </svg>
              </span>
              <div>
                <div className="store-label">Çalışma Saatleri</div>
                <div className="store-value">{business.hours}</div>
                {/* GERÇEK VERİ BEKLİYOR: Haftalık çalışma saatleri işletmeden teyit edilecek. */}
                <div className="store-value is-placeholder">
                  Haftalık çalışma saatleri işletmeden teyit edilecek.
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade" className="map-wrap">
            <iframe
              title={`${business.name} konum haritası`}
              src={mapsSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
