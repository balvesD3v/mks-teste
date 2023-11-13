"use client";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartBackground } from "./styles";

const Cart = () => {
  return (
    <CartBackground>
      <div>
        <RiShoppingCart2Fill />
      </div>
      <span>0</span>
    </CartBackground>
  );
};

export default Cart;
