import React from "react";
import Nav from "../componets/nav/Nav.jsx";
import DataFetcher from "../api/DataFetcher.jsx";
import ProductList from "../componets/Products/ProductList.jsx";
const Main = () => {
  return (
    <div>
      <Nav />
      <DataFetcher />
      <ProductList />
    </div>
  );
};

export default Main;
