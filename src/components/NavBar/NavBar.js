import React from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";

const NavBar = ({ isHomePage, isScrollMove }) => {
  return (
    <S.Wrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
      <S.Ul>
        <S.Li>
          <Link to="/about">O nas</Link>
        </S.Li>
        <S.Li>
          <Link to="/specialization">Nasze specjalizacje</Link>
        </S.Li>
        <S.Li>Know-how</S.Li>
        <S.Li>
          <Link to="/products">Produkty</Link>
        </S.Li>
        <S.Li>Usługi</S.Li>
        <S.Li>Partnerzy handlowi</S.Li>
        <S.Li>Aktualności</S.Li>
        <S.Li>Instrukcja</S.Li>
        <S.Li>
          <Link to="/contact">Kontakt</Link>
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
};

export default NavBar;
