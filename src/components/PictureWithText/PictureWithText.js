import React from "react";
import * as S from "./PictureWithText.style";
import { Link } from "react-router-dom";

const PictureWithText = ({
  direction,
  header,
  mainHeader,
  children,
  src,
  position,
  button,
  to,
}) => {
  return (
    <S.Wrapper>
      {direction === "imgRight" ? (
        <S.ContentWrapper direction>
          <S.TextWrapper>
            <S.Stripe />
            <S.Header>{header}</S.Header>
            <S.MainHeader>{mainHeader}</S.MainHeader>
            <S.Text>{children}</S.Text>
            {button && (
              <S.DetailsBtn as={Link} to={to}>
                Dowiedz się więcej
              </S.DetailsBtn>
            )}
          </S.TextWrapper>
          <S.Img src={src} />
        </S.ContentWrapper>
      ) : (
        <S.ContentWrapper>
          {/*<S.Img src={src} position={position} />*/}
          <S.Img src={src} />
          <S.TextWrapper direction="left">
            <S.Stripe />
            <S.Header>{header}</S.Header>
            <S.MainHeader direction="left">{mainHeader}</S.MainHeader>
            <S.Text alignRight>{children}</S.Text>
            {button && (
              <S.DetailsBtn as={Link} to={to}>
                Dowiedz się więcej
              </S.DetailsBtn>
            )}
          </S.TextWrapper>
        </S.ContentWrapper>
      )}
    </S.Wrapper>
  );
};

export default PictureWithText;
