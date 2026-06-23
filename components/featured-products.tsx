"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Users,
  UserCircle,
  Microscope,
  MessageCircle,
  Shield,
} from "lucide-react";

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const reasons = [
    {
      icon: Search,
      title: "Evidence-Based<br />Treatments",
      description: "Advanced dermatology backed by science.",
    },
    {
      icon: Users,
      title: "Experienced<br />Dermatologist",
      description: "15+ years of experience in skin & hair care.",
    },
    {
      icon: UserCircle,
      title: "Personalized<br />Care",
      description: "Customized treatment plans for every patient.",
    },
    {
      icon: Microscope,
      title: "Advanced<br />Technology",
      description: "State-of-the-art lasers and equipment.",
    },
    {
      icon: MessageCircle,
      title: "Transparent<br />Consultation",
      description: "Clear explanation before every treatment.",
    },
    {
      icon: Shield,
      title: "Long-Term<br />Results",
      description: "Safe, sustainable outcomes with realistic timelines.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.8,
        bounce: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.4,
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.3,
      },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.4,
      },
    },
  };

  const lineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-[#fff] overflow-hidden"
    >
      {/* Font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .sans-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .btn-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 700;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        {/* Title Row with Lines - Animated on desktop only */}
        <motion.div
          className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <motion.div
            className="flex-1 h-[2px] bg-[#154f85]/20 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h2
            className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1a1a1a] text-center"
            variants={titleVariants}
          >
            Why Patients Choose Aakrithi
          </motion.h2>
          <motion.div
            className="flex-1 h-[2px] bg-[#154f85]/20 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Grid - Single row with 6 columns on desktop, responsive on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                group
                bg-white
                rounded-[20px] sm:rounded-[24px] md:rounded-[28px]
                p-4 sm:p-5 md:p-6 lg:p-8
                text-center
                relative
                overflow-hidden
                cursor-pointer
                transition-none md:transition-all
                duration-500
                hover:md:-translate-y-2
                hover:md:shadow-xl
              "
            >
              {/* Bottom to Up Gradient Overlay - Thicker color at bottom */}
              <motion.div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-0
                  bg-gradient-to-t
                  from-[#0d2b4a]
                  via-[#154f85]
                  via-[#3a7db5]
                  to-transparent
                  md:group-hover:h-full
                  transition-none md:transition-all
                  duration-700
                  ease-out
                  opacity-95
                "
              ></motion.div>

              {/* Secondary thicker gradient layer for depth at bottom */}
              <motion.div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-0
                  bg-gradient-to-t
                  from-[#0a1f35]
                  via-[#154f85]/80
                  to-transparent
                  md:group-hover:h-2/3
                  transition-none md:transition-all
                  duration-700
                  delay-100
                  ease-out
                  opacity-60
                "
              ></motion.div>

              {/* Content - relative to stay above gradient */}
              <div className="relative z-10">
                {/* Icon Circle - Flip on desktop only */}
                <motion.div
                  className="[perspective:500px] w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mx-auto"
                  variants={iconVariants}
                >
                  <div
                    className="
                      relative
                      w-12 sm:w-14 md:w-16
                      h-12 sm:h-14 md:h-16
                      transition-none md:transition-transform
                      duration-700
                      [transform-style:preserve-3d]
                      md:group-hover:[transform:rotateY(180deg)]
                      mx-auto
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
                          md:group-hover:bg-white
                          transition-none md:transition-colors
                          duration-500
                          delay-100
                          shadow-md
                          md:group-hover:shadow-lg
                          md:group-hover:shadow-[#154f85]/30
                        "
                      >
                        <item.icon
                          className="
                            w-4 sm:w-5 md:w-6
                            h-4 sm:h-5 md:h-6
                            text-[#154f85]
                            transition-none md:transition-colors
                            duration-500
                            delay-100
                          "
                          strokeWidth={1.8}
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
                          bg-[#154f85]
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          shadow-[#154f85]/30
                        "
                      >
                        <item.icon
                          className="
                            w-4 sm:w-5 md:w-6
                            h-4 sm:h-5 md:h-6
                            text-white
                          "
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="
                    sans-font
                    text-xs sm:text-sm md:text-base lg:text-lg
                    font-bold
                    text-[#111]
                    mt-3 sm:mt-4 md:mt-5
                    mb-1.5 sm:mb-2 md:mb-2.5
                    leading-tight
                    md:group-hover:text-white
                    transition-none md:transition-colors
                    duration-500
                    delay-150
                  "
                  variants={textVariants}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                {/* Description */}
                <motion.p
                  className="
                    sans-font
                    text-[#5a6879]
                    text-[10px] sm:text-xs
                    leading-relaxed
                    md:group-hover:text-white/90
                    transition-none md:transition-colors
                    duration-500
                    delay-200
                  "
                  variants={descriptionVariants}
                >
                  {item.description}
                </motion.p>

                {/* Decorative line that appears on hover - Desktop only */}
                <motion.div
                  className="
                    w-0
                    h-0.5
                    bg-white/50
                    mx-auto
                    mt-2 sm:mt-2.5 md:mt-3
                    md:group-hover:w-10
                    transition-none md:transition-all
                    duration-500
                    delay-300
                    rounded-full
                  "
                  variants={lineVariants}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
