import React from "react";
import DefaultLayout from "../_pages/default";

import PokemonStore from "~/components/PokemonStore";
import Cart from "~/components/Carrinho";

import { Row, Content, Sidebar } from "./styles";

export default function Marketplace() {
  return (
    <DefaultLayout>
      <Row>
        <Content>
          <PokemonStore />
        </Content>
        <Sidebar>
          <Cart />
        </Sidebar>
      </Row>
    </DefaultLayout>
  );
}
