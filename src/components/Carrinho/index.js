import React from "react";

import { useCart } from "~/context/Cart";

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((totalSum, product) => {
    totalSum += product.price;
    return totalSum;
  }, 0);

  return (
    <div>
      {cart.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
      <p>{total}</p>
    </div>
  );
}
