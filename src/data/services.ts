// GERÇEK VERİ UYARISI
// Aşağıdaki hizmet listesi organizasyon sektöründe yaygın hizmet başlıklarına
// dayanmaktadır. Vip Organizasyon Merkezi'nin sunduğu hizmetlerin bu listeyle
// birebir eşleştiği işletmeden teyit edilmeden yayına alınmamalıdır.

export interface Service {
  id: string;
  index: string;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "dekorasyon",
    index: "01",
    name: "Dekorasyon",
    description: "Mekân atmosferine uygun masa, sahne ve dekor detayları.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "catering",
    index: "02",
    name: "Catering",
    description: "Etkinlik türüne göre yiyecek ve ikram çözümleri.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "muzik",
    index: "03",
    name: "Müzik",
    description: "Etkinlik atmosferine uygun müzik ve ses çözümleri.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "fotograf",
    index: "04",
    name: "Fotoğraf",
    description: "Özel gününüzün önemli anlarının kayıt altına alınması.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
];
