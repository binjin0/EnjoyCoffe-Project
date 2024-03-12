import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  justify-content: center;
  li {
    width: 230px;
  }
  img {
    width: 230px;
    border-radius: 7%;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  img:hover {
    opacity: 0.5;
  }
  h2 {
    font-family: Barlow;
    margin-top: 20px;
    font-size: 18px;
    cursor: pointer;
  }
  p {
    font-family: Barlow;
    font-weight: 600;
    display: inline-block;
    margin-top: 15px;
    font-size: 20px;
  }
  .won {
    font-weight: lighter;
  }

  @media (min-width: 1080px) {
    li,
    img {
      width: 290px;
    }
  }
  @media (min-width: 1440px) {
    li,
    img {
      width: 300px;
    }
  }
`;
