import React from "react";
import LogoBar from "../components/LogoBar/LogoBar";
import NavBar from "../components/NavBar/NavBar";
import Specialization from "../components/Specialization/Specialization";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  //text-align: center;
  //display: grid;
  //justify-content: center;
  //align-content: center;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
`;

const SpecializationView = () => {
  return (
    <Wrapper>
      {/*<LogoBar />*/}
      {/*<NavBar />*/}
      <Specialization />
    </Wrapper>
  );
};

export default SpecializationView;
