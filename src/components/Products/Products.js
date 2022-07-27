import React from "react";
import * as S from "./Products.style";
import img from "../../assets/img/rotator_2a.jpg";
import ProductItem from "../../components/ProductItem/ProductItem";
import CategoryItem from "./CategoryItem/CategoryItem";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import { products, productsSec } from "../../assets/Data";
import styled from 'styled-components';

const categories = [
  "Wbijane",
  "Wkręcane",
  "Przykręcane",
  "Do betonowania",
  "Kratki",
  "Daszki",
  "Profile/Słupki",
  "Gruntowkręty",
];

const Products = () => {
  return (
    <S.Wrapper>
      <TitleWithIcon title="Eko-Kotwy Saddar" icon={ShoppingBasketOutlinedIcon} />
      {/*<S.Categories>*/}
      {/*  {*/}
      {/*    categories.map((category) => (*/}
      {/*      <CategoryItem key={category}>{category}</CategoryItem>*/}
      {/*    ))*/}
      {/*    // categories.map(category => console.log(category))*/}
      {/*  }*/}
      {/*</S.Categories>*/}
      <S.ProductsList>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </S.ProductsList>
      <TitleWithIcon title="Systemy ogrodzeniowe" icon={ShoppingBasketOutlinedIcon} />
        <S.ProductsList>
            {productsSec.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </S.ProductsList>
    </S.Wrapper>
  );
};

const Title = styled.span`
  font-size: 32px;
`

export default Products;
