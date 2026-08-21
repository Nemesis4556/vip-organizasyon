import { useState } from "react";
import { packages, type Package } from "../data/packages";
import Reveal from "../components/Reveal";
import PackageModal from "../components/PackageModal";

export default function FeaturedPackages() {
  const [selected, setSelected] = useState<Package | null>(null);

  return (
    <section className="section" id="paketler">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">03 — Paketler</span>
          <h2 className="section-title">
            ORGANİZASYON
            <br />
            <em>PAKETLERİ</em>
          </h2>
        </Reveal>

        <Reveal variant="stagger" className="packages-grid">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              type="button"
              className="package-card"
              onClick={() => setSelected(pkg)}
            >
              <div className="package-card-top">
                <div>
                  <span className="package-category">{pkg.category}</span>
                  <h3 className="package-name">{pkg.name}</h3>
                </div>
              </div>

              <p className="package-desc">{pkg.description}</p>

              <div className="package-card-bottom">
                <span className="package-price">{pkg.priceLabel}</span>
                <span className="package-cta">
                  Detayları Gör
                  <svg className="icon" aria-hidden="true">
                    <use href="/icons.svg#icon-arrow" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </Reveal>
      </div>

      <PackageModal pkg={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
