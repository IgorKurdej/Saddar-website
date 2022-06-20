import React from "react";
import Services from "../components/Services/Services";
import LogoBar from "../components/LogoBar/LogoBar";
import NavBar from "../components/NavBar/NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ServicesView = () => {
  return (
    <Wrapper>
      {/*<LogoBar />*/}
      {/*<NavBar />*/}
      <Services />
    </Wrapper>
  );
};

export default ServicesView;
