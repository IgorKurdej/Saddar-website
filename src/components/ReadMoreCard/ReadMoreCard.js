import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadMoreCard = ({ textVisibility, mainArticle, article }) => {
  return (
    <Wrapper>
      <Image mainArticle={mainArticle} />
      <Title>przykładowy tekst</Title>
      <Text textVisibility={textVisibility}>
        Dotychczasowa hegemonia producentów i dostawców kotew stalowych została
        przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz
        Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz Stany
        Zjednoczone... Dotychczasowa hegemonia producentów i dostawców kotew
        stalowych została przełamana autorskim rozwiązaniem polskiej firmy PHU
        SADDAR Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią
        oraz Stany Zjednoczone...
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
  background-color: #282c34;
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
`;

export default ReadMoreCard;
