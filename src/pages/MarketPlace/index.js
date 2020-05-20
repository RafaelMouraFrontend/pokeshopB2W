import React from "react";
import DefaultLayout from "../_pages/default";

import PokemonStore from "~/components/PokemonStore";
import Cart from "~/components/Carrinho";
import CartProvider from "~/context/Cart";

import { Row, Content, Sidebar } from "./styles";

export default function Marketplace() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}
