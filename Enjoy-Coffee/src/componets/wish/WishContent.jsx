import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { WishState } from "../../recoil/recoilState";
import EmptyWish from "./EmptyWish";
import { Link } from "react-router-dom";
import * as S from "./WishContentStyle";
const WishContent = () => {
  const [wish, setWish] = useRecoilState(WishState);
  const [wishAll, setWishAll] = useState(false);
  const WishItem = useRecoilValue(WishState);
  const toggleSelect = (id) => {
    setWish((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  const toggleSelectAll = () => {
    setWishAll((prevSelectAll) => !prevSelectAll);
    setWish((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: !wishAll }))
    );
  };
  const deleteSelectedItems = () => {
    const updatedItems = WishItem.filter((item) => !item.selected);
    setWish(updatedItems);
  };
  return (
    <S.Container>
      <h2>위시리스트</h2>
      {wish.length === 0 ? (
        <EmptyWish />
      ) : (
        <div className="wish-box">
          <div className="box-header">
            <div>위시리스트</div>
          </div>
          <div className="box-content">
            <div className="title">
              <input
                type="checkbox"
                checked={wishAll}
                onChange={toggleSelectAll}
              />
              <div>이미지</div>
              <div>상품정보</div>
            </div>
            {WishItem.map((product, index) => (
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
              </div>
            ))}
          </div>
          <div className="delete-box">
            <button onClick={deleteSelectedItems}>삭제하기</button>
          </div>
        </div>
      )}
    </S.Container>
  );
};

export default WishContent;
