import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description:
    "Licensed Clinical Psychologist in Santa Monica offering evidence-based CBT, EMDR, and somatic therapy for high-achieving adults navigating anxiety, trauma, and burnout. In-person & California telehealth.",
  keywords: [
    "Therapist Santa Monica",
    "Psychologist Santa Monica CA",
    "EMDR Therapy California",
    "Trauma Therapy Santa Monica",
    "Anxiety and Panic Psychologist",
    "Executive Burnout Therapy",
    "Dr Maya Reynolds PsyD",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy & Counseling in Santa Monica",
    description:
      "Specialized, evidence-based therapy for high-achieving adults, creatives, and professionals in Santa Monica and across California.",
    url: "https://therapist-website-alpha-pied.vercel.app/#", // replace with your actual vercel link
    siteName: "Dr. Maya Reynolds Clinical Psychology",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Dr. Maya Reynolds, PsyD",
    "image": "https://your-vercel-domain.vercel.app/images/maya-portrait.jpg",
    "description": "Licensed Clinical Psychologist in Santa Monica offering CBT, EMDR, and somatic therapy for anxiety, trauma, and burnout.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0195,
      "longitude": -118.4912
    },
    "telephone": "+1-310-555-0192",
    "priceRange": "$$$",
    "areaServed": ["Santa Monica", "Los Angeles", "California"],
    "medicalSpecialty": ["Psychology", "Trauma", "Anxiety", "EMDR"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}