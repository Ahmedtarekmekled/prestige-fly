"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Phone,
  Video,
  User,
} from "lucide-react";

export default function BookAppointmentPage() {
  const [locale, setLocale] = useState<"en" | "fr">("en");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    email: "",
    phone: "",
    preferredLanguage: "en",
    preferredDate: "",
    preferredTime: "",
    consultationType: "video",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const bookingData = getPageData("book_appointment") as any;

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/fr")) {
      setLocale("fr");
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

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
      title: { en: "Review & Submit", fr: "Révision et Soumission" },
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const consultationTypes = [
    {
      value: "video",
      label: { en: "Video Call", fr: "Appel Vidéo" },
      icon: Video,
    },
    {
      value: "phone",
      label: { en: "Phone Call", fr: "Appel Téléphonique" },
      icon: Phone,
    },
    {
      value: "in-person",
      label: { en: "In-Person", fr: "En Personne" },
      icon: User,
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
                {getLocalizedText(bookingData.confirmation.title, locale)}
              </h1>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                {getLocalizedText(bookingData.confirmation.message, locale)}
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
              {getLocalizedText(bookingData.hero.title, locale)}
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              {getLocalizedText(bookingData.hero.subtitle, locale)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
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
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle size={16} className="sm:w-5 sm:h-5" />
                    ) : (
                      <span className="font-semibold text-sm sm:text-base">
                        {step.number}
                      </span>
                    )}
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
                        currentStep > step.number ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                    {getLocalizedText(
                      bookingData.booking_form.service_selection.title,
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {bookingData.booking_form.service_selection.options.map(
                      (option: any, index: number) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            handleInputChange(
                              "service",
                              getLocalizedText(option, locale)
                            )
                          }
                          className={`p-4 sm:p-6 border-2 rounded-lg text-left transition-all duration-300 ${
                            formData.service ===
                            getLocalizedText(option, locale)
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-300 hover:border-primary/50 hover:shadow-sm"
                          }`}
                        >
                          <h3 className="font-semibold text-base sm:text-lg mb-2">
                            {getLocalizedText(option, locale)}
                          </h3>
                        </button>
                      )
                    )}
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
                  className="space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                    {getLocalizedText(
                      {
                        en: "Personal Information",
                        fr: "Informations Personnelles",
                      },
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Full Name", fr: "Nom Complet" },
                          locale
                        )}
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Preferred Language", fr: "Langue Préférée" },
                          locale
                        )}
                      </label>
                      <select
                        value={formData.preferredLanguage}
                        onChange={(e) =>
                          handleInputChange("preferredLanguage", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                      </select>
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
                  className="space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                    {getLocalizedText(
                      {
                        en: "Appointment Details",
                        fr: "Détails du Rendez-vous",
                      },
                      locale
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Preferred Date", fr: "Date Préférée" },
                          locale
                        )}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          handleInputChange("preferredDate", e.target.value)
                        }
                        className="form-input"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getLocalizedText(
                          { en: "Preferred Time", fr: "Heure Préférée" },
                          locale
                        )}
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          handleInputChange("preferredTime", e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      {getLocalizedText(
                        { en: "Consultation Type", fr: "Type de Consultation" },
                        locale
                      )}
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      {consultationTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              handleInputChange("consultationType", type.value)
                            }
                            className={`p-4 sm:p-6 border-2 rounded-lg text-center transition-all duration-300 ${
                              formData.consultationType === type.value
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-gray-300 hover:border-primary/50 hover:shadow-sm"
                            }`}
                          >
                            <IconComponent
                              size={24}
                              className="sm:w-6 sm:h-6 mx-auto mb-3 text-primary"
                            />
                            <span className="font-medium text-base sm:text-lg">
                              {getLocalizedText(type.label, locale)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getLocalizedText(
                        bookingData.booking_form.additional_info.label,
                        locale
                      )}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                      className="form-textarea"
                      placeholder={getLocalizedText(
                        {
                          en: "Tell us about your goals and requirements...",
                          fr: "Parlez-nous de vos objectifs et exigences...",
                        },
                        locale
                      )}
                    />
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
                  className="space-y-6"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                    {getLocalizedText(
                      { en: "Review & Submit", fr: "Révision et Soumission" },
                      locale
                    )}
                  </h2>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Service:", fr: "Service :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">{formData.service}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Name:", fr: "Nom :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">{formData.fullName}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Email:", fr: "Email :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">{formData.email}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Phone:", fr: "Téléphone :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">{formData.phone}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Date:", fr: "Date :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">
                          {formData.preferredDate}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Time:", fr: "Heure :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">
                          {formData.preferredTime}
                        </p>
                      </div>
                    </div>
                    {formData.message && (
                      <div>
                        <span className="font-medium text-gray-700">
                          {getLocalizedText(
                            { en: "Message:", fr: "Message :" },
                            locale
                          )}
                        </span>
                        <p className="text-gray-900">{formData.message}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-6 sm:pt-8 space-y-4 sm:space-y-0">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto text-base font-medium"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  {getLocalizedText(
                    { en: "Previous", fr: "Précédent" },
                    locale
                  )}
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    !formData.service ||
                    (currentStep === 2 &&
                      (!formData.fullName ||
                        !formData.email ||
                        !formData.phone))
                  }
                  className="flex items-center justify-center px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-base font-medium shadow-md"
                >
                  {getLocalizedText({ en: "Next", fr: "Suivant" }, locale)}
                  <ArrowRight size={20} className="ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300 w-full sm:w-auto text-base font-medium shadow-md"
                >
                  {getLocalizedText(
                    { en: "Submit Booking", fr: "Soumettre la Réservation" },
                    locale
                  )}
                  <CheckCircle size={20} className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
