import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 40px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  //height: 400px;
  //max-width: 100%;

  //margin: 20px 0;
  display: flex;
  flex-wrap: ${(props) => (props.direction ? "wrap-reverse" : "wrap")};
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  flex: 1;
  padding: 20px 30px;
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
  font-weight: 300;
  margin: 0;
  padding-bottom: 10px;
`;

export const MainHeader = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
  text-align: ${(props) => (props.direction === "left" ? "right" : "left")};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${({ alignRight }) => alignRight && "right"};
`;

export const Img = styled.div`
  height: 350px;
  min-width: 400px;
  flex: 1;
  margin: 20px 30px;
  //padding: 0 10px;

  //height: 50%;
  //margin: 30px 10px;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: ${({ position }) =>
    position ? "0 -300px" : "center"};
  background-position: center;
`;

export const DetailsBtn = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: forestgreen;
  padding: 8px 25px;
  border-radius: 4px;
  border: 2px solid forestgreen;
  margin-top: 30px;
  cursor: pointer;
`;
