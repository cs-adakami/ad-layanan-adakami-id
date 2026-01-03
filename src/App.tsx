import React from 'react';
import { Lock, MapPin, Phone, MessageCircle, ChevronRight, ShieldCheck, HelpCircle } from 'lucide-react';

function App() {
  const contactInfo = {
    wa: '628137750397', // Nomor WA lu
    phone: '08137750397',
    address: 'Gedung Cyber 2 Tower Lt. 28, Kuningan Timur, Jakarta Selatan.'
  };
  
  const message = 'Hallo Cs Adakami?';
  const whatsappUrl = `https://wa.me/${contactInfo.wa}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { title: "Bayar Cicilan/Pelunasan", icon: <ShieldCheck size={18} /> },
    { title: "Ganti Tenor", icon: <Lock size={18} /> },
    { title: "Pembatalan Adakami", icon: <HelpCircle size={18} /> },
    { title: "Live Chat Adakami", icon: <MessageCircle size={18} /> }
  ];

  return (
    // Container utama
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100 font-sans text-slate-800">
      
      {/* 1. BACKGROUND ACCENT (Lengkungan Biru di Atas) */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-[#2a3e7c] rounded-b-[50px] shadow-lg z-0"></div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        
        {/* Header Title */}
        <div className="text-center text-white mb-8 mt-2">
          <h1 className="text-2xl font-bold tracking-wide mb-1">Layanan Adakami</h1>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full my-3"></div>
          <p className="text-blue-100 text-sm font-medium px-4">
            Layanan 24 Jam. Hubungi bantuan pelunasan atau ganti tenor tanpa denda.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 overflow-hidden border border-slate-100">
          
          {/* 2. PROMO CARD (Gua balikin Gambar/Fotonya disini) */}
          <div className="p-6 pb-2">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100 text-center">
              <div className="bg-[#00b894] text-white font-bold text-xs px-3 py-1.5 rounded-lg inline-block mb-4 shadow-sm">
                Solusi Pembayaran & Keringanan
              </div>
              
              {/* Area Gambar */}
              <div className="flex items-center justify-center gap-4 mb-4">
                {/* Logo Box */}
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-md border border-slate-100 p-2">
                  <img 
                    src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* CS Photo Box */}
                <div className="w-20 h-16 rounded-xl overflow-hidden shadow-md border border-slate-100">
                   <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="CS"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button 
                onClick={handleButtonClick}
                className="bg-[#00b894] active:scale-95 transition-transform text-white font-bold text-xs px-6 py-2 rounded-full shadow-md hover:bg-[#00a383]"
              >
                Simak di sini!
              </button>
            </div>
          </div>

          {/* Action Buttons List */}
          <div className="p-6 pt-4 space-y-3">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 ml-1">Menu Bantuan</p>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                className="w-full group bg-white hover:bg-[#f0f7ff] border border-slate-200 hover:border-[#4a9fe5] transition-all duration-300 rounded-xl p-3.5 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#eaf4fc] text-[#4a9fe5] p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#2a3e7c] text-left">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#4a9fe5]" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer / Kantor */}
        <div className="mt-8 px-4 text-center pb-10">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/50 text-left">
            <h2 className="text-sm font-bold text-[#2a3e7c] mb-3 border-b border-slate-200 pb-2">Kantor Pusat</h2>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4a9fe5] shrink-0 mt-0.5" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4a9fe5] shrink-0" />
                <p>{contactInfo.phone}</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-6">
            &copy; 2025 Adakami Services.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;

