import React from "react";
import Analytics from "../components/Analytics";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <div className="w-full bg-[#0a192f]">
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
