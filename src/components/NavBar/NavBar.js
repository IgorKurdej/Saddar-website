import React from 'react';
import * as S from './Navbar.style';

const NavBar = ({isHomePage, isScrollMove}) => {
    return (
        <S.Wrapper isScrollMove={isScrollMove}>
            <S.Ul>
                <S.Li>O nas</S.Li>
                <S.Li>Nasze specjalizacje</S.Li>
                <S.Li>Know-how</S.Li>
                <S.Li>Produkty</S.Li>
                <S.Li>Usługi</S.Li>
                <S.Li>Partnerzy handlowi</S.Li>
                <S.Li>Aktualności</S.Li>
                <S.Li>Instrukcja</S.Li>
                <S.Li>Kontakt</S.Li>
            </S.Ul>
        </S.Wrapper>
    );
};

export default NavBar;