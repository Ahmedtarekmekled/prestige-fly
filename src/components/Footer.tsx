'use client';

import Link from 'next/link';
import { getLocalizedText, getWebsiteInfo } from '@/lib/data';
import { getLocalizedPath } from '@/lib/i18n';

interface FooterProps {
  locale: 'en' | 'fr';
}

export default function Footer({ locale }: FooterProps) {
  const websiteInfo = getWebsiteInfo();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logofly.png"
              alt="Prestige Fly"
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold">Prestige Fly</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {getLocalizedText(websiteInfo.description, locale)}
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link
              href={getLocalizedPath('/services', locale)}
              className="text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {getLocalizedText({ en: 'Services', fr: 'Services' }, locale)}
            </Link>
            <Link
              href={getLocalizedPath('/destinations', locale)}
              className="text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {getLocalizedText({ en: 'Destinations', fr: 'Destinations' }, locale)}
            </Link>
            <Link
              href={getLocalizedPath('/contact', locale)}
              className="text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {getLocalizedText({ en: 'Contact', fr: 'Contact' }, locale)}
            </Link>
            <Link
              href={getLocalizedPath('/book-appointment', locale)}
              className="text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {getLocalizedText({ en: 'Book Appointment', fr: 'Prendre Rendez-vous' }, locale)}
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Prestige Fly. {getLocalizedText(
                { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
                locale
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
