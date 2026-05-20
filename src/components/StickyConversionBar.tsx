'use client';

import { MapPin, MessageCircle, Phone } from 'lucide-react';
import OfferCodeButton from './OfferCodeButton';

const mapUrl =
  'https://uri.amap.com/search?keyword=%E6%B4%9B%E9%98%B3%E5%B8%82%E6%99%AF%E5%8D%8E%E8%B7%AF86-17%E5%8F%B7%E7%9D%BF%E8%A7%86%E7%9C%BC%E9%95%9C';

export default function StickyConversionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <OfferCodeButton compact />
        <a
          href="tel:400-123-4567"
          className="inline-flex h-12 flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-3 text-sm font-bold text-white"
        >
          <Phone size={17} />
          电话
        </a>
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 text-sm font-bold text-white"
        >
          <MapPin size={17} />
          导航
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 text-sm font-bold text-slate-900"
        >
          <MessageCircle size={17} />
          微信
        </a>
      </div>
    </div>
  );
}
