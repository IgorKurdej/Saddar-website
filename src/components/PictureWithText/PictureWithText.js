import React from "react";
import * as S from "./PictureWithText.style";
import img1 from "../../assets/img/AboutUs/pexels-nikolai-ulltang-323933.jpg";

const PictureWithText = ({
  direction,
  header,
  mainHeader,
  children,
  src,
  position,
}) => {
  return (
    <S.Wrapper>
      {direction === "imgRight" ? (
        <S.ContentWrapper>
          <S.TextWrapper>
            <S.Stripe />
            <S.Header>{header}</S.Header>
            <S.MainHeader>{mainHeader}</S.MainHeader>
            <S.Text>{children}</S.Text>
          </S.TextWrapper>
          <S.Img src={src} />
        </S.ContentWrapper>
      ) : (
        <S.ContentWrapper>
          <S.Img src={src} position={position} />
          <S.TextWrapper direction="left">
            <S.Stripe />
            <S.Header>{header}</S.Header>
            <S.MainHeader direction="left">{mainHeader}</S.MainHeader>
            <S.Text alignRight>{children}</S.Text>
          </S.TextWrapper>
        </S.ContentWrapper>
      )}
    </S.Wrapper>
  );
};

export default PictureWithText;
