import styled from "styled-components";

export const ModalContainer = styled.div`
  /* box-sizing: border-box; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 5px;
  z-index: 9999;

  color: white;
  font-size: 20px;

  .modal-content {
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    h1 {
      font-size: 20px;
    }
    h2 {
      color: rgb(0, 0, 0, 0.7);
      font-size: 18px;
    }
  }
  .modal-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    button {
      width: 100px;
      height: 30px;
      background-color: #4a4747;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
  }
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;
