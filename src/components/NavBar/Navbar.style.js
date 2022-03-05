import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #000;
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
  font-size: 22px;
  cursor: pointer;
  
  :hover {
    color: #04a23c;
  }
`