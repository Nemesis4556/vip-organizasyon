import { useEffect, useRef } from "react";
import type { Package } from "../data/packages";
import { business } from "../data/business";

interface PackageModalProps {
  pkg: Package | null;
  onClose: () => void;
}

export default function PackageModal({ pkg, onClose }: PackageModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = pkg !== null;

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const message = pkg
    ? `Merhaba, Vip Organizasyon Merkezi'nin ${pkg.name} hakkında bilgi ve teklif almak istiyorum.`
    : "";

  return (
    <div
      className={`modal-overlay ${isOpen ? "is-open" : ""}`}
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {pkg && (
        <div
          className="modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Kapat"
          >
            <svg className="icon" aria-hidden="true">
              <use href="/icons.svg#icon-close" />
            </svg>
          </button>

          <div className="modal-figure">
            <img src={pkg.image} alt="" />
          </div>

          <span className="modal-category">{pkg.category}</span>
          <h3 className="modal-title" id="modal-title">
            {pkg.name}
          </h3>
          <p className="modal-desc">{pkg.description}</p>

          <ul className="modal-features">
            {pkg.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="modal-actions">
            <a
              href={business.whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp'tan Teklif Al
              <svg className="icon" aria-hidden="true">
                <use href="/icons.svg#icon-whatsapp" />
              </svg>
            </a>
            <a href={`tel:${business.phone}`} className="btn btn-outline">
              Ara: {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
