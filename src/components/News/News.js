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
import img1 from '../../assets/img/articles/realizacje/saddar2.jpeg'
import img2 from '../../assets/img/articles/realizacje/zdj.jpeg'
import img3 from '../../assets/img/articles/realizacje/slupki-13.jpeg'
import img4 from '../../assets/img/articles/realizacje/slupki-18.jpeg'
import img5 from '../../assets/img/articles/realizacje/slupki-19.jpeg'
import img6 from '../../assets/img/articles/realizacje/slupki-22.jpeg'
import img7 from '../../assets/img/articles/realizacje/IMG_20160512_133104.jpeg'
import img8 from '../../assets/img/articles/realizacje/IMG_20160524_114054.jpeg'
import img9 from '../../assets/img/articles/realizacje/001_SADDAR.jpeg'

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
            <ReadMoreCard
                article={true}
                textVisibility={true}
                img={news[3].img}
                mainText={news[3].mainText}
                title={news[3].title}
                contentText={news[3].contentText}
                date={news[3].date}
            />
          </SideCol>
        </ArticlesWrapper>
      ) : (
        <ArticlesWrapper>
          <SideCol>
            {
              news.map((item, idx) => 
                <ReadMoreCard
                  article={true}
                  img={news[idx].img}
                  mainText={news[idx].mainText}
                  title={news[idx].title}
                  contentText={news[idx].contentText}
                />)
            }
          </SideCol>
        </ArticlesWrapper>
      )}
      <Wrapper>
          <TitleWithIcon title="Realizacje naszych klientów" icon={NewspaperIcon} onlyTitle />
            <Title>1. Architektura ogrodowa</Title>
            <Text>
                A) Z ogromną przyjemnością prezentujemy opinię i zdjęcie z samodzielnej wykonanej instalacji naszego klienta:
                "Kolor idealnie dopasował się do koloru paneli.
                Produkt super, łatwo się poziomuje, odprowadza wodę,
                każdemu bede polecał jako alternatywę dla ocynku. Mam juz na tych szpicach pergolę i domek drewniany dla dzieci”.
                <br/>
                ~Maciej Kopeć, Łódź
            </Text>
            <Image src={img1} alt=""/>
            <Text>B) Realizacja wykonana na działce na Mazowszu</Text>
            <Image src={img2} alt=""/>
            <Title>2. Ogrodzenia</Title>
            <Text>Ogrodzenia drewniane to nasza specjalność. Poniżej prezentujemy zdjęcia z realizacji wybiegów dla koni wykorzystaniem naszych eko-kotew dla schroniska zwierząt w Korabiewicach prowadzonego przez Fundację Viva. Na szczególną uwagę zasługuje fakt, że ogrodzenie wykonali pracownicy Polpharma w ramach wolontariatu.</Text>
            <Image src={img5} alt=""/>
            <Image src={img4} alt=""/>
            <Image src={img3} alt=""/>
            <Image src={img6} alt=""/>
            <Title>3. Budownictwo</Title>
            <Text>A) Eko - kotwy Saddar znajdują wszechstronne zastosowanie. Na zdjęciach prezentujemy taras wykonany przez producenta desek tarasowych firmę Prodeck z Krakowa, która od kliku lat jest dystrybutorem naszych produktów.
                Ekipy monterskie Prodeck z powodzeniem stosują eko kotwy Saddar do montażu tarasów dla swoich klientów. </Text>
            <Image src={img7} alt=""/>
            <br/>
            <Image src={img8} alt=""/>
            <Text>B) Posadowienie domu modułowego z użyciem eko - kotew Saddar to wygodne i oszczędne rozwiązanie, które nie wymaga zastosowania podbudowy betonowej. Na zdjęciach prezentujemy przykład wspólnej realizacji z producentem domów modułowych Form2Form</Text>
            <Image src={img9} alt=""/>

      </Wrapper>
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
  padding: 30px;
  display: flex;
  //align-items: center;
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

const Title = styled.p`
  font-size: 40px;
  margin: 10px 0;
  padding: 0 20px;
`

const Text = styled.p`
  font-size: 24px;
  margin: 20px 0;
  padding: 0 20px;
`

const Image = styled.img`
  display: block;
  margin: 10px auto;
  width: 50%;
`



export default News;


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