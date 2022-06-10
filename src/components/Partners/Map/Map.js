import React from "react";
import WorldMap from "react-svg-worldmap";

// norwegia, szwecja, polska, holandia, finlandia, estonia, lotwa, litwa, dania, niemcy, belgia, czechy, slowacja, ukraina, ruminia, wegry, chrwacja
// slowenia, austria, francja, hiszpania, anglia, irlandia, kanada,
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
    <>
      <WorldMap color="forestgreen" size="xxl" data={data} />
    </>
  );
};

export default Map;
