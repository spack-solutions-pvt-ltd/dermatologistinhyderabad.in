"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import img1 from "../asserts/img1.webp";
import img2 from "../asserts/img2.webp";
import img3 from "../asserts/img3.webp";
import img4 from "../asserts/img4.webp";
import img5 from "../asserts/img5.webp";

export default function ClinicGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const galleryItems = [
    {
      id: 1,
      title: "Kondapur, Hyderabad",
      subtitle: "Flagship clinic — Raghavendra Colony",
      image: img1,
      span: "md:col-span-2",
      link: "#book",
    },
    {
      id: 2,
      title: "Visakhapatnam",
      subtitle: "Maddilapalem branch",
      image: img2,
      span: "",
      link: "#book",
    },
    {
      id: 3,
      title: "Waiting Area",
      subtitle: "Calm, private, comfortable",
      image: img3,
      span: "",
      link: null,
    },
    {
      id: 4,
      title: "Operation Theatre",
      subtitle: "Sterile, hospital-grade",
      image: img4,
      span: "",
      link: null,
    },
    {
      id: 5,
      title: "Procedure Room",
      subtitle: "Equipped for advanced care",
      image: img5,
      span: "",
      link: null,
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
      y: 40,
      scale: 0.95,
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
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

  const captionVariants = {
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

  // Split heading into words for word-by-word animation
  const headingText = "Inside Veda";
  const words = headingText.split(" ");

  return (
    <section id="inside" ref={sectionRef} className="py-20 bg-white">
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
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Word-by-word animation */}
          <motion.h2
            className="playfair-heading text-3xl sm:text-4xl md:text-5xl font-medium text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2"
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
          Two locations. The same standard of care. Step inside our Kondapur and
          Visakhapatnam clinics — sterile treatment rooms, comfortable
          consultation spaces, and medical-grade dermatology technology, all
          under one roof.
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryItems.map((item) => {
            const Wrapper = item.link ? "a" : "div";
            const wrapperProps = item.link
              ? {
                  href: item.link,
                  "aria-label": `Book at ${item.title} clinic`,
                }
              : {};

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  ${item.span}
                  ${item.link ? "cursor-pointer" : "cursor-default"}
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                `}
              >
                <Wrapper {...wrapperProps} className="block h-full">
                  {/* Image */}
                  <motion.div
                    className="relative w-full aspect-4/3 md:aspect-auto md:h-70 overflow-hidden"
                    variants={imageVariants}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Caption */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                      variants={captionVariants}
                    >
                      <div className="flex flex-col">
                        <span className="sans-font text-lg md:text-xl font-bold text-white drop-shadow-lg">
                          {item.title}
                        </span>
                        <span className="sans-font text-sm text-white/80 drop-shadow-lg">
                          {item.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button with Gradient Effect */}
        <motion.div
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a
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
              group
              shadow-lg
              shadow-[#E85222]/30
              hover:shadow-xl
              hover:shadow-[#E85222]/50
            "
          >
            {/* Gradient Background with Right-to-Left Transition */}
            <span className="absolute inset-0 bg-linear-to-r from-[#E85222] to-[#FF7A1A] transition-all duration-500 ease-in-out group-hover:bg-linear-to-l group-hover:from-[#FF7A1A] group-hover:to-[#E85222]"></span>

            {/* Gradient Shimmer Effect */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

            <Calendar size={18} className="relative z-10" />
            <span className="relative z-10">Book a Visit</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
