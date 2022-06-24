import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid lightgray;
  margin: 0 10px;
`;

export const SocialsWrapper = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIcon = styled(Link)``;
