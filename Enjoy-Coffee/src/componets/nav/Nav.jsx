import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { DataState } from "../../recoil/recoilState";
import { CiSearch } from "react-icons/ci";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/greenBeans/enjoy-coffee-logo.jpg";
import * as S from "./Nav";
import { useRecoilValue } from "recoil";
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

  //검색창
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const productList = useRecoilValue(DataState);
  const [isTextEntered, setIsTextEntered] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
    setShowResults(!!e.target.value);
    setIsTextEntered(!!e.target.value);
  };
  const filterTitle = productList.filter((p) => {
    return p.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(" ", ""));
  });
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setShowResults(true);
    }
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleSearchClick = (e) => {
    e.stopPropagation();
  };
  return (
    <S.Container>
      <div className="navbar">
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
        <Link to="/Wish">관심상품</Link>
      </div>
      <div className="logobar">
        <div className="logo">
          <Link to="/">
            <BiSolidCoffeeBean size="40" />
            <p>Enjoy Coffee</p>
          </Link>
        </div>
      </div>
      <div className="menubar">
        <Link className="menu" to="/CoffeeBean">
          <h1>원두</h1>
        </Link>
        <Link className="menu" to="/Coffee">
          <h1>간편커피</h1>
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <GiHamburgerMenu size={30} />
          {showMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-search">
                <label htmlFor="searchicon">
                  <input
                    id="serachicon"
                    className="dropdown-input"
                    type="text"
                    value={search}
                    placeholder="검색어를 입력하세요"
                    onChange={onChange}
                    onKeyDown={handleEnterKey}
                    onClick={handleSearchClick}
                    style={{
                      borderBottomLeftRadius: isTextEntered ? "0" : "20px",
                      borderBottomRightRadius: isTextEntered ? "0" : "20px",
                    }}
                  />
                </label>
                {/* <CiSearch /> */}
                {showResults && (
                  <div className="dropdown-data-list">
                    {search && filterTitle.length === 0 ? (
                      <div>결과가 없습니다.</div>
                    ) : (
                      filterTitle.map((product) => (
                        <div className="dropdown-list" key={product.id}>
                          <Link to={`/${product.id}`}>
                            <BsArrowReturnRight size="15" />
                            <span>{product.title}</span>
                          </Link>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              <ul>
                <li>
                  <Link to="/CoffeeBean">원두</Link>
                </li>
                <li>
                  <Link to="/Coffee">간편커피</Link>
                </li>
                <li>
                  <Link to="/GreenBean">생두</Link>
                </li>
                <li>
                  <Link to="/Etc">시럽/소스</Link>
                </li>
              </ul>
              {/* <Link to="/CoffeeBean">원두</Link>
              <Link to="/Coffee">간편커피</Link>
              <Link to="/GreenBean">생두</Link>
              <Link to="/Etc">시럽/소스</Link> */}
            </div>
          )}
        </div>
        <div className="search">
          <label htmlFor="searchicon">
            <S.Icon />
            <input
              id="serachicon"
              className="input"
              type="text"
              value={search}
              onChange={onChange}
              onKeyDown={handleEnterKey}
              style={{
                borderBottomLeftRadius: isTextEntered ? "0" : "20px",
                borderBottomRightRadius: isTextEntered ? "0" : "20px",
              }}
            />
          </label>
          {/* <CiSearch /> */}
          {showResults && (
            <div className="data-list">
              {search && filterTitle.length === 0 ? (
                <div className="list text">결과가 없습니다.</div>
              ) : (
                filterTitle.map((product) => (
                  <div className="list" key={product.id}>
                    <Link to={`/${product.id}`}>
                      <BsArrowReturnRight size="15" />
                      <span>{product.title}</span>
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <Link className="menu" to="/GreenBean">
          생두
        </Link>
        <Link className="menu" to="/Etc">
          시럽/소스
        </Link>
      </div>
    </S.Container>
  );
};

export default Nav;
