import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  coffeebeans,
  coffee,
  greenbeans,
  etc,
} from "../../recoil/recoilSelector";
import ProductCard from "./ProductCard";
import * as S from "./ProductLoadStyle";

export const CoffeBeanLoaed = () => {
  const coffeebeansList = useRecoilValue(coffeebeans);
  const [sortBy, setSortBy] = useState("");
  const sortData = (data, sortType) => {
    switch (sortType) {
      case "salesDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
      case "priceAsc":
        return data
          .slice()
          .sort((a, b) => parseInt(a.price) - parseInt(b.price));
      case "priceDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.price) - parseInt(a.price));
      default:
        return data;
    }
  };
  const sortedData = sortData(coffeebeansList, sortBy);
  return (
    <S.Container>
      <div className="product-fillter">
        <select
          className="select-box"
          name="choice"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">기본순</option>
          <option value="salesDesc">주문순</option>
          <option value="priceAsc">낮은 가격순</option>
          <option value="priceDesc">높은 가격순</option>
        </select>
      </div>
      <div className="product-list">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </S.Container>
  );
};
export const CoffeLoaed = () => {
  const coffeebeansList = useRecoilValue(coffee);
  const [sortBy, setSortBy] = useState("");
  const sortData = (data, sortType) => {
    switch (sortType) {
      case "salesDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
      case "priceAsc":
        return data
          .slice()
          .sort((a, b) => parseInt(a.price) - parseInt(b.price));
      case "priceDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.price) - parseInt(a.price));
      default:
        return data;
    }
  };
  const sortedData = sortData(coffeebeansList, sortBy);
  return (
    <S.Container>
      <div className="product-fillter">
        <select
          className="select-box"
          name="choice"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">기본순</option>
          <option value="salesDesc">주문순</option>
          <option value="priceAsc">낮은 가격순</option>
          <option value="priceDesc">높은 가격순</option>
        </select>
      </div>
      <div className="product-list">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </S.Container>
  );
};

export const GreenBeanLoaed = () => {
  const coffeebeansList = useRecoilValue(greenbeans);
  const [sortBy, setSortBy] = useState("");
  const sortData = (data, sortType) => {
    switch (sortType) {
      case "salesDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
      case "priceAsc":
        return data
          .slice()
          .sort((a, b) => parseInt(a.price) - parseInt(b.price));
      case "priceDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.price) - parseInt(a.price));
      default:
        return data;
    }
  };
  const sortedData = sortData(coffeebeansList, sortBy);
  return (
    <S.Container>
      <div className="product-fillter">
        <select
          className="select-box"
          name="choice"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">기본순</option>
          <option value="salesDesc">주문순</option>
          <option value="priceAsc">낮은 가격순</option>
          <option value="priceDesc">높은 가격순</option>
        </select>
      </div>
      <div className="product-list">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </S.Container>
  );
};

export const EtcLoaed = () => {
  const coffeebeansList = useRecoilValue(etc);
  const [sortBy, setSortBy] = useState("");
  const sortData = (data, sortType) => {
    switch (sortType) {
      case "salesDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.sales) - parseInt(a.sales));
      case "priceAsc":
        return data
          .slice()
          .sort((a, b) => parseInt(a.price) - parseInt(b.price));
      case "priceDesc":
        return data
          .slice()
          .sort((a, b) => parseInt(b.price) - parseInt(a.price));
      default:
        return data;
    }
  };
  const sortedData = sortData(coffeebeansList, sortBy);
  return (
    <S.Container>
      <div className="product-fillter">
        <select
          className="select-box"
          name="choice"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">기본순</option>
          <option value="salesDesc">주문순</option>
          <option value="priceAsc">낮은 가격순</option>
          <option value="priceDesc">높은 가격순</option>
        </select>
      </div>
      <div className="product-list">
        {sortedData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </S.Container>
  );
};
