import React from "react";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}

async function ProductPage({ params: { id } }) {
  // Initiate the request
  const productData = getProduct(id);

  // Wait for the promise to resolve
  const [product] = await Promise.all([productData]);

  return (
    <div className="m-5">
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
}

export default ProductPage;
