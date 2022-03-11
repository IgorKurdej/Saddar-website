import React, { useEffect, useState } from "react";
import LogoBar from "../components/LogoBar/LogoBar";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import SectionOurSolutions from "../components/SectionOurSolutions/SectionOurSolutions";
import SectionOurTeam from "../components/SectionOurTeam/SectionOurTeam";
import SectionSustainabilityPolicy from "../components/SectionSustainabilityPolicy/SectionSustainabilityPolicy";
import Footer from "../components/Footer/Footer";
import SectionVideo from "../components/SectionVideo/SectionVideo";

const Wrapper = styled.div`
  width: 100%;
`;

const HomeView = () => {
  const [isScrollMove, setIsScrollMove] = useState(false);

  const handleScroll = () => {
    window.pageYOffset >= 200 ? setIsScrollMove(true) : setIsScrollMove(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <LogoBar isHomePage={true} isScrollMove={isScrollMove} />
      <NavBar isHomePage={true} isScrollMove={isScrollMove} />
      <SectionVideo />
      <AboutUsSection />
      <SectionOurSolutions />
      <SectionOurTeam />
      <SectionSustainabilityPolicy />
      <Footer />
    </Wrapper>
  );
};

export default HomeView;
