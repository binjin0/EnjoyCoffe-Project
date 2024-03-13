import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import CartContent from "../componets/cart/CartContent.jsx";
import Basket from "../componets/cart/Basket.jsx";
import Footer from "../componets/footer/footer.jsx";
import Price from "../componets/cart/Price.jsx";
const Cart = () => {
  return (
    <div>
      <Nav />
      {/* <CartContent /> */}
      <Basket />
      {/* <Price /> */}
      <Footer />
    </div>
  );
};

export default Cart;
