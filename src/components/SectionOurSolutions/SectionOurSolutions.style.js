import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ImagesWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.div`
  flex: 1;
  margin: 15px;
  max-width: 380px;
  height: 600px;
  background-image: ${(props => (`url(${props.src})`))};
  background-size: cover;
  filter: brightness(40%);
  transition: 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  
  :hover {
    filter: brightness(80%);
  }
  
  p {
    color: #fff;
    font-size: 34px;
    //font-weight: 700;
    margin: 10px 20px;
    //margin: 0;
    
    //:hover {
    //  color: black;
    //}
  }
`