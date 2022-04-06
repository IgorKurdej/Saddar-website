import React from "react";
import * as S from "./AboutUs.style";
import PictureWithText from "../PictureWithText/PictureWithText";
import img1 from "../../assets/img/AboutUs/pexels-alena-koval-886521.jpg";
import img2 from "../../assets/img/AboutUs/pexels-markus-spiske-2559749.jpg";
import img3 from "../../assets/img/AboutUs/pexels-markus-spiske-2990610.jpg";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HistoryBar from "../HistoryBar/HistoryBar";

const AboutUs = () => {
  return (
    <S.Wrapper>
      <TitleWithIcon title="O nas" icon={AccessibilityNewIcon} />
      <PictureWithText
        direction="imgLeft"
        header="O nas"
        mainHeader="Tworzenie firmy to nie sprint. To maraton."
        src={img1}
      >
        Dowiedz się o nas.
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
        header="Eco policy"
        mainHeader="Kto zna działanie przyrody, ten żyje z nią w zgodzie."
        src={img2}
      >
        Dowiedz się o naszej eko polityce
      </PictureWithText>
      <S.TextContent>
        Nasza działalność wpisuje się założenia gospodarki obiegu zamkniętego,
        zwanej inaczej gospodarką cyrkularną. To model gospodarczy przyszłości,
        w którym zasoby krążą w zamkniętym obiegu. Wszystkie produkty wytwarzamy
        z surowca PET, który pochodzi z recyklingu plastikowych butelek.
        Wytworzony w ten kompozyt znajduje zastosowanie w producji eko kotew o
        szerokim zastosowaniu w budownictwie. Każdy nasz produkt można ponownie
        odzyskać i przetworzyć na kompozyt i dać mu drugie, a nawet trzecie
        życie. <br />
        <br />
        Podobnie w gospodarce cyrkularnej cykl życia produktów jest cyklem
        zamkniętym, mogącym powtarzać się – przynajmniej w teorii – w
        nieskończoność.
      </S.TextContent>
      <S.TextContent>
        Na naszej skończonej planecie surowce mają ograniczone zasoby, a
        przestrzeń na wyrzucanie tak po prostu odpadów praktycznie już nie
        istnieje. Dziś oprócz ograniczonych zasobów naturalnych, dodatkową
        granicą, której nie możemy przekroczyć stały się zmiany klimatu.
        Gospodarka obiegu zamkniętego jest odpowiedzią na te wyzwania. W obiegu
        zamkniętym koniec życia produktu jest zarazem początkiem życia nowego
        produktu. Dla naszych eko kotew koniec życia butelki plastikowej jest
        początkiem życia dla kompozytu, z którego wytwarzamy produkty o szerokim
        spektrum zastosowania. Innymi słowy wszystkie odpady zostają
        spożytkowane, ich wartość dodana jest zmaksymalizowana. Na każdą
        wyprodukowaną eko kotwę zużywamy 20 butelek PET. (Tu ładna grafika,
        która to ilustruje).
      </S.TextContent>
      <PictureWithText
        direction="imgLeft"
        header="Nasza historia"
        mainHeader="Przemiana pomysłu w wynalazek"
        src={img3}
      >
        Nie ciekawi Cię jak się tu znaleźliśmy?
      </PictureWithText>

      <HistoryBar />
    </S.Wrapper>
  );
};

export default AboutUs;
