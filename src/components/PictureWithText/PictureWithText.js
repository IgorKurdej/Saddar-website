import React from 'react';
import * as S from './PictureWithText.style';

const PictureWithText = () => {
    return (
        <S.Wrapper>
            <S.ContentWrapper>
                <S.TextWrapper>
                    <S.Header>Nasza historia</S.Header>
                    <S.MainHeader>Przemiana pomysłu w wynalazek</S.MainHeader>
                    <S.Text>Nie ciekawi Cię jak się tu znaleźliśmy?</S.Text>
                </S.TextWrapper>
            </S.ContentWrapper>
        </S.Wrapper>
    );
};

export default PictureWithText;