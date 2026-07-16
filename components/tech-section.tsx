"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Plus,
  Circle,
  ArrowLeftRight,
  Eye,
  X,
  Crosshair,
  Scan,
  Wind,
  Activity,
} from "lucide-react";

export default function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const technologies = [
    {
      icon: Plus,
      name: "CO₂ Laser",
      description: "Resurfacing, scar revision",
    },
    {
      icon: Circle,
      name: "Q-Switched Laser",
      description: "Pigment & tattoo removal",
    },
    {
      icon: ArrowLeftRight,
      name: "Diode Laser",
      description: "Laser hair reduction",
    },
    {
      icon: Eye,
      name: "HIFU",
      description: "Non-surgical skin lift",
    },
    {
      icon: X,
      name: "Microneedling RF",
      description: "Scars, pores, tightening",
    },
    {
      icon: Crosshair,
      name: "HydraFacial",
      description: "Cleanse, hydrate, glow",
    },
    {
      icon: Scan,
      name: "Cryolipolysis",
      description: "Fat freezing / inch loss",
    },
    {
      icon: Activity,
      name: "EMS Sculpting",
      description: "Muscle toning & contouring",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
        delay: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
        delay: 0.15,
      },
    },
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 15,
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

  const descVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: 0.3,
      },
    },
  };

  // Split heading into words for word-by-word animation
  const headingText = "Advanced Technology. Smarter Treatments.";
  const words = headingText.split(" ");

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      {/* Font style for sans font */}
      <style>{`
        .sans-font {
          font-family: var(--sans);
        }
         .playfair-heading {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-6"
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
            className="h-1 bg-[#E85222] rounded-full mx-auto mt-3 sm:mt-4"
          />
        </motion.div>

        {/* Lead Paragraph */}
        <motion.p
          className="sans-font text-[#4a5a6a] text-center max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-12"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Hand-picked by our experts, we use a range of next-generation
          dermatology devices that enable us to diagnose with precision, treat
          with accuracy, and deliver long-lasting results — safely and
          comfortably.
        </motion.p>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                group
                bg-[#f6f3ee]
                rounded-2xl
                p-6
                text-center
                hover:bg-[#E85222]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                border
                border-[#e8e3de]
                hover:border-[#E85222]
               
              "
            >
              {/* Icon */}
              <motion.div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  group-hover:bg-white/20
                  transition-colors
                  duration-300
                  mb-4
                  shadow-sm
                  group-hover:shadow-none
                "
                variants={iconVariants}
              >
                <tech.icon
                  className="
                    w-6
                    h-6
                    text-[#E85222]
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                  strokeWidth={2}
                />
              </motion.div>

              {/* Name */}
              <motion.h5
                className="
                  sans-font
                  text-lg
                  font-bold
                  text-[#111]
                  group-hover:text-white
                  transition-colors
                  duration-300
                  mb-2
                "
                variants={nameVariants}
              >
                {tech.name}
              </motion.h5>

              {/* Description */}
              <motion.p
                className="
                  sans-font
                  text-sm
                  text-[#5a6879]
                  group-hover:text-white/80
                  transition-colors
                  duration-300
                "
                variants={descVariants}
              >
                {tech.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}