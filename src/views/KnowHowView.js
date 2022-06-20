import React from "react";
import styled from "styled-components";
import LogoBar from "../components/LogoBar/LogoBar";
import NavBar from "../components/NavBar/NavBar";
import KnowHow from "../components/KnowHow/KnowHow";

const KnowHowView = () => {
  return (
    <Wrapper>
      <LogoBar />
      <NavBar />
      <KnowHow />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
`;

export default KnowHowView;
