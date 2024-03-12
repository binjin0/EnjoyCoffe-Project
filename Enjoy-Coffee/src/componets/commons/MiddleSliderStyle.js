import styled from "styled-components";

export const MiddleBanner = styled.div`
  margin-top: 50px;
  padding: 30px;
  display: grid;
  max-width: 1300px;
  grid-template-columns: 1fr 1fr;

  .text-container {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* text-align: center; */
    color: white;
    font-family: "Barlow";
    .title {
      font-size: 22px;
      line-height: 3;
    }
    .description {
      font-size: 30px;
    }
  }
  .right {
    padding-left: 4%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    /* display: flex;
    flex-direction: column; */
    /* display: grid;
    grid-template-rows: 1fr 1fr; */
    .imge1 {
      /* height: 100%; */
      /* padding-bottom: 20px; */
      height: 95%;
    }
    .imge2 {
      height: 95%;
    }
  }
  @media (max-width: 1600px) {
    .text-container {
      .title {
        font-size: 17px;
      }

      .description {
        font-size: 23px;
      }
    }
  }
  @media (max-width: 1280px) {
    .text-container {
      .title {
        font-size: 10px;
        line-height: 4;
      }

      .description {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 800px) {
    .text-container {
      .title {
        font-size: 7px;
        line-height: 4;
      }

      .description {
        font-size: 9px;
        font-weight: bold;
      }
    }
  }
`;
