import { gallery } from "../data/gallery";
import Reveal from "../components/Reveal";

export default function Inspiration() {
  return (
    <section className="section" id="galeri">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">04 — Galeri</span>
          <h2 className="section-title">
            BİRLİKTE
            <br />
            <em>YAŞANAN ANLAR.</em>
          </h2>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <Reveal key={item.id} variant="scale" as="figure" className={`gallery-item size-${item.size}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-label">{item.category}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
