async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  } 

  const products = await res.json();

  return products;
}

export default async function Home({ products }) {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ISR DEMO</h1>
      {data?.map((product) => (
        <div className="flex flex-col items-center justify-center">
          <img src={product.image} alt={product.title} className="w-32 h-32" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  );
}
