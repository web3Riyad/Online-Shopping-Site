import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">Available Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  );
}
