import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import OfferCodeButton from './OfferCodeButton';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.24),rgba(8,145,178,0.14),rgba(15,23,42,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100">
              本周到店福利进行中
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-[1.28] text-white md:text-5xl md:leading-[1.24]">
              先领取福利码，再到店验光配镜
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              到店出示福利码，可享价值 ¥168 专业验光，并参与配镜满减。建议提前电话或微信确认时段，减少现场等待。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <OfferCodeButton size="large" />
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-black text-slate-950 hover:bg-slate-100"
              >
                <Phone size={18} />
                400-123-4567
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: MapPin,
                title: '门店地址',
                info: '洛阳市景华路 86-17 号睿视眼镜',
              },
              {
                icon: Clock,
                title: '营业时间',
                info: '周一至周日 09:00-20:00，节假日正常营业',
              },
              {
                icon: MessageCircle,
                title: '微信预约',
                info: '微信同号：qingshi2012，发送“验光”可预约',
              },
            ].map(({ icon: Icon, title, info }) => (
              <div key={title} className="flex items-start gap-4 rounded-lg border border-white/15 bg-white/10 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-sky-600">
                  <Icon size={21} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">{title}</div>
                  <div className="mt-1 font-bold text-white">{info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
