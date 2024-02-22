import React from "react";
import * as S from "./Login_Logo";
import { Link } from "react-router-dom";
const Login_Logo = () => {
  return (
    <S.Container>
      <Link to="/">
        <div className="logo-icon"></div>
        <h2>
          Enjoy <br /> Coffee
        </h2>
      </Link>
    </S.Container>
  );
};

export default Login_Logo;
