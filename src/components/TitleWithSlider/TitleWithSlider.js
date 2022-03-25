import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";

const TitleWithSlider = ({ title, icon }) => {
  return (
    <Wrapper>
      <TitleWithIcon title={title} icon={icon} />
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
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
        <SplideSlide>
          <ReadMoreCard article={false} />
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  //margin: ;
  padding-bottom: 50px;
`;

export default TitleWithSlider;
