'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import Footer from '@/components/Footer';
import { getLocalizedText, getPageData } from '@/lib/data';
import { getLocalizedPath } from '@/lib/i18n';
import { Award, Users, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

export default function FrenchHomePage() {
  const [locale, setLocale] = useState<'en' | 'fr'>('fr');
  const homeData = getPageData('home') as any;

  useEffect(() => {
    setLocale('fr');
  }, []);

  const whyChooseUsData = homeData.sections.why_choose_us;
  const ctaData = homeData.sections.cta_section;

  const stats = [
    {
      icon: Users,
      number: '1000+',
      label: { en: 'Happy Clients', fr: 'Clients Satisfaits' },
    },
    {
      icon: Globe,
      number: '50+',
      label: { en: 'Countries', fr: 'Pays' },
    },
    {
      icon: Award,
      number: '95%',
      label: { en: 'Success Rate', fr: 'Taux de Réussite' },
    },
    {
      icon: Clock,
      number: '24/7',
      label: { en: 'Support', fr: 'Support' },
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />
      
      <HeroSection locale={locale} />
      
      <ServicesOverview locale={locale} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {getLocalizedText(whyChooseUsData.title, locale)}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsData.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <div className="text-white text-2xl">
                    {index === 0 && '🎯'}
                    {index === 1 && '🌐'}
                    {index === 2 && '👤'}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {getLocalizedText(feature.title, locale)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getLocalizedText(feature.description, locale)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">
                  {getLocalizedText(stat.label, locale)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {getLocalizedText(homeData.sections.testimonials.title, locale)}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: { en: 'Sarah Johnson', fr: 'Sarah Johnson' },
                role: { en: 'Study Abroad Student', fr: 'Étudiante à l\'Étranger' },
                content: {
                  en: 'Prestige Fly made my study abroad journey seamless. Their expertise and support were invaluable.',
                  fr: 'Prestige Fly a rendu mon voyage d\'études à l\'étranger sans problème. Leur expertise et soutien étaient inestimables.'
                },
                rating: 5,
              },
              {
                name: { en: 'Michael Chen', fr: 'Michael Chen' },
                role: { en: 'Work Abroad Professional', fr: 'Professionnel à l\'Étranger' },
                content: {
                  en: 'Outstanding service! They helped me secure a great job opportunity in Germany.',
                  fr: 'Service exceptionnel ! Ils m\'ont aidé à obtenir une excellente opportunité d\'emploi en Allemagne.'
                },
                rating: 5,
              },
              {
                name: { en: 'Emma Rodriguez', fr: 'Emma Rodriguez' },
                role: { en: 'Tourism Client', fr: 'Cliente Tourisme' },
                content: {
                  en: 'The premium tourism experience was beyond my expectations. Highly recommended!',
                  fr: 'L\'expérience de tourisme premium a dépassé mes attentes. Très recommandé !'
                },
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{getLocalizedText(testimonial.content, locale)}"
                </p>
                <div>
                  <div className="font-semibold text-primary">
                    {getLocalizedText(testimonial.name, locale)}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {getLocalizedText(testimonial.role, locale)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {getLocalizedText(ctaData.title, locale)}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getLocalizedText(
                { 
                  en: 'Take the first step towards your international journey today.',
                  fr: 'Faites le premier pas vers votre voyage international aujourd\'hui.'
                },
                locale
              )}
            </p>
            <Link
              href={getLocalizedPath('/book-appointment', locale)}
              className="btn-primary text-lg px-8 py-4"
            >
              {getLocalizedText(ctaData.button, locale)}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
