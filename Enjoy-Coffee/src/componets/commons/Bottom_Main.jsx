import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { DataState } from "../../recoil/recoilState";
import * as S from "./Bottom_Main_Style";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import ProductCard from "../Products/ProductCard";
const Bottom_Main = () => {
  const productList = useRecoilValue(DataState);
  const sortedProducts = [...productList].sort((a, b) => b.sales - a.sales);
  const topProducts = sortedProducts.slice(0, 10);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <S.Container>
      <h2 className="title">이달의 BEST</h2>
      <Slider {...settings}>
        {topProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.img} alt="" />
            <p>{product.title}</p>
          </div>
        ))}
      </Slider>
    </S.Container>
  );
};

export default Bottom_Main;
