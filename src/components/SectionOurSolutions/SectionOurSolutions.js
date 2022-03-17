import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SectionOurSolutions.style";
import img1 from "../../assets/img/ourSolutions/pexels-emmanuel-ajayi-7260387.jpg";
import img2 from "../../assets/img/ourSolutions/pexels-andrea-davis-10593591.jpg";
import img3 from "../../assets/img/ourSolutions/stephen-hansen-R8i1awntfII-unsplash.jpg";

const SectionOurSolutions = () => (
  <S.Container>
    <S.Wrapper>
      <h1>Nasze Rozwiązania</h1>
      <S.ImagesWrapper>
        <S.Image as={Link} to="/specialization" src={img2}>
          <p>Budownictwo</p>
        </S.Image>
        <S.Image as={Link} to="/specialization" src={img3}>
          <p>Architektura ogrodowa</p>
        </S.Image>
        <S.Image as={Link} to="/specialization" src={img1}>
          <p>Ogrodnictwo</p>
        </S.Image>
      </S.ImagesWrapper>
    </S.Wrapper>
  </S.Container>
);

export default SectionOurSolutions;
