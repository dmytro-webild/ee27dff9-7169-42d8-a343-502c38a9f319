"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Flame, Leaf, Sparkles, Utensils, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Menu",
          id: "/menu",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Spice Haven"
    />
  </div>

  <div id="home-hero" data-section="home-hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Authentic Flavors, Memorable Experiences"
      description="Discover the true essence of Indian cuisine. Crafted with fresh, premium ingredients, we bring tradition to your plate in an unforgettable setting."
      buttons={[
        {
          text: "Reserve a Table",
          href: "/contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-table-with-cheese-plate-pate-it_140725-12866.jpg?_wi=1",
          imageAlt: "Luxurious dining atmosphere",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-arranging-table-restaurant_23-2147936228.jpg?_wi=1",
          imageAlt: "Gourmet Indian plating",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-around-kutab-table-with-pear-dushes_114579-2337.jpg?_wi=1",
          imageAlt: "Professional service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-plating-meal_23-2148794096.jpg?_wi=1",
          imageAlt: "Authentic kitchen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-table-arrangement-with-delicious-food_23-2149617138.jpg?_wi=1",
          imageAlt: "Modern lounge",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/there-are-glasses-wine-water-table-with-white-cloth-are-ready-dining_613910-3428.jpg",
          imageAlt: "Dining ambiance",
        },
      ]}
    />
  </div>

  <div id="home-highlights" data-section="home-highlights">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Farm-to-Table Freshness",
          tags: [
            "Quality",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-cook-cutting-apple-dark-cooking-salad-health-job-diet-vegetable-meal-food-fruit_179666-43823.jpg",
        },
        {
          id: "f2",
          title: "Expert Culinary Mastery",
          tags: [
            "Experience",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-eating-fresh-cheese_23-2150267639.jpg",
        },
        {
          id: "f3",
          title: "Premium Ambiance",
          tags: [
            "Comfort",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-arranging-dishware-table-restaurant_23-2147936226.jpg",
        },
      ]}
      title="Why Spice Haven?"
      description="More than just a meal, it's a sensory journey defined by quality and passion."
    />
  </div>

  <div id="home-testimonials" data-section="home-testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Demo review #1",
          date: "Oct 2023",
          title: "Exquisite Experience",
          quote: "The best Tandoori in the city. Truly authentic flavors.",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-luxurious-restaurant_23-2150517444.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-table-with-cheese-plate-pate-it_140725-12866.jpg?_wi=2",
          imageAlt: "happy diner restaurant portrait",
        },
        {
          id: "t2",
          name: "Rahul Verma",
          date: "Sep 2023",
          title: "Pure Magic",
          quote: "Every dish felt like a masterpiece. Highly recommended.",
          tag: "Foodie",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-arranging-table-restaurant_23-2147936228.jpg?_wi=2",
          imageAlt: "happy diner restaurant portrait",
        },
        {
          id: "t3",
          name: "Sarah Miller",
          date: "Aug 2023",
          title: "Fantastic Evening",
          quote: "The ambiance paired with the food was spectacular.",
          tag: "Guest",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-woman-clicking-photo-burger-from-mobile-phone_1170-741.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-around-kutab-table-with-pear-dushes_114579-2337.jpg?_wi=2",
          imageAlt: "happy diner restaurant portrait",
        },
        {
          id: "t4",
          name: "Vikram Singh",
          date: "Aug 2023",
          title: "Perfect Fusion",
          quote: "Surprisingly great Chinese delights. Loved the diversity.",
          tag: "Local",
          avatarSrc: "http://img.b2bpic.net/free-photo/lifestyle-couple-date-night_23-2149131767.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-plating-meal_23-2148794096.jpg?_wi=2",
          imageAlt: "happy diner restaurant portrait",
        },
        {
          id: "t5",
          name: "Elena Rossi",
          date: "Jul 2023",
          title: "Unforgettable Dining",
          quote: "The service was top notch. A gold standard restaurant.",
          tag: "Tourist",
          avatarSrc: "http://img.b2bpic.net/free-photo/girl-is-sitting-table-restaurant-drink-wine-enjoy-bouquet-red-roses-flower-waiting-date_496169-289.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-table-arrangement-with-delicious-food_23-2149617138.jpg?_wi=2",
          imageAlt: "happy diner restaurant portrait",
        },
      ]}
      title="Customer Reviews"
      description="Don't just take our word for it—listen to the voices of our cherished patrons."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Culinary Vision"
      description="At Spice Haven, we believe that food is a bridge between cultures. Our chefs meticulously craft every dish, blending traditional techniques with modern culinary arts to ensure a meal that feels like home."
      imageSrc="http://img.b2bpic.net/free-photo/smiling-young-asian-chef-kitchen-interior_1253-922.jpg?_wi=1"
      imageAlt="Chef at work"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Menu Highlights"
      description="Explore the categories that make our kitchen world-renowned."
      metrics={[
        {
          id: "m1",
          value: "Authentic",
          title: "Indian Heritage",
          description: "Traditional recipes passed through generations.",
          icon: Utensils,
        },
        {
          id: "m2",
          value: "Creative",
          title: "Fusion Delights",
          description: "Unexpected flavor pairings that delight.",
          icon: Sparkles,
        },
        {
          id: "m3",
          value: "Fresh",
          title: "Organic Produce",
          description: "Hand-picked daily from local farmers.",
          icon: Leaf,
        },
        {
          id: "m4",
          value: "Premium",
          title: "Tandoor Mastery",
          description: "Flame-grilled to perfection.",
          icon: Flame,
        },
        {
          id: "m5",
          value: "Vibrant",
          title: "Signature Mocktails",
          description: "Refreshing botanical blends.",
          icon: Wine,
        },
      ]}
    />
  </div>

  <div id="home-footer" data-section="home-footer">
      <FooterBaseReveal
      logoText="Spice Haven"
      columns={[
        {
          title: "Dining",
          items: [
            {
              label: "Menu",
              href: "/menu",
            },
            {
              label: "Reservations",
              href: "/contact",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
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
      copyrightText="© 2024 Spice Haven. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
