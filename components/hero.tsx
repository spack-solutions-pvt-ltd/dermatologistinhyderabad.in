"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import image1 from "../asserts/image1.png";
import {
  Calendar,
  MessageCircle,
  MapPin,
  Users,
  Award,
  Settings,
  Star,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "20k+",
      label: "Happy Patients",
    },
    {
      icon: Settings,
      value: "Advanced",
      label: "Technology",
    },
    {
      icon: MapPin,
      value: "2",
      label: "Locations",
    },
  ];

  // WhatsApp number (without + sign for the link)
  const whatsappNumber = "919505738393";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Split the text into characters
  const text = "Skin & Hair";
  const characters = text.split("");

  return (
    <>
      {/* Font style for Playfair Display */}
      <style>{`
        @font-face {
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');
          unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        
        .playfair-heading {
          font-family: 'Playfair Display', serif;
        }

        .sans-font {
          font-family: var(--sans);
        }
      `}</style>

      <section className="flex items-center bg-[#FBECE3] overflow-hidden py-4 md:py-6">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-10 pt-20 sm:pt-25">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* LEFT - Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1 text-center sm:text-left">
              <p className="sans-font uppercase whitespace-nowrap tracking-[0.9px] md:tracking-[4px] text-[8px] sm:text-[10px] md:text-xs font-semibold text-slate-700 mb-2 md:mb-4 mx-auto sm:mx-0">
                Expert Care. Advanced Technology. Natural Results.
              </p>

              <h1
                className="playfair-heading font-serif
font-semibold
text-[clamp(38px,5vw,62px)]
leading-[1.04]
tracking-[-0.015em]
text-[#1A1A1A]
mb-[22px] text-[24px] sm:text-[28px] md:text-[52px] lg:text-[64px] leading-[1.1] sm:leading-[1.05] md:leading-[0.95] font-medium text-[#111] tracking-tight mx-auto sm:mx-0"
              >
                Expert{" "}
                <span
                  className="text-[#5a98c7] inline-block"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {characters.map((char, index) => {
                    const isSpace = char === " ";
                    const isAmpersand = char === "&";
                    const displayChar = isAmpersand ? "&" : char;

                    return (
                      <span
                        key={index}
                        className="inline-block transition-none md:transition-all duration-300 ease-in-out"
                        style={
                          {
                            display: isSpace ? "inline" : "inline-block",
                            transform: isHovered
                              ? `translateY(-${Math.random() * 15 + 5}px) rotate(${
                                  (Math.random() - 0.5) * 20
                                }deg) scale(${1 + Math.random() * 0.15})`
                              : "translateY(0px) rotate(0deg) scale(1)",
                            transitionDelay: `${index * 30}ms`,
                            color: isHovered ? "#154f85" : "#5a98c7",
                            marginRight: isSpace ? "0.15em" : "0",
                          } as CSSProperties
                        }
                      >
                        {displayChar}
                      </span>
                    );
                  })}
                </span>
                <br />
                <span className="inline-block mt-0.5 sm:mt-1 md:mt-2">
                  Solutions Backed by
                </span>
                <br />
                <span className="inline-block">Science</span>
              </h1>

              <div className="sans-font mt-1 sm:mt-2 md:mt-5 space-y-0.5 md:space-y-1 text-[11px] sm:text-[13px] md:text-[17px] text-slate-600 mx-auto sm:mx-0">
                <p>Acne • Pigmentation • Hair Fall • Hair Transplants</p>
                <p>Anti-Aging • Laser Treatments & more</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 mt-3 sm:mt-4 md:mt-6 mx-auto sm:mx-0 w-full">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="sans-font group bg-[#fff] rounded-[12px] sm:rounded-[14px] md:rounded-[20px] py-1.5 sm:py-2 md:py-3 px-1.5 sm:px-2 md:px-3.5 hover:md:-translate-y-2 hover:md:shadow-xl transition-none md:transition-all duration-300 flex flex-col items-center text-center"
                    style={
                      {
                        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      } as CSSProperties
                    }
                  >
                    {/* Icon with Flip Animation - Desktop only */}
                    <div className="[perspective:500px]">
                      <div className="relative w-5 sm:w-7 md:w-10 h-5 sm:h-7 md:h-10 transition-none md:transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 [backface-visibility:hidden]">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-md">
                            <item.icon className="w-2.5 sm:w-3 md:w-4 h-2.5 sm:h-3 md:h-4 text-[#1f4f82]" />
                          </div>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <div className="w-full h-full bg-[#1f4f82] rounded-full flex items-center justify-center shadow-md">
                            <item.icon className="w-2.5 sm:w-3 md:w-4 h-2.5 sm:h-3 md:h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="sans-font font-bold text-[11px] sm:text-sm md:text-lg mt-1 sm:mt-1.5 md:mt-2 text-slate-900">
                      {item.value}
                    </h3>

                    <p className="sans-font text-[7px] sm:text-[9px] md:text-xs text-slate-700 leading-tight">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="sans-font flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-3 mt-3 sm:mt-4 md:mt-6 mx-auto sm:mx-0 w-full sm:w-auto">
                {/* Book Appointment Button */}
                <a
                  href="https://www.aakrithiskinandhairclinic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text bg-gradient-to-r from-[#154f85] to-[#5a98c7] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 hover:shadow-lg hover:shadow-[#154f85]/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Calendar size={14} className="sm:w-4 sm:h-4" />
                  Book Appointment
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#154f85] text-[#154f85] px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm md:text-base transition-none md:transition-all duration-300 hover:md:bg-[#154f85] hover:md:text-white hover:md:shadow-lg hover:md:shadow-[#154f85]/30 hover:md:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle
                    size={14}
                    className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]"
                  />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* RIGHT - Image Section */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div
                className="relative w-[200px] sm:w-[260px] md:w-[380px] lg:w-[440px] h-[220px] sm:h-[280px] md:h-[440px] lg:h-[600px] rounded-[20px] sm:rounded-[28px] md:rounded-[40px] bg-gradient-to-br from-[#f2cdbd] to-[#e8b8a5] overflow-visible shadow-2xl mx-auto"
                style={
                  {
                    animation: "float-slow 4s ease-in-out infinite",
                  } as CSSProperties
                }
              >
                {/* Doctor Image */}
                <div className="absolute inset-0 rounded-[20px] sm:rounded-[28px] md:rounded-[40px] overflow-hidden">
                  <Image
                    src={image1}
                    alt="Dr. Swetha Ravi Penmetsa"
                    fill
                    priority
                    className="object-cover object-center"
                  />

                  {/* Overlay Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                  {/* Doctor Name Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 text-center px-3 sm:px-4 z-10">
                    <div className="sans-font text-[10px] sm:text-sm md:text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                      Dr. Swetha Ravi Penmetsa
                    </div>
                    <div className="sans-font text-[8px] sm:text-[10px] md:text-xs text-white/90 mt-0.5 drop-shadow-lg">
                      MD Dermatologist
                    </div>
                    <div className="mt-1 sm:mt-1.5 md:mt-2 w-8 sm:w-10 md:w-14 h-0.5 sm:h-0.5 md:h-1 bg-white/60 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Rating Badge - moved further right */}
                <div
                  className="absolute top-2 sm:top-3 md:top-6 lg:top-8 right-[-12px] sm:right-[-24px] md:right-[-48px] lg:right-[-60px] bg-white/95 backdrop-blur-sm px-1.5 sm:px-2 md:px-4 py-1 sm:py-1.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-white/20 z-20 transition-none md:transition-transform duration-300 hover:md:scale-110"
                  style={
                    {
                      animation: "float-badge 2.5s ease-in-out infinite",
                      animationDelay: "0s",
                    } as CSSProperties
                  }
                >
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-1.5 sm:w-2 md:w-3.5 h-1.5 sm:h-2 md:h-3.5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5">
                    <span className="sans-font font-bold text-[10px] sm:text-sm md:text-xl text-[#111]">
                      4.8+
                    </span>
                    <span className="sans-font text-[6px] sm:text-[7px] md:text-xs text-slate-500">
                      Patient Rating
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-[4px] sm:text-[5px] md:text-[10px] font-bold">
                      ✓
                    </span>
                  </div>
                </div>

                {/* Dermatologist Badge - moved further right */}
                <div
                  className="absolute top-1/3 right-[-16px] sm:right-[-28px] md:right-[-56px] lg:right-[-70px] -translate-y-1/2 bg-white/95 backdrop-blur-sm px-2 sm:px-2.5 md:px-5 py-1.5 sm:py-2 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-white/20 z-20 transition-none md:transition-transform duration-300 hover:md:scale-110"
                  style={
                    {
                      animation: "float-badge 2.5s ease-in-out infinite",
                      animationDelay: "0.5s",
                    } as CSSProperties
                  }
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2.5">
                    <div className="w-4 sm:w-5 md:w-10 h-4 sm:h-5 md:h-10 rounded-full bg-[#154f85]/10 flex items-center justify-center">
                      <Shield className="w-2.5 sm:w-3 md:w-5 h-2.5 sm:h-3 md:h-5 text-[#154f85]" />
                    </div>
                    <div>
                      <div className="sans-font font-bold text-sm sm:text-lg md:text-2xl text-[#154f85]">
                        MD
                      </div>
                      <div className="sans-font text-[6px] sm:text-[7px] md:text-xs text-slate-600 font-medium">
                        Dermatologist
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 bg-[#154f85] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-[4px] sm:text-[5px] md:text-[10px] font-bold">
                      ★
                    </span>
                  </div>
                </div>

                {/* Specialist Badge - moved up on mobile */}
                <div
                  className="absolute bottom-8 sm:bottom-20 md:bottom-16 lg:bottom-23 right-[-12px] sm:right-[-24px] md:right-[-48px] lg:right-[-60px] bg-white/95 backdrop-blur-sm px-2 sm:px-2.5 md:px-5 py-1.5 sm:py-2 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-white/20 z-20 transition-none md:transition-transform duration-300 hover:md:scale-110 mobile-specialist-badge"
                  style={
                    {
                      animation: "float-badge 2.5s ease-in-out infinite",
                      animationDelay: "1s",
                    } as CSSProperties
                  }
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2.5">
                    <div className="w-4 sm:w-5 md:w-10 h-4 sm:h-5 md:h-10 rounded-full bg-[#5a98c7]/10 flex items-center justify-center">
                      <Sparkles className="w-2.5 sm:w-3 md:w-5 h-2.5 sm:h-3 md:h-5 text-[#5a98c7]" />
                    </div>
                    <div>
                      <div className="sans-font font-bold text-[8px] sm:text-[10px] md:text-lg text-[#111]">
                        Hair Transplant
                      </div>
                      <div className="sans-font text-[6px] sm:text-[7px] md:text-xs text-slate-500 font-medium">
                        Specialist
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2.5 sm:w-3.5 md:w-5 h-2.5 sm:h-3.5 md:h-5 bg-[#5a98c7] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-[4px] sm:text-[5px] md:text-[10px] font-bold">
                      ✦
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global styles for animations */}
        <style>{`
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes float-badge {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          /* Disable all animations and transitions on mobile (320px) */
          @media (max-width: 480px) {
            /* Center all text on mobile */
            .text-center\\/sm\\:text-left {
              text-align: center !important;
            }
            
            /* Disable float animations */
            [style*="animation: float"],
            [style*="animation: float-slow"],
            [style*="animation: float-badge"] {
              animation: none !important;
            }
            
            /* Disable hover effects */
            .group:hover .md\\:group-hover\\:\\[transform\\:rotateY\\(180deg\\)\\] {
              transform: none !important;
            }
            
            /* Disable all transitions */
            * {
              transition: none !important;
              transition-duration: 0s !important;
              animation-duration: 0s !important;
            }
            
            /* Disable transform transitions specifically */
            .transition-none.md\\:transition-all {
              transition: none !important;
            }
            
            /* Disable scale transforms on hover */
            .hover\\:md\\:scale-105:hover {
              transform: none !important;
            }
            .hover\\:md\\:scale-110:hover {
              transform: none !important;
            }
            
            /* Disable translate transforms on hover */
            .hover\\:md\\:-translate-y-2:hover {
              transform: none !important;
            }
            
            /* Disable shadow transitions */
            .hover\\:md\\:shadow-xl:hover {
              box-shadow: none !important;
            }
            .hover\\:shadow-lg:hover {
              box-shadow: none !important;
            }
            
            /* Disable bg color transitions on hover */
            .hover\\:md\\:bg-\\[\\#154f85\\]:hover {
              background-color: inherit !important;
            }
            .hover\\:md\\:text-white:hover {
              color: inherit !important;
            }
            
            /* Disable character animation */
            .inline-block.transition-none.md\\:transition-all {
              transform: none !important;
              transition: none !important;
            }
            
            /* Disable perspective transforms */
            [style*="perspective"] {
              perspective: none !important;
            }
            .md\\:group-hover\\:\\[transform\\:rotateY\\(180deg\\)\\] {
              transform: none !important;
            }
            
            /* Additional 320px specific adjustments */
            .text-\\[clamp\\(38px\\,5vw\\,62px\\)\\] {
              font-size: 24px !important;
            }
            
            .gap-1\\.5 {
              gap: 0.375rem !important;
            }
            
            .px-1\\.5 {
              padding-left: 0.375rem !important;
              padding-right: 0.375rem !important;
            }
            
            .py-1 {
              padding-top: 0.25rem !important;
              padding-bottom: 0.25rem !important;
            }

            /* Move Hair Transplant badge up on mobile */
            .mobile-specialist-badge {
              bottom: 60px !important;
            }

            /* Make buttons full width on mobile */
            .w-full\\/sm\\:w-auto {
              width: 100% !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}