import React from "react";
import Services from "../components/Services/Services";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ServicesView = () => {
  return (
    <Wrapper>
      <Services />
    </Wrapper>
  );
};

export default ServicesView;
