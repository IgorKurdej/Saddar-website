import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextContent = styled.div`
  //margin-bottom: 40px;
  font-size: 20px;
  //margin: 40px 30px;
  margin: 40px 20px;

  @media (max-width: 950px) {
    margin: 20px 100px;
    text-align: center;
  }
`;
