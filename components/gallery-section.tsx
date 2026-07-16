"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pigmentation_Treatment_before from "../asserts/Pigmentation_Treatment_before.png"
import Pigmentation_Treatment_after from "../asserts/Pigmentation_Treatment_after.png"
import Hair_Regrowth_GFC_PRP_after from "../asserts/Hair_Regrowth_GFC_PRP_after.png"
import Hair_Regrowth_GFC_PRP_before from "../asserts/Hair_Regrowth_GFC_PRP_before.png"
import Hair_Transplant_FUE_before from "../asserts/Hair_Transplant_FUE_before.png"
import Hair_Transplant_FUE_after from "../asserts/Hair_Transplant_FUE_after.png"
import Hair_Regrowth_GFC_PRP_Case_3_after from "../asserts/Hair_Regrowth_GFC_PRP_Case_3_after.png"
import Hair_Regrowth_GFC_PRP_Case_3_before from "../asserts/Hair_Regrowth_GFC_PRP_Case_3_before.png"
import Acne_Scar_Revision_CO2_MNRF_after from "../asserts/Acne_Scar_Revision_CO2_MNRF_after.png"
import Acne_Scar_Revision_CO2_MNRF_before from "../asserts/Acne_Scar_Revision_CO2_MNRF_before.png"
import Acne_Scar_Revision_Case_2_before from "../asserts/Acne_Scar_Revision_Case_2_before.png"
import Acne_Scar_Revision_Case_2_after from "../asserts/Acne_Scar_Revision_Case_2_after.png"
import Hair_Regrowth_PRP_before from "../asserts/Acne_Scar_Revision_Case_2_before.png"
import Hair_Regrowth_PRP_after from "../asserts/Acne_Scar_Revision_Case_2_after.png"

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const results = [
    {
      id: 1,
      title: "Hairline Restoration Treatment",
      subtitle: "(PRP + GFC)",
      beforeImage: Hair_Transplant_FUE_before,
      afterImage: Hair_Transplant_FUE_after,
      beforeColor: "from-[#d4c5b8] to-[#c4b5a8]",
      afterColor: "from-[#a8cce7] to-[#88b4d4]",
      hasImages: true,
    },
    {
      id: 2,
      title: "Acne Marks Treatment",
      subtitle: "(CO2 Fractional Laser + PDRN)",
      beforeImage: Acne_Scar_Revision_CO2_MNRF_before,
      afterImage: Acne_Scar_Revision_CO2_MNRF_after,
      beforeColor: "from-[#d4b8a8] to-[#c4a898]",
      afterColor: "from-[#88d4b4] to-[#68c4a4]",
      hasImages: true,
    },
    {
      id: 3,
      title: "Acne Scar Revision Treatment",
      subtitle: "(MNRF + Subcision + Exosomes)",
      beforeImage: Pigmentation_Treatment_before,
      afterImage: Pigmentation_Treatment_after,
      beforeColor: "from-[#d4c0a8] to-[#c4b098]",
      afterColor: "from-[#f0d4b8] to-[#e0c4a8]",
      hasImages: true,
    },
    {
      id: 4,
      title: "Hair Regrowth Treatment",
      subtitle: "(PRP + GFC)",
      beforeImage: Hair_Regrowth_GFC_PRP_before,
      afterImage: Hair_Regrowth_GFC_PRP_after,
      beforeColor: "from-[#c4b8a8] to-[#b4a898]",
      afterColor: "from-[#88c4d4] to-[#68b4c4]",
      hasImages: true,
    },
    {
      id: 5,
      title: "Acne Scar Treatment",
      subtitle: "(TCA CROSS + CO2 Fractional Laser)",
      beforeImage: Acne_Scar_Revision_Case_2_before,
      afterImage: Acne_Scar_Revision_Case_2_after,
      beforeColor: "from-[#d4c8b8] to-[#c4b8a8]",
      afterColor: "from-[#d4a8c4] to-[#c498b4]",
      hasImages: true,
    },
    {
      id: 6,
      title: "Crown Hair Restoration Treatment",
      subtitle: "(PRP + GFC)",
      beforeImage: Hair_Regrowth_GFC_PRP_Case_3_before,
      afterImage: Hair_Regrowth_GFC_PRP_Case_3_after,
      beforeColor: "from-[#c4b0a8] to-[#b4a098]",
      afterColor: "from-[#d4c4a8] to-[#c4b498]",
      hasImages: true,
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

  const beforeVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.3,
        delay: 0.15,
      },
    },
  };

  const afterVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        duration: 0.6,
        bounce: 0.3,
        delay: 0.2,
      },
    },
  };

  const vsVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        duration: 0.5,
        bounce: 0.4,
        delay: 0.3,
      },
    },
  };

  const captionVariants = {
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
        delay: 0.25,
      },
    },
  };

  // Split heading into words for word-by-word animation
  const headingText = "Real Results from Real Patients";
  const words = headingText.split(" ");

  return (
    <section id="before-after" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-[#FBF4EC]">

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
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-4 sm:mb-5 md:mb-6"
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

        {/* Disclaimer - Responsive */}
        <motion.p
          className="sans-font text-[#5a6879] text-center max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Every result shown is from a consenting patient at Veda. Outcomes
          vary based on skin type, condition severity and adherence to the
          treatment plan.
        </motion.p>

        {/* Grid View - Responsive */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {results.map((result) => (
            <motion.div
              key={result.id}
              variants={cardVariants}
              className="
                group
                bg-white
                rounded-xl sm:rounded-2xl
                overflow-hidden
                shadow-sm sm:shadow-md
                hover:sm:shadow-xl
                transition-all
                duration-300
                hover:sm:-translate-y-2
                border
                border-[#e8e3de]
                cursor-pointer
              "
              onMouseEnter={() => !isMobile && setHoveredId(result.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
            >
              {/* Image Container - Split View - Responsive height */}
              <div className="relative grid grid-cols-2 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                {/* Before - Left Half */}
                <motion.div
                  className={`
                    relative overflow-hidden
                    ${result.hasImages ? '' : `bg-linear-to-br ${result.beforeColor}`}
                  `}
                  variants={beforeVariants}
                >
                  {result.hasImages ? (
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Current Image - Conditionally apply blur based on device */}
                      <motion.div
                        className="w-full h-full"
                        animate={
                          !isMobile && hoveredId === result.id
                            ? {
                                x: "-120%",
                                scale: 1.3,
                                opacity: 0,
                                filter: "blur(8px)",
                              }
                            : {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                filter: isMobile ? "blur(0px)" : "blur(4px)",
                              }
                        }
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={result.beforeImage}
                          alt={`${result.title} - Before`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      
                      {/* Incoming image - Conditionally apply blur based on device */}
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={
                          !isMobile && hoveredId === result.id
                            ? {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)",
                              }
                            : {
                                x: "120%",
                                scale: 0.7,
                                opacity: 0,
                                filter: isMobile ? "blur(0px)" : "blur(8px)",
                              }
                        }
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={result.beforeImage}
                          alt={`${result.title} - After`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      
                      {/* BEFORE Label */}
                      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-white bg-red-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm">
                          BEFORE
                        </span>
                      </div> */}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-[#d4c5b8] to-[#c4b5a8]">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-1 sm:mb-2">😟</div>
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-white bg-red-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        BEFORE
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* After - Right Half */}
                <motion.div
                  className={`
                    relative overflow-hidden
                    ${result.hasImages ? '' : `bg-linear-to-br ${result.afterColor}`}
                  `}
                  variants={afterVariants}
                >
                  {result.hasImages ? (
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Current Image - Conditionally apply blur based on device */}
                      <motion.div
                        className="w-full h-full"
                        animate={
                          !isMobile && hoveredId === result.id
                            ? {
                                x: "120%",
                                scale: 1.3,
                                opacity: 0,
                                filter: "blur(8px)",
                              }
                            : {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                filter: isMobile ? "blur(0px)" : "blur(4px)",
                              }
                        }
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={result.afterImage}
                          alt={`${result.title} - After`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      
                      {/* Incoming image - Conditionally apply blur based on device */}
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={
                          !isMobile && hoveredId === result.id
                            ? {
                                x: "0%",
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)",
                              }
                            : {
                                x: "-120%",
                                scale: 0.7,
                                opacity: 0,
                                filter: isMobile ? "blur(0px)" : "blur(8px)",
                              }
                        }
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={result.afterImage}
                          alt={`${result.title} - Before`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      
                      {/* AFTER Label */}
                      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-white bg-green-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm">
                          AFTER
                        </span>
                      </div> */}
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-[#a8cce7] to-[#88b4d4]">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-1 sm:mb-2">😊</div>
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-white bg-green-500/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                        AFTER
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-0.75 bg-white z-10 shadow-lg"></div>

                {/* VS Badge - Responsive */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  variants={vsVariants}
                >
                  <div className="bg-[#E85222] text-white text-[8px] sm:text-[10px] md:text-xs font-bold px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 rounded-full shadow-lg border-2 border-white">
                    VS
                  </div>
                </motion.div>
              </div>

              {/* Caption - Responsive - Updated with two-line title */}
              <motion.div
                className="p-3 sm:p-4 text-center border-t border-[#e8e3de]"
                variants={captionVariants}
              >
                <div className="sans-font text-xs sm:text-sm md:text-base font-semibold text-[#111] group-hover:text-[#E85222] transition-colors duration-300 leading-tight">
                  {result.title}
                  <br />
                  <span className="font-medium text-[#5a6879] group-hover:text-[#E85222] transition-colors duration-300">
                    {result.subtitle}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}