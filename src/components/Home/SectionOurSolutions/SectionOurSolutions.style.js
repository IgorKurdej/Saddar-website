import styled from "styled-components";

export const Container = styled.div`
  //background-color: #f6f6f6;
  width: 100%;
  display: flex;
  //align-items: center;
  justify-content: center;
  //margin: 40px;
  //padding: 40px 0;
  //background-color: #61dafb;
  margin-bottom: 80px;
`;

export const Wrapper = styled.div`
  //max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 50px;
  }
`;

export const ImagesWrapper = styled.div`
  //width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  //background-color: #282c34;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.div`
  //flex: 1;
  margin: 10px;
  width: 380px;
  min-height: 600px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  filter: brightness(50%);
  transition: 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  text-decoration: none;

  :hover {
    opacity: 1;
    filter: brightness(100%);
  }

  //::after {
  //  content: "Budownictwo";
  //  color: white;
  //  font-size: 32px;
  //}

  //p {
  //  color: #fff;
  //  font-size: 34px;
  //  //font-weight: 700;
  //  margin: 10px 20px;
  //  position: absolute;
  //  //color: black;
  //  //margin: 0;
  //
  //  //:hover {
  //  //  color: black;
  //  //}
  //}
`;

export const ImageText = styled.p`
  position: absolute;
  z-index: 5;
  font-size: 30px;
  color: white;
  bottom: 20px;
  right: 30px;
`;
