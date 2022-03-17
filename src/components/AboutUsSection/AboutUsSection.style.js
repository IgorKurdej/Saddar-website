import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1200px;
  //height: 50vh;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  //align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  //margin: 0;
  font-size: 40px;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TextWrapper = styled.div`
  width: 100%;
  text-align: left;
  //padding-right: 100px;

  h2 {
    font-size: 30px;
    margin: 0;
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
`;

export const SliderWrapper = styled.div`
  //margin-left: 100px;
  max-width: 800px;
  max-height: 800px;
  flex: 1;
  position: relative;
`;

export const SliderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Stripe = styled.div`
  width: 100%;
  background-color: ${(props) => (props.color ? "#f6f6f6" : "transparent")};
  height: ${(props) => `${props.height}`};
`;
