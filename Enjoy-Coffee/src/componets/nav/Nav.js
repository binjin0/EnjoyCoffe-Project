import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-end;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 15px;

  input {
    height: 20px;
    margin: 50px;
  }
  a {
    margin: 5px;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  margin: 20px 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  .logo {
    display: flex;
    width: 100px;
    height: 80px;
    background-color: #644444;
    border-radius: 50%;

    font-family: "Nanum Myeongjo", serif;
    align-items: center;
    justify-content: space-around;
    color: #fff;
  }
`;
