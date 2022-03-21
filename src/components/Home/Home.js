import React from "react";
import styled from "styled-components";
import SectionVideo from "./SectionVideo/SectionVideo";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import SectionOurSolutions from "./SectionOurSolutions/SectionOurSolutions";
import SectionOurTeam from "../SectionOurTeam/SectionOurTeam";
import SectionSustainabilityPolicy from "../SectionSustainabilityPolicy/SectionSustainabilityPolicy";
import Footer from "../Footer/Footer";
import startup from "../../assets/img/startup-593341_1920.jpg";
import PictureWithText from "../PictureWithText/PictureWithText";

const Home = () => {
  return (
    <>
      <SectionVideo />
      <Wrapper>
        <AboutUsSection />
        <SectionOurSolutions />
        {/*<SectionOurTeam />*/}
        {/*<SectionSustainabilityPolicy />*/}
        <PictureWithText
          direction="imgRight"
          src={startup}
          mainHeader="Zbudujmy razem mosty!"
          button="Nasz zespół"
        >
          PHU SADDAR jest wyłącznym producentem i dystrybutorem EKOKOTEW
          SADDAR®. Oferujemy idealne ekologiczne produkty przyczyniając się do
          poszanowania środowiska naturalnego. EKOKOTWY SADDAR® są produktami o
          oryginalnych chronionych prawem rozwiązaniach technicznych, posiadają
          ochronę prawa autorskiego.
        </PictureWithText>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
`;

export default Home;
