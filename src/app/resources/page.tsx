"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const resourcesData = getPageData("resources") as any;

  useEffect(() => {
    setLocale("en");
  }, []);

  const blogPosts = [
    {
      title: {
        en: "Top 10 Universities for International Students",
        fr: "Top 10 des Universités pour les Étudiants Internationaux",
      },
      excerpt: {
        en: "Discover the best universities around the world for international students...",
        fr: "Découvrez les meilleures universités du monde pour les étudiants internationaux...",
      },
      date: { en: "March 15, 2024", fr: "15 Mars 2024" },
      author: { en: "Prestige Fly Team", fr: "Équipe Prestige Fly" },
      readTime: { en: "5 min read", fr: "5 min de lecture" },
      category: "education",
    },
    {
      title: {
        en: "Essential Tips for Moving Abroad",
        fr: "Conseils Essentiels pour Déménager à l'Étranger",
      },
      excerpt: {
        en: "Everything you need to know before making the big move...",
        fr: "Tout ce que vous devez savoir avant de faire le grand saut...",
      },
      date: { en: "March 10, 2024", fr: "10 Mars 2024" },
      author: { en: "Prestige Fly Team", fr: "Équipe Prestige Fly" },
      readTime: { en: "7 min read", fr: "7 min de lecture" },
      category: "lifestyle",
    },
    {
      title: {
        en: "Understanding Different Visa Types",
        fr: "Comprendre les Différents Types de Visa",
      },
      excerpt: {
        en: "A comprehensive overview of various visa categories...",
        fr: "Un aperçu complet des différentes catégories de visa...",
      },
      date: { en: "March 5, 2024", fr: "5 Mars 2024" },
      author: { en: "Prestige Fly Team", fr: "Équipe Prestige Fly" },
      readTime: { en: "6 min read", fr: "6 min de lecture" },
      category: "visa",
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
                { en: "Resources & Guides", fr: "Ressources et Guides" },
                locale
              )}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                {
                  en: "Access comprehensive guides, tools, and resources to help you navigate your international journey.",
                  fr: "Accédez à des guides complets, des outils et des ressources pour vous aider à naviguer dans votre voyage international.",
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
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
                { en: "Latest Articles", fr: "Derniers Articles" },
                locale
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {getLocalizedText(
                      { en: "Education", fr: "Éducation" },
                      locale
                    )}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {getLocalizedText(post.title, locale)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {getLocalizedText(post.excerpt, locale)}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={14} className="mr-1" />
                  {getLocalizedText(post.date, locale)}
                  <span className="mx-2">•</span>
                  <User size={14} className="mr-1" />
                  {getLocalizedText(post.author, locale)}
                  <span className="mx-2">•</span>
                  {getLocalizedText(post.readTime, locale)}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                >
                  {getLocalizedText(
                    { en: "Read More", fr: "Lire Plus" },
                    locale
                  )}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
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
                {
                  en: "Need Personalized Guidance?",
                  fr: "Besoin d'Orientation Personnalisée?",
                },
                locale
              )}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {getLocalizedText(
                {
                  en: "Our experts are here to help you with personalized advice and support.",
                  fr: "Nos experts sont là pour vous aider avec des conseils et un soutien personnalisés.",
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
