"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

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

  <div id="shop-products" data-section="shop-products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "prod-1",
          name: "Classic Red Roses",
          price: "$75.00",
          imageSrc: "https://pixabay.com/get/g48d3803cfca1d309a78aab4b5bca72ba953050d128a704c9c7f05e6dde443ecdab2f9e896ff5efb5c1348e5876694df8db012d5435f1ab89c5f76e1d906307bf_1280.jpg",
          imageAlt: "Bouquet of classic red roses",
        },
        {
          id: "prod-2",
          name: "Spring Medley",
          price: "$60.00",
          imageSrc: "https://pixabay.com/get/g2f5102614d20c4f6ae1cec6aac735b0fbfa033191c1bae464f8fb03032cf53326716d7620489077f8ef2d5167ccd24bd106287628a0b2dccc063677fe7cc0541_1280.jpg",
          imageAlt: "Vibrant mixed spring flower bouquet",
        },
        {
          id: "prod-3",
          name: "Elegant White Lilies",
          price: "$85.00",
          imageSrc: "https://pixabay.com/get/g1ddc463afba6938594f9e7c24202b870f2085ba28e6879f28dc33ed0c781bc8c26d7a7d74bddbd624003cf183c5b54b30498c6dddcf100a30b62d51b22040a72_1280.jpg",
          imageAlt: "Bouquet of elegant white lilies",
        },
        {
          id: "prod-4",
          name: "Radiant Sunflowers",
          price: "$55.00",
          imageSrc: "https://pixabay.com/get/g2633a2597b224486a433264205d9559a72c4cd78d0095e16c9e8fe9101f46d76d2694a8b7f333b39274f71f6e3217d71912e1c7ea72bf83db15157dd5ed95e25_1280.jpg",
          imageAlt: "Bouquet of radiant sunflowers",
        },
      ]}
      title="Our Signature Collections"
      description="Hand-picked and expertly arranged, our floral designs bring beauty and elegance to any setting."
      buttons={[
        {
          text: "View All Products",
          href: "/shop",
        },
      ]}
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
