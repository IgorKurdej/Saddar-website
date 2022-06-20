import React, { useEffect, useState } from "react";
import LogoBar from "../components/LogoBar/LogoBar";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import SectionVideo from "../components/Home/SectionVideo/SectionVideo";

const Wrapper = styled.div`
  width: 100%;
  //max-width: 1200px;
  display: flex;

  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const HomeView = () => {
  return (
    <Wrapper>
      {/*<LogoBar isHomePage={true} isScrollMove={isScrollMove} />*/}
      {/*<NavBar isHomePage={true} isScrollMove={isScrollMove} />*/}
      <SectionVideo />
      <Home />
    </Wrapper>
  );
};

export default HomeView;
