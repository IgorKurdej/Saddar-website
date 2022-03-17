import React from "react";
import styled from "styled-components";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import TitleWithSlider from "../TitleWithSlider/TitleWithSlider";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const KnowHow = () => {
  return (
    <Wrapper>
      <TitleWithSlider title="Innowacje" icon={CloudOutlinedIcon} />
      <TitleWithSlider title="Patenty" icon={MenuBookOutlinedIcon} />
      <TitleWithSlider title="Badania" icon={CloudOutlinedIcon} />
      <TitleWithSlider title="Certyfikaty" icon={CloudOutlinedIcon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  //background-color: #282c34;
`;

export default KnowHow;
