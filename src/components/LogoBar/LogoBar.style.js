import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import LogoImg from "../../assets/img/saddar_logo_425.png";

export const LogoBarWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.isHomePage && "fixed"};
  top: 0;
  background-color: ${({ isHomePage, isScrollMove }) =>
    isHomePage ? isScrollMove && "white" : "transparent"};
  z-index: 3;

  animation: ${(props) => props.isScrollMove && "appear .75s ease"};

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
`;

export const Flag = styled(ReactCountryFlag)`
  font-size: 1.4em;
  margin-right: 10px;
`;
