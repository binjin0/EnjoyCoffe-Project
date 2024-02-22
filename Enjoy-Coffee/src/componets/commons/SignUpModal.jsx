import React from "react";
import * as S from "./SignUpModal";
import { Link } from "react-router-dom";

const SignUpModal = () => {
  return (
    <S.ModalContainer>
      <div className="modal-content">
        <h1>Enjoy Coffee에 오신걸 환영합니다.</h1>
        <h2>가입이 완료되었습니다!</h2>
      </div>
      {/* <button onClick={onClose}>로그인하기</button> */}
      <div className="modal-button">
        <Link to="/Login">
          <button className="LoginButton">로그인하기</button>
        </Link>
        <Link to="/">
          <button className="HomeButton">홈으로</button>
        </Link>
      </div>
    </S.ModalContainer>
  );
};

export default SignUpModal;
