'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getLocalizedText, getPageData } from '@/lib/data';
import { getLocalizedPath } from '@/lib/i18n';
import { GraduationCap, Briefcase, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FrenchServicesPage() {
  const [locale, setLocale] = useState<'en' | 'fr'>('fr');
  const servicesData = getPageData('services') as any;

  useEffect(() => {
    setLocale('fr');
  }, []);

  const iconMap = {
    'graduation-cap': GraduationCap,
    'briefcase': Briefcase,
    'map-pin': MapPin,
  };

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {getLocalizedText(servicesData.hero.title, locale)}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                { 
                  en: 'Comprehensive travel services tailored to your international goals',
                  fr: 'Services de voyage complets adaptés à vos objectifs internationaux'
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.services_detailed.map((category: any, categoryIndex: number) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-20 last:mb-0"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {getLocalizedText(category.title, locale)}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service: any, serviceIndex: number) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
                        <CheckCircle size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        {getLocalizedText(service.name, locale)}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {getLocalizedText(service.description, locale)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
              {getLocalizedText(
                { en: 'Our Process', fr: 'Notre Processus' },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: { en: '01', fr: '01' },
                title: { en: 'Consultation', fr: 'Consultation' },
                description: {
                  en: 'Initial meeting to understand your goals and requirements',
                  fr: 'Première réunion pour comprendre vos objectifs et exigences'
                },
              },
              {
                step: { en: '02', fr: '02' },
                title: { en: 'Planning', fr: 'Planification' },
                description: {
                  en: 'Develop a customized plan for your international journey',
                  fr: 'Développer un plan personnalisé pour votre voyage international'
                },
              },
              {
                step: { en: '03', fr: '03' },
                title: { en: 'Implementation', fr: 'Mise en Œuvre' },
                description: {
                  en: 'Execute the plan with expert guidance and support',
                  fr: 'Exécuter le plan avec des conseils et un soutien d\'experts'
                },
              },
              {
                step: { en: '04', fr: '04' },
                title: { en: 'Support', fr: 'Support' },
                description: {
                  en: 'Ongoing support throughout your international experience',
                  fr: 'Support continu tout au long de votre expérience internationale'
                },
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {getLocalizedText(process.step, locale)}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {getLocalizedText(process.title, locale)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {getLocalizedText(process.description, locale)}
                  </p>
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
              {getLocalizedText(
                { en: 'Ready to Start Your Journey?', fr: 'Prêt à Commencer Votre Voyage?' },
                locale
              )}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getLocalizedText(
                { 
                  en: 'Book a consultation with our experts today.',
                  fr: 'Réservez une consultation avec nos experts aujourd\'hui.'
                },
                locale
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getLocalizedPath('/book-appointment', locale)}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                {getLocalizedText(
                  { en: 'Book Consultation', fr: 'Réserver une Consultation' },
                  locale
                )}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href={getLocalizedPath('/contact', locale)}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {getLocalizedText(
                  { en: 'Contact Us', fr: 'Contactez-Nous' },
                  locale
                )}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
