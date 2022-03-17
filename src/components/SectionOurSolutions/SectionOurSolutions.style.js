import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  display: flex;
  //align-items: center;
  justify-content: center;
  margin: 40px 0;
  padding: 40px 0;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
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

export const Image = styled.div`
  //flex: 1;
  margin: 10px;
  width: 380px;
  min-height: 600px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  filter: brightness(40%);
  transition: 0.5s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  text-decoration: none;

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
`;
