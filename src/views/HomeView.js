import React, { useEffect, useState } from "react";
import LogoBar from "../components/LogoBar/LogoBar";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import SectionVideo from "../components/Home/SectionVideo/SectionVideo";

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

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
    <>
      <LogoBar isHomePage={true} isScrollMove={isScrollMove} />
      <NavBar isHomePage={true} isScrollMove={isScrollMove} />
      <SectionVideo />
      <Home />
      <Footer />
    </>
  );
};

export default HomeView;
