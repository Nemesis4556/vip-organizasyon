import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">{business.shortName}</span>
            <p className="footer-tag">
              {business.city} / {business.region}
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Keşfet</div>
            <ul>
              <li>
                <a href="#organizasyonlar">Organizasyonlar</a>
              </li>
              <li>
                <a href="#hizmetler">Hizmetler</a>
              </li>
              <li>
                <a href="#paketler">Paketler</a>
              </li>
              <li>
                <a href="#galeri">Galeri</a>
              </li>
              <li>
                <a href="#mekan">Mekan</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">İletişim</div>
            <ul>
              <li>
                <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              </li>
              <li>
                <a
                  href={business.whatsappUrl(
                    "Merhaba, Vip Organizasyon Merkezi hakkında bilgi almak istiyorum."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#iletisim">Adres</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Sosyal</div>
            <ul>
              <li>
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.9rem" }}>
                  Instagram (yakında)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 {business.name}</p>
          <p className="footer-copy">{business.address}</p>
        </div>
      </div>
    </footer>
  );
}
