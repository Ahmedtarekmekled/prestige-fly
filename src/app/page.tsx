"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import { Users, Globe, Award, Clock, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const homeData = getPageData("home") as any;

  useEffect(() => {
    setLocale("en");
  }, []);

  const whyChooseUsData = homeData.sections.why_choose_us;
  const ctaData = homeData.sections.cta_section;

  const stats = [
    {
      number: { en: "500+", fr: "500+" },
      label: { en: "Happy Clients", fr: "Clients Satisfaits" },
      icon: Users,
    },
    {
      number: { en: "50+", fr: "50+" },
      label: { en: "Countries", fr: "Pays" },
      icon: Globe,
    },
    {
      number: { en: "10+", fr: "10+" },
      label: { en: "Years Experience", fr: "Années d'Expérience" },
      icon: Award,
    },
    {
      number: { en: "24/7", fr: "24/7" },
      label: { en: "Support", fr: "Support" },
      icon: Clock,
    },
  ];

  const testimonials = [
    {
      name: { en: "Sarah Johnson", fr: "Sarah Johnson" },
      role: { en: "Student", fr: "Étudiante" },
      content: {
        en: "Prestige Fly helped me secure admission to my dream university in Canada. Their guidance was invaluable throughout the entire process.",
        fr: "Prestige Fly m'a aidé à obtenir l'admission dans mon université de rêve au Canada. Leurs conseils ont été inestimables tout au long du processus.",
      },
      rating: 5,
    },
    {
      name: { en: "Michael Chen", fr: "Michael Chen" },
      role: { en: "Professional", fr: "Professionnel" },
      content: {
        en: "The team at Prestige Fly made my work visa application seamless. Highly recommend their professional services.",
        fr: "L'équipe de Prestige Fly a rendu ma demande de visa de travail sans problème. Je recommande fortement leurs services professionnels.",
      },
      rating: 5,
    },
    {
      name: { en: "Emma Rodriguez", fr: "Emma Rodriguez" },
      role: { en: "Tourist", fr: "Touriste" },
      content: {
        en: "Amazing travel planning service! They created the perfect itinerary for my family vacation in Europe.",
        fr: "Service de planification de voyage incroyable ! Ils ont créé l'itinéraire parfait pour les vacances de ma famille en Europe.",
      },
      rating: 5,
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <stat.icon size={48} className="mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold mb-2">
                    {getLocalizedText(stat.number, locale)}
                  </div>
                  <div className="text-lg opacity-90">
                    {getLocalizedText(stat.label, locale)}
                  </div>
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
              {getLocalizedText(
                { en: "What Our Clients Say", fr: "Ce que Disent Nos Clients" },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{getLocalizedText(testimonial.content, locale)}"
                </p>
                <div>
                  <div className="font-semibold text-primary">
                    {getLocalizedText(testimonial.name, locale)}
                  </div>
                  <div className="text-sm text-gray-500">
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
                  en: "Book a consultation with our experts and start your international journey today.",
                  fr: "Réservez une consultation avec nos experts et commencez votre voyage international aujourd'hui.",
                },
                locale
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getLocalizedPath("/book-appointment", locale)}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                {getLocalizedText(ctaData.button, locale)}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href={getLocalizedPath("/contact", locale)}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {getLocalizedText(
                  { en: "Contact Us", fr: "Contactez-Nous" },
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
