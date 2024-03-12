import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import { CoffeBeanLoaed } from "../componets/Products/ProductLoad";
import Footer from "../componets/footer/footer.jsx";

const CoffeeBean = () => {
  return (
    <div>
      <Nav />
      <CoffeBeanLoaed />
      <Footer />
    </div>
  );
};

export default CoffeeBean;
