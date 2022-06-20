import React, { useState } from "react";
import styled from "styled-components";
import PictureWithText from "../PictureWithText/PictureWithText";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import img1 from "../../assets/img/services/MAS-75-Extruder.jpg";
import img2 from "../../assets/img/services/pexels-polina-tankilevitch-6929190.jpg";
import img3 from "../../assets/img/services/Injection-Molding-Machines.png";
import img4 from "../../assets/img/services/scott-graham-OQMZwNd3ThU-unsplash.jpg";

const Services = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Wrapper>
      <TitleWithIcon title="Usługi" icon={DesignServicesIcon} />
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi wytłoczenia granulatu"
        src={img1}
        // button
      >
        Oferujemy usługi regranulacji i modyfikacji oraz napełniania tworzyw
        sztucznych. Oferujemy:
        <ul>
          <li>
            - produkcję granulatów tworzyw sztucznych napełnianych wypełniaczami
            mineralnymi i roślinnymi
          </li>
          <li>- produkcję koncentratów barwiących na bazie poliestrów</li>
        </ul>
        Nasz park maszynowy pozwala na przetwarzanie ok. 30-tu gatunków
        termoplastycznych tworzyw sztucznych. Najwyższa jakość wykonywanych
        regranulatów umożliwia ich zastosowanie w różnorodnych gałęziach
        przemysłu, m.in. w budownictwie, elektronice, motoryzacji,
        telekomunikacji, w produkcji opakowań, obuwi i przemyśle włókienniczym.
        Specjalizujemy się w wytłaczaniu modyfikowanych tworzyw konstrukcyjnych
        wzmacnianych włóknem szklanym i ich przerobem metodą wtryskową.
        Wykonujemy usługi w zakresie granulacji:
        {readMore && (
          <>
            <ul>
              <li>- ABS w postaci regranulatu czystego i modyfikowanego</li>
              <li>- ABS/PC w postaci regranulatu</li>
              <li>- PBT – regranulaty czyste i wzmacniane</li>
              <li>
                - PA – Poliamidy a w tym : PA6, PA 6 +GF, PA 6.6, PA 6.6 +GF ,
                PA 4.6, PA 12
              </li>
              <li>
                - PE w tym LDPE, HDPE przeznaczone do wytłaczania, wtrysku i
                rozdmuchu
              </li>
              <li>
                - PET – Poli (tereftelan etylenu) w postaci regranulatu czystego
                i z włóknem szklanym
              </li>
              <li>
                - PMMA – Poli (metakrylan metylu) regranulaty transparentne i
                kryte
              </li>
              <li>- POM – Poliacetal: homopolimer i kopolimer</li>
              <li>- PP – Polipropylen regranulaty czyste i modyfikowane</li>
              <li>- PS – Polistyren nisko – wysokoudarowy</li>
              <li>- TPU – Poliuretan termoplastyczny</li>
              <li>
                - Elastomery poliestrowy, poliolefinowy, kopolimer styrenu
              </li>
              <li>- Inne na zamówienie</li>
            </ul>
            <p>
              Wszystkie regranulaty dostępne są zarówno w formach pierwotnych
              oraz mogą być dowolnie modyfikowane na indywidualne potrzeby
              klienta. Oferujemy wytwarzanie regranulatów na zamówienie klienta
              o oczekiwanych wartościach MFI, MVR.
            </p>
          </>
        )}
        <br />
        <button onClick={() => setReadMore(!readMore)}>
          Pokaż więcej/mniej
        </button>
      </PictureWithText>
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi wtrysku"
        src={img3}
      >
        W naszym zakładzie produkcyjnym w Markach realizujemy również na
        zlecenie naszych klientów usługi wtrysku detali. Dysponujemy maszynami o
        sile zamka od 5000 do 6500 kN i wadze wtrysku do 4 kg. W szczególności
        usługi te dotyczą:
        <ul>
          <li>
            - produkcji/ wtryskiwania na formach własnych lub powierzonych z
            wszelkiego rodzaju tworzyw termoplastycznych włącznie z
            modyfikatorami
          </li>
          <li>
            - wtrysku z surowców powierzonych lub regranulatów wykonywanych
            przez naszą firmę
          </li>
        </ul>
      </PictureWithText>
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi doradcze i szkoleniowe"
        src={img2}
      >
        Dzięki swojemu know-how, zrealizujemy najbardziej zaawansowane
        technologicznie projekty od pomysłu do realizacji. Nasza oferta
        obejmuje:
        <ul>
          <li>- prace badawczo-rozwojowe</li>
          <li>
            - opracowywanie innowacyjnych produktów i unikatowych rozwiązań
            technologicznych
          </li>
          <li>
            - realizację kompleksowych projektów, od koncepcji i doradztwa, po
            projektowanie, wykonanie form wtryskowych i produkcję seryjną
          </li>
          <li>- automatyzację procesów produkcyjnych w branży PTS,</li>
          <li>- budowa podajników IML,</li>
          <li>- serwis nietypowych maszyn do PTS</li>
        </ul>
        Prowadzimy również szkolenia w zakresie obsługi maszyn do PTS, jak
        również w zakresie ustawiania parametrów wtrysku, Dodatkowo dysponujemy
        niezbędnym do realizacji zaawansowanych projektów biurem
        konstrukcyjno-technologicznym.
      </PictureWithText>
      <PictureWithText
        direction="imgRight"
        mainHeader="Usługi projektowe"
        src={img4}
      >
        <ul>
          <li>
            - opracowujemy kompleksowe technologie oraz projektujemy i
            wykonujemy oprzyrządowania do produkcji wyrobów z tworzyw sztucznych
          </li>
          <li>
            - projektujemy ciągi technologiczne do produkcji wyrobów z tworzyw
            sztucznych technikami: wytłaczanie, wtrysk i formowanie próżniowe.
          </li>
          <li>
            - realizujemy usługi doradztwa technicznego,
            techniczno-ekonomicznego oraz ekspertyzy z zakresu przetwórstwa
            tworzyw sztucznych
          </li>
        </ul>
      </PictureWithText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;

  ul {
    list-style: none;
  }

  li {
    padding: 10px 15px;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 18px;
    text-decoration: underline;
    margin-top: 10px;
    color: gray;
    cursor: pointer;
  }
`;

export default Services;
