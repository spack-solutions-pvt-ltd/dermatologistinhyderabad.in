"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import image2 from "../asserts/image2.png";
import image3 from "../asserts/image3.png";
import image4 from "../asserts/image4.png";
import image5 from "../asserts/image5.png";
import image6 from "../asserts/image6.png";
import image7 from "../asserts/image7.png";

export default function PopularTreatments() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const treatments = [
    {
      name: "Hair Fall",
      title: "Hair Fall<br />Treatment",
      image: image2,
      emoji: "💇‍♂️",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
    {
      name: "Hair Transplant",
      title: "Hair<br />Transplant",
      image: image3,
      emoji: "🧑‍⚕️",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
    {
      name: "Pigmentation",
      title: "Pigmentation<br />Treatment",
      image: image4,
      emoji: "✨",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
    {
      name: "Acne",
      title: "Acne &amp; Acne Scar<br />Treatment",
      image: image5,
      emoji: "🧖‍♀️",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
    {
      name: "Laser Hair",
      title: "Laser Hair<br />Reduction",
      image: image6,
      emoji: "🔦",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
    {
      name: "Anti-Aging",
      title: "Anti-Aging<br />Treatments",
      image: image7,
      emoji: "🌟",
      gradient: "from-[#e2dbdb]/30 to-[#e2dbdb]/30",
      borderColor: "border-[#e2dbdb]/50 hover:border-[#e2dbdb]",
      hasImage: true,
    },
  ];

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
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.7,
        bounce: 0.3,
      },
    },
  };

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

  const underlineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "200px",
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.3,
        delay: 0.1,
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
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.5,
        bounce: 0.3,
        delay: 0.3,
      },
    },
  };

  const headingText = "Our Most Popular Treatments";
  const words = headingText.split(" ");

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#f0f4f8] via-white to-[#e8edf5] overflow-hidden">
      {/* Font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        .sans-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .playfair-heading {
          font-family: 'Playfair Display', serif;
        }

        .btn-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#154f85]/3 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5a98c7]/3 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#a8cce7]/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #154f85 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2"
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

          <motion.div
            variants={underlineVariants}
            className="h-1 bg-gradient-to-r from-[#154f85] via-[#5a98c7] to-[#154f85] rounded-full mx-auto mt-3"
            style={{ width: "200px" }}
          />

          <motion.p
            variants={subtitleVariants}
            className="sans-font text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Discover our most sought-after treatments trusted by thousands
          </motion.p>
        </motion.div>

        {/* Grid - Single row with 6 columns */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                group
                bg-white/80
                backdrop-blur-sm
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                shadow-sm sm:shadow-md
                hover:sm:shadow-2xl
                transition-all
                duration-300 sm:duration-500
                hover:sm:-translate-y-4
                hover:sm:scale-[1.02]
                ${treatment.borderColor}
                hover:sm:shadow-[#154f85]/10
                relative
                flex-shrink-0
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#154f85]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#154f85] via-[#5a98c7] to-[#154f85] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-2 sm:p-3 pb-0">
                <motion.div 
                  className="h-36 sm:h-40 md:h-44 relative overflow-hidden rounded-2xl sm:rounded-[28px] md:rounded-[32px] bg-[#eef3f8] shadow-inner"
                  variants={imageVariants}
                >
                  {treatment.hasImage ? (
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${treatment.gradient} flex items-center justify-center`}>
                      <div className="text-5xl sm:text-6xl md:text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        {treatment.emoji}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </motion.div>
              </div>

              <motion.div 
                className="p-4 sm:p-5 md:p-6 pt-3 sm:pt-4 relative z-10"
                variants={textVariants}
              >
                <h5
                  className="sans-font
                    text-base sm:text-lg md:text-xl
                    font-bold
                    text-[#111]
                    mb-3 sm:mb-4
                    leading-tight
                    min-h-[44px] sm:min-h-[50px] md:min-h-[56px]
                    group-hover:sm:text-[#154f85]
                    transition-colors
                    duration-300
                  "
                  dangerouslySetInnerHTML={{ __html: treatment.title }}
                />

                <motion.a
                  href="https://www.aakrithiskinandhairclinic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  className="btn-text
                    relative
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    gap-1.5 sm:gap-2
                    px-4 sm:px-5 md:px-6
                    py-2 sm:py-2.5 md:py-2.5
                    rounded-lg sm:rounded-xl
                    text-xs sm:text-sm
                    text-white
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:scale-[1.02] sm:hover:scale-105
                    group-hover:sm:shadow-lg
                    group-hover:sm:shadow-[#154f85]/30
                  "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#154f85] to-[#5a98c7] transition-all duration-500 ease-in-out group-hover:bg-gradient-to-l group-hover:from-[#5a98c7] group-hover:to-[#154f85]"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out hidden sm:block"></span>
                  <Calendar size={14} className="relative z-10 sm:w-[16px] sm:h-[16px]" />
                  <span className="relative z-10">Book Now</span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 