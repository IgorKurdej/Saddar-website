import React from "react";
import * as S from "./Products.style";
import img from "../../assets/img/rotator_2a.jpg";
import ProductItem from "../../components/ProductItem/ProductItem";
import CategoryItem from "./CategoryItem/CategoryItem";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import {products} from "../../assets/Data";

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
      <TitleWithIcon title="Produkty" icon={ShoppingBasketOutlinedIcon} />
      <S.Categories>
        {
          categories.map((category) => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))
          // categories.map(category => console.log(category))
        }
      </S.Categories>
      <S.ProductsList>
          {
              products.map(item => <ProductItem key={item.id} name={item.name} img={item.img} />)
          }
      </S.ProductsList>
    </S.Wrapper>
  );
};

export default Products;
