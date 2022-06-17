import React from "react";
import WorldMap from "react-svg-worldmap";
import styled from "styled-components";

const data = [
  { country: "pl", value: " " },
  { country: "no", value: " " },
  { country: "se", value: " " },
  { country: "nl", value: " " },
  { country: "fi", value: " " },
  { country: "ee", value: " " },
  { country: "li", value: " " },
  { country: "lv", value: " " },
  { country: "de", value: " " },
  { country: "dk", value: " " },
  { country: "be", value: " " },
  { country: "dk", value: " " },
  { country: "ua", value: " " },
  { country: "cz", value: " " },
  { country: "sk", value: " " },
  { country: "ro", value: " " },
  { country: "hu", value: " " },
  { country: "hr", value: " " },
  { country: "fr", value: " " },
  { country: "si", value: " " },
  { country: "at", value: " " },
  { country: "es", value: " " },
  { country: "uk", value: " " },
  { country: "ca", value: " " },
  { country: "ie", value: " " },
];

const Map = () => {
  return (
    <Wrapper>
      <WorldMap color="forestgreen" size="xxl" data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

export default Map;
