const stats = [
  { value: '12', unit: '年', label: '专注视光行业' },
  { value: '5', unit: '千+', label: '配镜服务客户' },
  { value: '50', unit: '+', label: '品牌镜片镜框' },
  { value: '98', unit: '%', label: '客户满意度' },
  { value: '8', unit: '位', label: '资深验光师' },
  { value: '30', unit: '分钟', label: '快速出镜承诺' },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-slate-50 px-3 py-6 text-center">
              <div className="mb-2 flex items-end justify-center gap-1">
                <span className="text-4xl font-black text-sky-700">{s.value}</span>
                <span className="mb-1 text-base font-bold text-slate-500">{s.unit}</span>
              </div>
              <div className="text-xs font-medium text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
