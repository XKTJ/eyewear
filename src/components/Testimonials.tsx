import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: '李女士',
    role: '大学生',
    avatar: '/images/avatar-li.jpg',
    rating: 5,
    text: '从小在这里配镜，验光师非常专业耐心。上次配了一副防蓝光镜片，长时间看电脑眼睛不再干涩了。',
  },
  {
    name: '张先生',
    role: '软件工程师',
    avatar: '/images/avatar-zhang.jpg',
    rating: 5,
    text: '验光过程很细，旧眼镜参数也帮我一起复核。新镜戴上没有头晕，办公看屏幕舒服很多。',
  },
  {
    name: '王女士',
    role: '教师',
    avatar: '/images/avatar-wang.jpg',
    rating: 5,
    text: '试戴了好几副镜框，顾问根据脸型给了建议，最后选的钛合金框轻很多，同事都说好看。',
  },
  {
    name: '陈先生',
    role: '企业主管',
    avatar: '/images/avatar-chen.jpg',
    rating: 5,
    text: '上午预约下午就能取镜，效率很高。镜片清晰度确实比以前配的强，以后就认准这里。',
  },
  {
    name: '周女士',
    role: '设计师',
    avatar: '/images/avatar-zhou.jpg',
    rating: 5,
    text: '做了全套眼部检查，发现有轻微干眼问题。感觉不只是配镜，更像一次眼部健康管理。',
  },
  {
    name: '刘先生',
    role: '公务员',
    avatar: '/images/avatar-liu.jpg',
    rating: 5,
    text: '环境整洁，工作人员态度好。验光过程专业，没有推销压力，已经推荐给家人朋友。',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-sky-100 text-sky-700 text-sm font-bold px-4 py-1.5 rounded-lg mb-4">
            客户评价
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.18] md:leading-[1.16] text-gray-900 mb-4">
            他们都在说
            <span className="text-sky-700">睿视眼镜好</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-gray-700 font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">（基于 2,847 条评价）</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-lg bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote
                size={30}
                className="absolute right-6 top-6 text-sky-200 transition-colors group-hover:text-sky-300"
              />
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
