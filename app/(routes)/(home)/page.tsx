import Navigation from "../../_components/Navigation";
import About from "./_components/About";
import Hero from "./_components/Hero";
import InspiredBy from "./_components/InspiredBy";
import Tanglefolk from "./_components/Tanglefolk";
import Newsletter from "./_components/Newsletter";
import Contact from "./_components/Contact";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Tanglefolk />
      <InspiredBy />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
