"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const locations = [
    {
      id: 1,
      name: "Hyderabad — Kompally",
      address: (
        <>
          4rd Floor, Rayudu's Tower, Kaveri Enclave,
          <br />
           Satyam Enclave, Kompally
          <br />
          Secunderabad, Telangana 500067
        </>
      ),
      phone: "+91 79958 42127",
      phoneLink: "tel:+917995842127",
      email: "vedaskinandhairclinic@gmail.com",
      emailLink: "mailto:vedaskinandhairclinic@gmail.com",
      hours: "Mon–Sat, 10 AM – 2 PM and 6 PM - 9 PM",
      sunday: "By appointment",
      rating: null,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.447!2d78.395!3d17.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912e0c6e3a6f%3A0x6b8a6f4c4d4d4d4d!2sKompally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000",
    }
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

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        duration: 0.7,
        bounce: 0.3,
      },
    },
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.7,
        bounce: 0.3,
        delay: 0.2,
      },
    },
  };

  const headingText = "Visit Us or Book Online";
  const words = headingText.split(" ");

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
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
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
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

          <motion.div
            variants={underlineVariants}
            className="h-1 bg-[#E85222] rounded-full mx-auto mt-3 sm:mt-4"
          />
        </motion.div>

        {/* Side-by-side Layout: Content Left | Map Right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Content */}
          <motion.div
            variants={contentVariants}
            className="bg-[#F8F5F1] rounded-2xl p-6 md:p-8 lg:p-10 border border-[#e8e3de] flex flex-col"
          >
            <h4 className="sans-font text-2xl md:text-3xl font-bold text-[#111] mb-6">
              {locations[0].name}
            </h4>

            {/* Address */}
            <div className="flex gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#E85222] shrink-0 mt-0.5" />
              <p className="sans-font text-[#4a5a6a] text-sm md:text-base leading-relaxed">
                {locations[0].address}
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-3">
              <Phone className="w-5 h-5 text-[#E85222] shrink-0" />
              <a
                href={locations[0].phoneLink}
                className="sans-font text-[#4a5a6a] text-sm md:text-base hover:text-[#E85222] transition-colors"
              >
                {locations[0].phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-3 mb-6">
              <Mail className="w-5 h-5 text-[#E85222] shrink-0" />
              <a
                href={locations[0].emailLink}
                className="sans-font text-[#4a5a6a] text-sm md:text-base hover:text-[#E85222] transition-colors break-all"
              >
                {locations[0].email}
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#e8e3de] mb-6" />

            {/* Hours & Info */}
            <div className="sans-font space-y-2 text-sm md:text-base text-[#5a6879]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E85222]" />
                <span>
                  <b>Hours:</b> {locations[0].hours}
                </span>
              </div>
              {locations[0].sunday && (
                <div className="flex items-center gap-2">
                  <span className="w-4" /> {/* Spacer for alignment */}
                  <span>
                    <b>Sunday:</b> {locations[0].sunday}
                  </span>
                </div>
              )}
            </div>

            {/* CTA Button - Positioned at bottom */}
            <div className="mt-8 pt-6 border-t border-[#e8e3de]">
              <a
                // href="https://vedaskinandhair.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-text
                  inline-flex
                  items-center
                  gap-2
                  bg-linear-to-r
                  from-[#E85222]
                  to-[#FF7A1A]
                  text-white
                  px-6
                  py-3.5
                  rounded-2xl
                  hover:shadow-lg
                  hover:shadow-[#E85222]/30
                  hover:scale-105
                  transition-all
                  duration-300
                  w-full
                  sm:w-auto
                  justify-center
                "
              >
                <Phone size={18} />
                Book a Consultation
              </a>
            </div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            variants={mapVariants}
            className="bg-[#F8F5F1] rounded-2xl overflow-hidden border border-[#e8e3de] relative min-h-[400px] lg:min-h-[500px]"
          >
            <iframe
              src={locations[0].mapEmbed}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`Map of ${locations[0].name}`}
            ></iframe>

            {/* Map Overlay with Get Directions */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                locations[0].address.toString().replace(/<br\s*\/?>/g, " ")
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute
                bottom-4
                right-4
                bg-white/95
                backdrop-blur-sm
                px-4
                py-2.5
                rounded-xl
                text-sm
                font-semibold
                text-[#E85222]
                shadow-lg
                hover:bg-white
                hover:scale-105
                transition-all
                duration-300
                flex
                items-center
                gap-2
                border
                border-white/20
              "
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}