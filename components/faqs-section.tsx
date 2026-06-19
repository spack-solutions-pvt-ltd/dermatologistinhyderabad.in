"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const faqs = [
    {
      id: 1,
      question: "How do I book an appointment at Aakrithi Skin & Hair Clinic?",
      answer: (
        <>
          You can book directly through the form on this page, by calling{" "}
          <b>+91 95057 38393</b> (Hyderabad) or{" "}
          <b>+91 70938 81288</b> (Visakhapatnam), or by clicking the WhatsApp
          button. Most consultations are scheduled the same week.
        </>
      ),
    },
    {
      id: 2,
      question: "What are the clinic timings?",
      answer:
        "Monday to Saturday, 10:00 AM – 9:00 PM. Sunday consultations are available by prior appointment.",
    },
    {
      id: 3,
      question: "Where is Aakrithi Skin & Hair Clinic located?",
      answer:
        "Hyderabad branch: 3rd Floor, M.R. Supreme, Opp Gem Motors, Raghavendra Colony, Kondapur, Telangana 500084. Visakhapatnam branch: Andhra Bank Road, Pitapuram Colony, Opp CMR Central, Maddilapalem, Visakhapatnam 530017.",
    },
    {
      id: 4,
      question: "How is the first consultation structured?",
      answer:
        "Your first visit starts with a one-to-one conversation with Dr. Swetha. She examines your concern, reviews medical history if relevant, explains the underlying cause in plain language, and walks you through the most suitable treatment options — including expected timeline, cost and aftercare. There's no pressure to commit on day one.",
    },
    {
      id: 5,
      question: "Is laser hair reduction safe for Indian skin?",
      answer:
        "Yes. We use US-FDA cleared diode laser technology specifically suited for Indian and darker skin tones. With proper energy settings and trained operators, the procedure is safe, virtually painless, and effective across all skin types.",
    },
    {
      id: 6,
      question: "What modes of payment are accepted?",
      answer:
        "We accept cash, all major debit/credit cards, UPI (Google Pay, PhonePe, Paytm) and net banking. EMI options are available for select procedures.",
    },
    {
      id: 7,
      question: "Will I see results from a single session?",
      answer:
        "Some treatments — like Hydrafacial or skin tag removal — show visible results from the first session. Most clinical concerns (acne, pigmentation, hair fall, hair transplant) follow a structured multi-session plan, and your dermatologist will share a realistic timeline upfront.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  // FAQ item variants
  const faqVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  // Split heading into words for word-by-word animation
  const headingText = "Frequently Asked Questions";
  const words = headingText.split(" ");

  return (
    <section ref={sectionRef} className="py-20 bg-[#FAF5EE]">

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

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-10">
        {/* Enhanced Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Word-by-word animation */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111] flex flex-wrap justify-center gap-x-3 gap-y-2"
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
            className="h-1 bg-[#154f85] rounded-full mx-auto mt-3 sm:mt-4"
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={faqVariants}
            >
              <details
                className="
                  group
                  bg-white
                  rounded-2xl
                  border
                  border-[#e8e3de]
                  transition-all
                  duration-300
                  hover:shadow-md
                "
              >
                <summary
                  className="
                    sans-font
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-6
                    md:px-8
                    py-4
                    md:py-5
                    text-left
                    font-semibold
                    text-[#111]
                    text-sm
                    md:text-base
                    cursor-pointer
                    list-none
                    hover:bg-[#faf9f8]
                    transition-colors
                    duration-200
                    rounded-2xl
                  "
                >
                  <span className="flex-1">{faq.question}</span>
                  <span
                    className="
                      flex-shrink-0
                      w-8
                      h-8
                      rounded-full
                      bg-[#eef3f8]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-open:bg-[#154f85]
                      group-open:text-white
                    "
                  >
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-5 md:pb-6 text-[#4a5a6a] text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}