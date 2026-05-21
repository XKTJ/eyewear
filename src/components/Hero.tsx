import Image from 'next/image';
import { Clock, MapPin, Navigation, ShieldCheck, Star, Users } from 'lucide-react';
import OfferCodeButton from './OfferCodeButton';
import { publicPath } from '@/lib/paths';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <Image
        src={publicPath('/images/hero-optical-shop.png')}
        alt="亚洲用户佩戴眼镜形象"
        fill
        priority
        className="object-cover object-[62%_35%] opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-900/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-lg mb-6">
              <Star size={15} className="fill-amber-300 text-amber-300" />
              今日预约到店，免费专业验光 + 免排队服务
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.16] text-white sm:text-5xl md:text-[4rem] md:leading-[1.14] mb-6">
              到店 30 分钟完成专业验光
              <span className="block text-cyan-200">配一副戴着舒服的眼镜</span>
            </h1>

            <p className="text-slate-100 text-lg leading-relaxed mb-8 max-w-2xl">
              睿视眼镜位于洛阳市景华路 86-17 号。验光师一对一确认度数、瞳距、散光轴位和佩戴舒适度，适合换镜、儿童近视管理、视疲劳和老花渐进配镜。
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8 max-w-2xl">
              {[
                { icon: MapPin, value: '景华路 86-17 号', label: '导航到店方便' },
                { icon: Clock, value: '09:00-20:00', label: '每天营业' },
                { icon: ShieldCheck, value: '一年质保', label: '免费清洗调校' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white/10 border border-white/15 rounded-lg px-4 py-3">
                  <Icon size={18} className="text-cyan-200 mb-2" />
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-slate-300 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <OfferCodeButton size="large" />
              <a
                href="https://uri.amap.com/search?keyword=%E6%B4%9B%E9%98%B3%E5%B8%82%E6%99%AF%E5%8D%8E%E8%B7%AF86-17%E5%8F%B7%E7%9D%BF%E8%A7%86%E7%9C%BC%E9%95%9C"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 border border-white/25 text-white font-bold px-6 py-4 rounded-lg transition-colors"
              >
                <Navigation size={18} />
                导航到店
              </a>
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-4 rounded-lg transition-colors"
              >
                电话咨询
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Users size={16} className="text-cyan-300" />
                5 千+ 配镜服务客户
              </span>
              <span>4.9 分门店口碑</span>
              <span>普通镜片最快当天取</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 md:p-7 shadow-2xl">
            <div className="border-b border-slate-100 pb-5 mb-5">
              <div className="text-sm font-bold text-sky-700 mb-2">到店预约卡</div>
              <h2 className="text-3xl font-black leading-[1.2] text-slate-950">
                今天来店，大约需要多久？
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                提前电话或微信确认时段，到店后按流程完成验光、试戴和取镜安排。
              </p>
            </div>

            <div className="grid gap-3">
              {[
                ['5 分钟', '登记旧镜参数', '到店先复核旧眼镜度数和佩戴问题'],
                ['15 分钟', '专业验光确认', '验光师一对一确认度数、瞳距和散光'],
                ['10 分钟', '试戴选框建议', '根据脸型、预算和用眼场景推荐镜框'],
                ['最快当天', '普通镜片取镜', '复杂镜片到店确认加工周期'],
              ].map(([time, title, desc]) => (
                <div key={title} className="flex gap-4 rounded-lg bg-slate-50 p-4">
                  <div className="w-20 shrink-0 text-sm font-black text-sky-700">{time}</div>
                  <div>
                    <div className="font-bold text-slate-900">{title}</div>
                    <div className="text-sm text-slate-500 mt-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-sky-100 bg-sky-50 p-4 text-sm text-slate-600">
              福利码通过页面按钮领取，到店出示即可核销；这张卡主要帮客户判断是否方便今天到店。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
