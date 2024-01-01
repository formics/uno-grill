import styled from "styled-components";
import Container from "../ui/Container";

// Icons
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { GiChickenLeg, GiSandwich, GiMeal } from "react-icons/gi";
import { CiFries } from "react-icons/ci";

const Products = () => {
  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>Naši proizvodi</Title>
        </TitleBox>

        <List>
          <Item>
            <GrillIcon />
            <ItemText>Roštilj</ItemText>
          </Item>
          <Item>
            <ChickenIcon />
            <ItemText>Piletina</ItemText>
          </Item>
          <Item>
            <GrillIcon />
            <ItemText>Roštilj na KG</ItemText>
          </Item>
          <Item>
            <SandwichIcon />
            <ItemText>Sendviči</ItemText>
          </Item>
          <Item>
            <MealIcon />
            <ItemText>Obroci</ItemText>
          </Item>
          <Item>
            <FriesIcon />
            <ItemText>Dodaci</ItemText>
          </Item>
        </List>
      </Container>
    </Background>
  );
};

export default Products;

const Background = styled.div`
  padding: 150px 0;
  background-color: black;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  border-bottom: 2px solid #800020;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  transition: 0.2s all;
`;

const Item = styled.li`
  width: 33%;
  background-color: transparent;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &:hover > * {
    color: #800020;
  }

  &:hover {
    border: 2px solid #800020;
  }
`;

const ItemText = styled.span`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 5px;
`;

const GrillIcon = styled(MdOutlineOutdoorGrill)`
  font-size: 100px;
  color: white;
`;

const ChickenIcon = styled(GiChickenLeg)`
  font-size: 100px;
  color: white;
`;

const SandwichIcon = styled(GiSandwich)`
  font-size: 100px;
  color: white;
`;

const MealIcon = styled(GiMeal)`
  font-size: 100px;
  color: white;
`;

const FriesIcon = styled(CiFries)`
  font-size: 100px;
  color: white;
`;
