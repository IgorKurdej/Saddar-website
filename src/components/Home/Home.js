import React from "react";
import styled from "styled-components";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import SectionOurSolutions from "./SectionOurSolutions/SectionOurSolutions";
import SectionOurTeam from "../SectionOurTeam/SectionOurTeam";
import SectionSustainabilityPolicy from "../SectionSustainabilityPolicy/SectionSustainabilityPolicy";
import Footer from "../Footer/Footer";
import startup from "../../assets/img/startup-593341_1920.jpg";
import PictureWithText from "../PictureWithText/PictureWithText";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Home = () => {
  return (
    <Wrapper>
      <AboutUsSection />
      <SectionOurSolutions />
      {/*<TitleWithIcon title='Know-How' icon={BusinessCenterIcon} />*/}
      {/*<SectionOurTeam />*/}
      <PictureWithText
        direction="imgRight"
        src={startup}
        mainHeader="Nasze know-how"
        button="Dowiedz się więcej"
        to="know-how"
      >
        System kompozytowych Eko - Kotew SADDAR został oparty na zastrzeżonej
        konstrukcji i innowacyjnej idei wykorzystania do produkcji nowego
        materiału: kompozytu PET zbrojonego włóknem szklanym. Opracowane
        tworzywo - krystalizowany PET o podwyższonej udarności ma dużą sztywność
        i wytrzymałość na zrywanie. Dzięki temu z powodzeniem konkurujemy
        jakością i innowacyjnością naszych produktów z tradycyjnymi produktami
        wykonanymi ze stali.
      </PictureWithText>
      {/*<SectionSustainabilityPolicy />*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
`;

export default Home;

{
  /*Nasza działalność wpisuje się założenia gospodarki obiegu zamkniętego, zwanej inaczej*/
}
{
  /*gospodarką cyrkularną. To model gospodarczy przyszłości, w którym zasoby krążą w*/
}
{
  /*zamkniętym obiegu. Wszystkie produkty wytwarzamy z surowca PET, który pochodzi z*/
}
{
  /*recyklingu plastikowych butelek. Wytworzony w ten kompozyt znajduje zastosowanie w*/
}
{
  /*producji eko kotew o szerokim zastosowaniu w budownictwie. Każdy nasz produkt można*/
}
{
  /*ponownie odzyskać i przetworzyć na kompozyt i dać mu drugie, a nawet trzecie życie.*/
}

{
  /*Podobnie w gospodarce cyrkularnej cykl życia produktów jest cyklem zamkniętym,*/
}
{
  /*mogącym powtarzać się – przynajmniej w teorii – w nieskończoność.*/
}
{
  /*Na naszej skończonej planecie surowce mają ograniczone zasoby, a przestrzeń na*/
}
{
  /*wyrzucanie tak po prostu odpadów praktycznie już nie istnieje.*/
}
{
  /*Dziś oprócz ograniczonych zasobów naturalnych, dodatkową granicą, której nie możemy*/
}
{
  /*przekroczyć stały się zmiany klimatu. Gospodarka obiegu zamkniętego jest odpowiedzią*/
}
{
  /*na te wyzwania. W obiegu zamkniętym koniec życia produktu jest zarazem początkiem*/
}
{
  /*życia nowego produktu. Dla naszych eko kotew koniec życia butelki plastikowej jest*/
}
{
  /*początkiem życia dla kompozytu, z którego wytwarzamy produkty o szerokim spektrum*/
}
{
  /*zastosowania. Innymi słowy wszystkie odpady zostają spożytkowane, ich wartość dodana*/
}
{
  /*jest zmaksymalizowana. Na każdą wyprodukowaną eko kotwę zużywamy 20 butelek PET.*/
}
