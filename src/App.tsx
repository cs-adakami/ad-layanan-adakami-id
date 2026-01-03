import React from 'react';
import { Lock, MapPin, Phone, MessageCircle, ChevronRight, ShieldCheck, HelpCircle } from 'lucide-react';

function App() {
  // Gunakan variabel konfigurasi agar mudah diubah
  const contactInfo = {
    wa: '628137750397', // Masukkan nomor resmi
    phone: '08137750397',
    address: 'Gedung Cyber 2 Tower, Jakarta Selatan'
  };
  
  const message = 'Halo, saya butuh bantuan layanan keuangan.';
  const whatsappUrl = `https://wa.me/${contactInfo.wa}?text=${encodeURIComponent(message)}`;

  const handleButtonClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { title: "Pelunasan & Pembayaran", icon: <ShieldCheck size={18} /> },
    { title: "Perubahan Tenor", icon: <Lock size={18} /> },
    { title: "Pembatalan Layanan", icon: <HelpCircle size={18} /> },
    { title: "Live Chat CS", icon: <MessageCircle size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      {/* Header Background Accent */}
      <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#1e40af] to-[#3b82f6] rounded-b-[40px] shadow-lg -z-10"></div>

      <div className="max-w-md mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="text-center text-white mb-8 mt-4">
          <div className="flex justify-center mb-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-wide mb-1">Pusat Bantuan</h1>
          <p className="text-blue-100 text-sm font-medium">Layanan Pelanggan 24 Jam</p>
        </div>

        {/* Main Content Card - Floating Effect */}
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 overflow-hidden border border-slate-100">
          
          {/* Promo/Info Banner */}
          <div className="p-6 pb-2">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100 flex items-center gap-4">
              <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md text-white font-bold text-lg">
                %
              </div>
              <div>
                <h3 className="text-emerald-800 font-bold text-sm mb-1">Program Keringanan</h3>
                <p className="text-emerald-600 text-xs leading-tight">
                  Simak cara mendapatkan keringanan pembayaran tanpa denda di sini.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons List */}
          <div className="p-6 pt-4 space-y-3">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 ml-1">Menu Bantuan</p>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={handleButtonClick}
                className="w-full group bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all duration-300 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 group-hover:bg-blue-500 group-hover:text-white text-blue-600 transition-colors p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 text-left">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Company Info / Trust Section */}
        <div className="mt-8 px-4 text-center">
          <h2 className="text-sm font-bold text-slate-600 mb-4">Tentang Kami</h2>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 text-left">
             <p className="text-xs text-slate-500 leading-relaxed mb-4 text-center">
              Kami berkomitmen memberikan layanan finansial yang transparan, aman, dan terpercaya untuk seluruh pengguna di Indonesia.
            </p>
            <div className="border-t border-slate-100 my-3"></div>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <p>{contactInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] text-slate-400 mt-6">
            &copy; 2025 Financial Services. Terdaftar dan diawasi oleh otoritas terkait.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
