import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import TitleWithSlider from "../TitleWithSlider/TitleWithSlider";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { news } from "../../assets/Data";

const News = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Wrapper>
      <TitleWithIcon title="Aktualności" icon={NewspaperIcon} />
      {width > 1200 ? (
        <ArticlesWrapper>
          <MainCol>
            <ReadMoreCard
              article={true}
              mainArticle={true}
              img={news[0].img}
              mainText={news[0].mainText}
              title={news[0].title}
              contentText={news[0].contentText}
              date={news[0].date}
            />
          </MainCol>
          <Hr />
          <SideCol>
            <ReadMoreCard
              article={true}
              textVisibility={true}
              img={news[1].img}
              mainText={news[1].mainText}
              title={news[1].title}
              contentText={news[1].contentText}
              date={news[1].date}
            />
            <ReadMoreCard
              article={true}
              textVisibility={true}
              img={news[2].img}
              mainText={news[2].mainText}
              title={news[2].title}
              contentText={news[2].contentText}
              date={news[2].date}
            />
          </SideCol>
        </ArticlesWrapper>
      ) : (
        <ArticlesWrapper>
          <SideCol>
            <ReadMoreCard
              article={true}
              img={news[0].img}
              mainText={news[0].mainText}
              title={news[0].title}
            />
            <ReadMoreCard
              article={true}
              // textVisibility={true}
              img={news[1].img}
              mainText={news[1].mainText}
              title={news[1].title}
            />
            <ReadMoreCard
              article={true}
              // textVisibility={true}
              img={news[2].img}
              mainText={news[2].mainText}
              title={news[2].title}
            />
          </SideCol>
        </ArticlesWrapper>
      )}
      {/*<TitleWithSlider title="Nagrody i wyróżnienia" icon={EmojiEventsIcon} />*/}
      {/*<TitleWithIcon title="Multimedia" icon={PhotoCameraIcon} />*/}
      {/*<MultiList>*/}
      {/*  <MultiItem>*/}
      {/*    <MultiImgWrapper>*/}
      {/*      <MultiImg />*/}
      {/*    </MultiImgWrapper>*/}
      {/*    <MultiTextWrapper>*/}
      {/*      <MultiText title>*/}
      {/*        Lorem Ipsum is simply dummy text of the printing and typesetting*/}
      {/*        industry.*/}
      {/*      </MultiText>*/}
      {/*      <MultiText>*/}
      {/*        Lorem Ipsum is simply dummy text of the printing and typesetting*/}
      {/*        industry. Lorem Ipsum is simply dummy text of the printing and*/}
      {/*        typesetting industry. Lorem Ipsum is simply dummy text of the*/}
      {/*        printing and typesetting industry. Lorem Ipsum is simply dummy*/}
      {/*        text of the printing and typesetting industry. Lorem Ipsum is*/}
      {/*        simply dummy text of the printing and typesetting industry.*/}
      {/*      </MultiText>*/}
      {/*      <Date>22.03.2021</Date>*/}
      {/*    </MultiTextWrapper>*/}
      {/*  </MultiItem>*/}
      {/*</MultiList>*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //display: flex;
  max-width: 1200px;
  //margin-top: 30px;
`;

const ArticlesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 120px;
`;

const MainCol = styled.div`
  flex: 3;
  //background-color: gray;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const SideCol = styled.div`
  flex: 2;
  padding: 20px 30px;
  //background-color: #61dafb;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
`;

const Hr = styled.hr`
  border: 1px solid lightgray;
`;

const MultiList = styled.div`
  margin-bottom: 40px;
`;

const MultiItem = styled.div`
  display: flex;
`;

const MultiImgWrapper = styled.div`
  flex: 1;
`;

const MultiImg = styled.div`
  width: 300px;
  height: 200px;
  //flex: 1;

  background-color: #282c34;
`;

const MultiTextWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 30px;
`;

const MultiText = styled.p`
  font-size: ${({ title }) => (title ? "22px" : "18px")};
  font-weight: ${({ title }) => title && "bold"};
  //padding-bottom: 10px;
`;

const Date = styled.p`
  text-align: right;
  //margin: 10px 0;
  font-size: 20px;
  color: #b0b0b0;
`;

export default News;
