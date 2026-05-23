"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

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

  <div id="gallery-images" data-section="gallery-images">
      <FeatureCardTwentyThree
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "g1",
          title: "Elegant Dining Area",
          tags: [
            "Ambiance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dining-table-with-chairs-tableware_140725-7822.jpg",
        },
        {
          id: "g2",
          title: "Premium Table Settings",
          tags: [
            "Style",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/napkin-cutlery-plate-near-glasses-plant_23-2148070687.jpg",
        },
        {
          id: "g3",
          title: "Family Friendly Zones",
          tags: [
            "Experience",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/boy-girl-cooking-together-home_23-2148738642.jpg",
        },
      ]}
      title="A Visual Feast"
      description="Take a virtual tour through our restaurant space and signature dish preparations."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Atmosphere Gallery"
      description="Discover the warm, inviting corners of Spice Haven where memories are made."
      imageSrc="http://img.b2bpic.net/free-photo/festive-table-restaurant-is-decorated-with-candles-flowers_8353-9968.jpg"
      imageAlt="Restaurant ambiance"
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
