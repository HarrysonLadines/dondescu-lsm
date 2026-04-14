import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 md:py-5 bg-white text-black text-[10px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] border-t border-gray-100 gap-6 md:gap-0">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <a href="#" className="hover:text-[#0b4f53] transition-colors">Privacidad</a>
        <a href="#" className="hover:text-[#0b4f53] transition-colors">Términos</a>
        <a href="#" className="hover:text-[#0b4f53] transition-colors">Cookies</a>
      </div>
      <div className="opacity-40 text-center md:text-right" suppressHydrationWarning>
        © {new Date().getFullYear()} DON DESCU
      </div>
    </footer>
  );
}
