import React from "react";
import NavBar from "../../NavBar/NavBar";
import LogoBar from "../../LogoBar/LogoBar";
import styled from "styled-components";

const NewsItemDetails = () => {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Wrapper>
        <Image />
        <Date>22.03.2021</Date>
        <Title>
          Polska ekologiczna technologia do budowy farm PV wchodzi na europejski
          rynek.
        </Title>
        <Text>
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone... Dotychczasowa hegemonia producentów i dostawców
          kotew stalowych została przełamana autorskim rozwiązaniem polskiej
          firmy PHU SADDAR Dariusz Sadowiński z sukcesem - podbijającej Europę
          Zachodnią oraz Stany Zjednoczone...Dotychczasowa hegemonia producentów
          i dostawców kotew stalowych została przełamana autorskim rozwiązaniem
          polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem - podbijającej
          Europę Zachodnią oraz Stany Zjednoczone... Dotychczasowa hegemonia
          producentów i dostawców kotew stalowych została przełamana autorskim
          rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem -
          podbijającej Europę Zachodnią oraz Stany Zjednoczone...Dotychczasowa
          hegemonia producentów i dostawców kotew stalowych została przełamana
          autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z
          sukcesem - podbijającej Europę Zachodnią oraz Stany Zjednoczone...
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesemDotychczasowa hegemonia producentów i
          dostawców kotew stalowych została przełamana autorskim rozwiązaniem
          polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem - podbijającej
          Europę Zachodnią oraz Stany Zjednoczone... Dotychczasowa hegemonia
          producentów i dostawców kotew stalowych została przełamana autorskim
          rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem -
          podbijającej Europę Zachodnią oraz Stany Zjednoczone...Dotychczasowa
          hegemonia producentów i dostawców kotew stalowych została przełamana
          autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z
          sukcesem - podbijającej Europę Zachodnią oraz Stany Zjednoczone...
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesDotychczasowa hegemonia producentów i
          dostawców kotew stalowych została przełamana autorskim rozwiązaniem
          polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem - podbijającej
          Europę Zachodnią oraz Stany Zjednoczone... Dotychczasowa hegemonia
          producentów i dostawców kotew stalowych została przełamana autorskim
          rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem -
          podbijającej Europę Zachodnią oraz Stany Zjednoczone...Dotychczasowa
          hegemonia producentów i dostawców kotew stalowych została przełamana
          autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z
          sukcesem - podbijającej Europę Zachodnią oraz Stany Zjednoczone...
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone...Dotychczasowa hegemonia producentów i dostawców
          kotew stalowych została przełamana autorskim rozwiązaniem polskiej
          firmy PHU SADDAR Dariusz Sadowiński z sukcesem - podbijającej Europę
          Zachodnią oraz Stany Zjednoczone... Dotychczasowa hegemonia
          producentów i dostawców kotew stalowych została przełamana autorskim
          rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z sukcesem -
          podbijającej Europę Zachodnią oraz Stany Zjednoczone...Dotychczasowa
          hegemonia producentów i dostawców kotew stalowych została przełamana
          autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz Sadowiński z
          sukcesem - podbijającej Europę Zachodnią oraz Stany Zjednoczone...
          Dotychczasowa hegemonia producentów i dostawców kotew stalowych
          została przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR
          Dariusz Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz
          Stany Zjednoczone...em - podbijającej Europę Zachodnią oraz Stany
          Zjednoczone... - podbijającej Europę Zachodnią oraz Stany
          Zjednoczone...
        </Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  margin-top: 30px;
`;

const Image = styled.div`
  background-image: url("https://www.bundeskanzler.de/resource/image/1756332/16x9/1023/575/f2d91d626eb9ce3b95566704f333fe17/NB/2020-05-27-eu-fahne.jpg");
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //max-height: 400px;
  min-height: 300px;
  //background-color: #61dafb;
`;

const Date = styled.p`
  text-align: right;
  margin: 10px 0;
  font-size: 20px;
  color: #b0b0b0;
`;

const Title = styled.h1`
  //margin: 20px 0;
  font-size: 42px;
`;

const Text = styled.p`
  margin: 20px 0 50px;
  font-size: 22px;
`;

export default NewsItemDetails;
