'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { getLocalizedText, getPageData } from '@/lib/data';
import { getLocaleFromPath, getLocalizedPath } from '@/lib/i18n';

interface NavigationProps {
  locale: 'en' | 'fr';
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();

  const websiteInfo = getPageData('home');
  const currentPath = removeLocaleFromPath(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: { en: 'Home', fr: 'Accueil' } },
    { href: '/services', label: { en: 'Services', fr: 'Services' } },
    { href: '/destinations', label: { en: 'Destinations', fr: 'Destinations' } },
    { href: '/resources', label: { en: 'Resources', fr: 'Ressources' } },
    { href: '/contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  const isActive = (href: string) => {
    return currentPath === href || (href !== '/' && currentPath.startsWith(href));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href={getLocalizedPath('/', locale)} className="flex items-center">
            <img
              src="/logofly.png"
              alt="Prestige Fly"
              className="h-12 w-auto"
            />
            <span className={`ml-3 text-xl font-bold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Prestige Fly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(item.href, locale)}
                className={`relative font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                } ${isActive(item.href) ? 'text-primary' : ''}`}
              >
                {getLocalizedText(item.label, locale)}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Globe size={16} />
                <span className="font-medium">
                  {locale === 'en' ? 'EN' : 'FR'}
                </span>
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200"
                  >
                    <Link
                      href={getLocalizedPath(currentPath, 'en')}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    >
                      English
                    </Link>
                    <Link
                      href={getLocalizedPath(currentPath, 'fr')}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    >
                      Français
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href={getLocalizedPath('/book-appointment', locale)}
              className="btn-primary"
            >
              {getLocalizedText({ en: 'Book Consultation', fr: 'Réserver une Consultation' }, locale)}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={getLocalizedPath(item.href, locale)}
                  className={`block py-2 text-gray-700 hover:text-primary transition-colors duration-200 ${
                    isActive(item.href) ? 'text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {getLocalizedText(item.label, locale)}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <Link
                    href={getLocalizedPath(currentPath, 'en')}
                    className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                      locale === 'en' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    href={getLocalizedPath(currentPath, 'fr')}
                    className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                      locale === 'fr' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Français
                  </Link>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href={getLocalizedPath('/book-appointment', locale)}
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  {getLocalizedText({ en: 'Book Consultation', fr: 'Réserver une Consultation' }, locale)}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function removeLocaleFromPath(pathname: string): string {
  return pathname.replace(/^\/fr/, '');
}
