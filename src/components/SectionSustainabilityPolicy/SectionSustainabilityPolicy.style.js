import styled from "styled-components";
import img from "../../assets/img/fredy-martinez-QCKwgRet_jw-unsplash.jpg";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 400px;
  background-image: url(${img});
  background-size: cover;
  background-position: 0 -550px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;

  button {
    background-color: transparent;
    padding: 8px 30px;
    font-size: 20px;
    border-radius: 5px;
  }
`;
