import React from "react";
import * as S from "./AboutUsSection.style";
import SliderHome from "../../SliderHome/SliderHome";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img0 from "../../../assets/img/kotwy/psk_scr_4_4_24-removebg-preview (3).png";
import img1 from "../../../assets/img/kotwy/psk_scr_4x4x24_real-removebg-preview.png";
import img2 from "../../../assets/img/kotwy/psk_wsp_4_4_24-removebg-preview.png";
import img3 from "../../../assets/img/kotwy/pskwst2x2-removebg-preview.png";
import img4 from "../../../assets/img/kotwy/pso_wsp_101_750-removebg-preview.png";

const data = [img0, img1, img2, img3, img4];

const AboutUsSection = () => (
  <>
    <S.Wrapper>
      <S.LeftWrapper>
        <S.TextWrapper>
          <h1>SADDAR to znacznie więcej niż small business “made in Poland”</h1>
          <p>
            PHU SADDAR to rodzinna firma działająca z sukcesem od ponad 30 lat
            na rynku polskim oraz rynkach międzynarodowych.
          </p>
          <p>
            Opracowaliśmy i wdrożyliśmy innowacyjną i unikalną w skali światowej
            technologię wytwarzania kompozytu, do którego używamy tworzywa PET
            pochodzącego z recyclingu plastikowych butelek. Kompozyt służy nam
            do produkcji systemu Eko - Kotew mających szerokie zastosowanie w
            budownictwie, instalacji farm fotowoltaicznych czy architekturze
            ogrodowej.
          </p>
          <p>
            Nasze produkty są w pełni ekologiczne i spełniają wymogi gospodarki
            obiegu zamkniętego.
          </p>
        </S.TextWrapper>
        <S.Button as={Link} to="/about">
          Dowiedz się więcej
        </S.Button>
      </S.LeftWrapper>
      <S.RightWrapper>
        <Splide
          options={{
            perPage: 1,
            rewind: true,
            width: 400,
            padding: 13,
            // height: 438,
          }}
        >
          <SplideSlide>
            <S.ImageWrapper>
              <S.Image src={img1} alt="Image 1" />
            </S.ImageWrapper>
          </SplideSlide>
          <SplideSlide>
            <S.ImageWrapper>
              <S.Image src={img2} alt="Image 2" />
            </S.ImageWrapper>
          </SplideSlide>
        </Splide>
      </S.RightWrapper>
      {/*<S.SliderWrapper>*/}
      {/*  <S.Stripe height={"15%"} color={true} />*/}
      {/*  <S.Stripe height={"10%"} />*/}
      {/*  <S.Stripe height={"20%"} color={true} />*/}
      {/*  <S.Stripe height={"15%"} />*/}
      {/*  <S.Stripe height={"40%"} color={true} />*/}
      {/*  <S.SliderContent>*/}
      {/*    <SliderHome />*/}
      {/*  </S.SliderContent>*/}
      {/*</S.SliderWrapper>*/}
    </S.Wrapper>
  </>
);

export default AboutUsSection;
