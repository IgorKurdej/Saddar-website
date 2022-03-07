import React from 'react';
import * as S from './LogoBar.style';

const LogoBar = ({isHomePage, isScrollMove}) => (
    <S.LogoBarWrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
        <S.HeaderImg />
        <S.FlagsWrapper>
            <S.Flag countryCode="PL" svg />
            <S.Flag countryCode="GB" svg />
            <S.Flag countryCode="FR" svg />
            <S.Flag countryCode="DE" svg />
        </S.FlagsWrapper>
    </S.LogoBarWrapper>
);

export default LogoBar;