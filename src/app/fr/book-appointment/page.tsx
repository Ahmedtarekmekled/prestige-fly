"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function FrenchBookAppointmentPage() {
  const [locale, setLocale] = useState<"en" | "fr">("fr");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const bookingData = getPageData("book_appointment") as any;

  useEffect(() => {
    setLocale("fr");
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const services = [
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
      value: "visa-assistance",
      label: { en: "Visa Assistance", fr: "Assistance Visa" },
    },
    {
      value: "consultation",
      label: { en: "General Consultation", fr: "Consultation Générale" },
    },
  ];

  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ];

  const steps = [
    {
      number: 1,
      title: { en: "Service Selection", fr: "Sélection de Service" },
    },
    {
      number: 2,
      title: { en: "Personal Information", fr: "Informations Personnelles" },
    },
    {
      number: 3,
      title: { en: "Appointment Details", fr: "Détails du Rendez-vous" },
    },
    {
      number: 4,
      title: { en: "Review & Confirm", fr: "Révision et Confirmation" },
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
                <CheckCircle
                  size={64}
                  className="mx-auto mb-6 text-green-300"
                />
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  {getLocalizedText(
                    { en: "Booking Confirmed!", fr: "Réservation Confirmée !" },
                    locale
                  )}
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  {getLocalizedText(
                    {
                      en: "Thank you for booking a consultation with us. We will contact you shortly to confirm your appointment.",
                      fr: "Merci d'avoir réservé une consultation avec nous. Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
                    },
                    locale
                  )}
                </p>
                <Link
                  href={getLocalizedPath("/", locale)}
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  {getLocalizedText(
                    { en: "Back to Home", fr: "Retour à l'Accueil" },
                    locale
                  )}
                  <ArrowRight size={20} className="ml-2" />
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
                {
                  en: "Book Your Consultation",
                  fr: "Réserver Votre Consultation",
                },
                locale
              )}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(
                {
                  en: "Schedule a personalized consultation with our experts to start your international journey.",
                  fr: "Planifiez une consultation personnalisée avec nos experts pour commencer votre voyage international.",
                },
                locale
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex items-center w-full sm:w-auto"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 font-semibold ${
                      currentStep >= step.number
                        ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`ml-2 sm:ml-3 font-medium text-sm sm:text-base ${
                      currentStep >= step.number
                        ? "text-primary"
                        : "text-gray-500"
                    }`}
                  >
                    {getLocalizedText(step.title, locale)}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden sm:block w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <div className="card p-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {getLocalizedText(
                      {
                        en: "Select Your Service",
                        fr: "Sélectionnez Votre Service",
                      },
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.value}
                        onClick={() =>
                          handleInputChange("service", service.value)
                        }
                        className={`p-4 sm:p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                          formData.service === service.value
                            ? "border-primary bg-primary bg-opacity-10 text-primary shadow-md"
                            : "border-gray-300 hover:border-primary hover:bg-primary hover:bg-opacity-5 hover:shadow-sm"
                        }`}
                      >
                        <div className="font-semibold text-base sm:text-lg">
                          {getLocalizedText(service.label, locale)}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6">
                    {getLocalizedText(
                      {
                        en: "Personal Information",
                        fr: "Informations Personnelles",
                      },
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Full Name", fr: "Nom Complet" },
                          locale
                        )}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={getLocalizedText(
                          {
                            en: "Enter your full name",
                            fr: "Entrez votre nom complet",
                          },
                          locale
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText({ en: "Email", fr: "Email" }, locale)}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={getLocalizedText(
                          { en: "Enter your email", fr: "Entrez votre email" },
                          locale
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Phone Number", fr: "Numéro de Téléphone" },
                          locale
                        )}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={getLocalizedText(
                          {
                            en: "Enter your phone number",
                            fr: "Entrez votre numéro de téléphone",
                          },
                          locale
                        )}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-6">
                    {getLocalizedText(
                      {
                        en: "Appointment Details",
                        fr: "Détails du Rendez-vous",
                      },
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Preferred Date", fr: "Date Préférée" },
                          locale
                        )}
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Preferred Time", fr: "Heure Préférée" },
                          locale
                        )}
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          handleInputChange("time", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">
                          {getLocalizedText(
                            {
                              en: "Select a time",
                              fr: "Sélectionnez une heure",
                            },
                            locale
                          )}
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {getLocalizedText(
                          {
                            en: "Additional Message",
                            fr: "Message Supplémentaire",
                          },
                          locale
                        )}
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={getLocalizedText(
                          {
                            en: "Tell us more about your needs...",
                            fr: "Dites-nous plus sur vos besoins...",
                          },
                          locale
                        )}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {getLocalizedText(
                      {
                        en: "Review Your Information",
                        fr: "Vérifiez Vos Informations",
                      },
                      locale
                    )}
                  </h2>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Service:", fr: "Service :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">
                          {
                            services.find((s) => s.value === formData.service)
                              ?.label[locale]
                          }
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Name:", fr: "Nom :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.name}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Email:", fr: "Email :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.email}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Phone:", fr: "Téléphone :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.phone}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Date:", fr: "Date :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.date}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Time:", fr: "Heure :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.time}</p>
                      </div>
                    </div>
                    {formData.message && (
                      <div className="mt-4">
                        <span className="font-semibold text-gray-700">
                          {getLocalizedText(
                            { en: "Message:", fr: "Message :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-600">{formData.message}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center justify-center px-6 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto text-base"
                >
                  {getLocalizedText(
                    { en: "Previous", fr: "Précédent" },
                    locale
                  )}
                </button>
              )}
              <div className="w-full sm:w-auto">
                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={
                      !formData.service ||
                      (currentStep === 2 && (!formData.name || !formData.email))
                    }
                    className="btn-primary px-6 py-4 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-base font-medium shadow-md"
                  >
                    {getLocalizedText({ en: "Next", fr: "Suivant" }, locale)}
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn-primary px-8 py-4 w-full sm:w-auto text-base font-medium shadow-md"
                  >
                    {getLocalizedText(
                      { en: "Confirm Booking", fr: "Confirmer la Réservation" },
                      locale
                    )}
                    <CheckCircle size={20} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
