import React, { useState, useEffect } from "react";
import Login_Logo from "../componets/login_logo/Login_Logo.jsx";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import * as S from "./Login.js";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswrod, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPasswrod
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("이메일 또는 비밀번호를 잘못 입력했습니다. ");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <S.Container>
      <Login_Logo />
      <S.LoginForm>
        <h1>Login</h1>
        <input
          placeholder="이메일"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          required
        />
        <input
          placeholder="비밀번호"
          value={loginPasswrod}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          required
        />
        <button onClick={login}>Login</button>

        <Link to="/Auth" className="authButton">
          회원가입
        </Link>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
