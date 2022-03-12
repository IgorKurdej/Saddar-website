import React from "react";
import styled from "styled-components";
import LogoBar from "../components/LogoBar/LogoBar";
import NavBar from "../components/NavBar/NavBar";
import PictureWithText from "../components/PictureWithText/PictureWithText";

import img1 from "../assets/img/specialization/david-emrich-xnEZYWmfPwU-unsplash.jpg";
import img2 from "../assets/img/specialization/pexels-adriaan-greyling-754268.jpg";
import img3 from "../assets/img/specialization/pexels-fillvlad-10278313.jpg";
import img4 from "../assets/img/specialization/ghozy-samudra-5C4LRRlyLJc-unsplash.jpg";
import img5 from "../assets/img/specialization/pexels-rachel-claire-4992384.jpg";
import img6 from "../assets/img/specialization/omar-lopez-CR24X-w0GDA-unsplash.jpg";

const SpecializationView = () => {
  return (
    <>
      <LogoBar />
      <NavBar />
      <h1>Nasze specjalizacje</h1>
      {/*<span>Spójrz w czym możemy Ci pomóc</span>*/}
      {/*<ImageWrapper>*/}
      {/*  <Image src={img2} />*/}
      {/*  <Image src={img1} />*/}
      {/*  <Image src={img3} />*/}
      {/*</ImageWrapper>*/}
      <ImageWrapper>
        <PictureWithText
          direction="imgLeft"
          mainHeader="Budownictwo"
          src={img5}
          position
        >
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone...
        </PictureWithText>
      </ImageWrapper>
      <ImageWrapper>
        <PictureWithText
          direction="imgRight"
          mainHeader="Architektura ogrodowa"
          src={img4}
        >
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone...
        </PictureWithText>
      </ImageWrapper>
      <ImageWrapper>
        <PictureWithText direction="imgLeft" mainHeader="Ogrodzenia" src={img6}>
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone...
        </PictureWithText>
      </ImageWrapper>
    </>
  );
};

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

export default SpecializationView;
