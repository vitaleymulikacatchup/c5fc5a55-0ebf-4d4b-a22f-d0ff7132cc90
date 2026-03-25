import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Bako Flowers Studio - Exquisite Floral Designs',
  description: 'Bako Flowers Studio crafts bespoke floral arrangements for weddings, events, and daily deliveries. Discover fresh, elegant bouquets and join our creative workshops.',
  keywords: ["flower studio, floral design, flower delivery, custom bouquets, wedding flowers, event floristry, flower workshops, Bako Flowers"],
  openGraph: {
    "title": "Bako Flowers Studio - Exquisite Floral Designs",
    "description": "Bako Flowers Studio crafts bespoke floral arrangements for weddings, events, and daily deliveries. Discover fresh, elegant bouquets and join our creative workshops.",
    "url": "https://www.bakoflowers.com",
    "siteName": "Bako Flowers Studio",
    "images": [
      {
        "url": "https://pixabay.com/get/gad1985b451dfe231613bd22e3f88934d188b08b24fd6af9bf333936fe8a28902e86e281e2e534ef723844239935aa92ab51bc6cc8ff43291bb967e835d262413_1280.jpg",
        "alt": "Vibrant flower bouquet in a studio setting"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Bako Flowers Studio - Exquisite Floral Designs",
    "description": "Bako Flowers Studio crafts bespoke floral arrangements for weddings, events, and daily deliveries. Discover fresh, elegant bouquets and join our creative workshops.",
    "images": [
      "https://pixabay.com/get/gad1985b451dfe231613bd22e3f88934d188b08b24fd6af9bf333936fe8a28902e86e281e2e534ef723844239935aa92ab51bc6cc8ff43291bb967e835d262413_1280.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
