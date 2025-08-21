"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceInterest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactData = getPageData("contact") as any;

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/fr")) {
      setLocale("fr");
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        serviceInterest: "",
        message: "",
      });
    }, 1000);
  };

  const serviceOptions = [
    {
      value: "study-abroad",
      label: { en: "Study Abroad", fr: "Études à l'Étranger" },
    },
    {
      value: "work-abroad",
      label: { en: "Work Abroad", fr: "Travail à l'Étranger" },
    },
    { value: "tourism", label: { en: "Tourism", fr: "Tourisme" } },
    {
      value: "general",
      label: { en: "General Inquiry", fr: "Demande Générale" },
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation locale={locale} />
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle
                size={60}
                className="sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-accent"
              />
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                {getLocalizedText(
                  {
                    en: "Message Sent Successfully!",
                    fr: "Message Envoyé avec Succès !",
                  },
                  locale
                )}
              </h1>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                {getLocalizedText(
                  {
                    en: "Thank you for contacting us. We'll get back to you within 24 hours.",
                    fr: "Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.",
                  },
                  locale
                )}
              </p>
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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {getLocalizedText(contactData.hero.title, locale)}
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(contactData.hero.subtitle, locale)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
                  {getLocalizedText(
                    { en: "Get in Touch", fr: "Contactez-Nous" },
                    locale
                  )}
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {contactData.contact_methods.map(
                    (method: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full text-white">
                          {method.type === "office" && <MapPin size={20} />}
                          {method.type === "phone" && <Phone size={20} />}
                          {method.type === "email" && <Mail size={20} />}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {getLocalizedText(method.title, locale)}
                          </h3>
                          {method.details.address && (
                            <p className="text-gray-600 mb-2">
                              {method.details.address}
                            </p>
                          )}
                          {method.details.hours && (
                            <p className="text-gray-600 mb-2">
                              {getLocalizedText(method.details.hours, locale)}
                            </p>
                          )}
                          {method.details.primary && (
                            <p className="text-gray-600 mb-1">
                              {method.details.primary}
                            </p>
                          )}
                          {method.details.emergency && (
                            <p className="text-gray-600 mb-1">
                              {method.details.emergency}
                            </p>
                          )}
                          {method.details.general && (
                            <p className="text-gray-600 mb-1">
                              {method.details.general}
                            </p>
                          )}
                          {method.details.support && (
                            <p className="text-gray-600">
                              {method.details.support}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-neutral-light-gray p-6 sm:p-8 rounded-xl"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
                  {getLocalizedText(contactData.contact_form.title, locale)}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Your Name", fr: "Votre Nom" },
                          locale
                        )}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Email Address", fr: "Adresse Email" },
                          locale
                        )}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getLocalizedText({ en: "Subject", fr: "Sujet" }, locale)}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getLocalizedText(
                        { en: "Service of Interest", fr: "Service d'Intérêt" },
                        locale
                      )}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        handleInputChange("serviceInterest", e.target.value)
                      }
                      className="form-select"
                    >
                      <option value="">
                        {getLocalizedText(
                          {
                            en: "Select a service",
                            fr: "Sélectionner un service",
                          },
                          locale
                        )}
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {getLocalizedText(option.label, locale)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getLocalizedText(
                        { en: "Your Message", fr: "Votre Message" },
                        locale
                      )}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={6}
                      className="form-textarea"
                      placeholder={getLocalizedText(
                        {
                          en: "Tell us how we can help you...",
                          fr: "Dites-nous comment nous pouvons vous aider...",
                        },
                        locale
                      )}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 inline-flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    {getLocalizedText(
                      { en: "Send Message", fr: "Envoyer le Message" },
                      locale
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-neutral-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              {getLocalizedText(
                { en: "Office Hours", fr: "Heures de Bureau" },
                locale
              )}
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Clock size={32} className="text-primary mr-4" />
                <h3 className="text-2xl font-semibold text-primary">
                  {getLocalizedText(
                    { en: "Monday - Friday", fr: "Lundi - Vendredi" },
                    locale
                  )}
                </h3>
              </div>
              <p className="text-xl text-gray-600">
                {getLocalizedText(
                  { en: "9:00 AM - 6:00 PM", fr: "9h00 - 18h00" },
                  locale
                )}
              </p>
              <p className="text-gray-500 mt-4">
                {getLocalizedText(
                  {
                    en: "We're here to help you plan your international journey.",
                    fr: "Nous sommes là pour vous aider à planifier votre voyage international.",
                  },
                  locale
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
