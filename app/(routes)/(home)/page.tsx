import Navigation from "../../_components/Navigation";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Tanglefolk from "./_components/Tanglefolk";
import Newsletter from "./_components/Newsletter";
import Contact from "./_components/Contact";
import Footer from "@/app/_components/Footer";
import ComingSoon from "./_components/ComingSoon";
import { ModalWindow } from "@/app/_components/Modal";
import PurchaseModal from "@/app/_components/modalWindows/PurchaseModal";
import Visits from "./_components/Visits";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <About />
        <Tanglefolk />
        <ComingSoon />
        <Visits />
        <Newsletter />
        <Contact />
      </main>
      <Footer />

      <ModalWindow id="purchase">
        <PurchaseModal />
      </ModalWindow>
    </>
  );
}
