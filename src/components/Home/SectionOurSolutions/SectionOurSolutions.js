import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SectionOurSolutions.style";
import img1 from "../../../assets/img/ourSolutions/pexels-emmanuel-ajayi-7260387.jpg";
import img2 from "../../../assets/img/ourSolutions/pexels-andrea-davis-10593591.jpg";
import img3 from "../../../assets/img/ourSolutions/stephen-hansen-R8i1awntfII-unsplash.jpg";
import TitleWithIcon from "../../TitleWithIcon/TitleWithIcon";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const SectionOurSolutions = () => (
  <S.Container>
    <S.Wrapper>
      <TitleWithIcon title="Specjalizacje" icon={BusinessCenterIcon} />
      <S.ImagesWrapper>
        <S.ImageWrapper>
          <S.Image as={Link} to="/specialization" src={img2} />
          <S.ImageText>Budownictwo</S.ImageText>
        </S.ImageWrapper>
        <S.ImageWrapper>
          <S.Image as={Link} to="/specialization" src={img3} />
          <S.ImageText>Architektura ogrodowa</S.ImageText>
        </S.ImageWrapper>
        <S.ImageWrapper>
          <S.Image as={Link} to="/specialization" src={img1} />
          <S.ImageText>Ogrodzenia</S.ImageText>
        </S.ImageWrapper>
      </S.ImagesWrapper>
    </S.Wrapper>
  </S.Container>
);

export default SectionOurSolutions;
