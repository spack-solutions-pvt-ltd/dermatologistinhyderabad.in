"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin } from "lucide-react";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: "charan babu muppa",
      initials: "SJ",
      treatment: "Laser Hair Reduction",
      rating: 5,
      quote:
        "Vedha skincare hospital is Excellent.I had taken skin peel option of my face and body. Excellent improvement for boy and face. Everything is Excellent.",
    },
    {
      id: 2,
      name: "Diya Sai Class 10 B",
      initials: "VJ",
      rating: 5,
      quote:
        "Very good experience, doctor radha treats every patient with care and heals them,my acne got clear because of her,thanks to her😊",
    },
    {
      id: 3,
      name: "Naravoina Nikhila",
      initials: "KS",
      rating: 5,
      quote:
        "Dr radha madam garu treated good and staff is very polite i suggest to visit best doctor in kompally",
    },
  ];

  // Helper function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

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

  const starsVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.1,
      },
    },
  };

  const quoteVariants = {
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
        delay: 0.15,
      },
    },
  };

  const avatarVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.5,
        bounce: 0.4,
        delay: 0.25,
      },
    },
  };

  const metaVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        delay: 0.3,
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

  // Split heading into words for word-by-word animation
  const headingText = "What Our Patients Say";
  const words = headingText.split(" ");

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Word-by-word animation */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2"
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

        {/* Testimonials Grid - Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="
                group
                bg-[#faf9f8]
                rounded-xl sm:rounded-2xl
                p-4 sm:p-5 md:p-6 lg:p-8
                hover:sm:shadow-xl
                hover:sm:-translate-y-2
                transition-all
                duration-300
                border
                border-[#e8e3de]
                flex
                flex-col
              "
            >
              {/* Stars - Responsive */}
              <motion.div
                className="flex gap-0.5 mb-3 sm:mb-4"
                variants={starsVariants}
              >
                {renderStars(testimonial.rating)}
              </motion.div>

              {/* Quote - Responsive */}
              <motion.blockquote
                className="text-[#2d2d2d] text-xs sm:text-sm md:text-base leading-relaxed grow mb-4 sm:mb-5 md:mb-6"
                variants={quoteVariants}
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Meta - Patient Info */}
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-[#e8e3de]">
                {/* Avatar - Responsive */}
                <motion.div
                  className="
                    w-8 sm:w-9 md:w-10
                    h-8 sm:h-9 md:h-10
                    rounded-full
                    bg-[#E85222]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-xs sm:text-sm
                    shrink-0
                  "
                  variants={avatarVariants}
                >
                  {testimonial.initials}
                </motion.div>

                {/* Name and Treatment - Responsive */}
                <motion.div variants={metaVariants}>
                  <div className="font-bold text-[#111] text-xs sm:text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#5a6879]">
                    {testimonial.treatment}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews CTA with Gradient - Responsive */}
        <motion.div
          className="text-center mt-8 sm:mt-10 md:mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
            href="https://www.google.com/maps/place/Veda+Skin+and+Hair+Clinic+%7C+Kompally,+Hyderabad/@17.5244503,78.4806357,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb85f5dab0901d:0x1a45bbf2ea551af4!8m2!3d17.5244503!4d78.4832106!16s%2Fg%2F11px7yxf7_?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              inline-flex
              items-center
              gap-1.5 sm:gap-2
              px-4 sm:px-6 md:px-8
              py-2.5 sm:py-3 md:py-3.5
              rounded-xl sm:rounded-2xl
              font-semibold
              text-xs sm:text-sm md:text-base
              text-white
              overflow-hidden
              group
              shadow-lg shadow-[#E85222]/30
              hover:shadow-xl hover:shadow-[#E85222]/50
              transition-all
              duration-300
              hover:scale-105
            "
          >
            {/* Gradient Background with Right-to-Left Transition */}
            <span className="absolute inset-0 bg-linear-to-r from-[#E85222] to-[#FF7A1A] transition-all duration-500 ease-in-out group-hover:bg-linear-to-l group-hover:from-[#FF7A1A] group-hover:to-[#E85222]"></span>

            {/* Gradient Shimmer Effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

            <MapPin size={16} className="relative z-10 sm:w-4.5 sm:h-4.5" />
            <span className="relative z-10">Read all 982+ Google Reviews</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
