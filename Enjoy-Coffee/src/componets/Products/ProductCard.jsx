import React from "react";
import * as S from "./ProductCardStyle";
const ProductCard = ({ product }) => {
  return (
    <S.Container>
      <ul>
        <li key={product.id}>
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>

          <p>{product.price}원</p>
        </li>
      </ul>
    </S.Container>
  );
};

export default ProductCard;
