import React, { useEffect, useState } from "react";
import Login_Logo from "../componets/login_logo/Login_Logo.jsx";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import SignUpModal from "../componets/commons/SignUpModal.jsx";
import { ModalBackground } from "../componets/commons/SignUpModal.js";
import * as S from "./Auth.js";
const Auth = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setRegisterEmail(email);
    setEmailError("");
    if (!isEmailValid(email)) {
      setEmailError("유효하지 않은 이메일입니다.");
    } else {
      checkEmailExistence(email);
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setRegisterPassword(password);
    if (!isPasswordValid(password)) {
      setPasswordError("비밀번호는 최소 6자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };
  const checkEmailExistence = async (email) => {
    try {
      const userCredential = await auth.fetchSignInMethodsForEmail(email);
      if (userCredential.length > 0) {
        setEmailError("이미 존재하는 이메일입니다.");
      }
    } catch (error) {
      setEmailError("이미 존재하는 이메일입니다.");
    }
  };
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await signOut(auth);
      setShowModal(true);
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setEmailError("이미 존재하는 이메일입니다.");
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
        <input placeholder="이메일" onChange={handleEmailChange} required />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          placeholder="비밀번호"
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button onClick={register}>가입</button>
        {showModal && <ModalBackground />}
        {showModal && <SignUpModal />}
      </S.LoginForm>
    </S.Container>
  );
};

export default Auth;
