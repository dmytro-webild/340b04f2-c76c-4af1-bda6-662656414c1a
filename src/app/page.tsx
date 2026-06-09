"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Collections",
          id: "#collections",
        },
        {
          name: "Why Choose Us",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="ELKASR"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="ELKASR"
      description="Discover handcrafted jewelry collections designed to celebrate life's most meaningful moments."
      buttons={[
        {
          text: "Explore Collections",
          href: "#collections",
        },
        {
          text: "Book Private Consultation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/shiny-gold-christmas-snowflake-close-up-holiday-accessories-christmas-tree_78492-3902.jpg"
      videoSrc="http://img.b2bpic.net/free-photo/blooming-flower-plant_116380-11.jpg"
      imageAlt="Cinematic slow-motion shot of sparkling diamonds and gold jewelry"
      videoAriaLabel="Cinematic video of luxury jewelry"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="At ELKASR, every piece tells a story. For decades, fine jewelry has symbolized love, achievement, and timeless elegance. Our collections are carefully curated to bring exceptional craftsmanship and rare beauty into every moment."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Crafted for Generations"
      tag="Our Legacy"
      metrics={[
        {
          id: "m1",
          value: "50+",
          description: "Decades of Expertise",
        },
        {
          id: "m2",
          value: "1000+",
          description: "Handcrafted Masterpieces",
        },
        {
          id: "m3",
          value: "10K+",
          description: "Satisfied Collectors",
        },
        {
          id: "m4",
          value: "100%",
          description: "Certified Authenticity",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="collections" data-section="collections">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Brilliant Diamond Solitaire",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-sterling-silver-ring-with-diamonds-with-burning-decorative-candle-heart-shape-black-wall_140725-12842.jpg",
          imageAlt: "Brilliant Diamond Solitaire Necklace",
        },
        {
          id: "p2",
          name: "Radiant Diamond Earrings",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-fashion-stylish-brunette-woman-model-with-evening-makeup-red-lips-white-jacket_158538-11531.jpg",
          imageAlt: "Radiant Diamond Earrings",
        },
        {
          id: "p3",
          name: "Timeless Engagement Ring",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-rings-decorated-nest-with-greenery-white-ribbon_8353-9808.jpg",
          imageAlt: "Timeless Engagement Ring",
        },
        {
          id: "p4",
          name: "Elegant Bridal Jewelry Set",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-khoncha-with-chocolates_140725-7640.jpg",
          imageAlt: "Elegant Bridal Jewelry Set",
        },
        {
          id: "p5",
          name: "Modern Gold Bracelet",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/wireless-earphones-creative-collage_23-2149378055.jpg",
          imageAlt: "Modern Gold Bracelet",
        },
        {
          id: "p6",
          name: "Chunky Gold Hoop Earrings",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-caucasian-girl-posing-dark-wall-shooting-with-european-lady_197531-13996.jpg",
          imageAlt: "Chunky Gold Hoop Earrings",
        },
        {
          id: "p7",
          name: "Exclusive Signature Necklace",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/round-shiny-crystal-colored-background_23-2147948683.jpg",
          imageAlt: "Exclusive Signature Necklace",
        },
        {
          id: "p8",
          name: "Rare Gemstone Masterpiece",
          price: "Price on Request",
          imageSrc: "http://img.b2bpic.net/free-photo/young-blond-woman-with-bright-makeup_158538-10334.jpg",
          imageAlt: "Rare Gemstone Masterpiece",
        },
      ]}
      title="Featured Collections"
      description="Explore our exquisite range of jewelry, each piece a testament to unparalleled artistry and timeless design."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Luxury Beyond Expectation"
      description="At ELKASR, we redefine the jewelry experience with unparalleled service and enduring value. From meticulous craftsmanship to personalized guidance, we ensure every moment with us is as precious as your chosen piece."
      accordionItems={[
        {
          id: "a1",
          title: "Certified Authenticity",
          content: "Every piece comes with trusted quality assurance and is certified by leading gemological institutes, guaranteeing its value and origin.",
        },
        {
          id: "a2",
          title: "Exceptional Craftsmanship",
          content: "Our expert artisans combine generations of skill with meticulous attention to detail, creating jewelry that is truly a work of art.",
        },
        {
          id: "a3",
          title: "Personal Jewelry Advisors",
          content: "Benefit from dedicated experts offering bespoke guidance, styling advice, and recommendations tailored to your unique preferences.",
        },
        {
          id: "a4",
          title: "Custom Design Services",
          content: "Bring your unique vision to life with our artisan designers. We craft bespoke pieces that reflect your personal story and style.",
        },
        {
          id: "a5",
          title: "Professional Cleaning & Maintenance",
          content: "Ensure your cherished pieces retain their brilliance for a lifetime with our complimentary professional cleaning and maintenance services.",
        },
        {
          id: "a6",
          title: "Lifetime Value",
          content: "ELKASR jewelry is designed to be treasured for generations, backed by our unwavering commitment to quality and lasting beauty.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/engagement-rings_627829-11906.jpg"
      imageAlt="Close-up of a diamond certification document"
      mediaAnimation="opacity"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Cartier",
        "Tiffany & Co.",
        "Bulgari",
        "Van Cleef & Arpels",
        "Graff",
        "Harry Winston",
        "Chopard",
        "ElKasr",
      ]}
      title="A Legacy of Trust"
      description="Proudly serving generations of discerning clients, ELKASR is synonymous with luxury and authenticity in fine jewelry, recognized alongside the world's most prestigious brands."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Unmatched Quality and Service",
          quote: "The craftsmanship of my diamond necklace from ELKASR is truly exceptional. The service I received was remarkable, making the entire experience unforgettable.",
          name: "Sarah Johnson",
          role: "CEO, Elegance Group",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-dressed-black-sweater-posing_114579-81856.jpg",
          imageAlt: "Sarah Johnson, CEO, Elegance Group",
        },
        {
          id: "t2",
          title: "The Perfect Engagement Ring",
          quote: "ELKASR was the perfect place to find a timeless engagement ring. Their advisors helped me select a piece that truly captures our love story.",
          name: "Michael Chen",
          role: "Entrepreneur",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-businessman-taking-papers-from-bag_1262-6105.jpg",
          imageAlt: "Michael Chen, Entrepreneur",
        },
        {
          id: "t3",
          title: "An Experience of Pure Luxury",
          quote: "From the moment I stepped in, I felt the luxury and elegance. ELKASR delivers on its promise of trust and a truly personalized experience.",
          name: "Emily Rodriguez",
          role: "Art Collector",
          imageSrc: "http://img.b2bpic.net/free-photo/people-beauty-ethnicity-facial-expressions-concept-attractive-african-american-female-model-rests-coffee-shop-with-friend-lover_273609-3170.jpg",
          imageAlt: "Emily Rodriguez, Art Collector",
        },
        {
          id: "t4",
          title: "Beyond Beautiful Jewelry",
          quote: "Not just beautiful jewelry, but an experience that embodies luxury, elegance, and absolute trust. ELKASR truly stands for its legacy.",
          name: "David Kim",
          role: "Fashion Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/shopping-girl-looking-her-mobile-phone_23-2148023457.jpg",
          imageAlt: "David Kim, Fashion Designer",
        },
        {
          id: "t5",
          title: "Treasured for Generations",
          quote: "My ELKASR piece has been passed down through my family, a true testament to its lasting beauty and quality. It is treasured for generations.",
          name: "Amina Ibrahim",
          role: "Philanthropist",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-senior-woman-posing-studio_23-2149883525.jpg",
          imageAlt: "Amina Ibrahim, Philanthropist",
        },
      ]}
      title="Our Clients Speak"
      description="Hear what our cherished customers say about their ELKASR experience and the timeless beauty of our creations."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Connect with Us"
      title="Visit Our Boutiques & Own a Piece of Forever"
      description="Discover jewelry designed to become part of your legacy at our exclusive locations across Egypt. Schedule a private appointment for a personalized luxury experience.\n\n**Main Branches:** Elkasr Jewellery, Elkasr Jewelery, ElKasr Jewelry - القصر للمجوهرات\n\n**Working Hours:**\nMonday – Saturday: 11:30 AM – 10:00 PM\nFriday: 12:30 PM – 10:00 PM\nSunday: Closed\n*(Hours may vary by branch)*"
      imageSrc="http://img.b2bpic.net/free-photo/vintage-modern-restaurant-with-full-comfort_140725-9761.jpg"
      imageAlt="Luxurious ElKasr jewelry store interior with elegant displays"
      mediaAnimation="opacity"
      inputPlaceholder="Enter your email for updates"
      buttonText="Subscribe"
      termsText="By subscribing, you agree to receive promotional emails from ELKASR."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="ELKASR"
      columns={[
        {
          title: "Collections",
          items: [
            {
              label: "Diamond Collection",
              href: "#collections",
            },
            {
              label: "Bridal Collection",
              href: "#collections",
            },
            {
              label: "Gold Collection",
              href: "#collections",
            },
            {
              label: "Signature Collection",
              href: "#collections",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Craftsmanship",
              href: "#features",
            },
            {
              label: "Legacy",
              href: "#metrics",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Consultation",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 ELKASR. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
