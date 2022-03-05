import React from 'react';
import LogoBar from "../components/LogoBar/LogoBar";
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  //height: auto;
`

const HomeView = () => {
    return (
        <Wrapper>
            <LogoBar />
        </Wrapper>
    );
};

export default HomeView;