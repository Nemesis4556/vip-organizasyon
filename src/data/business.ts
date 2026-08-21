// GERÇEK VERİ UYARISI
// Aşağıdaki bilgiler işletme tarafından sağlanan gerçek verilerdir (isim, adres,
// telefon, WhatsApp, Google puanı/yorum sayısı, hizmet bölgesi).
// "hours" alanı ise henüz işletmeden teyit edilmediği için placeholder olarak
// bırakılmıştır — yayına almadan önce güncellenmelidir.

export interface BusinessInfo {
  name: string;
  shortName: string;
  city: string;
  region: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappUrl: (message?: string) => string;
  rating: number;
  reviewCount: number;
  serviceArea: string;
  hours: string;
  mapsQuery: string;
}

export const business: BusinessInfo = {
  name: "Vip Organizasyon Merkezi",
  shortName: "VIP ORGANİZASYON",
  city: "Akhisar",
  region: "Manisa",
  address: "İnönü, 8. Sk. No:54/c, 45200 Akhisar/Manisa",
  addressLine1: "İnönü, 8. Sk. No:54/c",
  addressLine2: "45200 Akhisar / Manisa",
  phone: "+905310279292",
  phoneDisplay: "0531 027 92 92",
  whatsapp: "+905310279292",
  whatsappUrl: (message) =>
    `https://wa.me/905310279292${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  rating: 4.3,
  reviewCount: 6,
  serviceArea: "Akhisar ve yakın bölgeler",
  // GERÇEK VERİ BEKLİYOR: Haftalık çalışma saatleri işletmeden teyit edilecek.
  hours: "Açık — kapanış 19:00",
  mapsQuery: "Vip Organizasyon Merkezi, İnönü, 8. Sk. No:54/c, Akhisar, Manisa",
};
