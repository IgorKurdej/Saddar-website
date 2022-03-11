import React from "react";
import styled from "styled-components";

export const Category = styled.div`
  color: #04a23c;
  //margin: 0 20px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  width: 150px;
  height: 35px;
  //width: 35px;
  border: 2px solid #04a23c;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #04a23c;
    color: #fff;
  }
`;

const CategoryItem = ({ children }) => <Category>{children}</Category>;

export default CategoryItem;
