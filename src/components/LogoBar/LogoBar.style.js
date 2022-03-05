import styled from 'styled-components';
import ReactCountryFlag from "react-country-flag";
import LogoImg from "../../assets/img/saddar_logo_425.png";

export const LogoBarWrapper = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderImg = styled.img.attrs({ src: `${LogoImg}` })`
    height: 60px;
`;

export const FlagsWrapper = styled.div`
  position: absolute;
  height: 70px;
  width: 200px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Flag = styled(ReactCountryFlag)`
  font-size: 1.4em;
  margin-right: 10px;
`

