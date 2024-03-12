import styled from "styled-components";

export const Container = styled.div`
  padding-top: 230px;
  .product-fillter {
    margin-left: 30px;
    .select-box {
      border: none;
      border-radius: 8px;
      width: 180px;
      height: 40px;
      padding: 10px;
      option {
      }
    }
  }
  .product-list {
    display: grid;
    margin: 20px 20px;
    /* padding-top: 200px; */
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-columns: 30% 30% 30%; */
    /* grid-template-rows: 30% 30% 30%; */
    justify-items: center;
  }
  @media (min-width: 878px) {
    .product-list {
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
`;
