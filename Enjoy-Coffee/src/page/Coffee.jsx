import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import { CoffeLoaed } from "../componets/Products/ProductLoad.jsx";
import Footer from "../componets/footer/footer.jsx";

const Coffee = () => {
  return (
    <div>
      <Nav />
      <CoffeLoaed />
      <Footer />
    </div>
  );
};

export default Coffee;
