import React from "react";
import DefaultLayout from "../_pages/default";

import PokemonStore from "~/components/PokemonStore";
import Cart from "~/components/Carrinho";
import CartProvider from "~/context/Cart";

import { Container, Row, Content, Sidebar } from "./styles";

export default function Marketplace() {
  return (
    <CartProvider>
      <DefaultLayout>
        <Container>
          <Row>
            <Content>
              <PokemonStore />
            </Content>
            <Sidebar>
              <Cart />
            </Sidebar>
          </Row>
        </Container>
      </DefaultLayout>
    </CartProvider>
  );
}
