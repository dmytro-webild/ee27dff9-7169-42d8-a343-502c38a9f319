"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
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

  <div id="contact-form" data-section="contact-form">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Reserve Today"
      title="Book Your Spice Haven Experience"
      description="Ready to experience premium Indian dining? Reserve a table or get in touch with us at Food Street, Bhubaneswar."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Visit Us"
      description="Located in the heart of the city, we are waiting to serve you."
      imageSrc="http://img.b2bpic.net/free-photo/woman-standing-near-window-restaurant_23-2147936227.jpg"
      imageAlt="Window view of the restaurant"
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
