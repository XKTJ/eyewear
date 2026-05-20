import { Glasses, Phone, MapPin, Mail, QrCode } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <Glasses className="text-white" size={20} />
              </div>
              <div>
                <span className="font-black text-white text-lg">睿视眼镜</span>
                <div className="text-xs text-gray-500 leading-none">专业验配 · 精准视力</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              深耕视光行业12年，专业验光师团队，引进国际顶尖设备，为每一位客户提供精准、科学、贴心的配镜服务。
            </p>
            <div className="bg-gray-800 rounded-2xl p-4 flex items-center gap-3">
              <QrCode size={40} className="text-sky-400 flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-semibold">扫码关注公众号</div>
                <div className="text-gray-500 text-xs">获取专属优惠及视力知识</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">服务项目</h4>
            <ul className="space-y-3 text-sm">
              {['专业验光配镜', '儿童近视管理', '角膜塑形镜验配', '老视渐进多焦点', '太阳镜定制', '眼镜维修清洗'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">品牌镜框</h4>
            <ul className="space-y-3 text-sm">
              {['Ray-Ban 雷朋', 'Oakley 欧克利', 'Seiko 精工', 'ZEISS 蔡司', 'NIKON 尼康', 'Essilor 依视路'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span>洛阳市景华路86-17号睿视眼镜</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400 flex-shrink-0" />
                <a href="tel:400-123-4567" className="hover:text-sky-400 transition-colors">400-123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400 flex-shrink-0" />
                <a href="mailto:service@qingshi.com" className="hover:text-sky-400 transition-colors">service@qingshi.com</a>
              </li>
            </ul>
            <div className="mt-6 bg-gray-800 rounded-xl px-4 py-3">
              <div className="text-xs text-gray-500 mb-1">营业时间</div>
              <div className="text-white text-sm font-semibold">每天 09:00 — 20:00</div>
              <div className="text-gray-400 text-xs mt-0.5">节假日正常营业</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>© 2024 睿视眼镜 版权所有</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-400 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-400 transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
