import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: #fbfbfb;
  width: 300px;
  height: 200px;
  border: 1px solid #433b34;
  z-index: 999;
  color: white;
  font-family: "Roboto";

  .modal-header {
    display: flex;
    justify-content: space-between;
    padding: 7px 10px 7px 19px;
    background-color: #433b34;

    font-size: 16px;
    color: white;
    p {
      line-height: 2;
    }
    span {
      color: white;
      font-size: 25px;
    }
  }
  .modal-content {
    padding: 20px;
    border-bottom: 1px solid #d7d5d5;
    font-size: 13px;
    text-align: center;
    line-height: 1.5;
    color: black;
  }
  .modal-btn {
    display: flex;
    justify-content: space-evenly;
    padding: 20px 9px;
    text-align: center;
    button {
      width: 120px;
      height: 40px;
      border: 1px solid #d7d5d5;
      cursor: pointer;
    }
    .cart-go {
      background-color: #2f2f2f;
      color: white;
    }
  }
`;
