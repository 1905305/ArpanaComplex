import { useRef, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import FloorPlan from "./components/FloorPlan";
import ShopDirectory from "./components/ShopDirectory";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedShop, setSelectedShop] = useState("General enquiry");
  const contactRef = useRef(null);

  function handleEnquire(shopLabel) {
    setSelectedShop(shopLabel);
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.getElementById("fname")?.focus({ preventScroll: true });
    }, 400);
  }

  return (
    <>
      <Nav />
      <Hero />
      <Location />
      <Gallery />
      <FloorPlan onEnquire={handleEnquire} />
      <ShopDirectory onEnquire={handleEnquire} />
      <Amenities />
      <Contact selectedShop={selectedShop} setSelectedShop={setSelectedShop} contactRef={contactRef} />
      <Footer />
    </>
  );
}
