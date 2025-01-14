import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
`;

const Info = styled.div`
  margin-top: 50px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          businesses
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us +234-813-6016-162</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Intro;
