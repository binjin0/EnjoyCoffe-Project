import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
`;
export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
  h1 {
    font-family: "Nanum Myeongjo", serif;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  input,
  button {
    width: 40%;
    height: 50px;
    border: none;
    margin-bottom: 2rem;
    outline: none;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus::-moz-placeholder {
    color: transparent;
  }
  input:focus:-ms-input-placeholder {
    color: transparent;
  }
  input:focus::-ms-input-placeholder {
    color: transparent;
  }
  button {
    background-color: #25201c;
    cursor: pointer;
    color: white;
  }
`;
