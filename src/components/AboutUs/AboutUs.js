import React from "react";
import * as S from "./AboutUs.style";
import PictureWithText from "../PictureWithText/PictureWithText";
import img1 from "../../assets/img/AboutUs/pexels-nikolai-ulltang-323933.jpg";

const AboutUs = () => {
  return (
    <S.Wrapper>
      <PictureWithText
        direction="imgLeft"
        header="Eco policy"
        mainHeader="Kto zna działanie przyrody, ten żyje z nią w zgodzie."
        src={img1}
      >
        Dowiedz się o naszej eko polityce.
      </PictureWithText>
      <S.TextContent>
        Rozwiązania instalacyjne oferowane przez SADDAR mają bardzo szerokie
        zastosowanie, w tym jako elementy montażu ogrodzeń, drewnianej
        architektury ogrodowej, instalacji farm fotowoltaicznych czy w sektorze
        budowlanym. Są to kotwy wbijane, wkręcane i przykręcane w niemal każdy
        rodzaj gruntu czy powierzchni. Na szeroką skalę używane są w EU i USA.
        Montaż jest szybki i przyjazny środowisku: bez użycia cementu oraz
        potrzeby dostosowania gruntu z użyciem ciężkiego sprzętu. W razie
        potrzeby, instalacje można po prostu przenieść w inne miejsce bez
        jakiegokolwiek uszczerbku dla środowiska.
      </S.TextContent>
      <S.TextContent>
        Dotychczasowa hegemonia producentów i dostawców kotew stalowych została
        przełamana autorskim rozwiązaniem polskiej firmy PHU SADDAR Dariusz
        Sadowiński z sukcesem - podbijającej Europę Zachodnią oraz Stany
        Zjednoczone. Naszym celem jest zapewnienie idealnego ekologicznego
        produktu, który będzie istotnie przyczyniał się do poszanowania
        środowiska naturalnego. Przy poziomie produkcji 1.5 mln sztuk rocznie i
        zużyciu 20 butelek na jedną eko kotwę możemy poddawać recyklingowi aż 30
        mln plastikowych butelek.
      </S.TextContent>
      <PictureWithText
        direction="imgRight"
        header="Nasza historia"
        mainHeader="Przemiana pomysłu w wynalazek"
        src={img1}
      >
        Nie ciekawi Cię jak się tu znaleźliśmy?
      </PictureWithText>
    </S.Wrapper>
  );
};

export default AboutUs;
