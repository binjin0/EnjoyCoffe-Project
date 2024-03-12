import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 200px 50px;
  justify-content: center;

  .imgbox {
    margin-right: 20px;
    img {
      width: 400px;
    }
  }
  .descriptionbox {
    h2 {
      font-family: Barlow;
      font-size: 30px;
      font-weight: 500;

      padding: 10px 0 30px;
      border-bottom: 2px solid white;
    }
    .description {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 2px solid white;
      line-height: 2;
      padding: 20px 10px;
    }
    .pricebox {
      /* display: flex; */
      div {
        margin: 20px 0;
        span {
          margin-right: 20px;
        }
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      .cartbtn,
      .heartbtn {
        width: 60px;
        height: 55px;
        padding: 0;
        margin-right: 10px;
        border: none;
        cursor: pointer;
      }
      .buybtn {
        width: 200px;
        height: 55px;
        border: none;
        cursor: pointer;
        background-color: #2f2f2f;
        color: white;
      }
    }
  }
`;
