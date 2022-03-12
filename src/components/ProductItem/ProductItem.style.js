import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 40px;
  //background-color: gray;
`;

export const A = styled(Link)`
  //background-color: #282c34;
`;

export const Wrapper = styled.div`
  width: 220px;
  height: 350px;
  border: 12px solid #04a23c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`;

export const Background = styled.div`
  width: 220px;
  height: 350px;
  background-color: #f1f1f1;
  position: absolute;
  right: 20px;
  bottom: 20px;

  ::after {
    content: " ";
    width: 50px;
    height: 6px;
    background-color: #04a23c;
    position: absolute;
    left: 15px;
    top: 15px;
  }

  ::before {
    content: "";
    height: 80px;
    width: 6px;
    background-color: #04a23c;
    position: absolute;
    top: 15px;
    left: 15px;
  }
`;

export const Img = styled.img`
  width: 400px;
  z-index: 3;
`;

export const Name = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: center;
`;
