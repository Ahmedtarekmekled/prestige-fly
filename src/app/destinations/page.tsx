"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorldMap from "@/components/WorldMap";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DestinationsPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const destinationsData = getPageData("destinations") as any;

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/fr")) {
      setLocale("fr");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation locale={locale} />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {getLocalizedText(destinationsData.hero.title, locale)}
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                {
                  en: "Explore our top destinations for study, work, and tourism",
                  fr: "Explorez nos principales destinations pour étudier, travailler et voyager",
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive World Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
              {getLocalizedText(
                {
                  en: "Interactive World Map",
                  fr: "Carte du Monde Interactive",
                },
                locale
              )}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {getLocalizedText(
                {
                  en: "Explore our destinations around the world",
                  fr: "Explorez nos destinations dans le monde entier",
                },
                locale
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <WorldMap />
          </motion.div>
        </div>
      </section>

      {/* Destination Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-neutral-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinationsData.destination_categories.map(
            (category: any, categoryIndex: number) => (
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
                  {category.destinations.map(
                    (destination: any, destinationIndex: number) => (
                      <motion.div
                        key={destinationIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: destinationIndex * 0.1,
                        }}
                        className="card p-6 hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="flex items-center mb-4">
                          <MapPin className="text-primary mr-2" size={20} />
                          <h3 className="text-xl font-semibold text-primary">
                            {destination.country}
                          </h3>
                        </div>

                        {destination.cities && (
                          <p className="text-gray-600 mb-4">
                            <span className="font-medium">
                              {getLocalizedText(
                                { en: "Cities: ", fr: "Villes : " },
                                locale
                              )}
                            </span>
                            {destination.cities.join(", ")}
                          </p>
                        )}

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {getLocalizedText(
                              { en: "Highlights:", fr: "Points Forts :" },
                              locale
                            )}
                          </h4>
                          <ul className="space-y-1">
                            {getLocalizedArray(
                              destination.highlights,
                              locale
                            ).map((highlight: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <Star
                                  className="text-accent mr-2 mt-1"
                                  size={12}
                                />
                                <span className="text-gray-600 text-sm">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={getLocalizedPath("/services", locale)}
                          className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300 group/link"
                        >
                          {getLocalizedText(
                            { en: "Learn More", fr: "En Savoir Plus" },
                            locale
                          )}
                          <ArrowRight
                            size={16}
                            className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                          />
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Why Choose These Destinations */}
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
                {
                  en: "Why Choose These Destinations?",
                  fr: "Pourquoi Choisir Ces Destinations ?",
                },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: { en: "Quality Education", fr: "Éducation de Qualité" },
                description: {
                  en: "World-class universities and educational institutions",
                  fr: "Universités et institutions éducatives de classe mondiale",
                },
              },
              {
                icon: "💼",
                title: {
                  en: "Career Opportunities",
                  fr: "Opportunités de Carrière",
                },
                description: {
                  en: "Thriving job markets and professional growth",
                  fr: "Marchés du travail dynamiques et croissance professionnelle",
                },
              },
              {
                icon: "🌍",
                title: {
                  en: "Cultural Experience",
                  fr: "Expérience Culturelle",
                },
                description: {
                  en: "Rich cultural heritage and diverse communities",
                  fr: "Patrimoine culturel riche et communautés diversifiées",
                },
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
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
                { en: "Ready to Explore?", fr: "Prêt à Explorer ?" },
                locale
              )}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getLocalizedText(
                {
                  en: "Start planning your international journey today.",
                  fr: "Commencez à planifier votre voyage international aujourd'hui.",
                },
                locale
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getLocalizedPath("/book-appointment", locale)}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                {getLocalizedText(
                  { en: "Book Consultation", fr: "Réserver une Consultation" },
                  locale
                )}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href={getLocalizedPath("/services", locale)}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {getLocalizedText(
                  { en: "View Services", fr: "Voir les Services" },
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

function getLocalizedArray(
  obj: { en: string[]; fr: string[] } | undefined,
  locale: "en" | "fr"
): string[] {
  if (!obj) return [];
  return obj[locale] || obj.en || [];
}
