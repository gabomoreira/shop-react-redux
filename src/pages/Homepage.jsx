import React from "react";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";

const Homepage = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Homepage;
