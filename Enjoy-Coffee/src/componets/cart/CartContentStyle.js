import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;
  font-family: Lato;
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin: 50px 20px;
  }
  .order-box {
    margin: 0 20px;
    .box-header {
      border-bottom: 1px solid #f9f9f9;
      div {
        width: 200px;
        height: 50px;
        padding: 16px 8px;
        background-color: #433b34;

        color: white;
        text-align: center;
      }
    }
    .box-content {
      .title {
        display: grid;
        grid-template-columns: 0.5fr 1fr 3fr 1fr 1fr;
        justify-items: center;
        background-color: rgb(249, 249, 249, 0.7);
        border-bottom: 1px solid #f9f9f9;
        padding: 12px 0;
      }
      .content {
        display: grid;
        grid-template-columns: 0.5fr 1fr 3fr 1fr 1fr;
        border-bottom: 1px solid #f9f9f9;
        padding: 10px;
        input[type="checkbox"] {
          width: 17px;
          cursor: pointer;
          /* -webkit-appearance: none;

          appearance: none; */
        }
        .product-description {
          margin-left: 7px;
          .product-title {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 20px;
          }
        }
        img {
          width: 150px;
        }
        .product-qty {
          display: flex;
          justify-content: space-evenly;
          text-align: center;
          padding: 60px 0;
          button {
            height: 20px;
            border: none;
          }
        }
        .product-price {
          font-family: Lato;
          text-align: center;
          padding: 60px 0;
        }
      }
    }
    .order-box {
      margin: 25px 0;
      .order-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        height: 160px;
        margin: 20px 0;
        padding: 30px 0;
        font-size: 30px;
        background-color: rgb(249, 249, 249, 0.7);
        .order-header {
          font-weight: bold;
          font-size: 15px;
        }
        .order-price {
          font-size: 35px;
          font-weight: bold;
        }
      }
      button {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
