"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

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

  <div id="contact-form" data-section="contact-form">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Let's Create Something Beautiful"
      description="Whether you have a question, need a custom order, or just want to say hello, we're here to help. Reach out to Bako Flowers Studio today!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="By sending a message, you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What areas do you deliver to?",
          content: "We offer local delivery within a 20-mile radius of our studio. For deliveries outside this area, please contact us directly for options and rates.",
        },
        {
          id: "faq-2",
          title: "Can I request a custom flower arrangement?",
          content: "Absolutely! We specialize in bespoke floral designs. Please visit our 'Contact Us' page to fill out a custom order request form, and we'll be in touch to discuss your vision.",
        },
        {
          id: "faq-3",
          title: "What is your return policy?",
          content: "Due to the perishable nature of our products, all sales are final. However, if you are unsatisfied with your order, please contact us within 24 hours of delivery, and we will do our best to resolve the issue.",
        },
        {
          id: "faq-4",
          title: "Do you offer flower subscriptions?",
          content: "Yes, we do! Enjoy fresh, seasonal blooms delivered to your home or office on a recurring basis. You can choose weekly, bi-weekly, or monthly subscriptions. Visit our 'Shop' page for more details.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about our services, products, and ordering process."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
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
