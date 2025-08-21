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

export default function FrenchDestinationsPage() {
  const [locale, setLocale] = useState<"en" | "fr">("fr");
  const destinationsData = getPageData("destinations") as any;

  useEffect(() => {
    setLocale("fr");
  }, []);

  const destinations = [
    {
      category: { en: "Study Destinations", fr: "Destinations d'Études" },
      destinations: [
        {
          name: { en: "Canada", fr: "Canada" },
          highlights: [
            {
              en: "World-class universities",
              fr: "Universités de classe mondiale",
            },
            {
              en: "Post-study work opportunities",
              fr: "Opportunités de travail post-études",
            },
            {
              en: "Multicultural environment",
              fr: "Environnement multiculturel",
            },
          ],
        },
        {
          name: { en: "Australia", fr: "Australie" },
          highlights: [
            {
              en: "Innovative education system",
              fr: "Système éducatif innovant",
            },
            { en: "Beautiful campuses", fr: "Beaux campus" },
            { en: "Work while studying", fr: "Travailler tout en étudiant" },
          ],
        },
        {
          name: { en: "United Kingdom", fr: "Royaume-Uni" },
          highlights: [
            { en: "Historic institutions", fr: "Institutions historiques" },
            { en: "Rich academic tradition", fr: "Riche tradition académique" },
            { en: "Global networking", fr: "Réseautage mondial" },
          ],
        },
      ],
    },
    {
      category: { en: "Work Destinations", fr: "Destinations de Travail" },
      destinations: [
        {
          name: { en: "Germany", fr: "Allemagne" },
          highlights: [
            { en: "Strong economy", fr: "Économie forte" },
            {
              en: "Engineering opportunities",
              fr: "Opportunités en ingénierie",
            },
            { en: "Work-life balance", fr: "Équilibre travail-vie" },
          ],
        },
        {
          name: { en: "Netherlands", fr: "Pays-Bas" },
          highlights: [
            { en: "Innovation hub", fr: "Centre d'innovation" },
            { en: "English-friendly", fr: "Anglais parlé" },
            { en: "Quality of life", fr: "Qualité de vie" },
          ],
        },
        {
          name: { en: "Switzerland", fr: "Suisse" },
          highlights: [
            { en: "High salaries", fr: "Salaires élevés" },
            { en: "Stable economy", fr: "Économie stable" },
            { en: "Beautiful landscapes", fr: "Paysages magnifiques" },
          ],
        },
      ],
    },
    {
      category: { en: "Tourism Destinations", fr: "Destinations Touristiques" },
      destinations: [
        {
          name: { en: "Japan", fr: "Japon" },
          highlights: [
            { en: "Rich culture", fr: "Culture riche" },
            { en: "Modern cities", fr: "Villes modernes" },
            { en: "Unique experiences", fr: "Expériences uniques" },
          ],
        },
        {
          name: { en: "New Zealand", fr: "Nouvelle-Zélande" },
          highlights: [
            { en: "Adventure tourism", fr: "Tourisme d'aventure" },
            { en: "Natural beauty", fr: "Beauté naturelle" },
            { en: "Friendly people", fr: "Gens accueillants" },
          ],
        },
        {
          name: { en: "Iceland", fr: "Islande" },
          highlights: [
            { en: "Northern lights", fr: "Aurores boréales" },
            { en: "Geothermal wonders", fr: "Merveilles géothermiques" },
            { en: "Unique landscapes", fr: "Paysages uniques" },
          ],
        },
      ],
    },
  ];

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
                { en: "Explore Destinations", fr: "Explorer les Destinations" },
                locale
              )}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                {
                  en: "Discover amazing destinations for study, work, and tourism around the world.",
                  fr: "Découvrez des destinations incroyables pour étudier, travailler et voyager dans le monde entier.",
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive World Map */}
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
                  en: "Interactive World Map",
                  fr: "Carte du Monde Interactive",
                },
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
            className="h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
          >
            <WorldMap />
          </motion.div>
        </div>
      </section>

      {/* Destinations by Category */}
      <section className="py-20 bg-neutral-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {destinations.map((category, categoryIndex) => (
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
                  {getLocalizedText(category.category, locale)}
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
                        <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full mr-4">
                          <MapPin size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary">
                          {getLocalizedText(destination.name, locale)}
                        </h3>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {destination.highlights.map(
                          (highlight: any, index: number) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-600"
                            >
                              <Star
                                size={16}
                                className="text-accent mr-2 flex-shrink-0"
                              />
                              {getLocalizedText(highlight, locale)}
                            </li>
                          )
                        )}
                      </ul>
                      <Link
                        href={getLocalizedPath("/contact", locale)}
                        className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                      >
                        {getLocalizedText(
                          { en: "Learn More", fr: "En Savoir Plus" },
                          locale
                        )}
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          ))}
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
                {
                  en: "Ready to Start Your Journey?",
                  fr: "Prêt à Commencer Votre Voyage?",
                },
                locale
              )}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getLocalizedText(
                {
                  en: "Let us help you choose the perfect destination and plan your international adventure.",
                  fr: "Laissez-nous vous aider à choisir la destination parfaite et planifier votre aventure internationale.",
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
