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
  description: "Licensed Clinical Psychologist in Santa Monica offering CBT, EMDR, and somatic therapy for high-achieving adults experiencing anxiety, trauma, and burnout.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="font-sans bg-[#FBF9F5] text-[#242A27] antialiased">
        {children}
      </body>
    </html>
  );
}