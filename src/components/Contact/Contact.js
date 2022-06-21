import React from "react";
import styled from "styled-components";
import LogoBar from "../LogoBar/LogoBar";
import NavBar from "../NavBar/NavBar";
import ContactItem from "./ContactItem/ContactItem";
import img from "../../assets/img/contact/luca-bravo-fPoSK5XeyHw-unsplash.jpg";
import Footer from "../Footer/Footer";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallIcon from "@mui/icons-material/Call";
import { contacts } from "../../assets/Data";

const Contact = () => {
  return (
    <>
      <Image src={img} />
      <InformationWrapper>
        <ContactWrapper>
          <HeaderWrapper>
            <Header>Skontaktuj się z nami</Header>
            {/*<CallIcon />*/}
          </HeaderWrapper>
          <Wrapper>
            {contacts.map((item) => (
              <ContactItem key={item.id} {...item} />
            ))}
          </Wrapper>
        </ContactWrapper>
        <AddressWrapper>
          <HeaderWrapper>
            <Header>Adres</Header>
            {/*<LocationOnOutlinedIcon />*/}
          </HeaderWrapper>
          <Wrapper>
            <ContactItem
              position="Biuro"
              name="ul. Arabska 4/2"
              email="03-977 Warszawa"
              phone="Polska"
            />
            <ContactItem
              position="Zakład produkcyjny"
              name="ul. Ciurlionisa 5"
              email="05-260 Marki"
              phone="Polska"
            />
          </Wrapper>
        </AddressWrapper>
      </InformationWrapper>
      {/*<Header>Skontaktuj się z nami</Header>*/}
      {/*<Wrapper>*/}
      {/*  {contacts.map((item) => (*/}
      {/*    <ContactItem key={item.id} {...item} />*/}
      {/*  ))}*/}
      {/*</Wrapper>*/}
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.div`
  min-height: 400px;
  width: 100%;
  background-image: url(${img});
  //background-position-y: -350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //background-size: cover;
  //width: 100%;
  //max-height: 400px;
`;

const InformationWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const ContactWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-bottom: 25px;
  margin: 50px 0 25px;
`;

const Header = styled.h1`
  color: #04a23c;
  font-size: 40px;
  margin-right: 10px;
`;

export default Contact;
