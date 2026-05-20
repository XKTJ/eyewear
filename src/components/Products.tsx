import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import { publicPath } from '@/lib/paths';

const products = [
  {
    name: '轻奢钛合金系列',
    tag: '热销款',
    tagColor: 'bg-sky-700',
    price: '¥680 起',
    desc: '超轻钛合金材质，全天佩戴舒适无压，适合通勤、商务和日常高频佩戴。',
    image: publicPath('/images/product-titanium.png'),
    position: 'object-[50%_35%]',
  },
  {
    name: '复古板材框系列',
    tag: '新品',
    tagColor: 'bg-sky-700',
    price: '¥480 起',
    desc: '醋酸板材手工质感，适合想提升气质、显脸小、拍照更出片的用户。',
    image: publicPath('/images/product-acetate.png'),
    position: 'object-[50%_28%]',
  },
  {
    name: '儿童近视管理镜',
    tag: '专业推荐',
    tagColor: 'bg-sky-700',
    price: '¥1,280 起',
    desc: '离焦镜片、视力档案和定期复查建议，帮助家长科学关注孩子近视增长。',
    image: publicPath('/images/product-child.png'),
    position: 'object-[50%_32%]',
  },
  {
    name: '品牌高清镜片',
    tag: '品牌',
    tagColor: 'bg-sky-700',
    price: '¥1,580 起',
    desc: '蔡司、依视路等品牌镜片可选，适合清晰度、轻薄度和耐用性要求更高的人群。',
    image: publicPath('/images/product-lenses.png'),
    position: 'object-[50%_34%]',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="inline-block bg-sky-100 text-sky-700 text-sm font-bold px-4 py-1.5 rounded-lg mb-4">
              精选产品
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.28] md:leading-[1.24]">
              热门镜框 &
              <br />
              <span className="text-sky-700">优质镜片</span>
            </h2>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-sky-500 font-bold hover:gap-3 transition-all">
            到店试戴咨询 <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className={`object-cover ${p.position} transition-transform duration-500 group-hover:scale-105`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className={`absolute left-3 top-3 ${p.tagColor} flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold text-white shadow-lg`}
                >
                  <Tag size={12} />
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-gray-900">{p.name}</h3>
                <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-gray-500">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xl font-black text-orange-500">{p.price}</span>
                  <a
                    href="#contact"
                    className="shrink-0 rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-sky-600"
                  >
                    到店试戴
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
