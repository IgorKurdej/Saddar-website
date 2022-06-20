import React, { useState, useEffect } from "react";
import * as S from "./Navbar.style";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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
        {
          navbarLinks.map(item => <S.Li key={item.name} as={Link} to={item.to}>{item.name}</S.Li>)
        }
        {
          !extendNavbar ? 
            <S.Menu onClick={() => setExtendNavbar(true)} /> :
            <S.MenuOpen onClick={() => setExtendNavbar(false)} />
        }
      </S.Ul>
      {
        extendNavbar &&
          <S.NavbarExtendedContainer>
            {navbarLinks.map(item => <S.NavbarLinkExtended key={item.name} to={item.to}>{item.name}</S.NavbarLinkExtended>)}
          </S.NavbarExtendedContainer>
      }
    </S.Wrapper>
  );
};

// const NavBar = () => {
//   const [extendNavbar, setExtendNavbar] = useState(false);
//   return (
//     <S.NavbarContainer extendNavbar={extendNavbar}>
//       <S.NavbarInnerContainer>
//         <S.LeftContainer>
//           <S.NavbarLinkContainer>
//             <S.NavbarLink to="/">Home</S.NavbarLink>
//             <S.NavbarLink to="/products">Products</S.NavbarLink>
//             <S.NavbarLink to="/contact">Contact us</S.NavbarLink>
//             <S.NavbarLink to="/about">About</S.NavbarLink>
//             <S.OpenLinksButton onClick={() => setExtendNavbar(!extendNavbar)}>
//               {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
//             </S.OpenLinksButton>
            
//           </S.NavbarLinkContainer>
//         </S.LeftContainer>
//       </S.NavbarInnerContainer>
//       {extendNavbar && (
//         <S.NavbarExtendedContainer>
//           <S.NavbarLinkExtended to="/">Home</S.NavbarLinkExtended>
//           <S.NavbarLinkExtended to="/products">Products</S.NavbarLinkExtended>
//           <S.NavbarLinkExtended to="/contact">Contact us</S.NavbarLinkExtended>
//           <S.NavbarLinkExtended to="/about">About</S.NavbarLinkExtended>
//         </S.NavbarExtendedContainer>
//       )}
//     </S.NavbarContainer>
//   );
// };

export default NavBar;

{
  /* <S.Li as={Link} to="/about">
          O nas
        </S.Li>
        <S.Li as={Link} to="/specialization">
          Specjalizacje
        </S.Li>
        <S.Li as={Link} to="/know-how">
          Know-how
        </S.Li>
        <S.Li as={Link} to="/products">
          Produkty
        </S.Li>
        <S.Li as={Link} to="/services">
          Usługi
        </S.Li>
        <S.Li as={Link} to="/partners">
          Partnerzy
        </S.Li>
        <S.Li as={Link} to="/news">
          Aktualności
        </S.Li>
        <S.Li as={Link} to="/instructions">
          Instrukcje
        </S.Li>
        <S.Li as={Link} to="/contact">
          Kontakt
        </S.Li> */
}
