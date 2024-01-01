import { useState } from "react";
import Container from "../ui/Container";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import NavigationMenu from "./NavigationMenu";

// Icons
import { CgMenuRound } from "react-icons/cg";
import { PiHamburgerBold } from "react-icons/pi";

const NavigationBar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Waypoint
        onEnter={() => {
          setShowBackground(showMenu ? showMenu : false);
        }}
        onLeave={() => {
          setShowBackground(true);
        }}
        topOffset={"-150px"}
      ></Waypoint>

      <Background showBackground={showBackground}>
        <Container>
          <Content showBackground={showBackground}>
            <LogoBox>
              <Logo>Uno</Logo>
              <LogoIcon />
              <Logo>Grill</Logo>
            </LogoBox>

            <MenuIcon
              onClick={() => {
                setShowMenu(!showMenu);
                setShowBackground(
                  showBackground ? showBackground : !showBackground
                );
              }}
            />
          </Content>
        </Container>

        {showMenu && <NavigationMenu />}
      </Background>
    </>
  );
};

export default NavigationBar;

const Background = styled.div`
  background-color: green;

  color: white;
  background-color: ${(props) =>
    props.showBackground ? "black" : "transparent"};
  box-shadow: ${(props) =>
    props.showBackground ? "-1px 10px 19px 0px rgba(0, 0, 0, 0.75);" : "none"};
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s all;
`;

const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  transition: 0.2s all;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 50px;
  margin-top: 10px;
`;

const MenuIcon = styled(CgMenuRound)`
  font-size: 60px;
  cursor: pointer;
  transition: 0.1s all;

  &:hover {
    color: #800020;
  }
`;

const LogoIcon = styled(PiHamburgerBold)`
  font-size: 45px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
`;
