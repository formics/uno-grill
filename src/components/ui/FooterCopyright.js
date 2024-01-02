import Container from "./Container";
import styled from "styled-components";

const FooterCopyright = () => {
  return (
    <Background>
      <Container>
        <Text>Copyright © 2023 by nik-ves</Text>
      </Container>
    </Background>
  );
};

export default FooterCopyright;

const Background = styled.div`
  background-color: black;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 30px;
`;
