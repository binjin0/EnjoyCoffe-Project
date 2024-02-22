import React, { useState } from "react";
import Login_Logo from "../componets/login_logo/Login_Logo.jsx";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswrod, setLoginPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Login_Logo />
      <h1>Login</h1>

      <input
        placeholder="이메일"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
        required
      />
      <input
        placeholder="비밀번호"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
        required
      />
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <Link to="/Auth">회원가입</Link>
      {user ? (
        <p>현재 로그인된 사용자: {user.email}</p>
      ) : (
        <p>로그아웃 상태입니다.</p>
      )}
    </div>
  );
};

export default Login;
