import Container from "./Container";
import styled from "styled-components";

const FooterCopyright = () => {
  return (
    <Background>
      <Container>Copyright</Container>
    </Background>
  );
};

export default FooterCopyright;

const Background = styled.div`
  background-color: black;
`;
