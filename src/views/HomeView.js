import React from 'react';
import LogoBar from "../components/LogoBar/LogoBar";
import styled from 'styled-components';
import NavBar from "../components/NavBar/NavBar";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import SectionOurSolutions from "../components/SectionOurSolutions/SectionOurSolutions";
import SectionOurTeam from "../components/SectionOurTeam/SectionOurTeam";
import SectionSustainabilityPolicy from "../components/SectionSustainabilityPolicy/SectionSustainabilityPolicy";
import Footer from "../components/Footer/Footer";
import SectionVideo from "../components/SectionVideo/SectionVideo";

const Wrapper = styled.div`
  width: 100vw;
  //height: auto;
`

const HomeView = () => {
    return (
        <Wrapper>
            <LogoBar />
            <NavBar />
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