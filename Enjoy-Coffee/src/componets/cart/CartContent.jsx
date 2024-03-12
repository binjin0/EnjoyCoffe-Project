import React, { useState, useEffect } from "react";
import * as S from "./CartContentStyle";
import { CartState } from "../../recoil/recoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import { TotalPriceSelector } from "../../recoil/recoilSelector";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
const CartContent = () => {
  const [cart, setCart] = useRecoilState(CartState);
  const cartItems = useRecoilValue(CartState);
  const [selectAll, setSelectAll] = useState(false);
  const toggleSelect = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  const toggleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setCart((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: !selectAll }))
    );
  };

  const deleteSelectedItems = () => {
    const updatedItems = cartItems.filter((item) => !item.selected);
    setCart(updatedItems);
  };
  const incrementItem = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseItem = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const TotalPrice = useRecoilValue(TotalPriceSelector);
  return (
    <S.Container>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="order-box">
          <div className="box-header">
            <div>배송상품</div>
          </div>
          <div className="box-content">
            <div className="title">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
              <div>이미지</div>
              <div>상품정보</div>
              <div>수량</div>
              <div>상품구매금액</div>
            </div>
            {cartItems.map((product, index) => (
              <div className="content" key={index}>
                <input
                  type="checkbox"
                  checked={product.selected}
                  onChange={() => toggleSelect(product.id)}
                />

                <Link to={`/${product.id}`}>
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="product-description">
                  <Link to={`/${product.id}`}>
                    <p className="product-title">[{product.title}]</p>
                  </Link>
                  <p className="prodcut-content">{product.description}</p>
                </div>
                <div className="product-qty">
                  <button onClick={() => decreaseItem(product.id)}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => incrementItem(product.id)}>+</button>
                </div>
                <div className="product-price">{product.price}원</div>
              </div>
            ))}
          </div>
          <div className="order-box">
            <button onClick={deleteSelectedItems}>삭제하기</button>
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
        </div>
      )}
    </S.Container>
  );
};

export default CartContent;
