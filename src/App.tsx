import React from 'react';
import { Lock, ChevronRight, ShieldCheck, HelpCircle, MessageCircle, Wallet, Clock, XCircle } from 'lucide-react';

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

  // Menu items dengan styling warna dan ikon yang lebih "hidup"
  const menuItems = [
    { 
      title: "Bayar Cicilan/Pelunasan", 
      icon: <Wallet size={24} className="text-white" />, 
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/30"
    },
    { 
      title: "Ganti Tenor", 
      icon: <Clock size={24} className="text-white" />, 
      color: "from-orange-400 to-amber-500",
      shadow: "shadow-orange-500/30"
    },
    { 
      title: "Pembatalan Adakami", 
      icon: <XCircle size={24} className="text-white" />, 
      color: "from-rose-400 to-red-500",
      shadow: "shadow-rose-500/30"
    },
    { 
      title: "Live Chat Adakami", 
      icon: <MessageCircle size={24} className="text-white" />, 
      color: "from-blue-400 to-indigo-500",
      shadow: "shadow-blue-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] relative selection:bg-blue-100 font-sans text-slate-800 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#1e3a8a] via-[#2563eb] to-[#f1f5f9] rounded-b-[4rem] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-6">
        
        {/* Header Title */}
        <div className="text-center text-white mb-8 mt-4">
          <h1 className="text-2xl font-extrabold tracking-wide mb-2 drop-shadow-md">Layanan Pelanggan</h1>
          <p className="text-blue-100 text-xs font-medium px-8 opacity-90 leading-relaxed">
            Pusat bantuan resmi 24/7 untuk segala kebutuhan transaksi Anda.
          </p>
        </div>

        {/* MAIN CARD CONTAINER */}
        <div className="space-y-5">
          
          {/* 1. Promo / Contact Card */}
          <div className="bg-white rounded-[2rem] p-1 shadow-xl shadow-blue-900/10">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-[1.8rem] p-6 border border-blue-100 text-center">
              
              {/* Gambar CS & Logo */}
              <div className="flex items-center justify-center gap-4 mb-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center p-2 border border-slate-100">
                    <img 
                      src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                      alt="Logo" 
                      className="w-full h-full object-contain"
                    />
                 </div>
                 <div className="w-20 h-16 rounded-2xl overflow-hidden shadow-md border border-slate-100 relative">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="CS"
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
              
              <h3 className="text-slate-800 font-bold text-lg mb-1">Butuh Bantuan Cepat?</h3>
              <p className="text-slate-500 text-xs mb-5 px-2">
                Tim kami siap membantu kendala akun dan pembayaran Anda.
              </p>

              <button 
                onClick={handleButtonClick}
                className="w-full bg-[#00b894] hover:bg-[#00a383] active:scale-[0.98] transition-all text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} fill="currentColor" />
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* 2. Menu Buttons Grid - Tampilan Lebih Jelas & Tombol */}
          <div className="grid gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                className="relative group w-full bg-white hover:bg-slate-50 active:scale-[0.99] transition-all duration-300 rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 overflow-hidden"
              >
                {/* Decorative Blur Background inside button */}
                <div className={`absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}></div>

                <div className="flex items-center gap-4 relative z-10">
                  
                  {/* Icon Box - Gradient & Shadow */}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} ${item.shadow} shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Text Title */}
                  <div className="text-left">
                    <span className="block text-[15px] font-bold text-slate-700 group-hover:text-slate-900">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Klik untuk akses</span>
                  </div>
                </div>
                
                {/* Arrow Icon */}
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                   <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center pb-8 opacity-60">
          <p className="text-[10px] text-slate-500 font-medium flex items-center justify-center gap-1.5 bg-white/50 py-2 rounded-full mx-10">
            <ShieldCheck size={14} className="text-slate-400" />
            Terdaftar & Diawasi oleh OJK
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
