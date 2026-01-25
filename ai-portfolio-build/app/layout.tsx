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

const siteUrl = 'https://yoursite.com'; // TODO: Replace with actual domain

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
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Solutions Architect Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack AI Solutions Architect | Portfolio',
    description:
      'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents.',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle', // TODO: Replace with actual handle
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'AI Solutions Architect',
  jobTitle: 'Full-Stack AI Solutions Architect',
  description:
    'Full-Stack Developer & NVIDIA-Certified AI Associate specializing in automated web apps and business-scale AI agents.',
  url: siteUrl,
  sameAs: [
    'https://github.com/yourgithub', // TODO: Replace
    'https://linkedin.com/in/yourlinkedin', // TODO: Replace
    'https://twitter.com/yourtwitter', // TODO: Replace
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
