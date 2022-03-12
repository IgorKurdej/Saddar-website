import React, { useState } from "react";
import styled from "styled-components";
import LogoBar from "../LogoBar/LogoBar";
import NavBar from "../NavBar/NavBar";
import ProductItem from "../ProductItem/ProductItem";
import img from "../../assets/img/products/psk wsp 4x4.png";

const AnchorWithDetails = () => {
  const [toggleActiveButton, setToggleActiveButton] = useState(true);

  return (
    <>
      <LogoBar />
      <NavBar />
      <Wrapper>
        <ImageWrapper>
          <ImageBox />
          <Image src={img} />
        </ImageWrapper>
        <DetailsContent>
          <Header>PSK WST</Header>
          <SizeDesc>51x51x550</SizeDesc>
          <ButtonsWrapper>
            <Button
              onClick={() => setToggleActiveButton(true)}
              active={toggleActiveButton}
            >
              Informacje
            </Button>
            <Button
              onClick={() => setToggleActiveButton(false)}
              active={!toggleActiveButton}
            >
              Dane techniczne
            </Button>
          </ButtonsWrapper>
          {toggleActiveButton ? (
            <>
              <Title>Opis</Title>
              <Description>
                SADDAR Eco spikes are manufactured of PET material specially
                constructed by ourselves. It is crystalized, chemically modified
                & glass fiber reinforced composite with high impact resistance,
                rigidity & tensile strength.
              </Description>
              <Title>Zalety</Title>
              <Description>
                <Ul>
                  <li>
                    Specjalnie opracowane przez nas tworzywo wzmocnione włóknem
                    szklanym
                  </li>
                  <li>
                    Krystalizowany PET o dużej sztywność i wytrzymałość na
                    zrywanie materiał polimerowy z odzysku (recyklat PET)
                  </li>
                  <li>
                    Model zaprojektowany z myślą o ekstremalnej wytrzymałości i
                    najwyższej jakości
                  </li>
                  <li>
                    Model przeznaczony do wbijania w ziemię lub posadowienia w
                    betonie bez konieczności kopania otworów
                  </li>
                  <li>
                    Znakomicie sprawdza się jako podpory kwadratowych
                    drewnianych słupów
                  </li>
                  <li>
                    Utrzyma drewniane słupki nad ziemią lub betonem
                    zabezpieczając słupek przed szkodnikami, grzybami, wodą,
                    śniegiem i lodem
                  </li>
                </Ul>
              </Description>
            </>
          ) : (
            <>
              <Title>Rozmiary</Title>
              <Table>
                <TableRow>
                  <TableHeader>SYMBOL</TableHeader>
                  <TableHeader>Dimensions [mm]</TableHeader>
                </TableRow>
                <TableRow>
                  <TableHeader>PSK WEX 71x71x750G</TableHeader>
                  <TableHeader>71x71x750</TableHeader>
                </TableRow>
                <TableRow>
                  <TableHeader>PSK WEX 71x71x750G</TableHeader>
                  <TableHeader>71x71x750</TableHeader>
                </TableRow>
              </Table>
              <Title>Zalety</Title>
              <Description>
                <Ul>
                  <li>
                    domy drewniane, domy modułowe, chaty ogrodowe, mola i
                    pomosty
                  </li>
                  <li>
                    mocowanie stalowych lub kompozytowych konstrukcji paneli
                    fotowoltaicznych
                  </li>
                  <li>
                    ogrodzenia z siatki drucianej, przemysłowe i drewniane
                  </li>
                  <li>tarasy, wiaty i drewniana architektura ogrodowa</li>
                  <li>oznakowania uliczne, mocowanie ławek parkowych</li>
                </Ul>
              </Description>
            </>
          )}
        </DetailsContent>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 80rem;
  min-height: 670px;
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  //margin: 0 20px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 400px;
  //padding: 20px 40px;
  padding: 0 40px;
  //background-color: #61dafb;
  display: flex;
  align-items: center;
  justify-content: center;
  //min-height: 600px;
  //height: 100%;
  margin: 40px 0;
  position: relative;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 100%;
  max-height: 400px;
  //background-color: #f1f1f1;
  position: absolute;
  //margin-top: 50px;

  ::after {
    content: "";
    width: 100%;
    height: 40%;
    background-color: #f1f1f1;
    bottom: 40px;

    position: absolute;
  }

  ::before {
    content: "";
    width: 25px;
    height: 50px;
    top: 0;
    left: 0;
    border-top: 10px solid #f1f1f1;
    border-left: 10px solid #f1f1f1;

    position: absolute;
  }
`;

const Image = styled.img`
  //width: 100%;
  //min-width: 300px;
  min-width: 400px;
  max-width: 450px;
  z-index: 2;
  //min-width: 350px;
  //width: 70%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailsContent = styled.div`
  flex: 1;
  min-width: 300px;
  //padding: 20px 40px;
  padding: 0 40px;
  //margin: 0 20px;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 40px;
`;

const SizeDesc = styled.p`
  margin: 0;
  color: #c4c4c4;
  font-size: 17px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 30px;
  max-width: 400px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? "#04A23C" : "#e7e6e6")};
  color: ${({ active }) => (!active ? "#04A23C" : "#e7e6e6")};
  border: none;
  width: 50%;
  //min-width: 180px;
  padding: 12px 0;
  font-size: 15px;
`;

const Title = styled.p`
  color: #04a23c;
  font-size: 24px;
  //margin-top: 30px;
`;

const Table = styled.table`
  border-collapse: collapse;
  max-width: 400px;
`;

const TableRow = styled.tr`
  border: 0.5px #a7a7a7 solid;
`;

const TableHeader = styled.th`
  border: 0.5px #a7a7a7 solid;
  width: 50%;
  padding: 0 20px;
`;

const Ul = styled.ul`
  padding: 0 20px;
`;

const Description = styled.p`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;

export default AnchorWithDetails;
