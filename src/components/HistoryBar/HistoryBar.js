import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { historyData } from "../../assets/Data";

const HistoryBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return (
    <Wrapper>
      {historyData.map((item, idx) => {
        return (
          <Row>
            {width < 700 ? (
              <>
                <LeftSide>
                  <Year>{item.year}</Year>
                </LeftSide>
                <RightSide>
                  <GreenBar side="left" />
                  <Paragraph>{item.text}</Paragraph>
                </RightSide>
              </>
            ) : idx % 2 === 0 ? (
              <>
                <LeftSide>
                  <Year>{item.year}</Year>
                </LeftSide>
                <RightSide>
                  <GreenBar side="left" />
                  <Paragraph>{item.text}</Paragraph>
                </RightSide>
              </>
            ) : (
              <>
                <LeftSide>
                  <GreenBar side="right" />
                  <Paragraph>{item.text}</Paragraph>
                </LeftSide>
                <RightSide>
                  <Year>{item.year}</Year>
                </RightSide>
              </>
            )}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 80px 0;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  flex: 1;
  text-align: right;
  border-right: 1px solid gray;
  padding: 35px 30px;
  position: relative;

  @media (max-width: 700px) {
    flex: 0;
    //width: 100px;
    padding-left: 50px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  padding: 35px 30px;
  position: relative;

  @media (max-width: 700px) {
    padding-right: 50px;
  }
`;

const Year = styled.span`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;

const GreenBar = styled.div`
  width: 12px;
  height: 36px;
  background-color: forestgreen;
  position: absolute;
  top: 35px;
  left: ${(props) => props.side === "left" && "0"};
  right: ${(props) => props.side === "right" && "0"};
`;

export default HistoryBar;
