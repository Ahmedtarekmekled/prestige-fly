"use client";

import { useEffect, useRef, useState } from "react";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import { GraduationCap, Briefcase, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesOverviewProps {
  locale: "en" | "fr";
}

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  const homeData = getPageData("home") as any;
  const servicesData = homeData.sections.services_overview;
  const [cardsInView, setCardsInView] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const iconMap = {
    "graduation-cap": GraduationCap,
    briefcase: Briefcase,
    "map-pin": MapPin,
  };

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardsInView((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150); // Staggered delay
          }
        },
        { threshold: 0.1, rootMargin: "-50px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-neutral-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
            {getLocalizedText(servicesData.title, locale)}
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.services.map((service: any, index: number) => {
            const IconComponent =
              iconMap[service.icon as keyof typeof iconMap] || GraduationCap;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`
                  group relative bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center 
                  transform transition-all duration-700 ease-out
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  ${
                    cardsInView[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{
                  transitionDelay: cardsInView[index]
                    ? "0ms"
                    : `${index * 150}ms`,
                }}
              >
                {/* Floating background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative bg-gradient-to-r from-primary to-secondary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4 transition-colors duration-300 group-hover:text-secondary">
                    {getLocalizedText(service.name, locale)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                    {getLocalizedText(service.description, locale)}
                  </p>

                  {/* Arrow indicator */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <ArrowRight
                      size={18}
                      className="text-gray-600 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 lg:mt-12">
          <Link
            href={getLocalizedPath("/services", locale)}
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            {getLocalizedText(
              { en: "View All Services", fr: "Voir Tous les Services" },
              locale
            )}
            <ArrowRight
              size={18}
              className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
