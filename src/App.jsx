import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HotDesert from "./Components/HotDesert/HotDesert";
import Banner from "./Components/Banner/Banner";
import PopularReceipe from "./Components/PopularReceipe/PopularReceipe";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDesert />
      <Banner />
      <PopularReceipe />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
