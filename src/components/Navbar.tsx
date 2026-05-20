'use client';

import { useEffect, useState } from 'react';
import { Glasses, Menu, Phone, X } from 'lucide-react';
import OfferCodeButton from './OfferCodeButton';

const links = [
  { label: '服务优势', href: '#features' },
  { label: '适合人群', href: '#visit' },
  { label: '热门产品', href: '#products' },
  { label: '验配流程', href: '#process' },
  { label: '联系到店', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = 'text-slate-700';

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur transition-all duration-300 ${
        scrolled ? 'py-3 shadow-lg' : 'py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 shadow-md">
            <Glasses className="text-white" size={22} />
          </div>
          <div>
            <span className="block text-xl font-black tracking-tight text-sky-700">
              睿视眼镜
            </span>
            <span className="block text-xs leading-none text-slate-400">
              专业验配 · 精准视力
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={`text-sm font-semibold transition-colors hover:text-sky-500 ${textColor}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:400-123-4567"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700 hover:bg-sky-100"
          >
            <Phone size={15} />
            电话咨询
          </a>
          <OfferCodeButton />
        </div>

        <button type="button" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="打开菜单">
          {menuOpen ? <X className={textColor} size={24} /> : <Menu className={textColor} size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 shadow-xl">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-slate-100 py-3 font-semibold text-slate-700 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="tel:400-123-4567"
              className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-900"
            >
              电话咨询
            </a>
            <OfferCodeButton />
          </div>
        </div>
      )}
    </nav>
  );
}
