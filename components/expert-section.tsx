"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Award,
  Scissors,
  Sparkles,
  Clock,
  Star,
  Shield,
  Sparkles as SparklesIcon,
} from "lucide-react";
import image1resize2 from "../asserts/image1resize2.png";

export default function ExpertSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const credentials = [
    { icon: Award, text: "MD Dermatology" },
    { icon: Scissors, text: "Hair Transplant Surgeon" },
    { icon: Sparkles, text: "Cosmetic Dermatologist" },
    { icon: Clock, text: "10 Years of Experience" },
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
      x: 30,
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
    <section id="about" ref={sectionRef} className="py-20 bg-[#FBF4EC]">
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
          {/* LEFT - Image */}
          <motion.div className="relative" variants={imageVariants}>
            {/* Image Container */}
            <div
              className="
                relative
                w-full
                aspect-4/5
                max-w-125
                mx-auto
                rounded-[40px]
                overflow-hidden
                bg-[#f7d6be]
                shadow-lg
              "
            >
              {/* Doctor Image */}
              <Image
                src={image1resize2}
                alt="Dr. Swetha Ravi Penmetsa"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Overlay Gradient for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent"></div>

              {/* Doctor Name Overlay - Bottom */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-4 z-10">
                <p className="playfair-heading text-xl font-semibold text-white drop-shadow-lg">
                  Dr. Radha Penumatsa
                </p>
                <p className="sans-font text-sm text-white/90 mt-1 drop-shadow-lg">
                  MD Dermatologist
                </p>
                <div className="mt-3 w-16 h-0.5 bg-white/60 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Badge 3 - 15+ Years (Bottom Right) */}
            <motion.div
              className="
                absolute
                bottom-20
                -right-3
                bg-white/95
                backdrop-blur-sm
                px-4
                py-3
                rounded-2xl
                shadow-2xl
                border
                border-white/20
                z-20
                hidden
                sm:block
                min-w-27.5
              "
              variants={badgeVariants}
              custom={2}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FF7A1A]/10 flex items-center justify-center">
                  <SparklesIcon className="w-4.5 h-4.5 text-[#FF7A1A]" />
                </div>
                <div>
                  <div className="sans-font font-bold text-sm text-[#111] leading-tight">
                    10 Years
                  </div>
                  <div className="sans-font text-[10px] text-slate-500 font-medium">
                    of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div className="flex flex-col" variants={contentVariants}>
            {/* Eyebrow */}
            <motion.p
              className="
                sans-font
                uppercase
                tracking-[6px]
                text-xs
                font-semibold
                text-[#E85222]
                mb-4
              "
              variants={textVariants}
            >
              MEET THE EXPERT
            </motion.p>

            {/* Name */}
            <motion.h2
              className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#111] mb-3"
              variants={titleVariants}
            >
             Dr. Radha Penumatsa
            </motion.h2>

            {/* Role */}
            <motion.div
              className="
                sans-font
                text-lg
                text-[#E85222]
                font-medium
                mb-6
              "
              variants={textVariants}
            >
              MD Dermatologist
            </motion.div>

            {/* Credentials List */}
            <motion.ul className="space-y-3 mb-8" variants={listVariants}>
              {credentials.map((cred, index) => (
                <motion.li
                  key={index}
                  className="
                    sans-font
                    flex
                    items-center
                    gap-3
                    text-[#2d2d2d]
                    text-base
                  "
                  variants={listVariants}
                  custom={index}
                >
                  <span
                    className="
                      w-6
                      h-6
                      rounded-full
                      bg-[#E85222]/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <cred.icon className="w-3.5 h-3.5 text-[#E85222]" />
                  </span>
                  {cred.text}
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
                shadow-[#E85222]/30
                hover:shadow-xl
                hover:shadow-[#E85222]/50
              "
              variants={buttonVariants}
            >
              {/* Gradient Background with Right-to-Left Transition */}
              <span className="absolute inset-0 bg-linear-to-r from-[#E85222] to-[#FF7A1A] transition-all duration-500 ease-in-out group-hover:bg-linear-to-l group-hover:from-[#FF7A1A] group-hover:to-[#E85222]"></span>

              {/* Gradient Shimmer Effect */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

              <Calendar size={18} className="relative z-10" />
              <span className="relative z-10">Book Consultation</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}