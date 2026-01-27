import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const siteUrl = 'https://razvan.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Full-Stack AI Solutions Architect | Portfolio',
    template: '%s | AI Solutions Architect',
  },
  description:
    'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents. Building intelligent digital solutions.',
  keywords: [
    'Full-Stack Developer',
    'AI Solutions Architect',
    'NVIDIA Certified',
    'Web Development',
    'AI Automation',
    'Next.js',
    'React',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'AI Agents',
    'Business Automation',
  ],
  authors: [{ name: 'AI Solutions Architect' }],
  creator: 'AI Solutions Architect',
  generator: 'Next.js',
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'AI Solutions Architect Portfolio',
    title: 'Full-Stack AI Solutions Architect | Portfolio',
    description:
      'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AI Solutions Architect Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack AI Solutions Architect | Portfolio',
    description:
      'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@razvan_opris',
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Razvan Opris',
  jobTitle: 'Full-Stack AI Solutions Architect',
  description:
    'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents.',
  url: siteUrl,
  sameAs: [
    'https://github.com/Razvi20',
    'https://linkedin.com/in/razvan-opris-61a642223',
    'https://instagram.com/razvan_opris',
  ],
  knowsAbout: [
    'Web Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Full-Stack Development',
    'AI Automation',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'NVIDIA Certified Associate - AI Infrastructure and Operations',
      credentialCategory: 'Professional Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'NVIDIA Certified Associate - Generative AI LLMs',
      credentialCategory: 'Professional Certification',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
