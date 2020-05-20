import React, { useState, useEffect } from "react";
import api from "../../services/api";

import pokemonIndefinifo from "~/assets/indefinido.png";
import { Container, Card } from "./styles";

function PokemonStore() {
  const [pokemons, setPokemon] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const response = await api.get("type/10/");

      const LinkIndex = response.data.pokemon
        .map((links) => links.pokemon.url)
        .map((index) => index.split("/")[index.split("/").length - 2]);

      const Image = LinkIndex.map(
        (id) =>
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      );

      setImage(Image);

      const data = response.data.pokemon.map((pokemon) => ({
        ...pokemon.pokemon,
      }));

      setPokemon(data);
    }

    loadPokemon();
  }, []);

  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <Card key={pokemon.name}>
          <img
            src={image[index] ? image[index] : pokemonIndefinifo}
            alt={pokemon.name}
          />
          <p>Nome: {pokemon.name}</p>
          <span>Preço: R$200,00 </span>
        </Card>
      ))}
    </Container>
  );
}
export default PokemonStore;
