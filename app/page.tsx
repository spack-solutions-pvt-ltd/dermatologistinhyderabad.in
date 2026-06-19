import { Button } from '@/components/ui/button'
import Hero from '@/components/hero'
import FeaturedProducts from '@/components/featured-products'
import Footer from '@/components/footer'
import PopularTreatments from '@/components/popular-treatments'
import ExpertSection from '@/components/expert-section'
import AboutSection from '@/components/about-section'
import AllTreatments from '@/components/all-treatments'
import TechSection from '@/components/tech-section'
import GallerySection from '@/components/gallery-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faqs-section'
import ContactSection from '@/components/contact-section'
import CTAStrip from '@/components/ctasrtipt'
import ClinicGallery from '@/components/inside'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header/>
      <Hero />
      <FeaturedProducts />
      <PopularTreatments/>
      <ExpertSection/>
      <AboutSection/>
      <AllTreatments/>
      <TechSection/>
      <GallerySection/>
      <ClinicGallery/>
      <TestimonialsSection/>
      <FAQSection/>
      <ContactSection/>
      <CTAStrip/>
      <Footer />
    </main>
  )
}
