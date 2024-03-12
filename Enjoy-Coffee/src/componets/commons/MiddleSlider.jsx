import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as S from "./MiddleSliderStyle";
const MiddleSlider = () => {
  const images = [
    {
      label: "Image 1",
      alt: "image1",
      url: "../../../src/assets/middlebanner/coffee-3759024_1920 (1).jpg",
      title: "합리적인 가격, 다양한 선택지",
      description: "' Enjoy Coffee ' 에서 시작하자 ",
      textPosition: { top: "30%", left: "30%" },
      link: "/",
      textColor: "#ffffff",
    },

    {
      label: "Image 2",
      alt: "image2",
      url: "../../../src/assets/middlebanner/coffee-5176961_1920 (1).jpg",
      title: "집에서도 우아하게",
      description: "지금 당장 홈카페 시작하세요",
      link: "/",
      textPosition: { top: "35%", left: "70%" },
      textColor: "#ffffff",
    },

    {
      label: "Image 3",
      alt: "image3",
      url: "../../../src/assets/middlebanner/iced-coffee-5703345_1920 (1).jpg",
      title: "이번달은 에티오피아 원두!",
      description: "향긋함을 즐겨보세요",
      link: "/",
      textPosition: { top: "80%", left: "75%" },
      textColor: "#f5f5dc",
    },
  ];
  const renderCenterText = (currentSlide) => (
    <div className="text-container">
      <h2 className="title">{images[currentSlide].title}</h2>
      <p className="description">{images[currentSlide].description}</p>
    </div>
  );

  return (
    <S.MiddleBanner>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={image.label}>
            <img key={image.label} src={image.url} alt={image.alt} />
            {renderCenterText(index)}
          </div>
        ))}
      </Carousel>
      <div className="right">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <img
            src="../../../src/assets/middlebanner/coffee-beans-1291656_1280.jpg"
            className="imge1"
          />
        </Carousel>
        {/* <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <img
              src="../../../src/assets/middlebanner/coffee-3387128_1920.jpg"
              className="imge"
            />
          </Carousel> */}

        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <img
            src="../../../src/assets/middlebanner/coffee-beans-1291656_1280.jpg"
            className="imge2"
          />
        </Carousel>
      </div>
    </S.MiddleBanner>
  );
};
export default MiddleSlider;
