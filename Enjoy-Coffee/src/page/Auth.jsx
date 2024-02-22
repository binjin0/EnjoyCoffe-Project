import React, { useState } from "react";
import Login_Logo from "../componets/login_logo/Login_Logo.jsx";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignUpModal from "../componets/commons/SignUpModal.jsx";
import { ModalBackground } from "../componets/commons/SignUpModal.js";
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
    if (!isEmailValid(email)) {
      setEmailError("유효하지 않은 이메일입니다.");
    } else {
      setEmailError("");
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
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setShowModal(true);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  // const closeModal = () => {
  //   setShowModal(false);
  // };
  // const register = async () => {
  //   try {
  //     // 사용자 회원가입
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );

  //     // 로그인
  //     const user = userCredential.user;
  //     console.log("회원가입 성공, 로그인됨:", user);

  //     setShowModal(true);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      <Login_Logo />
      <h1>Login</h1>

      <input placeholder="이메일" onChange={handleEmailChange} required />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <input placeholder="비밀번호" onChange={handlePasswordChange} required />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <button onClick={register}>가입</button>

      {showModal && <ModalBackground />}
      {showModal && <SignUpModal />}
    </div>
  );
};

export default Auth;
