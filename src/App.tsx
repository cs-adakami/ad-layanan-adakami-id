import React from 'react';
import {
  AlertTriangle,
  ChevronRight,
  Clock,
  CreditCard,
  Headphones,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { contactConfig, getWhatsappLink } from './config/contact';

const menuItems = [
  {
    title: 'Informasi Pembayaran',
    description: 'Bantuan cek metode pembayaran dan status transaksi.',
    icon: <Wallet size={23} className="text-white" />,
    color: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/30',
  },
  {
    title: 'Konsultasi Cicilan',
    description: 'Diskusi kendala cicilan dan kebutuhan layanan.',
    icon: <CreditCard size={23} className="text-white" />,
    color: 'from-sky-400 to-blue-500',
    shadow: 'shadow-blue-500/30',
  },
  {
    title: 'Bantuan Akun',
    description: 'Bantuan umum seputar akses akun dan aplikasi.',
    icon: <Headphones size={23} className="text-white" />,
    color: 'from-orange-400 to-amber-500',
    shadow: 'shadow-orange-500/30',
  },
  {
    title: 'Chat WhatsApp',
    description: 'Hubungi bantuan melalui pesan WhatsApp.',
    icon: <MessageCircle size={23} className="text-white" />,
    color: 'from-lime-400 to-green-500',
    shadow: 'shadow-green-500/30',
  },
];

function App() {
  const whatsappUrl = getWhatsappLink();

  const openWhatsapp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-800 selection:bg-blue-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[430px] rounded-b-[3.5rem] bg-gradient-to-b from-[#153e88] via-[#2467d5] to-slate-50" />

      <section className="relative z-10 mx-auto max-w-md px-5 py-6">
        <header className="mb-7 mt-3 text-center text-white">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold backdrop-blur">
            <ShieldCheck size={14} />
            Layanan Informasi Finansial
          </div>
          <h1 className="text-3xl font-black tracking-tight drop-shadow-sm">
            {contactConfig.pageTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-relaxed text-blue-50/90">
            {contactConfig.pageSubtitle}
          </p>
        </header>

        <div className="space-y-5">
          <section className="rounded-[2rem] bg-white p-1 shadow-xl shadow-blue-950/10">
            <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-b from-blue-50/90 to-white p-6 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
                <span className="text-3xl font-black text-[#1e58b8]">A</span>
              </div>

              <h2 className="mb-2 text-xl font-extrabold text-slate-900">
                Butuh Bantuan Sekarang?
              </h2>
              <p className="mx-auto mb-5 max-w-xs text-sm leading-relaxed text-slate-500">
                Klik tombol di bawah untuk membuka WhatsApp dengan pesan otomatis yang sudah disiapkan.
              </p>

              <button
                onClick={openWhatsapp}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00b894] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-500/25 transition-all hover:bg-[#00a383] active:scale-[0.98]"
              >
                <MessageCircle size={19} fill="currentColor" />
                Hubungi via WhatsApp
              </button>
            </div>
          </section>

          <section className="grid gap-3">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={openWhatsapp}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-[0_4px_20px_-12px_rgba(15,23,42,0.25)] transition-all hover:border-blue-200 hover:bg-slate-50 active:scale-[0.99]"
              >
                <span className={`absolute -left-5 -top-5 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-xl transition-opacity group-hover:opacity-20`} />
                <span className="relative z-10 flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} ${item.shadow} shadow-md transition-transform duration-300 group-hover:scale-105`}>
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-[15px] font-extrabold text-slate-800">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium leading-relaxed text-slate-400">
                      {item.description}
                    </span>
                  </span>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-blue-100">
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                </span>
              </button>
            ))}
          </section>

          <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
            <div className="mb-3 flex items-center gap-2">
              <Info size={18} className="text-[#1e3a8a]" />
              <h3 className="text-base font-extrabold text-slate-800">Informasi Halaman</h3>
            </div>
            <p className="mb-5 border-b border-slate-100 pb-5 text-xs leading-relaxed text-slate-500">
              Halaman ini dibuat untuk mempermudah pengunjung menghubungi bantuan melalui WhatsApp.
            </p>

            <div className="mb-4 flex items-start gap-3">
              <div className="mt-1 flex min-w-[22px] justify-center">
                <MapPin size={18} className="text-[#1e3a8a]" />
              </div>
              <div>
                <h4 className="mb-1 text-sm font-extrabold text-slate-700">Area Layanan</h4>
                <p className="text-xs leading-relaxed text-slate-500">{contactConfig.address}</p>
              </div>
            </div>

            <button
              onClick={openWhatsapp}
              className="flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:bg-slate-100"
            >
              <span className="rounded-xl bg-white p-2 shadow-sm">
                <Phone size={16} className="text-[#1e3a8a]" />
              </span>
              <span className="text-sm font-extrabold tracking-wide text-slate-700">
                {contactConfig.displayPhone}
              </span>
            </button>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <div className="mb-2 flex items-center gap-2 font-extrabold">
              <AlertTriangle size={17} />
              Catatan Keamanan
            </div>
            <p className="text-xs leading-relaxed">{contactConfig.disclaimer}</p>
          </section>
        </div>

        <footer className="pb-8 pt-7 text-center">
          <p className="text-[11px] font-semibold text-slate-400">
            © {new Date().getFullYear()} Adakami Layanan Finansial
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
