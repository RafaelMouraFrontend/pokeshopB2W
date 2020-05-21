import React from "react";

import { useCart } from "~/context/Cart";

import { CartContainer, Total } from "./styles";
import pokebola from "~/assets/pokebola.png";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((totalSum, product) => {
    totalSum += product.price;
    return totalSum;
  }, 0);

  return (
    <CartContainer>
      <h2>
        <img src={pokebola} alt="Pokemon Cart" /> Pokemon Cart
      </h2>
      <ul>
        {cart.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <Total>
        Total: <span>R${total}</span>{" "}
      </Total>
    </CartContainer>
  );
}
