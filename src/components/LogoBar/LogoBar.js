import React from "react";
import * as S from "./LogoBar.style";
import { Link } from "react-router-dom";

const LogoBar = ({ isHomePage, isScrollMove }) => (
  <S.LogoBarWrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
    <Link to="/">
      <S.HeaderImg />
    </Link>
    {/*<S.FlagsWrapper>*/}
    {/*  <S.Flag countryCode="PL" svg />*/}
    {/*  <S.Flag countryCode="GB" svg />*/}
    {/*  <S.Flag countryCode="FR" svg />*/}
    {/*  <S.Flag countryCode="DE" svg />*/}
    {/*</S.FlagsWrapper>*/}
  </S.LogoBarWrapper>
);

export default LogoBar;
