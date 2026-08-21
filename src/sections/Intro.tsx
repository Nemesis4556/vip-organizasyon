import Reveal from "../components/Reveal";

export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <Reveal className="intro-inner">
          <span className="gold-rule" />
          <h2 className="intro-title">
            HER ETKİNLİĞİN
            <br />
            <em>KENDİ HİKAYESİ</em> VARDIR.
          </h2>
          <p className="body-text intro-text">
            Vip Organizasyon Merkezi olarak düğün, nişan, kına, kurumsal
            etkinlik ve özel günleriniz için organizasyon çözümleri sunuyoruz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
