export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b py-4">
      <div>
        <h3 className="font-semibold">{item.name}</h3>

        <p>
          ৳{item.price} × {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onQuantityChange(item.id, -1)}
          className="rounded border px-3 py-1"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => onQuantityChange(item.id, 1)}
          className="rounded border px-3 py-1"
        >
          +
        </button>

        <button
          onClick={() => onRemove(item.id)}
          className="rounded bg-red-600 px-3 py-1 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
