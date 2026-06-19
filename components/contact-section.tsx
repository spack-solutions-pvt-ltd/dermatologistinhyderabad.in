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
      name: "Hyderabad — Kondapur Branch",
      address: (
        <>
          3rd Floor, M.R. Supreme, Opp Gem Motors,
          <br />
          Raghavendra Colony, Kondapur,
          <br />
          Hyderabad, Telangana 500084
        </>
      ),
      phone: "+91 95057 38393",
      phoneLink: "tel:+919505738393",
      email: "aakrithiskinclinic@gmail.com",
      emailLink: "mailto:aakrithiskinclinic@gmail.com",
      hours: "Mon–Sat, 10 AM – 9 PM",
      sunday: "By appointment",
      rating: null,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.447!2d78.395!3d17.450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912e0c6e3a6f%3A0x6b8a6f4c4d4d4d4d!2sKondapur%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000",
    },
    {
      id: 2,
      name: "Visakhapatnam — Maddilapalem Branch",
      address: (
        <>
          Andhra Bank Road, Pitapuram Colony,
          <br />
          Opp CMR Central, Maddilapalem,
          <br />
          Visakhapatnam, Andhra Pradesh 530017
        </>
      ),
      phone: "+91 70938 81288",
      phoneLink: "tel:+917093881288",
      email: "info@aakrithiskinandhairclinic.com",
      emailLink: "mailto:info@aakrithiskinandhairclinic.com",
      hours: "Mon–Sat, 10 AM – 9 PM",
      sunday: null,
      rating: "4.7★ (Justdial)",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.472!2d83.309!3d17.738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395c0c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sMaddilapalem%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000",
    },
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

  const locationCardVariants = {
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
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="playfair-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2"
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
            className="h-1 bg-[#154f85] rounded-full mx-auto mt-3 sm:mt-4"
          />
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={locationCardVariants}
              className="bg-[#F8F5F1] rounded-2xl overflow-hidden border border-[#e8e3de] hover:shadow-lg transition-all duration-300"
            >
              {/* Location Details */}
              <div className="p-6 md:p-8">
                <h4 className="sans-font text-xl font-bold text-[#111] mb-4">
                  {location.name}
                </h4>

                {/* Address */}
                <div className="flex gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#154f85] flex-shrink-0 mt-0.5" />
                  <p className="sans-font text-[#4a5a6a] text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex gap-3 mb-2">
                  <Phone className="w-5 h-5 text-[#154f85] flex-shrink-0" />
                  <a
                    href={location.phoneLink}
                    className="sans-font text-[#4a5a6a] text-sm hover:text-[#154f85] transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#154f85] flex-shrink-0" />
                  <a
                    href={location.emailLink}
                    className="sans-font text-[#4a5a6a] text-sm hover:text-[#154f85] transition-colors break-all"
                  >
                    {location.email}
                  </a>
                </div>

                {/* Meta Info */}
                <div className="sans-font flex flex-wrap gap-4 pt-4 border-t border-[#e8e3de] text-xs text-[#5a6879]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#154f85]" />
                    <b>Hours:</b> {location.hours}
                  </span>
                  {location.sunday && (
                    <span>
                      <b>Sunday:</b> {location.sunday}
                    </span>
                  )}
                  {location.rating && (
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {location.rating}
                    </span>
                  )}
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <iframe
                  src={location.mapEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title={`Map of ${location.name}`}
                ></iframe>
                {/* Map Overlay with Get Directions */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address.toString().replace(/<br\s*\/?>/g, ' '))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute
                    bottom-4
                    right-4
                    bg-white/95
                    backdrop-blur-sm
                    px-4
                    py-2
                    rounded-xl
                    text-xs
                    font-semibold
                    text-[#154f85]
                    shadow-lg
                    hover:bg-white
                    hover:scale-105
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-1.5
                    border
                    border-white/20
                  "
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.aakrithiskinandhairclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn-text
              inline-flex
              items-center
              gap-2
              bg-gradient-to-r
              from-[#154f85]
              to-[#5a98c7]
              text-white
              px-8
              py-4
              rounded-2xl
              hover:shadow-lg
              hover:shadow-[#154f85]/30
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <Phone size={18} />
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}