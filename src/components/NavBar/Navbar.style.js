import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  //background-color: ${({isHomePage, isScrollMove}) => isScrollMove ? 'black' : 'transparent'};
  background-color: #282c34;
  position: ${props => props.isHomePage && 'fixed'};
  top: 80px;
  z-index: 4;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  color: #fff;
  list-style: none;
  margin: 0 20px;
  font-size: 24px;
  
  :hover {
    color: #04a23c;
  }
`