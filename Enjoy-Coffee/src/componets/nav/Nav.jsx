import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./Nav";
const Nav = () => {
  const [isLoggedIn, setIsLoggeIn] = useState(false);

  const checkLoginStatus = () => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggeIn(userLoggedIn === "true");
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn");
    setIsLoggeIn(false);
  };
  return (
    <div>
      <S.NavBar>
        <input type="text" placeholder="검색" />
        {isLoggedIn ? (
          <Link to="/" onClick={handleLogout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/Login">로그인</Link>
        )}
        {/* <Link to="/Login">로그인</Link> */}
        <Link to="/Auth">회원가입</Link>
        <Link to="/Cart">장바구니</Link>
      </S.NavBar>
      <S.MenuBar>
        <Link to="/">
          <h1>원두</h1>
        </Link>
        <Link to="/">
          <h1>간편커피</h1>
        </Link>
        <Link to="/">
          <div className="logo">
            Enjoy
            <br />
            Coffee
          </div>
        </Link>
        <Link to="/">생두</Link>
        <Link to="/">시럽/소스</Link>
      </S.MenuBar>
    </div>
  );
};

export default Nav;
