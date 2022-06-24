import React from "react";
import * as S from "./Footer.style";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Wrapper>
      {/*<S.ContentWrapper>*/}
      <p>2022. Grupa Saddar. Wszelkie prawa zastrzeżone.</p>
      <S.SocialsWrapper>
        <a href="https://www.linkedin.com/company/phu-saddar/" target="_blank">
          <LinkedInIcon fontSize={"medium"} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCnVUgkl6PqaAvKhKC3nJbIg/featured"
          target="_blank"
        >
          <YouTubeIcon fontSize={"medium"} />
        </a>
      </S.SocialsWrapper>
      {/*</S.ContentWrapper>*/}
    </S.Wrapper>
  );
};

export default Footer;
