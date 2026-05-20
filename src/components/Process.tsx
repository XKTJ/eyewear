const steps = [
  {
    step: '01',
    title: '预约登记',
    desc: '电话或微信预约，到店后快速登记，减少现场等待。',
  },
  {
    step: '02',
    title: '专业初检',
    desc: '电脑验光、旧镜参数复核和基础眼部状态检查。',
  },
  {
    step: '03',
    title: '主观验光',
    desc: '验光师一对一精细调校，确认最终处方数据。',
  },
  {
    step: '04',
    title: '选框配镜',
    desc: '根据脸型、预算和使用场景推荐合适镜框镜片。',
  },
  {
    step: '05',
    title: '精密加工',
    desc: '按处方参数加工镜片，普通镜片最快当天取镜。',
  },
  {
    step: '06',
    title: '取镜调校',
    desc: '现场调整鼻托和镜腿，确认清晰度与佩戴舒适度。',
  },
];

export default function Process() {
  return (
    <section id="process" className="overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-block rounded-lg bg-sky-100 px-4 py-1.5 text-sm font-bold text-sky-700">
            验配流程
          </div>
          <h2 className="mb-4 text-3xl font-black leading-[1.18] text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.16]">
            六步专业配镜
            <span className="text-sky-700">全程无忧</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500">
            用清晰、可预期的流程，降低到店配镜的时间成本。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="group relative rounded-lg border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-700 text-lg font-black text-white">
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-5 translate-x-3 bg-slate-200 lg:block" />
              )}
              <h3 className="mb-2 text-xl font-black text-slate-950">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
