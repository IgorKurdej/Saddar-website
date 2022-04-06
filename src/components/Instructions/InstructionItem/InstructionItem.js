import React from "react";
import styled from "styled-components";
import DownloadIcon from "@mui/icons-material/Download";

const InstructionItem = ({ href, fileName, img, title }) => {
  return (
    <InstructionItemWrapper href={href} download={fileName}>
      <img src={img} alt="instruction" />
      <p>{title}</p>
    </InstructionItemWrapper>
  );
};

const InstructionItemWrapper = styled.a`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid forestgreen;
  margin: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  img {
    width: 80%;
  }

  p {
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  //:hover {
  //  //filter: brightness(50%);
  //  opacity: 0.5;
  //  :after {
  //    content: "";
  //    width: 50px;
  //    height: 50px;
  //    background-color: gray;
  //    border-radius: 50%;
  //    position: absolute;
  //  }
  //}
`;

export default InstructionItem;
