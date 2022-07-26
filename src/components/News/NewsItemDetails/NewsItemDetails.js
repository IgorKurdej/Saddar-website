import React from "react";
import NavBar from "../../NavBar/NavBar";
import LogoBar from "../../LogoBar/LogoBar";
import styled from "styled-components";
import { useLocation } from "react-router";

const NewsItemDetails = () => {
  const location = useLocation();
  const article = location.state.article;
  const { img, title, contentText } = article;

  return (
    <>
      {/*<LogoBar />*/}
      {/*<NavBar />*/}
      <Wrapper>
        <ImageWrapper>
          <Image src={img} />
        </ImageWrapper>
        {/* <Date>22.03.2021</Date> */}
        <Title>{title}</Title>
        <Text>{contentText}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 20px;
  // background-color: green;
  margin: 0 30px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  // width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  //background-image: url(${(props) => props.image});
  max-width: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //max-height: 400px;
  // min-height: 300px;
  //background-color: #61dafb;
`;

const Date = styled.p`
  text-align: right;
  margin: 10px 0;
  font-size: 20px;
  color: #b0b0b0;
`;

const Title = styled.h1`
  margin: 20px 0;
  // font-size: 42px;
`;

const Text = styled.p`
  font-size: 22px;

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export default NewsItemDetails;
