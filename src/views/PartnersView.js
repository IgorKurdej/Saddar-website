import React from "react";
import Partners from "../components/Partners/Partners";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PartnersView = () => {
  return (
    <Wrapper>
      <Partners />
    </Wrapper>
  );
};

export default PartnersView;
