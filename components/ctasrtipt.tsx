import { Calendar, Phone } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="py-16 md:py-20 bg-[#D97A63]">
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

      <div className="max-w-4xl mx-auto w-full px-6 lg:px-10 text-center">
        {/* Heading */}
        <h3 className="playfair-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-white mb-3">
          Your skin and hair deserve a science-backed plan.
        </h3>

        {/* Description */}
        <p className="sans-font text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Talk to Dr. Swetha and get a personalised treatment roadmap — no
          pressure, no upselling, just clinical answers.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <a
            href="https://www.aakrithiskinandhairclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn-text
              inline-flex
              items-center
              gap-2
              bg-white
              text-[#BC5841]
              px-6
              md:px-8
              py-3
              md:py-4
              rounded-2xl
              hover:bg-white/90
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              hover:shadow-xl
            "
          >
            <Calendar size={18} />
            Book Appointment
          </a>

          <a
            href="tel:+919505738393"
            className="
              btn-text
              inline-flex
              items-center
              gap-2
              border-2
              border-white
              text-white
              px-6
              md:px-8
              py-3
              md:py-4
              rounded-2xl
              hover:bg-white
              hover:text-[#BC5841]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Phone size={18} />
            Call +91 95057 38393
          </a>
        </div>
      </div>
    </section>
  );
}