import React from "react";
import NavBar from "../../NavBar/NavBar";
import LogoBar from "../../LogoBar/LogoBar";
import styled from "styled-components";
import { useLocation } from "react-router";

const NewsItemDetails = () => {
  const location = useLocation();
  const article = location.state.article;
  const { img, title, contentText } = article;

  console.log(article);

  return (
    <>
      <LogoBar />
      <NavBar />
      <Wrapper>
        <ImageWrapper>
          <Image src={img} />
        </ImageWrapper>
        {/*<Date>22.03.2021</Date>*/}
        <Title>{title}</Title>
        <Text>{contentText}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  margin-top: 30px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 60px;
`;

const Image = styled.img`
  //background-image: url(${(props) => props.image});
  max-width: 50%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //max-height: 400px;
  min-height: 300px;
  //background-color: #61dafb;
`;

const Date = styled.p`
  text-align: right;
  margin: 10px 0;
  font-size: 20px;
  color: #b0b0b0;
`;

const Title = styled.h1`
  //margin: 20px 0;
  font-size: 42px;
`;

const Text = styled.p`
  margin: 20px 0 50px;
  font-size: 22px;
`;

export default NewsItemDetails;
