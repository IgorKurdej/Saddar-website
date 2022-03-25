import React from "react";
import * as S from "./Footer.style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <S.Wrapper>
      {/*<S.ContentWrapper>*/}
      <p>2022. Grupa Saddar. Wszelkie prawa zastrzeżone.</p>
      <S.SocialsWrapper>
        <FacebookIcon fontSize={"medium"} />
        <InstagramIcon fontSize={"medium"} />
        <YouTubeIcon fontSize={"medium"} />
      </S.SocialsWrapper>
      {/*</S.ContentWrapper>*/}
    </S.Wrapper>
  );
};

export default Footer;
