"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

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

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static",
      }}
      title="Bako Flowers Studio"
      description="Crafting exquisite floral arrangements for every occasion. Discover the perfect bloom to brighten your day or celebrate life's special moments."
      buttons={[
        {
          text: "Explore Our Collection",
          href: "/shop",
        },
        {
          text: "Custom Order",
          href: "/contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "https://pixabay.com/get/gad1985b451dfe231613bd22e3f88934d188b08b24fd6af9bf333936fe8a28902e86e281e2e534ef723844239935aa92ab51bc6cc8ff43291bb967e835d262413_1280.jpg",
          imageAlt: "Vibrant flower bouquet in a studio setting",
        },
        {
          id: "2",
          imageSrc: "https://pixabay.com/get/g831a4da27e850b62482de314c84e9bac1decf1a9dc11efb89a3c3a7d9bfeb59dc7a8f0441aec9c48623625c4f1e6bb2063a1ae39492b6fb8bb0bf944ab141fdf_1280.jpg",
          imageAlt: "Hand holding a rose bouquet in sunlight",
        },
        {
          id: "3",
          imageSrc: "https://pixabay.com/get/g6d52397433e61dc40d4e55257927d5d343d33f581fabaf9a3caf26bda565a33ce142ad43ebd56299807ecb39992aa9cd21c56f4fc9a3b19a762c0012d9f04104_1280.jpg",
          imageAlt: "Modern flower arrangement in a vase",
        },
        {
          id: "4",
          imageSrc: "https://pixabay.com/get/g1f7bc6137fd573f6dd8914dd7f3e9d85bd56f7af3ef132331b118abc65a57b457b78353e0e217d11f6901f26e20049cb_1280.jpg",
          imageAlt: "Close up of various colorful flowers",
        },
        {
          id: "5",
          imageSrc: "https://pixabay.com/get/g14d18c2e9b1accf4bb9b89d00436675abdde8526cbe7cf21aeb5b67b95ef386568f90de272800cd46cadf6f7c2f01cb63fe5df5357402edd4a646293d319a67f_1280.jpg",
          imageAlt: "Interior of a flower studio",
        },
        {
          id: "6",
          imageSrc: "https://pixabay.com/get/geca576576b03b7b936c4efec2af3de85a10888369bdcaf387ce268aa70382a34ce019e6012fab70c532d34ec827655e1c4fa5f6823a3d0f95e008f64f39c9f5a_1280.jpg",
          imageAlt: "Custom flower arrangement for gifting",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
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

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "feat-1",
          label: "Weddings & Events",
          title: "Bespoke Floral Designs",
          items: [
            "Custom bouquets & centerpieces",
            "Venue decoration",
            "Consultation & planning",
          ],
          buttons: [
            {
              text: "Learn More",
              href: "/contact",
            },
          ],
        },
        {
          id: "feat-2",
          label: "Daily Deliveries",
          title: "Fresh Flowers at Your Door",
          items: [
            "Same-day delivery options",
            "Hand-tied bouquets",
            "Subscription services",
          ],
          buttons: [
            {
              text: "Order Now",
              href: "/shop",
            },
          ],
        },
        {
          id: "feat-3",
          label: "Workshops",
          title: "Unleash Your Inner Florist",
          items: [
            "Beginner to advanced classes",
            "Seasonal floral workshops",
            "Private group sessions",
          ],
          buttons: [
            {
              text: "Sign Up",
              href: "/contact",
            },
          ],
        },
      ]}
      title="Our Studio Services"
      description="At Bako, we go beyond flowers to create unforgettable experiences."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test-1",
          name: "Sarah L.",
          handle: "@SarahL",
          testimonial: "Bako Flowers created the most stunning bridal bouquet for my wedding day. It was absolutely perfect and exceeded all my expectations!",
          imageSrc: "https://pixabay.com/get/g72d64a70865bb66cb96ef368328ff1cac7be600fa68c7be7d7a31d9f9f0436c17926bbbb1aa606d87db61f5d319883ddfec40ef76936b93fd487c79d28f25ee8_1280.jpg",
          imageAlt: "Smiling woman holding a wedding bouquet",
        },
        {
          id: "test-2",
          name: "Mark T.",
          handle: "@MarkT",
          testimonial: "I ordered a custom arrangement for my anniversary, and Bako delivered a masterpiece. My wife was thrilled!",
          imageSrc: "https://pixabay.com/get/g3dd304850364fcebeb474578b0d6e075c2a09c001ae9078de00d597dee8c5d84825e23f6cd6f54058a38e0e5fa6f3227bcbcdb0a1d0470e49eadc6eac994704b_1280.jpg",
          imageAlt: "Man admiring a flower arrangement",
        },
        {
          id: "test-3",
          name: "Emily P.",
          handle: "@EmilyP",
          testimonial: "Their weekly subscription service is a game-changer. Fresh, beautiful flowers delivered right to my office, always brightens the space.",
          imageSrc: "https://pixabay.com/get/gd80a8370f94163c01dde263b6bdfb595d1edb175a910b03c92b5965f1b0397628887e3db919b7aefe55eb4ecd5aa557192f5cca145d0ed88541327ec391a60e7_1280.jpg",
          imageAlt: "Woman working in an office with flowers",
        },
        {
          id: "test-4",
          name: "David K.",
          handle: "@DavidK",
          testimonial: "The floral workshop was so much fun and very informative. I learned so much and got to take home a gorgeous arrangement.",
          imageSrc: "https://pixabay.com/get/gc96f0a6e8c520ffe4cb04c79ae9ce997ac894af32670a5512edd05a5ee84b48d94a9def019e895ea8fc4c850fb0f17fac1b368b6696a50b8de92cf0496a3c21d_1280.jpg",
          imageAlt: "Person arranging flowers in a workshop",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from those who've experienced the Bako difference."
      speed={40}
      topMarqueeDirection="left"
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
