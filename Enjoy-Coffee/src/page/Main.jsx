import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import Slider from "../componets/commons/Slider.jsx";
import DataFetcher from "../api/DataFetcher.jsx";
// import MiddleSlider from "../componets/commons/MiddleSlider.jsx";
import Bottom_Main from "../componets/commons/Bottom_Main.jsx";
import Footer from "../componets/footer/footer.jsx";
const Main = () => {
  return (
    <div>
      <Nav />
      <DataFetcher />
      <Slider />
      {/* <MiddleSlider /> */}
      <Bottom_Main />
      <Footer />
      {/* <ProductList /> */}
    </div>
  );
};

export default Main;
