import React from "react";
import styled from "styled-components";
import Map from "./Map/Map";
import img from "../../assets/img/partners/markus-spiske-MbG7kwWptII-unsplash.jpg";

const shops = [
  "Hubo Belgium",
  "Euromate",
  "Leroy Merlin",
  "Hagebau",
  "Lux tools",
  "OBI",
  "Globus",
  "Kingfisher",
  "Sonderpreis Baumarkt",
  "Bauhof",
  "Dedeman",
  "Puumarket",
  "Hornbach",
  "Mr. Bricolage",
  "Menards",
  "Bauhaus",
  "PSB Mrówka",
  "BAUMAX",
  "4IQ",
  "Bricocash",
  "Merkury Market",
  "MOKI VEŽI",
  "Evotrade",
  "ERMITAZAS",
  "Bricodepot",
];

const Partners = () => {
  return (
    <>
      <ImageBanner>
        <span>Razem osiągamy wspólne cele</span>
      </ImageBanner>
      <Wrapper>
        <Title>Tu nas znajdziesz</Title>
        <Map />
        <Title>Dystrybutorzy</Title>
        <ShopsWrapper>
          {shops.map((shop, idx) => (
            <Shop key={idx}>{shop}</Shop>
          ))}
        </ShopsWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
`;

const ImageBanner = styled.div`
  width: 100vw;
  background: url(${img}) no-repeat center;
  height: 400px;
  background-size: 100%;
  position: relative;

  span {
    //max-font-size: 42px;
    //font-size: 42px;
    font-size: 3vw;
    color: white;
    bottom: 20px;
    right: 80px;
    position: absolute;
  }

  @media (max-width: 600px) {
    height: 250px;
    span {
      font-size: 24px;
      right: 30px;
    }
  }
`;

const Title = styled.p`
  font-size: 42px;
  position: relative;
  margin-top: 80px;
  margin-bottom: 20px;

  ::after {
    content: "";
    width: 80px;
    height: 2px;
    background-color: forestgreen;
    top: 0;
    left: 0;
    position: absolute;
  }
`;

const ShopsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const Shop = styled.span`
  font-size: 24px;
  margin: 10px 20px 10px 0;
`;

export default Partners;
