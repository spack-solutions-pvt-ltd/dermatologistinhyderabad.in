"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Calendar, Check, Shield, Sparkles, Clipboard, Clock, Award, Building } from "lucide-react";
import image10 from "../asserts/image10.png";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const features = [
    { icon: Clipboard, text: "Clinical, evidence-based protocols" },
    { icon: Sparkles, text: "Personalised treatment plans" },
    { icon: Shield, text: "FDA-approved, advanced technology" },
    { icon: Award, text: "Transparent consultation & pricing" },
    { icon: Clock, text: "10,000+ hours of clinical work" },
    { icon: Building, text: "Hygienic, modern, safe environment" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      rotate: -3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        duration: 0.9,
        bounce: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.3,
        delay: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
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
        duration: 0.6,
        ease: "easeOut" as const,
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
        delay: 0.1,
      },
    },
  };

  const listVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
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
        delay: 0.4,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
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

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* LEFT - Content */}
          <motion.div className="flex flex-col" variants={contentVariants}>
            {/* Eyebrow */}
            <motion.p
              className="
                sans-font
                uppercase
                tracking-[6px]
                text-xs
                font-semibold
                text-[#BC5841]
                mb-4
              "
              variants={textVariants}
            >
              ABOUT AAKRITHI
            </motion.p>

            {/* Heading */}
            <motion.h2
              className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#111] mb-3"
              variants={titleVariants}
            >
              The Pinnacle of Holistic Care, Where Beauty Finds Its Perfect Form
            </motion.h2>

            {/* Description */}
            <motion.div
              className="sans-font space-y-4 text-[#4a5a6a] text-base leading-relaxed mb-8"
              variants={textVariants}
            >
              <p>
                Derived from Sanskrit, <i>Aakrithi</i> means shape, form, and the
                embodiment of beauty. We treat skin and hair as a science — not a
                service. Every consultation begins with listening, every plan is
                personalised, and every outcome is monitored.
              </p>
              <p>
                From everyday concerns like acne and hair fall to advanced
                procedures like FUE hair transplant and laser resurfacing, our work
                is anchored in clinical evidence and powered by next-generation
                dermatology technology.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.ul className="sans-font space-y-2.5 mb-8" variants={listVariants}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    text-[#2d2d2d]
                    text-sm
                    md:text-base
                  "
                  variants={listVariants}
                  custom={index}
                >
                  <span
                    className="
                      w-5
                      h-5
                      rounded-full
                      bg-[#BC5841]/10
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      mt-0.5
                    "
                  >
                    <feature.icon className="w-3 h-3 text-[#BC5841]" />
                  </span>
                  {feature.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button with Gradient Effect */}
            <motion.a
              href="https://www.aakrithiskinandhairclinic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn-text
                relative
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                text-white
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105
                w-fit
                group
                shadow-lg
                shadow-[#BC5841]/30
                hover:shadow-xl
                hover:shadow-[#BC5841]/50
              "
              variants={buttonVariants}
            >
              {/* Gradient Background with Right-to-Left Transition */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#BC5841] to-[#D97A63] transition-all duration-500 ease-in-out group-hover:bg-gradient-to-l group-hover:from-[#D97A63] group-hover:to-[#BC5841]"></span>

              {/* Gradient Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

              <Calendar size={18} className="relative z-10" />
              <span className="relative z-10">Book Your Consultation</span>
            </motion.a>
          </motion.div>

          {/* RIGHT - Visual / Image */}
          <motion.div className="relative" variants={imageVariants}>
            <div
              className="
                relative
                w-full
                aspect-[4/5]
                max-w-[500px]
                mx-auto
                rounded-[40px]
                overflow-hidden
                bg-gradient-to-br
                from-[#d4c5b8]
                to-[#b8a898]
                shadow-lg
                flex
                items-center
                justify-center
              "
            >
              {/* Clinic Image */}
              <Image
                src={image10}
                alt="Aakrithi Clinic Interior - Modern, Hygienic Facility"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Overlay Gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-4 z-10">
                <p className="sans-font text-xl font-semibold text-white drop-shadow-lg">
                  Modern, Hygienic Clinic
                </p>
                <p className="sans-font text-sm text-white/90 mt-1 drop-shadow-lg">
                  State-of-the-art Facility
                </p>
                <div className="mt-3 w-16 h-[2px] bg-white/60 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Decorative Badge with Gradient Effect */}
            {/* <motion.div
              className="
                absolute
                -bottom-4
                -left-4
                bg-white
                px-5
                py-3
                rounded-2xl
                shadow-lg
                border
                border-[#e8e3de]
                hidden
                sm:block
                group/badge
                hover:shadow-xl
                transition-all
                duration-300
              "
              variants={badgeVariants}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#154f85]/10 flex items-center justify-center group-hover/badge:bg-[#154f85] transition-colors duration-300">
                  <Shield className="w-5 h-5 text-[#154f85] group-hover/badge:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="sans-font font-bold text-sm text-[#111]">100% Safe</div>
                  <div className="sans-font text-xs text-[#5a6879]">FDA Approved</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}