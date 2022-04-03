import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from '../../assets/img/articles/image1.jpg';

const ReadMoreCard = ({ textVisibility, mainArticle, article, title, mainText, img }) => {
  return (
    <Wrapper>
      <Image mainArticle={mainArticle} src={img} image={image} />
      <Title>{title}</Title>
      <Text textVisibility={textVisibility}>
          {mainText}
      </Text>
      <ReadMore as={Link} to={article && "/news/2"}>
        dowiedz się więcej
      </ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //max-width: 300px;
  flex: 1;
  //background-color: #61dafb;
  padding: 10px 0;
  //width: auto;
`;

// const Image = styled.img``;
const Image = styled.div`
  width: 100%;
  //min-height: 300px;
  min-height: ${({ mainArticle }) => (mainArticle ? "340px" : "200px")};
  background: ${props => `url(${props.src}) no-repeat top center`};
`;

const Title = styled.p`
  font-size: 20px;
  margin: 5px 0 10px;
`;

const Text = styled.p`
  font-size: 18px;
  height: 138px;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
  display: ${({ textVisibility }) => textVisibility && "none"};
`;

const ReadMore = styled.p`
  //margin-top: 15px;
  text-decoration: underline;
  font-size: 18px;
  //text-align: right;
  cursor: pointer;
  color: gray;
`;

export default ReadMoreCard;
