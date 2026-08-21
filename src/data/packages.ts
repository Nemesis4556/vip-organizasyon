// GERÇEK VERİ UYARISI
// Kesin fiyatlar ve paket kapsamları işletmeden teyit edilmediği için
// burada uydurulmamıştır. Tüm paketlerde fiyat yerine "Teklif Alın" gösterilir.

export interface Package {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  priceLabel: string;
  image: string;
}

export const packages: Package[] = [
  {
    id: "dugun-paketi",
    name: "Düğün Paketi",
    category: "Düğün",
    description: "Düğün organizasyonuna yönelik temel hizmet kapsamı.",
    features: ["Mekân dekorasyonu", "Sahne düzeni", "Müzik ve ses sistemi", "Etkinlik koordinasyonu"],
    priceLabel: "Teklif Alın",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "nisan-paketi",
    name: "Nişan Paketi",
    category: "Nişan",
    description: "Nişan törenine yönelik organizasyon ve dekorasyon kapsamı.",
    features: ["Tören alanı dekorasyonu", "Aydınlatma düzeni", "Müzik eşliği", "Davetli akışı planlaması"],
    priceLabel: "Teklif Alın",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kina-paketi",
    name: "Kına Paketi",
    category: "Kına",
    description: "Kına gecesi için etkinlik ve dekorasyon hizmetleri.",
    features: ["Kına gecesi dekorasyonu", "Geleneksel atmosfer kurgusu", "Müzik ve ses düzeni", "Sahne aydınlatması"],
    priceLabel: "Teklif Alın",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ozel-organizasyon",
    name: "Özel Organizasyon",
    category: "Kurumsal / Doğum Günü / Açılış",
    description: "İçeriği etkinliğin ihtiyaçlarına göre belirlenen özel paket.",
    features: ["İhtiyaca özel dekorasyon", "Etkinlik türüne uygun kurgu", "Esnek hizmet kapsamı", "Kişiye özel planlama"],
    priceLabel: "Teklif Alın",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];
