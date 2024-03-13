import React from "react";
import * as S from "./CartContentStyle";
import { useRecoilValue } from "recoil";
import { TotalPriceSelector } from "../../recoil/recoilSelector";
const Price = () => {
  const TotalPrice = useRecoilValue(TotalPriceSelector);

  return (
    <S.Container>
      <div className="order-box">
        <div className="order-content">
          <div className="order-header">총 주문금액</div>
          <div className="order-header">+ 배송비</div>
          <div className="order-header">= 총 결제금액</div>
          <div className="order-price">{`${TotalPrice}`}원</div>
          <div className="order-price">3000</div>
          <div className="order-price">{`${TotalPrice + 3000}`}원</div>
        </div>
        <button>구매하기</button>
      </div>
    </S.Container>
  );
};

export default Price;
