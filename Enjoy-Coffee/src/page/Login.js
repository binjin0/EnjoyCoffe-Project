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
    color: #4a3b2d;
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
    background-color: #d9d9d9;
    cursor: pointer;
  }
  p {
    margin-bottom: 1rem;
    color: #644444;
    font-weight: bold;
  }
`;
