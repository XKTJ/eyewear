'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Copy, Gift, MapPin, Phone, QrCode, X } from 'lucide-react';

type OfferCodeButtonProps = {
  compact?: boolean;
  size?: 'normal' | 'large';
};

const offerCode = 'RS0520';
const mapUrl =
  'https://uri.amap.com/search?keyword=%E6%B4%9B%E9%98%B3%E5%B8%82%E6%99%AF%E5%8D%8E%E8%B7%AF86-17%E5%8F%B7%E7%9D%BF%E8%A7%86%E7%9C%BC%E9%95%9C';

export default function OfferCodeButton({ compact = false, size = 'normal' }: OfferCodeButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(offerCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const buttonClass = compact
    ? 'inline-flex h-12 flex-1 items-center justify-center gap-1.5 bg-orange-500 text-white text-sm font-bold px-3 rounded-lg'
    : size === 'large'
      ? 'inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white font-black px-7 py-4 rounded-lg shadow-xl transition-colors'
      : 'inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-lg transition-colors';

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClass}>
        <Gift size={compact ? 17 : 19} />
        {compact ? '领券' : '领取到店福利码'}
      </button>

      {mounted &&
        open &&
        createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-4">
          <div
            className="relative w-full max-w-md overflow-y-auto rounded-lg bg-white p-5 shadow-2xl sm:p-6"
            style={{ maxHeight: 'calc(100vh - 2rem)' }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="关闭"
            >
              <X size={20} />
            </button>

            <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm font-bold text-orange-600">
              <Gift size={16} />
              专属到店福利已生成
            </div>

            <h2 className="text-2xl font-black text-slate-950">凭码到店核销优惠</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              截图保存或复制优惠码，到店出示给店员，即可享免费专业验光与配镜满减权益。
            </p>

            <div className="my-5 rounded-lg border border-dashed border-orange-300 bg-orange-50 p-4 text-center sm:my-6 sm:p-5">
              <div className="text-xs font-bold text-orange-600">到店福利码</div>
              <div className="mt-2 text-4xl font-black tracking-[0.16em] text-slate-950 sm:text-5xl sm:tracking-[0.18em]">
                {offerCode}
              </div>
              <div className="mt-3 text-xs text-slate-500">领取后 7 天内有效，每人限用一次</div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 text-sky-700" size={18} />
                <span>价值 ¥168 专业验光免费体验</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 text-sky-700" size={18} />
                <span>配镜满 ¥800 减 ¥80，旧镜免费清洗调校</span>
              </div>
              <div className="flex items-start gap-3">
                <QrCode className="mt-0.5 text-sky-600" size={18} />
                <span>微信同号：qingshi2012，可提前预约免排队</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2">
              <button
                type="button"
                onClick={copyCode}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? '已复制' : '复制优惠码'}
              </button>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-sm font-bold text-white"
              >
                <MapPin size={17} />
                导航到店
              </a>
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-slate-900 sm:col-span-2"
              >
                <Phone size={17} />
                电话确认今日可约时段
              </a>
            </div>
          </div>
        </div>,
          document.body
        )}
    </>
  );
}
