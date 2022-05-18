import React from "react";
import styled from "styled-components";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BiotechIcon from "@mui/icons-material/Biotech";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Mes from "../../assets/img/knowHow/MES.jpg";
import logo1 from "../../assets/img/knowHow/bv.jpg";
import logo2 from "../../assets/img/knowHow/tuv.png";
import logo3 from "../../assets/img/knowHow/lm.jpg";
import logo4 from "../../assets/img/knowHow/ks.jpg";

const KnowHow = () => {
  return (
    <Wrapper>
      <TitleWithIcon title="Innowacje i badania" icon={BiotechIcon} />
      <TextWrapper>
        <Text>
          Dzięki swojemu know-how firma SADDAR realizuje najbardziej
          zaawansowane technologicznie projekty od pomysłu do wdrożenia.
          Produkcja Eko - Kotew SADDAR wymagała opracowania technologii
          wytwarzania wysoko - wytrzymałościowego tworzywa PET modyfikowanego
          kilkoma składnikami chemicznymi i wzmacnianego włóknem szklanym.
          Kształt i wymiary Eko - Kotew zostały przez twórcę zaprojektowane tak,
          że:
        </Text>
        <Ul>
          <Li>
            zastosowano pogrubione przekroje we wszystkich miejscach
            odpowiedzialnych za naprężenia zrywające, zginające i udarność.
          </Li>
          <Li>
            istotnych miejscach roboczych/ funkcjonalnych ekokotwy SADDAR są
            kilkakrotnie grubsze od kotew z blachy stalowej.
          </Li>
        </Ul>
        <Text>W efekcie uzyskano:</Text>
        <Ul>
          <Li>
            Eko- Kotwę SADDAR, którą charakteryzują ponad DWUKROTNIE mniejsze
            maksymalne naprężenia. Oznacza to, że ma ona także większą
            maksymalną wytrzymałość od kotwy stalowej.
          </Li>
          <Li>zoptymalizowany kształt</Li>
          <Li>wyższe wytrzymałości od kotew spawanych z blachy stalowej.</Li>
        </Ul>
        <Text>
          Przed rozpoczęciem produkcji nowego modelu ekokotwy SADDAR projekt
          poddajemy analizie wytrzymałościowej. Stosując zaawansowane programy
          komputerowe do analiz MES (metoda elementów skończonych) określane są
          najsłabsze punkty nowej geometrii produktu i następnie korygowane.
          Powtarzając tę czynność kilkukrotnie osiągamy zoptymalizowany model
          ekokotwy SADDAR i dzięki temu maksymalną jej wytrzymałość.
          Zastosowanie technologii wtrysku wysokociśnieniowego pozwala nam na
          opracowanie Eko - Eotew o bardziej skomplikowanych kształtach niż
          kotwy stalowe.
        </Text>
        <Img src={Mes} alt="" />
        <Text>
          W kotwie stalowej występują duże obszary koncentracji naprężeń przy
          podstawie kieszeni na słupek - kolor czerwony. Skutkuje to pękaniem
          spawów w tym obszarze. W Eko - Kotwach SADDAR nie ma takiego
          zagrożenia, gdyż nie występują tak duże obszary koncentracji naprężeń.
          Kolorowa skala w prawym dolnym rogu obydwu analiz obrazuje naprężenia.
          Do obydwu symulacji przyjęto takie same obciążenia boczne:
        </Text>
        <Ul>
          <Li>na szczycie skali ekokotwy SADDAR mamy 123 MPa,</Li>
          <Li>na szczycie skali kotwy stalowej mamy 247 MPa.</Li>
        </Ul>
        <Text>
          Prace rozwojowo - badawcze prowadzimy ponadto w następujących
          dziedzinach:
        </Text>
        <Ul>
          <Li>
            prace badawczo-rozwojowe pozwalające na opracowanie nowych rozwiązań
            technologicznych,
          </Li>
          <Li>
            modyfikacja składu tworzyw termoplastycznych w tym napełnianych
            wypełniaczami mineralnymi i roślinnymi,
          </Li>
          <Li>wprowadzanie do produkcji nowych produktów,</Li>
          <Li>
            wprowadzanie do produkcji dotychczas oferowanych produktów ale po
            wprowadzeniu zmian podwyższających parametry i właściwości
          </Li>
        </Ul>
      </TextWrapper>
      <TitleWithIcon title="Patenty" icon={MenuBookOutlinedIcon} />
      <TextWrapper>
        <Text>
          Stworzony system Eko - Kotew Saddar jest objęty chroniony prawami
          autorskimi. Są to wzory przemysłowe nr: RCD 002595843-0001 do RCD
          002595843-0015, 001254528-0001, 001254528-0002 Patent nr P.419267
        </Text>
      </TextWrapper>
      <TitleWithIcon title="Certyfikaty" icon={CloudOutlinedIcon} />
      <TextWrapper>
        <Text>SDS (Stress Distribution System):</Text>
        <Ul>
          <Li>
            to specjalnie zaprojektowane elementy amortyzujące i pochłaniające
            energię siły wbijającej
          </Li>
          <Li>
            to także pogrubione przekroje w piórach szpica Eko- Kotwy Saddar
            odpowiedzialnych za naprężenia zrywające, zginające i udarność
          </Li>
          <Li>
            System SDS zapobiega również kumulowaniu siły (energii) uderzeń na
            dnie kieszeni na słupek
          </Li>
          <Li>
            System SDS przenosi ponadto energię (siłę) wbijającą bezpośrednio na
            pióra szpica Eko- Kotwy Saddar eliminując ryzyko uszkodzenia Eko-
            Kotwy podczas wbijania
          </Li>
        </Ul>
        <Text>
          System SHR (Socket’s screw holes reinforced with additional material).
          SHR wzmacnia ścianki i otwory na śruby kieszeni na słupek specjalnym
          nadlewem kompozytu. Ten unikalny nadlew tworzywa zapewnia:
        </Text>
        <Ul>
          <Li>stabilność mocowania słupka w kieszeni kotwy</Li>
          <Li>stabilizuje śruby i zwiększa wytrzymałość połączenia</Li>
          <Li>
            zwiększa wytrzymałość słupka osadzonego w kotwie przed naporem siły
            bocznej
          </Li>
          <Li>uzyskanie większej estetyki mocowania</Li>
        </Ul>
      </TextWrapper>
      <TitleWithIcon title="Audyty" icon={StarBorderIcon} />
      <TextWrapper>
        <AuditsWrapper>
          <AuditItem>
            <AuditText>
              BUREAU VERITAS (na zlecenie THE HOME DEPOT USA)
            </AuditText>
            <AuditImg src={logo1} alt="" />
          </AuditItem>
          <AuditItem>
            <AuditText>
              TÜV Rheinland - Niemcy (na zlecenie Hornbach Niemcy)
            </AuditText>
            <AuditImg src={logo2} alt="" />
          </AuditItem>
          <AuditItem>
            <AuditText>Leroy Merlin Polska</AuditText>
            <AuditImg src={logo3} alt="" />
          </AuditItem>
          <AuditItem>
            <AuditText>Kingfisher</AuditText>
            <AuditImg src={logo4} alt="" />
          </AuditItem>
        </AuditsWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 100px;
`;

const TextWrapper = styled.div`
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

const Ul = styled.ul``;

const Li = styled.li`
  margin-left: 50px;
  font-size: 20px;
`;

const Img = styled.img`
  max-width: 600px;
  width: 100%;
  display: block;
  margin: 30px auto;
`;

const AuditsWrapper = styled.div`
  //background-color: gray;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const AuditItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 500px;
`;

const AuditText = styled.span`
  font-size: 22px;
  text-align: center;
`;

const AuditImg = styled.img`
  max-height: 100px;
  margin: 20px 0 10px;
`;

export default KnowHow;
