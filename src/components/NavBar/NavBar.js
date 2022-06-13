import React, { useState, useEffect } from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";

const NavBar = ({ isHomePage, isScrollMove }) => {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Wrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
      <S.Ul>
        <S.Li as={Link} to="/about">
          O nas
        </S.Li>
        <S.Li as={Link} to="/specialization">
          Specjalizacje
        </S.Li>
        <S.Li as={Link} to="/know-how">
          Know-how
        </S.Li>
        <S.Li as={Link} to="/products">
          Produkty
        </S.Li>
        <S.Li as={Link} to="/services">
          Usługi
        </S.Li>
        <S.Li as={Link} to="/partners">
          Partnerzy
        </S.Li>
        <S.Li as={Link} to="/news">
          Aktualności
        </S.Li>
        <S.Li as={Link} to="/instructions">
          Instrukcje
        </S.Li>
        <S.Li as={Link} to="/contact">
          Kontakt
        </S.Li>
      </S.Ul>
      {windowDimension}
    </S.Wrapper>
  );
};

export default NavBar;
