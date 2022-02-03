import React from "react";
import Hero from "../components/Services/Hero";
import MainServices from "../components/Services/MainServices";
import Contact from "../components/Home/Contact";

export default function Services() {
  return (
    <div className="lg:mx-20 sm:mx-12 mx-2">
      <Hero />
      <MainServices />
      <Contact />
    </div>
  );
}
