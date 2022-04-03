import React from "react";
import * as S from "./ProductItem.style";
import kotwa from "../../assets/img/products/psk wsp 4x4.png";
import { Link } from "react-router-dom";

const ProductItem = ({name, img}) => {
  // const d = new Date("2022-02-01T09:00:00.000Z");
  // console.log(d.getUTCHours()); // Hours
  // console.log(d.getUTCMinutes());

  return (
    <S.ProductWrapper as={Link} to="/products/2">
      <S.Wrapper>
        <S.Background />
        <S.Img src={img} />
      </S.Wrapper>
      <S.Name>{name}</S.Name>
    </S.ProductWrapper>
  );
};

export default ProductItem;
