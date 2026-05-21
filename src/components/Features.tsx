import { Eye, Headphones, Heart, Microscope, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: '精准专业验光',
    desc: '电脑验光结合主观验光，细致确认度数、散光轴位和瞳距，减少新镜不适。',
  },
  {
    icon: Microscope,
    title: '角膜地形图检查',
    desc: '分析角膜曲率与屈光状态，为散光判断、近视管理和特殊镜片配适提供依据。',
  },
  {
    icon: Zap,
    title: '30 分钟快速出镜',
    desc: '普通镜片可到店快速加工，适合临时换镜、备用镜和急用场景。',
  },
  {
    icon: Shield,
    title: '质量售后保障',
    desc: '镜片镜框提供质保服务，配镜后可免费清洗、调校鼻托和镜腿。',
  },
  {
    icon: Heart,
    title: '儿童近视管理',
    desc: '为青少年建立视力档案，结合离焦镜片、复查提醒等方式关注近视变化。',
  },
  {
    icon: Headphones,
    title: '全程贴心服务',
    desc: '验光、选框、加工、取镜都有专人跟进，让到店配镜更省心。',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-block rounded-lg bg-sky-100 px-4 py-1.5 text-sm font-bold text-sky-700">
            我们的优势
          </div>
          <h2 className="mb-4 text-3xl font-black leading-[1.18] text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.16]">
            为什么选择<span className="text-sky-700">睿视眼镜</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500">
            专业验配、透明价格和稳定售后，让每一次到店都更安心。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <f.icon size={24} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-black leading-tight text-slate-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
