import React from "react";
import * as S from "./Footer_style";
const footer = () => {
  return (
    <S.Container>
      <div className="footer-header">
        <div>회사소개</div>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
        <div>이용안내</div>
        <div>공지사항</div>
      </div>
      <div className="footer-body">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          excepturi amet deserunt aliquam in voluptas dolore nisi rerum quas.
          Quas esse labore eos voluptatum ex dolorem! Nulla sunt magnam dolorem.
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          vitae iusto in vero, aut repudiandae ea repellendus alias! Deserunt
          magni possimus porro molestias excepturi molestiae inventore fuga
          recusandae error nesciunt.
        </div>
      </div>
    </S.Container>
  );
};

export default footer;
