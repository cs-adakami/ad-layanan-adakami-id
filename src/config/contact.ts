export const contactConfig = {
  whatsappNumber: '0822111378',
  whatsappMessage: 'Hallo Adakami Saya Memerlukan Bantuan?',
  displayPhone: '0822111378',
  address: 'Indonesia',
  pageTitle: 'Adakami Layanan Finansial',
  pageSubtitle: 'Pusat informasi dan bantuan umum seputar layanan finansial.',
  disclaimer:
    'Halaman ini bukan situs resmi AdaKami. Jangan kirim OTP, PIN, password, nomor kartu, atau data sensitif melalui chat.',
};

export function getWhatsappLink() {
  const normalizedNumber = contactConfig.whatsappNumber
    .replace(/[^0-9]/g, '')
    .replace(/^0/, '62');

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
    contactConfig.whatsappMessage,
  )}`;
}
