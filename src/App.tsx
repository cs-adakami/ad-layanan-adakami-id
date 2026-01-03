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
    { title: "Bayar Cicilan/Pelunasan", icon: <ShieldCheck size={18} /> },
    { title: "Ganti Tenor", icon: <Lock size={18} /> },
    { title: "Pembatalan Adakami", icon: <HelpCircle size={18} /> },
    { title: "Live Chat Adakami", icon: <MessageCircle size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100 font-sans text-slate-800 overflow-hidden">
      
      {/* 1. BACKGROUND YANG DIPERBAIKI (LEBIH MENYATU) */}
      {/* Pakai Gradient dan Opacity biar tidak terlalu solid */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#2a3e7c] via-[#3b5bb5] to-transparent opacity-90 rounded-b-[3rem] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        
        {/* Header Title */}
        <div className="text-center text-white mb-8 mt-4">
          <h1 className="text-3xl font-bold tracking-wide mb-2 drop-shadow-md">Layanan Adakami</h1>
          <p className="text-blue-50 text-sm font-medium px-4 opacity-90">
            Layanan Pelanggan Resmi 24 Jam
          </p>
        </div>

        {/* 2. MAIN CONTENT CARD DENGAN EFEK "GLASS" (TRANSPARAN) */}
        {/* bg-white/90 artinya putihnya cuma 90%, sisanya transparan nembus ke background biru */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden border border-white/50">
          
          {/* Promo Section */}
          <div className="p-6 pb-2">
            <div className="bg-gradient-to-br from-[#ebf5ff] to-[#f0fff4] rounded-2xl p-5 border border-blue-100 text-center shadow-inner">
              <div className="bg-[#00b894] text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4 shadow-sm">
                Solusi Keuangan
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                {/* Logo Box */}
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 p-2">
                  <img 
                    src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* CS Photo Box */}
                <div className="w-20 h-16 rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group">
                   <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="CS"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <h3 className="text-slate-700 font-bold text-sm mb-1">Butuh Keringanan?</h3>
              <p className="text-slate-500 text-xs mb-3">Dapatkan solusi pelunasan & ganti tenor.</p>

              <button 
                onClick={handleButtonClick}
                className="bg-[#00b894] w-full active:scale-95 transition-all text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-lg shadow-teal-500/20 hover:bg-[#00a383]"
              >
                Chat Petugas Sekarang
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-6 pt-2 space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                className="w-full group bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-300 transition-all duration-300 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-[#2a3e7c] p-2.5 rounded-xl group-hover:bg-[#2a3e7c] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#2a3e7c] text-left">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2a3e7c] group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 px-4 text-center pb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60 shadow-lg shadow-blue-900/5 text-left">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Kantor Pusat</h2>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00b894] shrink-0 mt-0.5" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00b894] shrink-0" />
                <p>{contactInfo.phone}</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-6 font-medium">
            &copy; 2025 Adakami Services. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
