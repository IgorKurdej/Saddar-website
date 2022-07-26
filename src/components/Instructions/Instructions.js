import React from "react";
import styled from "styled-components";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import img1 from "../../assets/img/instructions/Bez nazwy-1.png";
import img2 from "../../assets/img/instructions/instrukcja 1.png";
import img3 from "../../assets/img/instructions/Bez nazwy-zasady gwarancjki.png";
import pdf1 from "../../assets/pdf/instrukcja1.pdf";
import pdf2 from "../../assets/pdf/instrukcja2.pdf";
import pdf3 from "../../assets/pdf/Zasady_reklamacji_i_zwrotu_towarw_SADDAR_2022.pdf";
import InstructionItem from "./InstructionItem/InstructionItem";

const Instructions = () => {
  return (
    <Wrapper>
      <TitleWithIcon title="Instrukcje" icon={IntegrationInstructionsIcon} />
      <InstructionsWrapper>
        <InstructionItem
          href={pdf1}
          fileName="Instrukcja-montażu-Eko-szpica-PSK_SADDAR-2022.pdf"
          img={img1}
          title="Instrukcja montażu Eko szpica PSK_SADDAR 2022"
        />
        <InstructionItem
          href={pdf2}
          fileName="Instrukcja-montażu-kotwy-do-siatki_1.pdf"
          img={img2}
          title="Instrukcja montażu ekokotwy SADDAR"
        />
        <InstructionItem
          href={pdf3}
          fileName="Zasady_reklamacji_i_zwrotu_towarw_SADDAR_2022.pdf"
          img={img3}
          title="Zasady reklamacji i zwrotu towaru"
        />
      </InstructionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const InstructionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Instructions;
