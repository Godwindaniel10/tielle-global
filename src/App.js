import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import OurWork from "./Pages/OurWork";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="relative">
      <Home />
      <AboutUs />
      <Services />
      <OurWork />
      <CustomerFeedback />
      <Contact />
      <Footer />
    </div>
  );
}
