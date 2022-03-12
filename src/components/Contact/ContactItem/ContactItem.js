import React from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

const ContactItem = ({ position, name, email, phone }) => {
  return (
    <div>
      <Wrapper>
        {/*<AiOutlineUser />*/}

        <Text position>{position}</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 300px;
  //max-width: 350px;
  min-height: 150px;
  margin: 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: ${({ position }) => position && "bold"};
  margin: 1px 0;
  text-align: center;
`;

export default ContactItem;
