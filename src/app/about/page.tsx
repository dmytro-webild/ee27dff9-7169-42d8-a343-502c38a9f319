"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
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

  <div id="about-content" data-section="about-content">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Taste"
      description="Spice Haven was born from Arjun Mehta’s dream to curate authentic flavors. We value quality, integrity, and the joy of sharing a perfect meal with loved ones."
      metrics={[
        {
          value: "10+",
          title: "Years of Excellence",
        },
        {
          value: "5000+",
          title: "Happy Guests",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/male-chef-cook-wearing-black-uniform-cook-hatlooking-camera-with-crossed-hands-looking-confident-standing-green-background_141793-54274.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Culinary Vision"
      description="At Spice Haven, we believe that food is a bridge between cultures. Our chefs meticulously craft every dish, blending traditional techniques with modern culinary arts to ensure a meal that feels like home."
      imageSrc="http://img.b2bpic.net/free-photo/smiling-young-asian-chef-kitchen-interior_1253-922.jpg?_wi=2"
      imageAlt="Chef at work"
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
