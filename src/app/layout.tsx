import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getWebsiteInfo, getSEOData } from '@/lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prestige Fly - International Travel Services',
  description: 'Your gateway to international opportunities - Study, Work, and Explore the world',
  keywords: ['study abroad', 'work abroad', 'premium tourism', 'international travel', 'visa services', 'education abroad'],
  authors: [{ name: 'Prestige Fly' }],
  creator: 'Prestige Fly',
  publisher: 'Prestige Fly',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prestigefly.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'fr': '/fr',
    },
  },
  openGraph: {
    title: 'Prestige Fly - International Travel Services',
    description: 'Your gateway to international opportunities - Study, Work, and Explore the world',
    url: 'https://prestigefly.com',
    siteName: 'Prestige Fly',
    images: [
      {
        url: '/logofly.png',
        width: 1200,
        height: 630,
        alt: 'Prestige Fly Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestige Fly - International Travel Services',
    description: 'Your gateway to international opportunities - Study, Work, and Explore the world',
    images: ['/logofly.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logofly.png" />
        <link rel="apple-touch-icon" href="/logofly.png" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/logofly.png" as="image" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Prestige Fly",
              "description": "International travel services for study abroad, work opportunities, and premium tourism",
              "url": "https://prestigefly.com",
              "logo": "https://prestigefly.com/logofly.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Travel Street, International District",
                "addressLocality": "International District",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": ["English", "French"]
              },
              "serviceType": ["Study Abroad", "Work Abroad", "Premium Tourism"],
              "areaServed": "Worldwide"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
