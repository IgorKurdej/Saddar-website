import React, { useState, useEffect } from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const navbarLinks = [
  {
    to: "/about",
    name: "O nas",
  },
  {
    to: "/specialization",
    name: "Specjalizacje",
  },
  {
    to: "/know-how",
    name: "Know-how",
  },
  {
    to: "/products",
    name: "Produkty",
  },
  {
    to: "/services",
    name: "Usługi",
  },
  {
    to: "/partners",
    name: "Partnerzy",
  },
  {
    to: "/news",
    name: "News",
  },
  {
    to: "/instructions",
    name: "Instrukcje",
  },
  {
    to: "/contact",
    name: "Kontakt",
  },
];

const NavBar = ({ isHomePage, isScrollMove }) => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <S.Wrapper isHomePage={isHomePage} isScrollMove={isScrollMove}>
      <S.Ul>
        {navbarLinks.map((item) => (
          <S.Li key={item.name} as={Link} to={item.to}>
            {item.name}
          </S.Li>
        ))}
        {!extendNavbar ? (
          <S.Menu onClick={() => setExtendNavbar(true)} />
        ) : (
          <S.MenuOpen onClick={() => setExtendNavbar(false)} />
        )}
      </S.Ul>
      {extendNavbar && (
        <S.NavbarExtendedContainer>
          {navbarLinks.map((item) => (
            <S.NavbarLinkExtended
              key={item.name}
              to={item.to}
              onClick={() => setExtendNavbar(!extendNavbar)}
            >
              {item.name}
            </S.NavbarLinkExtended>
          ))}
        </S.NavbarExtendedContainer>
      )}
    </S.Wrapper>
  );
};

export default NavBar;
