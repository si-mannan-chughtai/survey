import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";

const Qeclayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Qeclayout;
