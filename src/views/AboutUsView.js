import React from "react";
import NavBar from "../components/NavBar/NavBar";
import LogoBar from "../components/LogoBar/LogoBar";
import AboutUs from "../components/AboutUs/AboutUs";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  //align-items: center;
  align-items: center;
  flex-direction: column;
`;

const AboutUsView = () => {
  return (
    <Wrapper>
      {/*<LogoBar />*/}
      {/*<NavBar />*/}
      <AboutUs />
    </Wrapper>
  );
};

export default AboutUsView;
