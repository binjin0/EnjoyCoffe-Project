import React from "react";
import { useRecoilValue } from "recoil";
import { DataState } from "../../recoil/recoilState";
const ProductList = () => {
  const productList = useRecoilValue(DataState);
  if (productList.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productList.state === "hasError") {
    return <div>Error: {productList.contents.message}</div>;
  }
  return (
    <div>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.img} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
