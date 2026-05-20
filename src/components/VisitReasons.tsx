import { Baby, Briefcase, CircleDollarSign, Clock, Glasses, Monitor, Navigation, Sparkles } from 'lucide-react';
import OfferCodeButton from './OfferCodeButton';

const reasons = [
  {
    icon: Baby,
    title: '孩子近视涨得快',
    desc: '建立视力档案，评估离焦镜片、角膜塑形镜等近视管理方案。',
  },
  {
    icon: Monitor,
    title: '看电脑眼干疲劳',
    desc: '检查度数、散光和用眼习惯，推荐防蓝光或抗疲劳镜片。',
  },
  {
    icon: Glasses,
    title: '旧眼镜戴着头晕',
    desc: '复核旧镜参数和新处方，减少新镜不适、压鼻和眩晕。',
  },
  {
    icon: Sparkles,
    title: '想换更好看的框',
    desc: '根据脸型、肤色和通勤场景推荐镜框，现场试戴更直观。',
  },
  {
    icon: Briefcase,
    title: '需要老花或渐进镜',
    desc: '测量近用距离、瞳高和佩戴习惯，降低渐进适应难度。',
  },
  {
    icon: Clock,
    title: '希望当天能取镜',
    desc: '普通镜片最快 30 分钟加工，复杂镜片到店确认周期。',
  },
];

const prices = [
  ['学生基础配镜', '¥299 起'],
  ['轻薄防蓝光镜片', '¥399 起'],
  ['钛合金舒适镜框', '¥680 起'],
  ['蔡司/依视路镜片', '¥980 起'],
];

export default function VisitReasons() {
  return (
    <section id="visit" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
              <Navigation size={16} />
              到店前先知道值不值得来
            </div>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-[1.18] text-slate-950 md:text-5xl md:leading-[1.16]">
              这些情况，建议先到店做一次专业验配
            </h2>
            <p className="mt-5 leading-relaxed text-slate-500">
              线上看参数不如线下试戴和复核。我们把用户最常见的到店需求拆开，让客户更快找到自己的理由。
            </p>

            <div className="mt-7 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-center gap-2 font-black text-slate-950">
                <CircleDollarSign size={19} className="text-orange-500" />
                价格区间透明
              </div>
              <div className="divide-y divide-slate-200/70">
                {prices.map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-slate-600">{name}</span>
                    <span className="font-black text-slate-950">{price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                儿童近视管理、渐进多焦点和特殊镜片需到店评估后报价，避免线上盲目推荐。
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <OfferCodeButton />
              <a
                href="tel:400-123-4567"
                className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
              >
                电话咨询
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
