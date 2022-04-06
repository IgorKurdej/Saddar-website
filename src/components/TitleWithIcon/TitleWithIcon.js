import React from "react";
import styled from "styled-components";

const TitleWithIcon = ({ title, icon: Icon }) => {
  return (
    <Wrapper>
      <Title secondary>Nasze</Title>
      <IconWrapper>
        <Title>{title}</Title>
        <Icon style={{ fontSize: "32px", color: "green" }} />
      </IconWrapper>
      <Hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  //padding: 20px 0;

  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;

const Title = styled.p`
  font-size: ${(props) => (props.secondary ? "20px" : "56px")};
  font-weight: ${(props) => !props.secondary && "ultralight"};
  color: ${(props) => (props.secondary ? "#c6c5c5" : "black")};
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 5px;
`;

const Hr = styled.hr`
  margin-bottom: 20px;
`;

export default TitleWithIcon;
