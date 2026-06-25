"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Calendar } from "lucide-react";
import logo from "../asserts/logo.png";
import logo1 from "../asserts/logo1.png";
import logo3 from "../asserts/logo3.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Our Clinic", href: "#inside" },
    { name: "Before & After", href: "#before-after" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <style>{`
        /* Import Google Font - similar to what's in the image */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .header-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .nav-links a {
          font-size: 15px;
          font-weight: 500;
          color: #1a1a1a;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
          text-decoration: none;
          letter-spacing: 0.3px;
        }

        .nav-links a:hover {
          color: #BC5841;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2.5px;
          background: #D97A63;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links {
          gap: 1.5rem;
        }

        .logo-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo-subtext {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          letter-spacing: 2.5px;
        }

        .btn-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 700;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0 p-1.5">
              <Image
                src={logo}
                alt="Aakrithi Skin & Hair Clinic"
                width={56}
                height={56}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 p-1.5">
              <Image
                src={logo1}
                alt="Aakrithi Skin & Hair Clinic"
                width={112}
                height={112}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="header-font px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#BC5841] transition-colors duration-200 rounded-lg hover:bg-[#FAF5EE]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.aakrithiskinandhairclinic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text bg-gradient-to-r from-[#BC5841] to-[#D97A63] text-white px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-[#BC5841]/30 transition-all duration-300 hover:scale-105"
            >
              <Calendar size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button - Fixed visibility */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 rounded-xl bg-[#BC5841] text-white hover:bg-[#BC5841] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col py-4 space-y-1 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="header-font px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-[#BC5841] hover:bg-[#FAF5EE] rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <a
                href="tel:+919505738393"
                className="header-font flex items-center gap-2 text-sm font-semibold text-[#BC5841]"
              >
                <Phone size={16} />
                +91 95057 38393
              </a>
              <a
                href="https://www.aakrithiskinandhairclinic.com/"
                className="btn-text bg-gradient-to-r from-[#BC5841] to-[#D97A63] text-white px-5 py-3 rounded-xl text-sm flex items-center justify-center gap-2 w-full"
              >
                <Calendar size={16} />
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
