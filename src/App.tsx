import { Lock, MapPin, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '628137750397';
  const message = 'Hallo Cs Adakami?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#2a3e7c] text-white">
      <div className="max-w-md mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Layanan Adakami</h1>
          <div className="border-t-2 border-white/30 mb-4"></div>
          <p className="text-sm leading-relaxed mb-6">
            Layanan 24Jam CS Adakami. Hubungi bantuan pelunasan atau pembatalan ganti tenor tanpa denda.
          </p>
        </div>

        {/* Promo Card */}
        <div className="bg-white rounded-2xl p-4 mb-8 text-center shadow-lg">
          <div className="bg-[#00b894] text-white font-bold text-sm px-2 py-2 rounded-lg mb-4">
            Cara mendapatkan keringanan pembayaran AdaKami
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-[#00b894] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                alt="Logo Adakami" 
                className="w-full h-full object-contain p-2"
              />
            </div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="CS"
              className="w-full h-20 object-cover rounded-lg"
            />
          </div>
          <button className="bg-[#00b894] text-white font-bold text-xs px-6 py-2 rounded-full">
            Simak di sini!
          </button>
        </div>

        {/* Tombol Menu - Tinggi dinaikkan sedikit (py-2.5) */}
        <div className="flex flex-col items-center space-y-2 mb-10">
          {[
            "Bayar Cicilan/Pelunasan",
            "Pembatalan Adakaimi",
            "Ganti Tenor",
            "Live Chat Adakami"
          ].map((text, index) => (
            <button
              key={index}
              onClick={handleButtonClick}
              className="w-3/4 bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-all rounded-lg py-2.5 px-4 flex items-center gap-3"
            >
              <div className="bg-white rounded-full p-1 shrink-0">
                <Lock className="w-3 h-3 text-[#4a9fe5]" />
              </div>
              <span className="text-xs font-semibold">{text}</span>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-xs space-y-6 opacity-90">
          <div>
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <div className="border-t border-white/30 mb-2"></div>
            <p>Hubungi Call Center Kredit Adakami untuk bantuan informasi produk.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Kantor</h2>
            <div className="border-t border-white/30 mb-2"></div>
            <div className="flex gap-2 mb-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <p>Gedung Cyber 2 Tower Lt. 28, Kuningan Timur, Jakarta Selatan.</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 shrink-0" />
              <p>08137750397</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;import { Lock, MapPin, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '628137750397';
  const message = 'Hallo Cs Adakami?';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#2a3e7c] text-white">
      <div className="max-w-md mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Layanan Adakami</h1>
          <div className="border-t-2 border-white/30 mb-4"></div>
          <p className="text-sm leading-relaxed mb-6">
            Layanan 24Jam CS Adakami. Hubungi bantuan pelunasan atau pembatalan ganti tenor tanpa denda.
          </p>
        </div>

        {/* Promo Card */}
        <div className="bg-white rounded-2xl p-4 mb-8 text-center shadow-lg">
          <div className="bg-[#00b894] text-white font-bold text-sm px-2 py-2 rounded-lg mb-4">
            Cara mendapatkan keringanan pembayaran AdaKami
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-[#00b894] w-16 h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
              <img 
                src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                alt="Logo Adakami" 
                className="w-full h-full object-contain p-2"
              />
            </div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="CS"
              className="w-full h-20 object-cover rounded-lg"
            />
          </div>
          <button className="bg-[#00b894] text-white font-bold text-xs px-6 py-2 rounded-full">
            Simak di sini!
          </button>
        </div>

        {/* Tombol Menu */}
        <div className="flex flex-col items-center space-y-2 mb-10">
          {[
            "Bayar Cicilan/Pelunasan",
            "Pembatalan Adakaimi",
            "Ganti Tenor",
            "Live Chat Adakami"
          ].map((text, index) => (
            <button
              key={index}
              onClick={handleButtonClick}
              className="w-3/4 bg-[#4a9fe5] hover:bg-[#3d8ed4] transition-all rounded-lg py-2.5 px-4 flex items-center gap-3"
            >
              <div className="bg-white rounded-full p-1 shrink-0">
                <Lock className="w-3 h-3 text-[#4a9fe5]" />
              </div>
              <span className="text-xs font-semibold">{text}</span>
            </button>
          ))}
        </div>

        {/* About Us Section (Updated) */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 text-sm leading-relaxed border border-white/10">
          <h2 className="text-xl font-bold mb-3 text-center">Tentang Kami</h2>
          <p className="mb-4 text-center opacity-90">
            Selamat datang di platform kami! Kami adalah tim yang berdedikasi untuk memberikan solusi terbaik untuk lo.
          </p>
          <ul className="space-y-3">
            <li>
              <strong className="text-[#4a9fe5]">Visi:</strong><br/>
              Menjadi mitra terpercaya dalam menghadirkan inovasi digital bagi Dede dan semua pengguna.
            </li>
            <li>
              <strong className="text-[#4a9fe5]">Misi:</strong><br/>
              Memberikan layanan berkualitas tinggi dengan transparansi dan integritas penuh.
            </li>
            <li>
              <strong className="text-[#4a9fe5]">Cerita Kami:</strong><br/>
              Berawal dari ide sederhana untuk mempermudah akses informasi bagi banyak orang.
            </li>
          </ul>
        </div>

        {/* Footer Info / Kantor */}
        <div className="text-xs space-y-6 opacity-90">
          <div>
            <h2 className="text-lg font-bold mb-2">Kantor</h2>
            <div className="border-t border-white/30 mb-2"></div>
            <div className="flex gap-2 mb-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <p>Gedung Cyber 2 Tower Lt. 28, Kuningan Timur, Jakarta Selatan.</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 shrink-0" />
              <p>08137750397</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
