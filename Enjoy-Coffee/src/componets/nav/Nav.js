import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
export const Icon = styled(CiSearch)`
  position: absolute;
  top: 5px;
  left: 10px;
`;
export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  .navbar {
    display: flex;
    height: 35px;
    justify-content: flex-end;
    align-items: center;
    background-color: #433b34;
    font-size: 14px;
    color: white;
  }
  a {
    margin: 5px;
  }
  .logobar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    background-color: #333;
    width: 100%;
    /* transition: transform 0.3s ease; */
    /* z-index: 999; */
    /* transform: translateY(0); */

    .logo {
      font-family: "Nanum Myeongjo", serif;
      color: #fff;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin-top: 10px;
        }
      }
    }
  }

  .menubar {
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-family: "Roboto";
    background-color: rgb(210, 208, 201);
    height: 50px;
    .hamburger-menu {
      display: none;
    }
    .menu {
      display: block;
    }
    .search {
      label {
        position: relative;
        input {
          width: 650px;
          height: 30px;
          padding-left: 35px;
          border: none;
          border-radius: 20px;
        }
        input:focus {
          outline: none;
        }
      }
      .data-list {
        position: absolute;
        background-color: rgb(255, 255, 255, 0.5);
        width: 650px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size: 20px;
        line-height: 1.5;
        .list {
          margin-left: 5px;
          font-size: 18px;
          span {
            margin-left: 5px;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .menubar {
      padding: 20px 1vw;
      .hamburger-menu {
        display: block;
      }
      .menu {
        /* position: relative; */
        display: none;
      }
      .search {
        display: none;
      }
      .dropdown-menu {
        /* display: flex; */
        /* flex-direction: column; */
        position: absolute;
        left: 0;

        background-color: rgb(210, 208, 201);
        width: 100%;
        label {
          display: flex;
          justify-content: center;
          /* position: relative; */
          input {
            width: 500px;
            height: 30px;
            padding-left: 35px;
            border: none;
            border-radius: 20px;
          }
          input:focus {
            outline: none;
          }
          input::placeholder {
            text-align: center;
          }
        }
        .dropdown-data-list {
          /* position: absolute; */
          background-color: rgb(255, 255, 255, 0.5);
          /* width: 650px; */
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          font-size: 20px;
          line-height: 1.5;
          .dropdown-list {
            margin-left: 5px;
            font-size: 18px;
            span {
              margin-left: 5px;
            }
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-size: 18px;
          li {
            margin: 10px 0;
          }
        }
      }
    }
  }

  @media (max-width: 1080px) {
    .menubar {
      padding: 20px 3vw;
    }
  }

  @media (max-width: 1440px) {
    .menubar {
      padding: 20px 1vw;
    }
  }
`;
