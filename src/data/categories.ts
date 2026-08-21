// PLACEHOLDER IMAGE:
// Görseller Unsplash'tan örnek amaçlı kullanılmaktadır.
// Yayına almadan önce işletmenin gerçek etkinlik fotoğraflarıyla değiştirilmelidir.

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "dugun",
    name: "Düğün",
    description: "Düğün geceniz için mekân ve organizasyon detaylarının hazırlanması.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "nisan",
    name: "Nişan",
    description: "Nişan töreninize uygun dekorasyon ve etkinlik düzenlemeleri.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "kina",
    name: "Kına",
    description: "Kına gecesi için atmosfer, dekorasyon ve müzik çözümleri.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "kurumsal",
    name: "Kurumsal Etkinlik",
    description: "Toplantı, kutlama ve marka etkinlikleri için organizasyon desteği.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "dogum-gunu",
    name: "Doğum Günü",
    description: "Özel günlere uygun dekorasyon ve etkinlik planlaması.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "acilis",
    name: "Açılış",
    description: "İşletme açılışları için dekorasyon ve organizasyon hazırlıkları.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
  },
];
