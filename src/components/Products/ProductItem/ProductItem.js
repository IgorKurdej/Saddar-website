import React from "react";
import * as S from "./ProductItem.style";
import kotwa from "../../../assets/img/products/psk wsp 4x4.png";

const ProductItem = () => {
  return (
    <S.ProductWrapper>
      <S.Wrapper>
        <S.Background />
        <S.Img src={kotwa} alt="kotwa" />
      </S.Wrapper>
      <S.Name>PSK WST</S.Name>
    </S.ProductWrapper>
  );
};

export default ProductItem;
