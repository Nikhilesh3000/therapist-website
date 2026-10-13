import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoWeHelp from "@/components/WhoWeHelp";
import FullWidthBanner from "@/components/FullWidthBanner";
import Specialties from "@/components/Specialties"; // The tag-list "Areas of expertise"
import Services from "@/components/Services";       // The 4-card "Our specialties include..."
import OfficeSection from "@/components/OfficeSection"; // Custom Section
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BookingCta from "@/components/BookingCta"; // Custom Section
import QuoteDivider from "@/components/QuoteDivider"; // Custom Section



export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF9F5]">
      <Navbar />
      <Hero />
      <About />
      <WhoWeHelp />
      <FullWidthBanner />
      <Specialties />
      <QuoteDivider /> 
      <Services />
      <OfficeSection />
      <BookingCta /> 
      <FaqSection />
      <Footer />
    </main>
  );
}