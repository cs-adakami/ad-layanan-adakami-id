import React from 'react';
import { Lock, MapPin, Phone, MessageCircle, ChevronRight, ShieldCheck, HelpCircle } from 'lucide-react';

function App() {
  const contactInfo = {
    wa: '628137750397',
    phone: '08137750397',
    address: 'Gedung Cyber 2 Tower Lt. 28, Kuningan Timur, Jakarta Selatan.'
  };
  
  const message = 'Hallo Cs Adakami?';
  const whatsappUrl = `https://wa.me/${contactInfo.wa}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { title: "Bayar Cicilan/Pelunasan", icon: <ShieldCheck size={20} /> },
    { title: "Ganti Tenor", icon: <Lock size={20} /> },
    { title: "Pembatalan Adakami", icon: <HelpCircle size={20} /> },
    { title: "Live Chat Adakami", icon: <MessageCircle size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] relative selection:bg-blue-100 font-sans text-slate-800 overflow-hidden">
      
      {/* Background Accent - Dibuat lebih soft */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-[#1e3a8a] via-[#2a4392] to-transparent opacity-95 rounded-b-[3.5rem] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        
        {/* Header Title */}
        <div className="text-center text-white mb-10 mt-6">
          <h1 className="text-3xl font-extrabold tracking-wide mb-3 drop-shadow-sm">Layanan Adakami</h1>
          <p className="text-blue-100 text-sm font-medium px-6 leading-relaxed opacity-90">
            Solusi resmi 24 Jam untuk bantuan pelunasan dan pengaturan tenor Anda.
          </p>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="bg-white/95 backdrop-blur-lg rounded-[2rem] shadow-2xl shadow-blue-900/15 overflow-hidden border border-white/50 p-1">
          
          {/* Promo Section */}
          <div className="p-5">
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-[1.5rem] p-5 border border-blue-50 text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
              
              {/* Area Gambar */}
              <div className="flex items-center justify-center gap-3 mb-5">
                {/* Logo Box */}
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border border-slate-50 p-2">
                  <img 
                    src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* CS Photo Box */}
                <div className="w-18 h-14 rounded-2xl overflow-hidden shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] border border-slate-50 relative group">
                   <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="CS"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <h3 className="text-[#1e3a8a] font-bold text-[15px] mb-1">Butuh Bantuan Prioritas?</h3>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                Dapatkan keringanan pembayaran resmi tanpa denda di sini.
              </button>

              <button 
                onClick={handleButtonClick}
                className="w-full bg-gradient-to-r from-[#00b894] to-[#00a383] active:scale-[0.98] transition-all text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40"
              >
                Hubungi Petugas
              </button>
            </div>
          </div>

          {/* MENU ITEMS - BAGIAN YANG DIMINTA */}
          <div className="px-5 pb-6 pt-2 space-y-2.5">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                // PERUBAHAN 1: Menghapus border pada tombol utama agar lebih seamless.
                // Menggunakan shadow yang sangat halus sebagai gantinya.
                className="w-full group bg-white hover:bg-blue-50/40 transition-all duration-300 rounded-[1.2rem] p-3.5 flex items-center justify-between shadow-[0_2px_6px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_-6px_rgba(30,58,138,0.1)]"
              >
                <div className="flex items-center gap-4">
                  {/* PERUBAHAN 2: Bagian Logo/Ikon dipaskan agar tidak terlihat memiliki border/kotak.
                      Caranya: Saya menghapus warna background (bg-blue-50) di keadaan normal.
                      Warna background hanya muncul saat di-hover (group-hover:bg-[#1e3a8a]).
                      Ini membuat ikon terlihat bersih menyatu dengan latar belakang. */}
                  <div className="text-[#1e3a8a] p-2 rounded-xl group-hover:bg-[#1e3a8a] group-hover:text-white transition-all duration-300 scale-100 group-hover:scale-105">
                    {item.icon}
                  </div>
                  
                  {/* Teks Judul */}
                  <span className="text-[14px] font-bold text-slate-700 group-hover:text-[#1e3a8a] text-left transition-colors">
                    {item.title}
                  </span>
                </div>
                
                {/* Ikon Panah Kanan */}
                <ChevronRight className="w-5 h-5 text-slate-300/70 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center pb-10">
          <p className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-slate-400" />
            Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK).
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
