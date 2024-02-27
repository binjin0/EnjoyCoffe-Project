import styled from "styled-components";
export const Container = styled.div`
  height: 90vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; */
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
    color: #644444;
    /* margin-bottom: 40px; */
  }
  input,
  button {
    width: 40%;
    height: 50px;
    border: none;
    margin-top: 2rem;
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
  p {
    margin-top: 0.3rem;
    text-align: left;
    width: 40%;
    color: #644444;
    font-weight: bold;
  }
  button {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;