"use client";
import React from "react";
import { BlueBackgroundComponent, BrandLogo } from "./styles";
import Cart from "@/components/Cart";

const Header = () => {
  return (
    <BlueBackgroundComponent>
      <BrandLogo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </BrandLogo>

      <Cart />
    </BlueBackgroundComponent>
  );
};

export default Header;
