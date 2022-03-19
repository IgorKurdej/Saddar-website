import React from "react";
import styled from "styled-components";
import PictureWithText from "../PictureWithText/PictureWithText";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import img1 from "../../assets/img/services/MAS-75-Extruder.jpg";
import img2 from "../../assets/img/services/immo-wegmann-rReG42Hkqo4-unsplash.jpg";
import img3 from "../../assets/img/services/Injection-Molding-Machines.png";
import img4 from "../../assets/img/services/scott-graham-OQMZwNd3ThU-unsplash.jpg";

const Services = () => {
  return (
    <Wrapper>
      <TitleWithIcon title="Usługi" icon={DesignServicesIcon} />
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi wytłoczenia granulatu"
        src={img1}
        button
      />
      <PictureWithText mainHeader="Usługi wtrysku" src={img3} button />
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi doradcze i szkoleniowe"
        src={img2}
        button
      />
      <PictureWithText mainHeader="Usługi projektowe" src={img4} button />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
`;

export default Services;
