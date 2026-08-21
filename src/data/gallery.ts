// PLACEHOLDER IMAGE:
// Bu görseller Unsplash'tan örnek amaçlı kullanılmaktadır.
// Yayına almadan önce işletmenin gerçek etkinlik fotoğraflarıyla değiştirilmelidir.

export type GallerySize = "wide" | "tall" | "small" | "panorama";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  size: GallerySize;
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    alt: "Gece organizasyonunda sahne ve ışık düzeni",
    category: "Düğün",
    size: "wide",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
    alt: "Nişan töreni dekorasyon detayı",
    category: "Nişan",
    size: "tall",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80",
    alt: "Masa dekorasyonu yakın çekim",
    category: "Dekorasyon",
    size: "small",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    alt: "Etkinlik alanında müzik performansı",
    category: "Müzik",
    size: "small",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80",
    alt: "Kına gecesi genel atmosfer",
    category: "Kına",
    size: "panorama",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    alt: "Kurumsal etkinlik salon düzeni",
    category: "Kurumsal",
    size: "tall",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "Gece etkinliğinde altın tonlu ışıklandırma",
    category: "Düğün",
    size: "wide",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    alt: "Doğum günü organizasyonu detayı",
    category: "Doğum Günü",
    size: "small",
  },
];
