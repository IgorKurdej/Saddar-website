import React from "react";
import styled from "styled-components";
import LogoBar from "../LogoBar/LogoBar";
import NavBar from "../NavBar/NavBar";
import ContactItem from "./ContactItem/ContactItem";
import img from "../../assets/img/contact/luca-bravo-fPoSK5XeyHw-unsplash.jpg";
import Footer from "../Footer/Footer";

const contacts = [
  {
    id: 1,
    position: "Właściciel, dział handlowy",
    name: "Dariusz Sadowiński",
    email: "dariusz.sadowinski@saddar.eu",
    phone: "+48698645855",
  },
  {
    id: 2,
    position: "Dyrektor ds. międzynarodowych rynków DIY",
    name: "Dariusz Sadowiński",
    email: "dariusz.sadowinski@saddar.eu",
    phone: "+48698645855",
  },
  {
    id: 3,
    position: "Właściciel, dział handlowy",
    name: "Dariusz Sadowiński",
    email: "dariusz.sadowinski@saddar.eu",
    phone: "+48698645855",
  },
  // {
  //   id: 4,
  //   position: "Dyrektor ds. międzynarodowych rynków DIY",
  //   name: "Dariusz Sadowiński",
  //   email: "dariusz.sadowinski@saddar.eu",
  //   phone: "+48698645855",
  // },
  // {
  //   id: 5,
  //   position: "Właściciel, dział handlowy",
  //   name: "Dariusz Sadowiński",
  //   email: "dariusz.sadowinski@saddar.eu",
  //   phone: "+48698645855",
  // },
];

const Contact = () => {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Image src={img} />
      <Header>Skontaktuj się z nami</Header>
      <Wrapper>
        {contacts.map((item) => (
          <ContactItem key={item.id} {...item} />
        ))}
      </Wrapper>
      <Header>Adres</Header>
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

const Header = styled.h1`
  color: #04a23c;
  font-size: 40px;
  margin-top: 50px;
`;

export default Contact;
