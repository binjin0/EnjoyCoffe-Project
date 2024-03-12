import React, { useState, useEffect } from "react";
import { DataState } from "../../recoil/recoilState";
import { useParams } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./DetailCardStyle";
import CartModal from "../cart/CartModal";
import { CartState } from "../../recoil/recoilState";
import { WishState } from "../../recoil/recoilState";
const DetailCard = () => {
  //해당 제품 뜨도록
  const { id } = useParams();
  console.log(id);
  const ProductList = useRecoilValue(DataState);
  const product = ProductList.find((product) => product.id === parseInt(id));

  //빈하트, 채워진 하트
  const [hearted, setHearted] = useState(false);
  const [wishList, setWishList] = useRecoilState(WishState);
  useEffect(() => {
    const storedHearted = localStorage.getItem(`hearted_${product.id}`);
    if (storedHearted === "true") {
      setHearted(true);
    }
  }, [product.id]);
  useEffect(() => {
    const isProductInWishlist = wishList.some((item) => item.id === product.id);
    setHearted(isProductInWishlist);
  }, [product.id, wishList]);
  useEffect(() => {
    localStorage.setItem(`hearted_${product.id}`, hearted.toString());
  }, [hearted, product.id]);
  const toggleHeart = () => {
    const isProductInWishlist = wishList.some((item) => item.id === product.id);
    if (!isProductInWishlist) {
      setWishList([...wishList, product]); // 관심 상품 추가
      setHearted(true); // 하트를 채워진 상태로 업데이트
    } else {
      setWishList(wishList.filter((item) => item.id !== product.id)); // 관심 상품 삭제
      setHearted(false); // 하트를 빈 상태로 업데이트
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //장바구니 추가
  const [cart, setCart] = useRecoilState(CartState);
  const addToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      // 이미 장바구니에 있는 상품인 경우 수량 증가
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // 장바구니에 없는 상품인 경우 새로 추가
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <S.Container>
        <div className="imgbox">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="descriptionbox" key={product.id}>
          <h2>{product.title}</h2>
          <div className="description">
            <p>{product.description}</p>
            <p>{product.notes}</p>
          </div>
          <div className="pricebox">
            <div>
              <span>판매가</span>
              <span>{product.price}원</span>
            </div>
            <div>
              <span>배송비</span>
              <span>3000원</span>
            </div>
          </div>
          <div className="btn">
            <button className="heartbtn" onClick={toggleHeart}>
              {hearted ? (
                <BsHeartFill size="20" color="#2f2f2f" />
              ) : (
                <BsHeart size="20" color="#2f2f2f" />
              )}
            </button>
            <button
              className="cartbtn"
              onClick={() => {
                openModal();
                addToCart();
              }}
            >
              <RiShoppingCart2Line size="20" color="#2f2f2f" />
            </button>
            {isModalOpen && (
              <CartModal closeModal={closeModal}>
                {/* <button onClick={closeModal}>계속 구경하기</button>
                <button onClick={closeModal}>장바구니로 이동</button> */}
              </CartModal>
            )}
            <button className="buybtn">바로구매</button>
          </div>
        </div>
      </S.Container>
    </div>
  );
};

export default DetailCard;
