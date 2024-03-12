import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import { GreenBeanLoaed } from "../componets/Products/ProductLoad.jsx";
import Footer from "../componets/footer/footer.jsx";

const GreenBean = () => {
  return (
    <div>
      <Nav />
      <GreenBeanLoaed />
      <Footer />
    </div>
  );
};

export default GreenBean;
