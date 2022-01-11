import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavbarTwo />
      <Categories />
      <h1>Popular Products</h1>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
