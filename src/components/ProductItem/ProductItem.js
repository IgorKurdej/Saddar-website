import React from "react";
import * as S from "./ProductItem.style";
import kotwa from "../../assets/img/products/psk wsp 4x4.png";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { img, name } = item;
  return (
    <S.ProductWrapper as={Link} state={{ item }} to="/product">
      <S.Wrapper>
        <S.Background />
        <S.Img src={img} />
      </S.Wrapper>
      <S.Name>{name}</S.Name>
    </S.ProductWrapper>
  );
};

export default ProductItem;
