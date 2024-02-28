import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import * as S from "./Nav";
const Nav = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <S.Container>
      <div className="navbar">
        <input type="text" placeholder="검색" />
        {user ? (
          <Link to="/" onClick={logout}>
            로그아웃
          </Link>
        ) : (
          <Link to="/Login">로그인</Link>
        )}
        {/* <Link to="/Login">로그인</Link> */}
        <Link to="/Auth">회원가입</Link>
        <Link to="/Cart">장바구니</Link>
      </div>
      <div className="menubar">
        <Link to="/CoffeeBean">
          <h1>원두</h1>
        </Link>
        <Link to="/Coffee">
          <h1>간편커피</h1>
        </Link>
        <Link to="/">
          <div className="logo">
            Enjoy
            <br />
            Coffee
          </div>
        </Link>
        <Link to="/GreenBean">생두</Link>
        <Link to="/Etc">시럽/소스</Link>
      </div>
    </S.Container>
  );
};

export default Nav;
