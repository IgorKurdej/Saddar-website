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
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import banner from "../../assets/img/knowHow/POZIOM_KOLOR_RPOFLAGA_RPMAZOWSZEEFRR.jpg";

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
        <TitleWithIcon title="Programy Unijne" icon={CloudOutlinedIcon} />
        <TextWrapper>
            <Text>Informujemy, iż firma P.H.U. SADDAR Dariusz Sadowiński realizuje projekt pn. <b>"Wdrożenie gamy autorskich ekokotew SADDAR jako efekt realizacji prac B+R". </b>
                Projekt jest finansowany w ramach Priorytetu III " Rozwój potencjału innowacyjnego i przedsiębiorczości", działanie 3.3 "Innowacje w MŚP"
            </Text>
            <Text><b>Nazwa beneficjenta:</b> P.H.U SADDAR Dariusz Sadowiński</Text>
            <Text><b>Wartość projektu:</b> 2 192 893,00 zł</Text>
            <Text><b>Wartość dofinansowania:</b> 959 605,20 zł</Text>


            <Text>Projekt współfinansowany przez Unię Europejską z Europejskiego Funduszu Rozwoju Regionalnego</Text>

            <Text><b>Opis projektu:</b></Text>

            <Text>Przedmiotem projektu realizowanego przez firmę PHU SADDAR jest wdrożenie własnych prac badawczo - rozwojowych objętych dofinansowaniem w ramach
                działania 1.2 Regionalnego Programu Operacyjnego Województwa Mazowieckiego na lata 2014 -2020 pt. "Innowacyjna gama autorskich ekokotew Saddar
                o różnych właściwościach i przeznaczeniu".</Text>
            <Text>Głównym celem projektu jest wzrost konkurencyjności i poszerzenia oferty produktowej P.H.U. SADDAR na rynku.
            </Text>
            <Banner alt="" src={banner} />
        </TextWrapper>

        {/*<SectionSustainabilityPolicy />*/}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const TextWrapper = styled.div`
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

const Banner = styled.img`
  width: 100%;
  margin: 20px 0 40px;
`

export default Home;