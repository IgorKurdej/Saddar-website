import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const HeaderImg = styled.img.attrs(props => ({
    src: props.src,
}))`
    //height: 50%;
    width: 40%;
`;

export const DotsWrapper = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  border: ${props => props.className === 'active' ? '4px solid #048c44' : '2px solid black'};
  border-radius: 50%;
  cursor: pointer;
`;