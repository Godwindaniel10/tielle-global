import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Inquiry from "./components/Inquiry/Inquiry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="our-work" element={<AboutUs />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
