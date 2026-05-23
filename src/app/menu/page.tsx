"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
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

  <div id="menu-grid" data-section="menu-grid">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Tandoori Chicken",
          price: "$18.00",
          variant: "Starters",
          imageSrc: "http://img.b2bpic.net/free-photo/side-close-up-view-chicken-chicken-with-herbs-onion-lavash-sauce-bottle-oil_140725-72547.jpg",
        },
        {
          id: "p2",
          name: "Paneer Tikka Special",
          price: "$15.00",
          variant: "Starters",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-dessert-sweet-baked-pumpkin-with-nuts-cream_141793-3867.jpg",
        },
        {
          id: "p3",
          name: "Royal Chicken Biryani",
          price: "$22.00",
          variant: "Main Course",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-with-different-raisins-dark_140725-36014.jpg",
        },
        {
          id: "p4",
          name: "Classic Veg Manchurian",
          price: "$14.00",
          variant: "Chinese",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chinese-hot-pot_23-2149529766.jpg",
        },
        {
          id: "p5",
          name: "Gulab Jamun Duo",
          price: "$9.00",
          variant: "Desserts",
          imageSrc: "http://img.b2bpic.net/free-photo/milk-white-chocolate-chips-plate_23-2148238812.jpg",
        },
        {
          id: "p6",
          name: "Fresh Fruit Cooler",
          price: "$7.00",
          variant: "Beverages",
          imageSrc: "http://img.b2bpic.net/free-photo/alcohol-cocktail-grapes-orange-vodka-liquer-side-view_141793-3064.jpg",
        },
      ]}
      title="Our Culinary Collection"
      description="A refined selection of Indian, Chinese, and Tandoori delicacies."
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
