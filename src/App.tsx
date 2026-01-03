import { Analytics } from '@vercel/analytics/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  MessageCircle, 
  Wallet, 
  Clock, 
  XCircle,
  MapPin,
  Phone,
  Info
} from 'lucide-react';

function App() {
  const contactInfo = {
    wa: '628137750397',
    phone: '08137750397',
    address: 'Gedung Cyber 2 Tower Lantai 28 Jl. HR Rasuna Said Blok X-5 No.13 RT/RW. 007/002 Kuningan Timur, Setia Budi, Jakarta Selatan 12950'
  };
  
  const message = 'Hallo Cs Adakami?';
  const whatsappUrl = `https://wa.me/${contactInfo.wa}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

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
    <div className="min-h-screen bg-[#f8fafc] relative selection:bg-blue-100 font-sans text-slate-800 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-[420px] bg-gradient-to-b from-[#1e3a8a] via-[#2563eb] to-[#f8fafc] rounded-b-[3.5rem] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-md mx-auto px-5 py-6">
        
        {/* Header Title */}
        <div className="text-center text-white mb-8 mt-4">
          <h1 className="text-2xl font-extrabold tracking-wide mb-2 drop-shadow-md">Layanan Pelanggan</h1>
          <p className="text-blue-100 text-xs font-medium px-8 opacity-90 leading-relaxed">
            Pusat bantuan resmi 24/7 untuk segala kebutuhan transaksi Anda.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="space-y-5">
          
          {/* 1. Promo / Contact Card */}
          <div className="bg-white rounded-[2rem] p-1 shadow-xl shadow-blue-900/10">
            <div className="bg-gradient-to-b from-blue-50/80 to-white rounded-[1.8rem] p-6 border border-blue-100 text-center">
              
              <div className="flex items-center justify-center gap-4 mb-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-2 border border-slate-100">
                    <img 
                      src="https://69543702934f3f92381f9e9c.imgix.net/csadakami.png" 
                      alt="Logo" 
                      className="w-full h-full object-contain"
                    />
                 </div>
                 <div className="w-20 h-16 rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative">
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

          {/* 2. Menu Buttons Grid */}
          <div className="grid gap-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                className="relative group w-full bg-white hover:bg-slate-50 active:scale-[0.99] transition-all duration-300 rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-200 overflow-hidden"
              >
                <div className={`absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} ${item.shadow} shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="block text-[15px] font-bold text-slate-700 group-hover:text-slate-900">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Klik untuk akses</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                   <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </div>
              </button>
            ))}
          </div>

          {/* 3. INFO SECTION: Tentang Kami & Kantor */}
          <div className="bg-white rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
            
            {/* Header Section */}
            <div className="flex items-center gap-2 mb-3">
              <Info size={18} className="text-[#1e3a8a]" />
              <h3 className="font-bold text-slate-800 text-base">Tentang Kami</h3>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed mb-6 border-b border-slate-100 pb-5">
              Hubungi Call Center Kredit Adakami Untuk Bantuan Pembatalan Dan Informasi Produk.
            </p>

            {/* Office Address */}
            <div className="flex items-start gap-3 mb-5">
              <div className="mt-1 min-w-[20px] flex justify-center">
                 <MapPin size={18} className="text-[#1e3a8a]" />
              </div>
              <div>
                 <h4 className="font-bold text-slate-700 text-sm mb-1">Kantor</h4>
                 <p className="text-slate-500 text-xs leading-relaxed text-justify">
                   {contactInfo.address}
                 </p>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
               <div className="bg-white p-1.5 rounded-lg shadow-sm">
                  <Phone size={16} className="text-[#1e3a8a]" />
               </div>
               <span className="font-bold text-slate-700 text-sm tracking-wide">{contactInfo.phone}</span>
            </div>
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

      <Analytics />
    </div>
  );
}

export default App;
