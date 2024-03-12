import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;
  font-family: Lato;
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin: 50px 20px;
  }
  .wish-box {
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
        grid-template-columns: 0.5fr 1fr 3fr;
        justify-items: center;
        background-color: rgb(249, 249, 249, 0.7);
        border-bottom: 1px solid #f9f9f9;
        padding: 12px 0;
      }
      .content {
        display: grid;
        grid-template-columns: 0.5fr 1fr 3fr;
        border-bottom: 1px solid #f9f9f9;
        padding: 10px;
        input[type="checkbox"] {
          width: 17px;
          cursor: pointer;
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
      }
    }
    .delete-box {
      margin: 25px 0;
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
