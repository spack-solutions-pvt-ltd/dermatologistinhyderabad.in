import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../asserts/logo.png";
import logo1 from "../asserts/logo1.png";
import logo2 from "../asserts/logo2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Before & After", href: "#before-after" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const treatments = [
    { name: "Acne & Acne Scars", href: "#treatments" },
    { name: "Pigmentation", href: "#treatments" },
    { name: "Hair Fall & Hair Loss", href: "#treatments" },
    { name: "FUE Hair Transplant", href: "#treatments" },
    { name: "Anti-Aging", href: "#treatments" },
    { name: "Laser Hair Reduction", href: "#treatments" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/dr_swetha_aakrithi/",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/AakrithiSkinHairAndAesthetics/",
      icon: FaFacebookF,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Aakrithiskinandhairclinics",
      icon: FaYoutube,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919505738393",
      icon: Phone,
    },
  ];

  return (
    <footer className="bg-[#0d1b2a] text-white/70">
      {/* Font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .sans-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .footer-logo-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .footer-logo-subtext {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          letter-spacing: 2.5px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Brand Row with Logos */}
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={logo2}
                  alt="Aakrithi Skin & Hair Clinic"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={logo1}
                  alt="Aakrithi Skin & Hair Clinic"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </Link>

            {/* Description */}
            <p className="sans-font text-sm leading-relaxed mb-4">
              Where beauty finds its perfect form. Expert dermatology, hair
              transplantation and aesthetic care — backed by science and led by
              Dr. Swetha Ravi Penmetsa, MD.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-[#154f85]
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="sans-font text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="sans-font text-sm hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Treatments */}
          <div>
            <h5 className="sans-font text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Treatments
            </h5>
            <ul className="space-y-2.5">
              {treatments.map((treatment) => (
                <li key={treatment.name}>
                  <a
                    href={treatment.href}
                    className="sans-font text-sm hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div>
            <h5 className="sans-font text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h5>

            {/* Hyderabad */}
            <div className="mb-3">
              <p className="sans-font text-sm">
                <span className="text-white font-semibold">Hyderabad:</span>{" "}
                Kondapur
              </p>
              <a
                href="tel:+919505738393"
                className="sans-font text-sm hover:text-white transition-colors"
              >
                +91 95057 38393
              </a>
            </div>

            {/* Visakhapatnam */}
            <div className="mb-3">
              <p className="sans-font text-sm">
                <span className="text-white font-semibold">
                  Visakhapatnam:
                </span>{" "}
                Maddilapalem
              </p>
              <a
                href="tel:+917093881288"
                className="sans-font text-sm hover:text-white transition-colors"
              >
                +91 70938 81288
              </a>
            </div>

            {/* Email */}
            <div>
              <a
                href="mailto:aakrithiskinclinic@gmail.com"
                className="sans-font text-sm hover:text-white transition-colors break-all"
              >
                aakrithiskinclinic@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 text-center md:text-left">
          <span className="sans-font">
            © {currentYear} Aakrithi Skin & Hair Clinic · Regen Health Care
            Services · All rights reserved ·
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors ml-1"
            >
              Privacy Policy
            </a>
            ·
            <a
              href="#"
              className="text-white/50 hover:text-white transition-colors ml-1"
            >
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}