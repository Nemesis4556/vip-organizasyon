import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Categories from "./sections/Categories";
import Services from "./sections/Services";
import FeaturedPackages from "./sections/FeaturedPackages";
import Inspiration from "./sections/Inspiration";
import Venue from "./sections/Venue";
import Testimonials from "./sections/Testimonials";
import Brand from "./sections/Brand";
import InstagramSection from "./sections/InstagramSection";
import StoreInfo from "./sections/StoreInfo";
import FinalCta from "./sections/FinalCta";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Categories />
        <Services />
        <FeaturedPackages />
        <Inspiration />
        <Venue />
        <Testimonials />
        <Brand />
        <InstagramSection />
        <StoreInfo />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
