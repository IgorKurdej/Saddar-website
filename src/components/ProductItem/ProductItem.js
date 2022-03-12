import React from "react";
import * as S from "./ProductItem.style";
import kotwa from "../../assets/img/products/psk wsp 4x4.png";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <S.ProductWrapper>
      <S.A to="/products/2">
        <S.Wrapper>
          <S.Background />
          <S.Img src={kotwa} />
        </S.Wrapper>
        <S.Name>PSK WST</S.Name>
      </S.A>
    </S.ProductWrapper>
  );
};

export default ProductItem;
