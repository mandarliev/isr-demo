import React from "react";

async function ProductPage({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  const product = await res.json();

  return (
    <div className="m-5">
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
}

export default ProductPage;
