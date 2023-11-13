import React from "react";
import { useQuery } from "react-query";

const Product = ({ data }: any) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default Product;
