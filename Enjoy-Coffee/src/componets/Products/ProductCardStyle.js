import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  justify-content: center;
  img {
    border-radius: 7%;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
  }
  h2 {
    margin-top: 20px;
    font-size: 23px;
    font-weight: bold;
  }
  p {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
`;
