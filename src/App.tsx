import { Lock, MapPin, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '6285267474741';
  const message = 'Halo, CS ADAKAMI? Saya butuh informasi mengenai akun dan layanan.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#2a3e7c] text-white">
      <div className="max-w-md mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Layanan Adakami</h1>
          <div className="border-t-2 border-white/30 mb-6"></div>

          <p className="mb-4 leading-relaxed">
            Layanan 24Jam Cs Adakami — Hubungi Layanan Bantuan Pelunasan Pembatalan Ganti Tenor Tanpa Denda.
          </p>

          <p className="mb-8 leading-relaxed">
            Jangan ragu untuk menghubungi customer service kami.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 text-center">
          <div className="bg-[#00b894] text-black font-bold text-lg px-4 py-3 rounded-t-xl mb-4">
            Cara mendapatkan keringan pembayaran AdaKami
          </div>

          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="bg-[#00b894] w-24 h-24 rounded-xl flex items-center justify-center">
              <div className="text-white text-5xl font-bold">AK</div>
            </div>

            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Customer Service"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-[#00b894] text-black font-bold text-base px-6 py-3 rounded-full inline-block">
            Simak di sini!
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <button
            onClick={handleButtonClick}
            className="w-full bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-colors rounded-xl py-4 px-6 flex items-center gap-4 text-left"
          >
            <div className="bg-white rounded-full p-2">
              <Lock className="w-5 h-5 text-[#4a9fe5]" />
            </div>
            <span className="text-lg font-medium">Bayar Cicilan/Pelunasan</span>
          </button>

          <button
            onClick={handleButtonClick}
            className="w-full bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-colors rounded-xl py-4 px-6 flex items-center gap-4 text-left"
          >
            <div className="bg-white rounded-full p-2">
              <Lock className="w-5 h-5 text-[#4a9fe5]" />
            </div>
            <span className="text-lg font-medium">Pembatalan Adakaimi</span>
          </button>

          <button
            onClick={handleButtonClick}
            className="w-full bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-colors rounded-xl py-4 px-6 flex items-center gap-4 text-left"
          >
            <div className="bg-white rounded-full p-2">
              <Lock className="w-5 h-5 text-[#4a9fe5]" />
            </div>
            <span className="text-lg font-medium">Ganti Tenor</span>
          </button>

          <button
            onClick={handleButtonClick}
            className="w-full bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-colors rounded-xl py-4 px-6 flex items-center gap-4 text-left"
          >
            <div className="bg-white rounded-full p-2">
              <Lock className="w-5 h-5 text-[#4a9fe5]" />
            </div>
            <span className="text-lg font-medium">Live Chat Adakami</span>
          </button>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <div className="border-t-2 border-white/30 mb-6"></div>
          <p className="leading-relaxed">
            Hubungi Call Center Kredit Adakami Untuk Bantuan Pembatalan Dan Informasi Produk.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Kantor</h2>
          <div className="border-t-2 border-white/30 mb-6"></div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="leading-relaxed">
                Gedung Cyber 2 Tower Lantai 28 Jl. HR Rasuna Said Blok X-5 No.13 RT/RW. 007/002 Kuningan Timur, Setia Budi, Jakarta Selatan 12950
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p>0812312456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
