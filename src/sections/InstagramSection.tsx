import Reveal from "../components/Reveal";

// GERÇEK VERİ UYARISI:
// Instagram hesabı doğrulanmadı.
// Yayına almadan önce gerçek profil eklenmelidir.

export default function InstagramSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="instagram-card">
          <div className="instagram-icon">
            <svg className="icon" aria-hidden="true">
              <use href="/icons.svg#icon-instagram" />
            </svg>
          </div>
          <h3 className="venue-name">Instagram'da Yakında</h3>
          <p className="instagram-note">
            Instagram hesabı henüz doğrulanmadı. Gerçek profil eklendiğinde bu
            alan güncellenecektir.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
