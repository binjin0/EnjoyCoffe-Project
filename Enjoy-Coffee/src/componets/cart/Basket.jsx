import React, { useState } from "react";
import * as S from "./CartContentStyle";
import { CartState } from "../../recoil/recoilState";
import EmptyCart from "./EmptyCart";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { TotalPriceSelector } from "../../recoil/recoilSelector";
const Basket = () => {
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
  const [cart, setCart] = useRecoilState(CartState);
  const deleteSelectedItems = () => {
    const updatedItems = cart.filter((item) => !item.selected);
    setCart(updatedItems);
  };
  // const incrementItem = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };
  // const incrementItem = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             quantity: item.quantity + 1,
  //             price:
  //               parseInt(item.price) +
  //               parseInt(item.price) * parseInt(item.quantity),
  //           }
  //         : item
  //     )
  //   );
  // };
  const incrementItem = (id) => {
    setCart((cart) =>
      cart.map((item) => {
        const newQuantity = item.quantity + 1;
        const newPrice = parseFloat(item.price) * newQuantity;
        console.log(
          `상품 ID: ${item.id}, 증가된 수량: ${newQuantity}, 새로운 가격: ${newPrice}`
        );
        return item.id === id
          ? { ...item, quantity: newQuantity, price: newPrice }
          : item;
      })
    );
  };
  // const decreaseItem = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  //     )
  //   );
  // };
  // const decreaseItem = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id && item.quantity > 0
  //         ? {
  //             ...item,
  //             quantity: item.quantity - 1,
  //             price:
  //               parseInt(item.price) +
  //               parseInt(item.price) * parseInt(item.quantity),
  //           } // 상품 수량 감소 및 가격 업데이트
  //         : item
  //     )
  //   );
  // };
  const decreaseItem = (id) => {
    setCart((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          const newQuantity = item.quantity - 1;
          const newPrice = parseFloat(item.price) * newQuantity;
          // const price = parseFloat(item.price);
          console.log(
            `상품 ID: ${item.id}, 감소된 수량: ${newQuantity}, 새로운 가격: ${newPrice},  현재 가격: ${item.price},`
          );
          return { ...item, quantity: newQuantity, price: newPrice };
        } else {
          return item;
        }
      })
    );
  };
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
            {cart.map((product, index) => (
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
            <button>구매하기</button>
            {/* <div className="order-content">
              <div className="order-header">총 주문금액</div>
              <div className="order-header">+ 배송비</div>
              <div className="order-header">= 총 결제금액</div>
              <div className="order-price">원</div>
              <div className="order-price">3000</div>
              <div className="order-price">원</div>
            </div> */}
          </div>
        </div>
      )}
      {/* {cart.map((product, index) => {
        <div key={index}>{product.title}</div>;
      })} */}
    </S.Container>
  );
};

export default Basket;
