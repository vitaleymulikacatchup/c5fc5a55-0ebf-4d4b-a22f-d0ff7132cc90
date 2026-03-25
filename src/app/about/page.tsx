"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Shop",
          id: "/shop",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      button={{
        text: "Order Now",
        href: "/shop",
      }}
      brandName="Bako Flowers Studio"
    />
  </div>

  <div id="about-studio" data-section="about-studio">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Our Story: Passion for Petals"
      description="Bako Flowers Studio was founded on a simple belief: that flowers have the power to convey emotions, tell stories, and create lasting memories. We meticulously source the freshest blooms and combine artistic vision with expert craftsmanship to deliver unparalleled floral experiences."
      buttons={[
        {
          text: "Meet Our Team",
          href: "/about#team",
        },
      ]}
      bulletPoints={[
        {
          title: "Artisan Craftsmanship",
          description: "Each arrangement is a unique work of art, handcrafted with precision and passion by our skilled florists.",
        },
        {
          title: "Sustainable Sourcing",
          description: "We partner with local growers and sustainable farms to ensure the highest quality and freshest flowers.",
        },
        {
          title: "Unforgettable Moments",
          description: "From grand weddings to intimate gestures, we help you celebrate every moment with natural beauty.",
        },
      ]}
      imageSrc="https://pixabay.com/get/gf04598f69fac2f2c000cea39f6b2eff6536563ac8eae2e19a7983039477c090bed3d033fab4d53443eb035bec0176fd4178363f3aca1c82d4550b9dc52fa11c9_1280.jpg"
      imageAlt="Florist studio owner arranging flowers"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "member-1",
          name: "Elena Bako",
          role: "Founder & Lead Florist",
          imageSrc: "https://pixabay.com/get/g1047f7256aad6c4a7862281b394768e1759e9f92dcf602ee49cbef642672d47ebcc3bff39af32ba18ae4e95e97f9f82af3b741906cedd55227a1a570a65ddb02_1280.jpg",
          imageAlt: "Portrait of Elena Bako, Founder & Lead Florist",
        },
        {
          id: "member-2",
          name: "Marcus Chen",
          role: "Floral Designer",
          imageSrc: "https://pixabay.com/get/gf8f3cde0547fad2bf299b91789043c43cb33c3895c8768f5889e303b0c6e87bf011abaf20a9a02a0ea941efadf33ee55caa4804d4b3f978682a27997993de129_1280.jpg",
          imageAlt: "Portrait of Marcus Chen, Floral Designer",
        },
        {
          id: "member-3",
          name: "Sophia Ramirez",
          role: "Event Specialist",
          imageSrc: "https://pixabay.com/get/g947cd1a642ee10bca0b4d3b911e1108f1b8765f2d50c168b6a6331d410bf0783140566399ae45052828695d952495b44cd8e6bbd2e59d7a13839d43bae049104_1280.jpg",
          imageAlt: "Portrait of Sophia Ramirez, Event Specialist",
        },
      ]}
      title="Meet Our Talented Team"
      description="The passionate individuals who bring beauty to life, one bloom at a time."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Bako Flowers Studio"
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Our Team",
              href: "/about#team",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Shop",
          items: [
            {
              label: "All Bouquets",
              href: "/shop",
            },
            {
              label: "Occasions",
              href: "/shop",
            },
            {
              label: "Custom Orders",
              href: "/contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "FAQ",
              href: "/contact#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Bako Flowers Studio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
