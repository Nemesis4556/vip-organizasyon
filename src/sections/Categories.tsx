import { categories } from "../data/categories";
import { business } from "../data/business";
import Reveal from "../components/Reveal";

export default function Categories() {
  return (
    <section className="section" id="organizasyonlar">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">01 — Organizasyonlar</span>
          <h2 className="section-title">
            NEYİ
            <br />
            <em>KUTLUYORUZ?</em>
          </h2>
        </Reveal>

        <div className="categories-list">
          {categories.map((category) => (
            <a
              key={category.id}
              href={business.whatsappUrl(
                `Merhaba, ${category.name} organizasyonu hakkında bilgi ve teklif almak istiyorum.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="category-block"
            >
              <div className="category-block-inner">
                <div className="category-figure">
                  <img src={category.image} alt="" loading="lazy" />
                </div>
                <div className="category-row">
                  <div className="category-text">
                    <span className="category-name">{category.name}</span>
                    <p className="category-desc">{category.description}</p>
                  </div>
                  <span className="category-arrow" aria-hidden="true">
                    <svg className="icon" aria-hidden="true">
                      <use href="/icons.svg#icon-arrow" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
