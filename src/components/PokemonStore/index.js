import React from "react";

import { Container, Card } from "./styles";

const pokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PokemonStore = () => {
  return (
    <Container>
      {pokemons.map(() => (
        <Card>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
          />
          <p>Nome: Pikachu</p>
          <span>Preço: R$200,00 </span>
        </Card>
      ))}
    </Container>
  );
};
export default PokemonStore;
