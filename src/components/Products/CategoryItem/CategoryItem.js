import React from 'react';
import styled from 'styled-components';

export const Category = styled.div`
  color: white;
  //font-size: 18px;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  width: 100%;
  height: 20px;
  //width: 35px;
  background-color: #04A23C;
  border-radius: 15px;
`

const CategoryItem = ({children}) => <Category />

export default CategoryItem;