import React from "react";
import * as S from "./CartModalStyle";
import { useRecoilState } from "recoil";
import { CartState } from "../../recoil/recoilState";
import { Link } from "react-router-dom";
const CartModal = ({ closeModal, children }) => {
  return (
    <S.Container>
      <div className="modal-header">
        <p>장바구니 담기</p>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
      <div className="modal-content">
        <p>
          선택하신 상품을 장바구니에 담았습니다. 지금 장바구니를
          확인하시겠습니까?
        </p>
      </div>
      <div className="modal-btn">
        <button onClick={closeModal}>계속 구경하기</button>
        <Link to="/Cart">
          <button className="cart-go">장바구니로 이동</button>
        </Link>
      </div>
    </S.Container>
  );
};

export default CartModal;
