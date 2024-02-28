import React from "react";
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
  return (
    <S.Container>
      {coffeebeansList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
export const CoffeLoaed = () => {
  const coffeebeansList = useRecoilValue(coffee);
  return (
    <S.Container>
      {coffeebeansList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export const GreenBeanLoaed = () => {
  const coffeebeansList = useRecoilValue(greenbeans);
  return (
    <S.Container>
      {coffeebeansList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export const EtcLoaed = () => {
  const coffeebeansList = useRecoilValue(etc);
  return (
    <S.Container>
      {coffeebeansList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
