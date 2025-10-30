import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Layout } from '@/layout/Layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'], // puedes ajustar los pesos según necesites
});

export const metadata: Metadata = {
  title: 'JO | CoolCoode — Minimal landing page ready to use',
  description:
    'A modern and minimal portfolio landing built by CoolCoode. Perfect for showcasing personal projects, skills, and creative work.',
  keywords: [
    'CoolCoode',
    'JO landing',
    'minimal landing page',
    'Portfolio template',
    'startup landing',
    'modern landing',
    'Next.js',
    'TailwindCSS',
  ],
  openGraph: {
    title: 'JO — Minimal landing page by CoolCoode',
    description:
      'A modern and elegant landing page for your digital product. Customize it in minutes and make your online presence stand out.',
    url: 'https://coolcoode.com',
    siteName: 'CoolCoode',
    images: [
      {
        url: 'https://coolcoode.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JO — Minimal landing page by CoolCoode',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JO | CoolCoode',
    description: 'A minimal and modern landing page ready to customize and deploy in minutes.',
    images: ['https://coolcoode.com/og-image.png'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
