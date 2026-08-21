import Reveal from "../components/Reveal";

export default function Brand() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="brand-inner">
          <span className="eyebrow">07 — Hakkımızda</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            ANLAR
            <br />
            <em>DETAYLARDA SAKLI.</em>
          </h2>
          <p className="body-text brand-text">
            Vip Organizasyon Merkezi olarak dekorasyon, müzik ve etkinlik
            planlaması odağında çalışıyoruz. Her organizasyonu, o günün
            kendine has ihtiyaçlarına göre ele alıyor; düğün, nişan, kına ve
            özel gününüzün detaylarını birlikte planlıyoruz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
