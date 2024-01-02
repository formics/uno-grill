import Container from "./Container";
import styled from "styled-components";

const Footer = () => {
  return (
    <Background>
      <Container>
        <Content>
          <List>
            <Title>Proizvodi</Title>

            <LinkList>
              <Item>Roštilj</Item>
              <Item>Roštilj na KG</Item>
              <Item>Piletina</Item>
              <Item>Sendviči</Item>
              <Item>Obroci</Item>
              <Item>Dodaci</Item>
            </LinkList>
          </List>

          <List nikola={true}>
            <Title>O nama</Title>

            <LinkList>
              <Item>Radno vreme</Item>
              <Item>Galerija</Item>
            </LinkList>
          </List>

          <List>
            <Title>Kontakt</Title>

            <LinkList>
              <Item>Filer 1</Item>
              <Item>Filer 2</Item>
            </LinkList>
          </List>
        </Content>
      </Container>
    </Background>
  );
};

export default Footer;

const Background = styled.div`
  background-color: black;
`;

const Content = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  list-style: none;
`;

const List = styled.ul`
  list-style: none;
  width: 33%;

  border-left: ${(props) => (props.nikola ? "1px solid #800020" : "none")};
  border-right: ${(props) => (props.nikola ? "1px solid #800020" : "none")};
  text-align: center;
`;

const Item = styled.li`
  color: white;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  width: 80%;
  color: white;
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: inline-block;

  align-self: center;
  border-bottom: 1px solid #800020;
`;
