import React from "react";
import * as S from "./AboutUs.style";
import PictureWithText from "../PictureWithText/PictureWithText";
import img1 from "../../assets/img/AboutUs/pexels-nikolai-ulltang-323933.jpg";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HistoryBar from "../HistoryBar/HistoryBar";

const AboutUs = () => {
  return (
    <S.Wrapper>
      <TitleWithIcon title="O nas" icon={AccessibilityNewIcon} />
      <PictureWithText
        direction="imgLeft"
        header="Eco policy"
        mainHeader="Kto zna działanie przyrody, ten żyje z nią w zgodzie."
        src={img1}
      >
        Dowiedz się o naszej eko polityce.
      </PictureWithText>
      <S.TextContent>
        PHU SADDAR to rodzinna firma działająca z sukcesem od ponad 30 lat na
        rynku polskim oraz rynkach międzynarodowych. W 2004 roku założyciel
        firmy Pan Dariusz Sadowiński opracował i wdrożył do produkcji autorski
        projekt w skali światowej – system kompozytowych eko kotew SADDAR oparty
        na zastrzeżonej konstrukcji i innowacyjnej idei wykorzystania do
        produkcji kompozytu PET zbrojonego włóknem szklanym. Produkt ten nie
        tylko wyznaczył nowe kierunki rozwoju działalności firmy, ale przede
        wszystkim został branżowym liderem, zdobywając uznanie wśród klientów na
        całym świecie.
      </S.TextContent>
      <S.TextContent>
        Bazowy surowiec – tworzywo PET używany do produkcji pochodzi z
        recyklingu plastikowych butelek, plasując tym samym proces produkcji eko
        kotew SADDAR oraz firmę wśród organizacji w wysoce dbających o
        poszanowanie środowiska naturalnego i działających według zasad
        gospodarki obiegu zamkniętego. Rozwiązania instalacyjne oferowane przez
        SADDAR mają bardzo szerokie zastosowanie, w tym jako elementy montażu
        ogrodzeń, drewnianej architektury ogrodowej, instalacji farm
        fotowoltaicznych czy w sektorze budowlanym. Są to kotwy wbijane,
        wkręcane i przykręcane w niemal każdy rodzaj gruntu czy powierzchni. Na
        szeroką skalę używane są w EU i USA. Montaż jest szybki i przyjazny
        środowisku: bez użycia cementu oraz potrzeby dostosowania gruntu z
        użyciem ciężkiego sprzętu. W razie potrzeby, instalacje można po prostu
        przenieść w inne miejsce bez jakiegokolwiek uszczerbku dla środowiska.
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
      <HistoryBar />
    </S.Wrapper>
  );
};

export default AboutUs;
