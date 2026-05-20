import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '睿视眼镜 — 专业验配 · 精准视力',
  description: '采用国际顶尖验光设备，专业验光师一对一服务，精准测量您的视力需求。',
  openGraph: {
    title: '睿视眼镜 — 专业验配 · 精准视力',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
