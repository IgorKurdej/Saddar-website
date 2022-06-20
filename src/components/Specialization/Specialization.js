import React, { useState } from "react";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PictureWithText from "../PictureWithText/PictureWithText";
import img5 from "../../assets/img/specialization/pexels-elle-hughes-4501786.jpg";
import img4 from "../../assets/img/specialization/ghozy-samudra-5C4LRRlyLJc-unsplash.jpg";
import img6 from "../../assets/img/specialization/omar-lopez-CR24X-w0GDA-unsplash.jpg";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const Specialization = () => {
  // const [modalIsOpen, setIsOpen] = useState();
  const [showMoreBudownictwo, setShowMoreBudownictwo] = useState(false);
  const [showMoreOgrod, setShowMoreOgrod] = useState(false);
  const [showMoreOgrodzenia, setShowMoreOgrodzenia] = useState(false);

  return (
    <Wrapper>
      {/*<Modal isOpen={modalIsOpen} setIsOpen={setIsOpen} />*/}
      <TitleWithIcon title="Specjalizacje" icon={BusinessCenterIcon} />
      <ImageWrapper>
        <PictureWithText
          direction="imgLeft"
          mainHeader="Budownictwo"
          src={img5}
          position
        >
          Budownictwo modułowe to segment, który obecnie dzięki rozwojowi
          technologii prężnie się rozwija. Kojarzone do niedawna z obiektami
          architektury tymczasowej - kontenerami technicznymi, pawilonami
          wystawowymi czy biurowymi, obecnie zyskuje bardzo szerokie
          zastosowanie. W tej technologii powstają szkoły, przedszkola, budynki
          użyteczności publicznej, obiekty służby zdrowia czy hotele.
          {showMoreBudownictwo && (
            <>
              Technologię modułową wykorzystuje się także w budownictwie
              mieszkaniowym wielo i jednorodzinnym. Największym atutem
              budownictwa modułowego jest błyskawiczny czas realizacji
              inwestycji. Budynki modułowe to często prawdziwe perełki
              architektoniczne, spełniające kryteria nowoczesnej architektury.
              Domy modułowe wyróżniają proste, oszczędne formy i przejrzystość
              kompozycji. Produkty SADDAR doskonale wpisują się w filozofię
              budownictwa modułowego i znajdują szerokie zastosowanie w
              systemach łączenia modułów z gruntem czy instalacji i montażu
              ścian działowych.
            </>
          )}
          <ShowMore
            onClick={() => setShowMoreBudownictwo(!showMoreBudownictwo)}
          >
            Pokaż więcej/mniej
          </ShowMore>
        </PictureWithText>
      </ImageWrapper>
      <ImageWrapper>
        <PictureWithText
          direction="imgRight"
          mainHeader="Architektura ogrodowa"
          src={img4}
        >
          Piękne i funkcjonalne ogrody są już w zasięgu ręki każdego
          majsterkowicza. Mamy rozwiązania, które zaspokoją potrzeby
          tradycjonalistów, którzy myślą o zaaranżowaniu tradycyjnego ogrodu z
          jasnym podziałem na taras, miejsce na grilla, piaskownicą dla dzieci i
          huśtawką.
          {showMoreOgrod && (
            <>
              Nasze Eko - Kotwy będą również odpowiednie dla tych, którzy
              planują pójść w kierunku nowoczesnej architektury, łamiącej
              dotychczasowe ramy i przyzwyczajenia. Co więcej, w przypadku
              zmiany koncepcji również mamy dla Ciebie rozwiązanie - nasze
              produkty możesz w łatwy sposób zdemontować i ponownie ich użyć w
              innym miejscu.
            </>
          )}
          <ShowMore onClick={() => setShowMoreOgrod(!showMoreOgrod)}>
            Pokaż więcej/mniej
          </ShowMore>
        </PictureWithText>
      </ImageWrapper>
      <ImageWrapper>
        <PictureWithText direction="imgLeft" mainHeader="Ogrodzenia" src={img6}>
          Ogrodzenia wokół posesji pełnią rolę praktyczną i dekoracyjną. My
          skupiliśmy się na części praktycznej. Wybór pomiędzy projektami
          tradycyjnymi, drewnianymi a modułowymi pozostawiliśmy naszym klientom.
          Eko - Kotwy SADDAR pozwalają na realizację obu typów ogrodzeń. Montaż
          jest szybki i przyjazny środowisku: bez użycia cementu oraz potrzeby
          dostosowania gruntu z użyciem ciężkiego sprzętu.
          {showMoreOgrodzenia && (
            <>
              W ofercie, oprócz kotew mamy do zaoferowania również słupki
              ogrodzeniowe dostosowanie do mocowania przęseł, wykonane z naszego
              autorskiego ekologicznego kompozytu.
            </>
          )}
          <ShowMore onClick={() => setShowMoreOgrodzenia(!showMoreOgrodzenia)}>
            Pokaż więcej/mniej
          </ShowMore>
        </PictureWithText>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 0 50px; */
`

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //width: 70%;
  max-width: 1200px;
  margin-bottom: 30px;
`;

const Image = styled.div`
  margin: 15px;
  width: 300px;
  height: 450px;
  background-image: ${(props) => `url(${props.src})`};
  border-radius: ${({ rounded }) => rounded && "50%"};
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  display: none;
`;

const ShowMore = styled.p`
  text-decoration: underline;
  color: gray;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export default Specialization;
