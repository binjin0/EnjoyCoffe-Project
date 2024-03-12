import React from "react";
import * as S from "./ProductCardStyle";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
const ProductCard = ({ product }) => {
  return (
    <S.Container>
      <ul>
        <li key={product.id}>
          <Link to={`/${product.id}`}>
            <img src={product.img} alt={product.title} />
          </Link>
          <Link to={`/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>

          <p>{product.price}</p>
          <p className="won">원</p>
        </li>
      </ul>
    </S.Container>
  );
};

export default ProductCard;
