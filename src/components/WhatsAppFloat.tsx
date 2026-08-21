import { business } from "../data/business";

export default function WhatsAppFloat() {
  return (
    <a
      href={business.whatsappUrl(
        "Merhaba, Vip Organizasyon Merkezi'nden teklif almak istiyorum."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="WhatsApp'tan teklif al"
    >
      <span className="wa-tooltip" aria-hidden="true">
        WhatsApp'tan Teklif Al
      </span>
      <svg className="icon" aria-hidden="true">
        <use href="/icons.svg#icon-whatsapp" />
      </svg>
    </a>
  );
}
