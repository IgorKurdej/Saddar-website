import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  //background-color: #282c34;
  margin: 150px 0;
`

export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

export const Img = styled.img`
  width: 500px;
  box-shadow: -30px 25px #048c44;
`

export const TextWrapper = styled.div`
  width: 70%;
  text-align: left;
  
  h2 {
    font-size: 30px;
  }
  
  p {
    font-size: 20px;
  }
  
  button {
    font-size: 20px;
    padding: 8px 28px;
    margin-top: 10px;
    border-radius: 5px;
    border: 2px solid #048c44;
    cursor: pointer;
    background-color: #048c44;
    color: #fff;
  }
`

export const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
