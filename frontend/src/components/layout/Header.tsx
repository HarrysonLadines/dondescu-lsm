import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-3">
        <Image
          src="/dondescu-logo.png"
          alt="Don Descu"
          width={32}
          height={32}
          className="object-contain md:w-[40px] md:h-[40px]"
          priority
        />
        <div className="flex flex-col leading-[0.85]">
          <span className="text-lg md:text-xl font-black text-[#0b4f53] tracking-tighter uppercase">Don Descu</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-12 lg:gap-20">
        {['productos', 'ranking', 'lugares'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-bold uppercase tracking-widest hover:text-[#0b4f53] transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="/"
          className="text-sm font-bold uppercase tracking-widest border-[3px] border-[#0b4f53] text-[#0b4f53] px-6 py-1 hover:bg-[#0b4f53] hover:text-white transition-all duration-200"
        >
          Inicio
        </a>
      </nav>

      <button
        className="md:hidden p-2 text-[#0b4f53]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-8 gap-6 md:hidden border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          {['productos', 'ranking', 'lugares', 'inicio'].map((item) => (
            <a
              key={item}
              href={item === 'inicio' ? '/' : '#'}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b4f53]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
