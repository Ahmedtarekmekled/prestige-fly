'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getLocalizedText, getPageData } from '@/lib/data';
import { getLocalizedPath } from '@/lib/i18n';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function FrenchContactPage() {
  const [locale, setLocale] = useState<'en' | 'fr'>('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactData = getPageData('contact') as any;

  useEffect(() => {
    setLocale('fr');
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: { en: 'Office Address', fr: 'Adresse du Bureau' },
      content: {
        en: '123 Business Street, Suite 100, City, Country 12345',
        fr: '123 Rue des Affaires, Suite 100, Ville, Pays 12345'
      },
    },
    {
      icon: Phone,
      title: { en: 'Phone Number', fr: 'Numéro de Téléphone' },
      content: {
        en: '+1 (555) 123-4567',
        fr: '+1 (555) 123-4567'
      },
    },
    {
      icon: Mail,
      title: { en: 'Email Address', fr: 'Adresse Email' },
      content: {
        en: 'info@prestigefly.com',
        fr: 'info@prestigefly.com'
      },
    },
    {
      icon: Clock,
      title: { en: 'Business Hours', fr: 'Heures d\'Ouverture' },
      content: {
        en: 'Monday - Friday: 9:00 AM - 6:00 PM',
        fr: 'Lundi - Vendredi: 9h00 - 18h00'
      },
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation locale={locale} />
        <div className="pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white bg-opacity-20 p-8 rounded-2xl backdrop-blur-sm">
                <CheckCircle size={64} className="mx-auto mb-6 text-green-300" />
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  {getLocalizedText(
                    { en: 'Message Sent!', fr: 'Message Envoyé !' },
                    locale
                  )}
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  {getLocalizedText(
                    { 
                      en: 'Thank you for contacting us. We will get back to you within 24 hours.',
                      fr: 'Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.'
                    },
                    locale
                  )}
                </p>
                <Link
                  href={getLocalizedPath('/', locale)}
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  {getLocalizedText(
                    { en: 'Back to Home', fr: 'Retour à l\'Accueil' },
                    locale
                  )}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer locale={locale} />
      </div>
    );
  }

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
              {getLocalizedText(
                { en: 'Contact Us', fr: 'Contactez-Nous' },
                locale
              )}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                { 
                  en: 'Get in touch with our team of experts. We\'re here to help you with all your international travel needs.',
                  fr: 'Contactez notre équipe d\'experts. Nous sommes là pour vous aider avec tous vos besoins de voyage international.'
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              {getLocalizedText(
                { en: 'Get in Touch', fr: 'Entrez en Contact' },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <method.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {getLocalizedText(method.title, locale)}
                </h3>
                <p className="text-gray-600">
                  {getLocalizedText(method.content, locale)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {getLocalizedText(
                { en: 'Send Us a Message', fr: 'Envoyez-Nous un Message' },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {getLocalizedText(
                      { en: 'Full Name', fr: 'Nom Complet' },
                      locale
                    )}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={getLocalizedText(
                      { en: 'Enter your full name', fr: 'Entrez votre nom complet' },
                      locale
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {getLocalizedText(
                      { en: 'Email Address', fr: 'Adresse Email' },
                      locale
                    )}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={getLocalizedText(
                      { en: 'Enter your email', fr: 'Entrez votre email' },
                      locale
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {getLocalizedText(
                      { en: 'Phone Number', fr: 'Numéro de Téléphone' },
                      locale
                    )}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={getLocalizedText(
                      { en: 'Enter your phone number', fr: 'Entrez votre numéro de téléphone' },
                      locale
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {getLocalizedText(
                      { en: 'Subject', fr: 'Sujet' },
                      locale
                    )}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={getLocalizedText(
                      { en: 'Enter subject', fr: 'Entrez le sujet' },
                      locale
                    )}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {getLocalizedText(
                    { en: 'Message', fr: 'Message' },
                    locale
                  )}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={getLocalizedText(
                    { en: 'Tell us how we can help you...', fr: 'Dites-nous comment nous pouvons vous aider...' },
                    locale
                  )}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  {getLocalizedText(
                    { en: 'Send Message', fr: 'Envoyer le Message' },
                    locale
                  )}
                  <Send size={20} className="ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
              {getLocalizedText(
                { en: 'Find Us', fr: 'Trouvez-Nous' },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
              <div className="text-white text-center">
                <MapPin size={64} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {getLocalizedText(
                    { en: 'Interactive Map', fr: 'Carte Interactive' },
                    locale
                  )}
                </h3>
                <p className="opacity-90">
                  {getLocalizedText(
                    { en: 'Map integration coming soon', fr: 'Intégration de carte à venir' },
                    locale
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
