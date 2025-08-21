"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getLocalizedText, getPageData } from "@/lib/data";
import { getLocalizedPath } from "@/lib/i18n";
import {
  Play,
  Pause,
  ArrowRight,
  Globe,
  Plane,
  MapPin,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  locale: "en" | "fr";
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const homeData = getPageData("home") as any;
  const heroData = homeData.sections.hero;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsVideoLoaded(true);
      const handleCanPlay = () => setIsVideoLoaded(true);
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      const handleError = () => {
        console.warn("Video failed to load, hiding loading state");
        setIsVideoLoaded(true);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("error", handleError);

      // Set a fallback timeout to hide loading after 3 seconds
      const timeout = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 3000);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("error", handleError);
        clearTimeout(timeout);
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const floatingIcons = [
    { icon: Globe, delay: 0, position: "top-16 left-4 sm:top-20 sm:left-20" },
    { icon: Plane, delay: 2, position: "top-24 right-4 sm:top-32 sm:right-24" },
    {
      icon: MapPin,
      delay: 4,
      position: "bottom-32 left-4 sm:bottom-32 sm:left-16",
    },
    { icon: Star, delay: 1, position: "top-32 left-1/2 sm:top-40" },
    {
      icon: Sparkles,
      delay: 3,
      position: "bottom-40 right-4 sm:bottom-40 sm:right-16",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      text: { en: "Expert Guidance", fr: "Conseils d'Experts" },
    },
    { icon: CheckCircle, text: { en: "Global Network", fr: "Réseau Mondial" } },
    { icon: CheckCircle, text: { en: "24/7 Support", fr: "Support 24/7" } },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadStart={() => setIsVideoLoaded(false)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Enhanced Video Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary/30"></div>

        {/* Video Controls */}
        <button
          onClick={togglePlay}
          className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-md rounded-full p-4 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
          <div className="text-white text-xl flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span>Loading Prestige Fly...</span>
          </div>
        </div>
      )}

      {/* Enhanced Floating Icons */}
      {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay, duration: 1.5, type: "spring" }}
          className={`absolute text-white/80 animate-float ${position}`}
        >
          <div className="relative">
            <Icon size={24} className="sm:w-8 sm:h-8 drop-shadow-lg" />
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse"></div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20"
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">
              {getLocalizedText(
                {
                  en: "Premium International Services",
                  fr: "Services Internationaux Premium",
                },
                locale
              )}
            </span>
          </motion.div>

          {/* Main Title */}
                      <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white px-4 fancy-font"
            >
              {getLocalizedText(heroData.content.headline, locale)}
            </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            {getLocalizedText(heroData.content.subheadline, locale)}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20"
              >
                <feature.icon size={14} className="sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">
                  {getLocalizedText(feature.text, locale)}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4"
          >
            {/* Primary Button */}
            <Link
              href={getLocalizedPath("/book-appointment", locale)}
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg shadow-2xl hover:shadow-accent/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <span>
                  {getLocalizedText(heroData.content.cta_buttons[0], locale)}
                </span>
                <ArrowRight
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>

            {/* Secondary Button */}
            <Link
              href={getLocalizedPath("/destinations", locale)}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl w-full sm:w-auto"
            >
              <div className="relative flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <span>
                  {getLocalizedText(heroData.content.cta_buttons[1], locale)}
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white/80">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs sm:text-sm mb-2 sm:mb-3 font-medium"
          >
            {getLocalizedText(
              { en: "Scroll to explore", fr: "Faites défiler pour explorer" },
              locale
            )}
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"
              />
            </div>
            <div className="absolute inset-0 w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full animate-ping"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
