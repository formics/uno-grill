import styled from "styled-components";
import Container from "../ui/Container";

// Icons
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { GiChickenLeg, GiSandwich, GiMeal } from "react-icons/gi";
import { CiFries, CiClock2, CiImageOn } from "react-icons/ci";

const NavigationMenu = () => {
  return (
    <Background>
      <Container>
        <Content>
          <List>
            <Item>
              <ItemTitle>Naši proizvodi</ItemTitle>

              <LinksList>
                <LinkItem>
                  <GrillIcon />
                  <LinkText>Roštilj</LinkText>
                </LinkItem>
                <LinkItem>
                  <GrillIcon />
                  <LinkText>Roštilj na KG</LinkText>
                </LinkItem>
                <LinkItem>
                  <ChickenIcon />
                  <LinkText>Piletina</LinkText>
                </LinkItem>
                <LinkItem>
                  <SandwichIcon />
                  <LinkText>Sendviči</LinkText>
                </LinkItem>
                <LinkItem>
                  <MealIcon />
                  <LinkText>Obroci</LinkText>
                </LinkItem>
                <LinkItem>
                  <FriesIcon />
                  <LinkText>Dodaci</LinkText>
                </LinkItem>
              </LinksList>
            </Item>

            <Item>
              <ItemTitle>O nama</ItemTitle>

              <LinksList>
                <LinkItem>
                  <ClockIcon />
                  <LinkText>Radno vreme</LinkText>
                </LinkItem>
                <LinkItem>
                  <ImageIcon />
                  <LinkText>Galerija</LinkText>
                </LinkItem>
              </LinksList>
            </Item>

            <Item>
              <ItemTitle>Kontakt</ItemTitle>
            </Item>
          </List>
        </Content>
      </Container>
    </Background>
  );
};

export default NavigationMenu;

const Background = styled.div`
  z-index: 1;
  height: calc(100vh - 110px);
  background-color: black;
  border-top: 2px solid #800020;
`;

const Content = styled.div`
  margin-top: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li``;

const ItemTitle = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 25px;
  border-bottom: 2px solid #800020;
`;

const LinksList = styled.ul`
  list-style: none;
  margin-top: 20px;
  font-size: 20px;
`;

const LinkItem = styled.li`
  margin-top: 25px;
  display: flex;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    color: #800020;
  }

  &:hover > span {
    border-bottom: 2px solid #800020;
  }
`;

const LinkText = styled.span`
  margin-left: 10px;
  border-bottom: 2px solid transparent;
`;

const GrillIcon = styled(MdOutlineOutdoorGrill)`
  font-size: 30px;
`;

const ChickenIcon = styled(GiChickenLeg)`
  font-size: 30px;
`;

const SandwichIcon = styled(GiSandwich)`
  font-size: 30px;
`;

const MealIcon = styled(GiMeal)`
  font-size: 30px;
`;

const FriesIcon = styled(CiFries)`
  font-size: 30px;
`;

const ClockIcon = styled(CiClock2)`
  font-size: 30px;
`;

const ImageIcon = styled(CiImageOn)`
  font-size: 30px;
`;
