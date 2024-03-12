import React from "react";
import * as S from "./Login_Logo";
import { Link } from "react-router-dom";
import { BiSolidCoffeeBean } from "react-icons/bi";

const Login_Logo = () => {
  return (
    <S.Container>
      <Link to="/">
        <div>
          <BiSolidCoffeeBean size="50" color="#25201c" />
        </div>
        <h2>
          Enjoy <br /> Coffee
        </h2>
      </Link>
    </S.Container>
  );
};

export default Login_Logo;
