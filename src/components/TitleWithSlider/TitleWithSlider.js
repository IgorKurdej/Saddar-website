import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

const TitleWithSlider = ({ title, icon: Icon }) => {
  return (
    <Wrapper>
      <Title secondary>Nasze</Title>
      <IconWrapper>
        <Title>{title}</Title>
        <Icon style={{ fontSize: "32px", color: "green" }} />
      </IconWrapper>
      {/*<Icon>*/}
      {/*</Icon>*/}
      <Hr />
      <Splide
        options={{
          perPage: 4,
          gap: "40px",
          rewind: true,
          arrows: false,
          padding: {
            top: 20,
            bottom: 20,
          },
          // width: "1200px",
          // padding: "50px",
          // focus: "center",
          pagination: false,
          hasSliderWrapper: true,
          breakpoints: {
            940: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard />
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  //margin: ;
  padding: 50px 0;
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

export default TitleWithSlider;
