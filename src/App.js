import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import OurWork from "./Pages/OurWork";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";

export default function App() {
  return (
    <div className="relative">
      <Home />
      <AboutUs />
      <Services />
      <OurWork />
      <CustomerFeedback/>
    </div>
  );
}
