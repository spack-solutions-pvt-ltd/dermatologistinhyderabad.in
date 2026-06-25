"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Circle,
  Heart,
  Droplet,
  Scissors,
  Clock,
  Sparkles,
  Plus,
  X,
  Eye,
  Check,
  Sun,
  Activity,
  Zap,
} from "lucide-react";

export default function AllTreatments() {
  const [activeTab, setActiveTab] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const categories = ["All", "Skin", "Hair", "Anti-Aging", "Body", "Laser"];

  const treatments = [
    {
      id: 1,
      icon: Circle,
      name: "Acne & Acne Scar Treatment",
      description:
        "Targeted protocols for active acne and post-acne marks, scars and PIH.",
      category: "Skin",
    },
    {
      id: 2,
      icon: Droplet,
      name: "Hyperpigmentation",
      description:
        "Melasma, sun spots, post-inflammatory pigmentation and uneven tone.",
      category: "Skin",
    },
    {
      id: 3,
      icon: Heart,
      name: "Hair Fall & Regrowth",
      description:
        "GFC, PRP, mesotherapy, and clinical hair loss management for men & women.",
      category: "Hair",
    },
    {
      id: 4,
      icon: Scissors,
      name: "FUE Hair Transplant",
      description:
        "Safe, natural-looking hairline restoration via Follicular Unit Extraction.",
      category: "Hair",
    },
    {
      id: 5,
      icon: Clock,
      name: "Anti-Aging & Wrinkles",
      description:
        "Botox, dermal fillers, HIFU skin tightening and regenerative anti-aging.",
      category: "Anti-Aging",
    },
    {
      id: 6,
      icon: Zap,
      name: "Laser Hair Reduction",
      description:
        "US-FDA cleared diode laser for face, body and sensitive areas.",
      category: "Laser",
    },
    {
      id: 7,
      icon: Plus,
      name: "Skin Tag, DPN, Mole Removal",
      description:
        "Same-day removal of skin tags, DPNs, moles and benign lesions.",
      category: "Skin",
    },
    {
      id: 8,
      icon: X,
      name: "Tattoo Removal",
      description:
        "Suitability depends on tattoo colour, depth and skin type.",
      category: "Laser",
    },
    {
      id: 9,
      icon: Sparkles,
      name: "HydraFacial & Glow",
      description:
        "Medical-grade facials for instant cleanse, hydration and radiance.",
      category: "Skin",
    },
    {
      id: 10,
      icon: Eye,
      name: "Vitiligo & Pigment Disorders",
      description:
        "Medical and surgical management for vitiligo, leucoderma and more.",
      category: "Skin",
    },
    {
      id: 11,
      icon: Activity,
      name: "Inch Loss / Body Contouring",
      description:
        "Cryolipolysis and EMS body sculpting for stubborn fat zones.",
      category: "Body",
    },
    {
      id: 12,
      icon: Sun,
      name: "Skin Rejuvenation",
      description:
        "Microneedling RF, peels, and vampire facials for smoother skin.",
      category: "Skin",
    },
  ];

  const filteredTreatments =
    activeTab === "All"
      ? treatments
      : treatments.filter((t) => t.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.3,
      },
    },
  };

  // Enhanced title variants with multiple animations
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Subtitle variants for additional text animation
  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.2,
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  // Animated underline variants
  const underlineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "80px",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.4,
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
      },
    },
  };

  // Letter by letter animation for heading
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: i * 0.05,
        type: "spring" as const,
        stiffness: 150,
        damping: 10,
      },
    }),
  };

  // Split heading into words for word-by-word animation
  const headingText = "Comprehensive Skin & Hair Treatments";
  const words = headingText.split(" ");

  return (
    <section 
      id="treatments" 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#FAF5EE]"
    >
      {/* Font style for sans font */}
      <style>{`
        .sans-font {
          font-family: var(--sans);
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Word-by-word animation */}
          <motion.h2
            className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2 mb-3"
            variants={titleVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                custom={index}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            variants={underlineVariants}
            className="h-1 bg-[#BC5841] rounded-full mx-auto mt-3 sm:mt-4"
          />

          {/* Optional subtitle with animation */}
          <motion.p
            variants={subtitleVariants}
            className="sans-font text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Advanced dermatological solutions tailored to your needs
          </motion.p>
        </motion.div>

        {/* Category Tabs - Scrollable on mobile */}
        <motion.div
          className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-2 md:gap-3 mb-8 sm:mb-10 md:mb-12 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                sans-font
                px-3.5 sm:px-4 md:px-5 lg:px-7
                py-1.5 sm:py-2 md:py-2.5 lg:py-3
                rounded-full
                font-semibold
                text-xs sm:text-sm md:text-base
                whitespace-nowrap
                transition-all
                duration-300
                flex-shrink-0
                ${
                  activeTab === category
                    ? "bg-[#BC5841] text-white shadow-lg shadow-[#BC5841]/20"
                    : "bg-white text-[#D97A63] hover:bg-[#eef3f8] border border-[#e8e3de]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Treatments Grid - Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={activeTab}
        >
          {filteredTreatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={cardVariants}
              className="
                group
                bg-white
                rounded-xl sm:rounded-2xl
                p-4 sm:p-5 md:p-6
                hover:sm:shadow-xl
                hover:sm:-translate-y-1
                transition-all
                duration-300
                border
                border-[#e8e3de]
                flex
                flex-col
                relative
                overflow-hidden
              "
            >
              {/* Bottom to Top Gradient Overlay - On Hover */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-0
                  bg-gradient-to-t
                  from-[#BC5841]
                  via-[#D97A63]
                  to-transparent
                  group-hover:h-full
                  transition-all
                  duration-500
                  ease-out
                  opacity-90
                "
              ></div>

              {/* Secondary gradient layer for depth */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-0
                  bg-gradient-to-t
                  from-[#BC5841]
                  via-[#D97A63]/50
                  to-transparent
                  group-hover:h-2/3
                  transition-all
                  duration-500
                  delay-100
                  ease-out
                  opacity-60
                "
              ></div>

              {/* Icon - With Flip Animation on Hover */}
              <div className="relative z-10">
                <div className="[perspective:500px] w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12">
                  <div
                    className="
                      relative
                      w-full
                      h-full
                      transition-transform
                      duration-700
                      [transform-style:preserve-3d]
                      group-hover:[transform:rotateY(180deg)]
                    "
                  >
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <div
                        className="
                          w-full
                          h-full
                          rounded-full
                          bg-[#eef3f8]
                          flex
                          items-center
                          justify-center
                          group-hover:bg-white
                          transition-colors
                          duration-300
                          shadow-md
                          group-hover:shadow-lg
                          group-hover:shadow-[#BC5841]/30
                        "
                      >
                        <treatment.icon
                          className="
                            w-4 sm:w-4.5 md:w-5
                            h-4 sm:h-4.5 md:h-5
                            text-[#BC5841]
                            transition-colors
                            duration-300
                          "
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div
                        className="
                          w-full
                          h-full
                          rounded-full
                          bg-[#BC5841]
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          shadow-[#BC5841]/30
                        "
                      >
                        <treatment.icon
                          className="
                            w-4 sm:w-4.5 md:w-5
                            h-4 sm:h-4.5 md:h-5
                            text-white
                          "
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name - Responsive text */}
              <h5
                className="
                  sans-font
                  text-sm sm:text-base md:text-lg
                  font-bold
                  text-[#111]
                  mb-1.5 sm:mb-2
                  leading-tight
                  min-h-[40px] sm:min-h-[46px] md:min-h-[52px]
                  relative
                  z-10
                  group-hover:text-white
                  transition-colors
                  duration-300
                  delay-100
                "
              >
                {treatment.name}
              </h5>

              {/* Description - Responsive text */}
              <p
                className="
                  sans-font
                  text-xs sm:text-sm
                  text-[#5a6879]
                  leading-relaxed
                  flex-grow
                  relative
                  z-10
                  group-hover:text-white/90
                  transition-colors
                  duration-300
                  delay-150
                "
              >
                {treatment.description}
              </p>

              {/* Category Badge */}
              <div
                className="
                  mt-3 sm:mt-4
                  pt-3 sm:pt-4
                  border-t
                  border-[#e8e3de]
                  relative
                  z-10
                  group-hover:border-white/20
                  transition-colors
                  duration-300
                  delay-200
                "
              >
                <span
                  className="
                    sans-font
                    text-[10px] sm:text-xs
                    font-medium
                    text-[#BC5841]
                    bg-[#eef3f8]
                    px-2.5 sm:px-3
                    py-0.5 sm:py-1
                    rounded-full
                    group-hover:bg-white/20
                    group-hover:text-white
                    transition-colors
                    duration-300
                    delay-200
                  "
                >
                  {treatment.category}
                </span>
              </div>

              {/* Decorative line that appears on hover */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-0
                  h-0.5
                  bg-white/50
                  group-hover:w-12
                  transition-all
                  duration-500
                  delay-300
                  rounded-full
                  z-10
                "
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-8 sm:py-10 md:py-12">
            <p className="sans-font text-sm sm:text-base text-[#5a6879]">No treatments found in this category.</p>
          </div>
        )}
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}