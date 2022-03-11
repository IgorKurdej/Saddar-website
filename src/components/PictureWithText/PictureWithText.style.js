import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  //width: 100%;
  //height: 400px;
  max-width: 1200px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.direction === "left" ? "flex-end" : "flex-start"};
  justify-content: center;
`;

export const Stripe = styled.div`
  height: 2px;
  width: 80px;
  background-color: forestgreen;
`;

export const Header = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 10px;
`;

export const MainHeader = styled.h1`
  font-size: 48px;
  margin: 0;
  padding-bottom: 40px;
  text-align: ${(props) => (props.direction === "left" ? "right" : "left")};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ alignRight }) => alignRight && "right"};
`;

export const Img = styled.div`
  height: 380px;
  max-width: 550px;
  width: 100%;
  margin: 30px 20px;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: ${({ position }) => position && "0 -280px"};
`;
