import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {FiMenu} from "react-icons/fi"
import {MdMenuOpen} from "react-icons/md"

// export const NavbarContainer = styled.nav`
//   width: 100%;
//   height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
//   background-color: #000;
//   display: flex;
//   flex-direction: column;
//   position: sticky;
//   top: 80px;
//   cursor: pointer;
//   z-index: 20;

//   @media (min-width: 700px) {
//     height: 80px;
//   }
// `;

// export const LeftContainer = styled.div`
//   flex: 70%;
//   display: flex;
//   align-items: center;
//   padding-left: 5%;
// `;

// export const RightContainer = styled.div`
//   flex: 30%;
//   display: flex;
//   align-items: center;
//   padding-right: 50px;
// `;

// export const NavbarInnerContainer = styled.div`
//   width: 100%;
//   height: 80px;
//   display: flex;
// `;

// export const NavbarLinkContainer = styled.div`
//   display: flex;
// `;

// export const NavbarLink = styled(Link)`
//   color: #fff;
//   font-size: x-large;
//   font-family: Arial, sans-serif;
//   text-decoration: none;
//   margin: 10px;

//   @media (max-width: 700px) {
//     display: none;
//   }
// `;

// export const NavbarLinkExtended = styled(Link)`
//   color: #fff;
//   font-size: x-large;
//   font-family: Arial, sans-serif;
//   text-decoration: none;
//   margin: 10px;
// `;

// export const Logo = styled.img`
//   margin: 10px;
//   max-width: 180px;
//   height: auto;
// `;

// export const OpenLinksButton = styled.button`
//   width: 70px;
//   height: 50px;
//   // background: none;
//   border: none;
//   color: #fff;
//   font-size: 45px;
//   cursor: pointer;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// export const NavbarExtendedContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;
//------------------------------------------------------------------
export const Wrapper = styled.nav`
  width: 100%;
  min-height: 60px;
  background-color: ${(props) =>
    props.isHomePage
      ? props.isScrollMove
        ? "black"
        : "transparent"
      : "black"};
  //background-color: #282c34;
  position: ${(props) => props.isHomePage ? "fixed" : "sticky"};
  /* position: sticky; */
  /* position: sticky; */
  top: 70px;
  /* top: 0; */
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${(props) => props.isScrollMove && "appear .75s ease"};

  @media screen and (max-width: 1024px) {
    /* display: none; */
    background-color: black;
    animation: none;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  color: #fff;
  list-style: none;
  margin: 0 20px;
  //font-size: clamp(24px, 16px);
  font-size: 20px;
  text-decoration: none;

  :hover {
    color: #04a23c;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Menu = styled(FiMenu)`
  color: white;
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);

  @media screen and (max-width: 1024px) {
    display: block;
  }
`

export const MenuOpen = styled(MdMenuOpen)`
  color: white;
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);

  @media screen and (max-width: 1024px) {
    display: block;
    
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  /* justify-content: center; */
  background-color: black;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 70px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-family: Arial, sans-serif;
  text-decoration: none;
  margin: 12px;

`;