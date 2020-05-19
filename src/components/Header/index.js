import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.png";
import { Container, Content } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Pokelogo" />
          </Link>
        </nav>
      </Content>
    </Container>
  );
};
export default Header;
