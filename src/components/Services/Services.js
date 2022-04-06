import React from "react";
import styled from "styled-components";
import PictureWithText from "../PictureWithText/PictureWithText";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import img1 from "../../assets/img/services/MAS-75-Extruder.jpg";
import img2 from "../../assets/img/services/pexels-polina-tankilevitch-6929190.jpg";
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
        // button
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </PictureWithText>
      <PictureWithText mainHeader="Usługi wtrysku" src={img3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </PictureWithText>
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi doradcze i szkoleniowe"
        src={img2}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </PictureWithText>
      <PictureWithText mainHeader="Usługi projektowe" src={img4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </PictureWithText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
`;

export default Services;
