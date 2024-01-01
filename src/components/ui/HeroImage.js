import styled from "styled-components";
import Container from "./Container";

const HeroImage = () => {
  return (
    <>
      <ImageBox></ImageBox>

      <Container>
        <ImageBoxText>Restoran Srpske Kuhinje</ImageBoxText>
      </Container>
    </>
  );
};

export default HeroImage;

const ImageBox = styled.div`
  height: 100vh;
  width: 100%;
  background-color: green;
  background-image: url("./img/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  filter: brightness(30%);

  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const ImageBoxText = styled.span`
  font-size: 45px;
  color: white;
  position: absolute;
  top: 45%;
  text-transform: uppercase;
  font-weight: 700;
`;
