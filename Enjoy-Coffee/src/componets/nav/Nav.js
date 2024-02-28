import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  width: 100%;
  .navbar {
    display: flex;
    height: 35px;
    justify-content: flex-end;
    align-items: center;
    background-color: #433b34;
    font-size: 14px;
    color: white;
  }
  input {
    height: 20px;
    margin: 50px;
    border: none;
  }
  a {
    margin: 5px;
  }
  .menubar {
    display: flex;
    padding: 20px 50px;
    /* margin-bottom: 50px; */
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    background-color: rgb(210, 208, 201);
    height: 110px;
  }
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
// export const NavBar = styled.div`
//   display: flex;
//   height: 30px;
//   justify-content: flex-end;
//   align-items: center;
//   background-color: #c0a891;
//   font-size: 15px;

//   input {
//     height: 20px;
//     margin: 50px;
//     border: none;
//   }
//   a {
//     margin: 5px;
//   }
// `;

// export const MenuBar = styled.div`
//   display: flex;
//   padding: 20px 50px;
//   margin-bottom: 50px;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 20px;
//   background-color: rgb(210, 208, 201);

//   .logo {
//     display: flex;
//     width: 100px;
//     height: 80px;
//     background-color: #644444;
//     border-radius: 50%;

//     font-family: "Nanum Myeongjo", serif;
//     align-items: center;
//     justify-content: space-around;
//     color: #fff;
//   }
// `;
