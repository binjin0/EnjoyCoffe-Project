import styled from "styled-components";

export const Container = styled.div`
  background-color: #929292;
  width: 100%;
  padding: 10px 50px;
  .footer-header {
    height: 100px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    flex-direction: row;
    div {
      margin-right: 20px;
      font-weight: bold;
      color: white;
    }
  }
  .footer-body {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 0;
    div {
      line-height: 2;
      margin: 20px 0;
      color: #cfcfcf;
      font-size: 1.2rem;
    }
  }
`;
