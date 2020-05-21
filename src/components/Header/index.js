import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.png";
import { useTheme } from "~/context/Theming";
import water from "~/assets/water.png";
import fire from "~/assets/fire.png";

import { Container, Content } from "./styles";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Pokelogo" />
          </Link>
        </nav>

        <ul>
          <li>
            <button type="button" onClick={() => setTheme(11)}>
              <img src={water} alt="Water" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setTheme(10)}>
              <img src={fire} alt="Fire" />
            </button>
          </li>
        </ul>
      </Content>
    </Container>
  );
};
export default Header;
