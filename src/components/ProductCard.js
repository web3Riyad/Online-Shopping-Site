export default function ProductCard({ product, onAdd }) {
  return (
    <article className="rounded-xl border p-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>

      <p className="mt-2">Price: ৳{product.price}</p>

      <button
        onClick={() => onAdd(product)}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Add to Cart
      </button>
    </article>
  );
}
