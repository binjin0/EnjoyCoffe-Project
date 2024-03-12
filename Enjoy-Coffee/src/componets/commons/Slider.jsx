import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import * as S from "./SliderStyle";
Link;
const Slider = () => {
  const images = [
    {
      label: "Image 1",
      alt: "image1",
      url: "../../../src/assets/banner/workspace-1280538_1920 (1).jpg",
      title: "커피의 시작",
      description: "' Enjoy Coffee ' 로부터 ",
      textPosition: { top: "30%", left: "30%" },
      link: "/",
      textColor: "#ffffff",
    },

    {
      label: "Image 2",
      alt: "image2",
      url: "../../../src/assets/banner/coffee-171653_1920 (1).jpg",
      // title: "홈카페 입문",
      description:
        "우리의 정성이 담긴 신선한 원두로 커피를 새롭게 경험해보세요.",
      link: "/",
      textPosition: { top: "35%", left: "70%" },
      textColor: "#ffffff",
    },

    {
      label: "Image 3",
      alt: "image3",
      url: "../../../src/assets/banner/coffee-4746773_1920.jpg",
      // title: "신선한 식품!",
      description:
        "진정한 커피 애호가를 위한 원두, 우리의 컬렉션을 만나보세요.",
      link: "/",
      textPosition: { top: "80%", left: "75%" },
      textColor: "#f5f5dc",
    },
    {
      label: "Image 4",
      alt: "image4",
      url: "../../../src/assets/banner/coffee-1213249_1920 (1).jpg",
      title: "생두 판매!",
      description:
        "원두부터 진정한 커피의 시작, 신선하고 품질 높은 생두를 만나보세요.",
      link: "/",
      textPosition: { top: "30%", left: "70%" },
      textColor: "#2d2628",
    },
  ];

  const [animationKey, setAnimationKey] = useState(0);
  const renderCenterText = (currentSlide) => {
    const { title, description, link, textPosition, textColor } =
      images[currentSlide];

    return (
      <div
        key={animationKey}
        className="text-container"
        style={{
          top: textPosition.top,
          left: textPosition.left,
          color: textColor,
        }}
      >
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        {currentSlide === 0 && (
          <Link to={link}>
            <div className="go">바로가기</div>
          </Link>
        )}
      </div>
    );
  };
  const renderArrowPrev = (onClickHandler, hasPrev, label) => {
    return (
      hasPrev && (
        <div className="custom-arrow prev" onClick={onClickHandler}>
          <FaChevronLeft size="40" />
        </div>
      )
    );
  };
  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <div className="custom-arrow next" onClick={onClickHandler}>
        <FaChevronRight size="40" />
      </div>
    );

  return (
    <S.Container>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        onChange={() => setAnimationKey((prevKey) => prevKey + 1)}
        // renderIndicator={renderIndicator}
        className=" w-screen"
      >
        {images.map((image, index) => (
          <div key={image.label}>
            <img
              className="slider-img"
              key={image.label}
              src={image.url}
              alt={image.alt}
            />
            {renderCenterText(index)}
            {/* <S.TextContainer>{renderCenterText(index)}</S.TextContainer> */}
          </div>
        ))}
      </Carousel>
    </S.Container>
  );
};

export default Slider;
