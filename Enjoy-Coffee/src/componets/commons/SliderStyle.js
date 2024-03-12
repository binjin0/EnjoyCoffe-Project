import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}`;
export const Container = styled.div`
  padding-top: 195px;
  .text-container {
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    animation: ${fadeIn} 1.5s ease-in;
    font-family: "Nanum Myeongjo";
    .title {
      font-size: 60px;
    }
    .description {
      margin: 30px 0;
      font-size: 28px;
      line-height: 1.5;
    }
    .go {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 50px;
      border-radius: 10%;
      background-color: #2d2628;
      font-family: "Barlow";
    }
  }
  .custom-arrow {
    border: none;
    z-index: 998;
    position: absolute;
    color: white;
  }
  .prev {
    top: 50%;
    left: 1%;
  }
  .next {
    top: 50%;
    right: 1%;
  }
  @media (max-width: 1600px) {
    .text-container {
      .title {
        font-size: 45px;
      }

      .description {
        font-size: 25px;
        line-height: 1.5;
        margin: 10px 0;
      }

      .go {
        width: 100px;
        height: 40px;
      }
    }
  }
  @media (max-width: 1280px) {
    .text-container {
      .title {
        font-size: 30px;
      }

      .description {
        font-size: 17px;
        line-height: 1.5;
        margin: 10px 0;
      }

      .go {
        width: 70px;
        height: 40px;
      }
    }
  }

  @media (max-width: 800px) {
    .text-container {
      .title {
        font-size: 25px;
      }

      .description {
        margin: 10px 0;
        font-size: 12px;
        line-height: 1.5;
      }

      .go {
        font-size: 10px;
        width: 50px;
        height: 30px;
      }
    }
  }
`;
