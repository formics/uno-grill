import Container from "./Container";
import styled from "styled-components";

const Footer = () => {
  return (
    <Background>
      <Container>Footer</Container>
    </Background>
  );
};

export default Footer;

const Background = styled.div`
  background-color: black;
`;
