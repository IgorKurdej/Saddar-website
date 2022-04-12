import styled from "styled-components";

export const Wrapper = styled.div`
  //max-width: 100%;
  //height: 50vh;
  //display: flex;
  //align-items: center;
  margin-bottom: 80px;
  //align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    padding: 0 60px;
    //text-align: center;
  }

  //@media (max-width: 400px) {
  //  padding: 20px 60px;
  //  text-align: center;
  //}
  //margin-bottom: 20px;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //margin-bottom: 30px;
  //min-width: 390px;
  //justify-content: flex-end;
  //padding: 0 20px;
  //min-width: 500px;
  min-width: 450px;
  //margin: 0 20px;
  @media (max-width: 1250px) {
    //margin-bottom: 30px;
    padding: 0 20px;
  }

  @media (max-width: 870px) {
    margin-bottom: 30px;
    padding: 0 50px;
    align-items: center;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  //width: 100%;
  //flex: 1;
  //padding: 30px 50px;

  h1 {
    font-size: 34px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  color: #fff;
  background-color: forestgreen;
  padding: 8px 25px;
  border-radius: 4px;
  border: 2px solid forestgreen;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
`;

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding: 0 20px;
`;

export const ImageWrapper = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //background-color: #282c34;
`;

export const Image = styled.img`
  width: 400px;
`;

// export const SliderWrapper = styled.div`
//   //margin-left: 100px;
//   max-width: 800px;
//   max-height: 800px;
//   flex: 1;
//   position: relative;
// `;
//
// export const SliderContent = styled.div`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `;

export const Stripe = styled.div`
  width: 100%;
  background-color: ${(props) => (props.color ? "#f6f6f6" : "transparent")};
  height: ${(props) => `${props.height}`};
`;
