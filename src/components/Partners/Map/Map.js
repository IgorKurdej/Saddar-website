import React from "react";
import WorldMap from "react-svg-worldmap";

const data = [
  { country: "pl", value: 3 }, // china
  { country: "ca", value: 1311559204 }, // india
  { country: "us", value: 331883986 }, // united states
  { country: "id", value: 264935824 }, // indonesia
  { country: "pk", value: 210797836 }, // pakistan
  { country: "br", value: 210301591 }, // brazil
  { country: "ng", value: 208679114 }, // nigeria
  { country: "bd", value: 161062905 }, // bangladesh
  { country: "ru", value: 141944641 }, // russia
  { country: "mx", value: 127318112 }, // mexico
];

const Map = () => {
  return (
    <>
      <WorldMap color="forestgreen" size="xxl" data={data} />
    </>
  );
};

export default Map;
