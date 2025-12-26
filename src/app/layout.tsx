import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Orbitron, Share_Tech_Mono, Inter, DM_Mono } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { StructuredData } from "@/components/structured-data";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-orbitron',
  display: 'swap',
  preload: true,
});

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sharetech',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-mono',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://el-seginy.me'),
  title: {
    default: 'Ahmed El-Seginy | Full Stack Developer & Software Engineer',
    template: '%s | Ahmed El-Seginy'
  },
  description: 'Portfolio of Ahmed El-Seginy, a passionate full stack developer building scalable enterprise applications using Spring Boot, Next.js, PostgreSQL, and modern software architecture.',
  keywords: [
    'Ahmed El-Seginy',
    'Software Developer',
    'Java Developer',
    'Backend Developer',
    'Spring Boot Developer',
    'Software Engineer',
    'Portfolio',
    'Java Spring Boot',
    'Enterprise Applications',
    'RESTful APIs',
    'PostgreSQL',
    'MySQL',
    'Microservices',
    'Cairo Egypt Developer',
    'Full Stack Developer',
    'Software Architecture',
    'Clean Code',
    'SOLID Principles'
  ],
  authors: [{ name: 'Ahmed El-Seginy', url: 'https://github.com/ahmed0elseginy' }],
  creator: 'Ahmed El-Seginy',
  publisher: 'Ahmed El-Seginy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ahmed El-Seginy Portfolio',
    title: 'Ahmed El-Seginy | Full Stack Developer & Software Engineer',
    description: 'Portfolio of Ahmed El-Seginy, a passionate full stack developer building scalable enterprise applications using Spring Boot, Next.js, PostgreSQL, and modern software architecture.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed El-Seginy - Java Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed El-Seginy | Software Engineer',
    description: 'Portfolio of Ahmed El-Seginy, a passionate Software Engineer building scalable enterprise applications using Spring Boot, Next.js, and modern software architecture.',
    creator: '@ahmed0elseginy',
    images: ['/images/me.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/me.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '96x96', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/me.jpg', sizes: '180x180', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '152x152', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '144x144', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '120x120', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '114x114', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '76x76', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '72x72', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '60x60', type: 'image/jpeg' },
      { url: '/images/me.jpg', sizes: '57x57', type: 'image/jpeg' },
    ],
    shortcut: [
      { url: '/images/me.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
  },
  category: 'Portfolio',
  classification: 'Software Development Portfolio',
  other: {
    'geo.region': 'EG-C',
    'geo.placename': 'Cairo',
    'geo.position': '30.0444;31.2357',
    'ICBM': '30.0444, 31.2357',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d0d0d' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/me.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${dmMono.variable} ${orbitron.variable} ${shareTechMono.variable} font-sans text-gray-700 dark:text-gray-200 relative antialiased`}> 
          <StructuredData />
          {children}
          <Toaster />
      </body>
    </html>
  );
}
