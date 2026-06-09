import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'ELKASR - Timeless Luxury Jewelry Crafted for Generations',
  description: 'Discover ELKASR\'s exquisite handcrafted diamond, bridal, and gold jewelry collections. Experience exceptional craftsmanship, personalized service, and certified authenticity for timeless pieces.',
  keywords: ["luxury jewelry, Elkasr, fine jewelry, diamond collection, bridal jewelry, gold designs, custom jewelry, Egypt jewelry, handcrafted jewelry, Egyptian luxury jewelry"],
  openGraph: {
    "title": "ELKASR - Timeless Luxury Jewelry",
    "description": "Discover ELKASR's exquisite handcrafted diamond, bridal, and gold jewelry collections. Experience exceptional craftsmanship and personalized service.",
    "url": "https://www.elkasr.com",
    "siteName": "ELKASR",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/shiny-gold-christmas-snowflake-close-up-holiday-accessories-christmas-tree_78492-3902.jpg",
        "alt": "ELKASR Luxury Jewelry"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ELKASR - Timeless Luxury Jewelry",
    "description": "Discover ELKASR's exquisite handcrafted diamond, bridal, and gold jewelry collections. Experience exceptional craftsmanship and personalized service.",
    "images": [
      "http://img.b2bpic.net/free-photo/shiny-gold-christmas-snowflake-close-up-holiday-accessories-christmas-tree_78492-3902.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
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
