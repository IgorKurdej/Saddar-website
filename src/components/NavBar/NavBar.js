import React from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";

const NavBar = ({ isHomePage, isScrollMove }) => {
  return (
    <S.Wrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
      <S.Ul>
        <S.Li as={Link} to="/about">
          O nas
        </S.Li>
        {/*<S.Li>*/}
        {/*</S.Li>*/}
        <S.Li as={Link} to="/specialization">
          Specjalizacje
        </S.Li>
        <S.Li>Know-how</S.Li>
        <S.Li as={Link} to="/products">
          Produkty
        </S.Li>
        <S.Li>Usługi</S.Li>
        <S.Li>Partnerzy</S.Li>
        <S.Li>Aktualności</S.Li>
        <S.Li>Instrukcja</S.Li>
        <S.Li as={Link} to="/contact">
          Kontakt
        </S.Li>
      </S.Ul>
    </S.Wrapper>
  );
};

export default NavBar;
