import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: 40px;
  min-height: 60px;
  background-color: ${(props) =>
    props.isHomePage
      ? props.isScrollMove
        ? "black"
        : "transparent"
      : "black"};
  //background-color: #282c34;
  position: ${(props) => props.isHomePage && "fixed"};
  top: 70px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;

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
`;
