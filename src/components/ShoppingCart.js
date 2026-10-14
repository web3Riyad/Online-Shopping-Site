"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Keyboard", price: 2500 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "USB-C Hub", price: 1800 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  function addToCart(product) {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((previous) => previous.filter((item) => item.id !== id));
  }

  function changeQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Tech Shop</h1>

      <p className="mt-2">Cart items: {itemCount}</p>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="my-6 w-full rounded-lg border p-3"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
 {/* 2nd Section */}
      {filteredProducts.length === 0 && (
        <p className="mt-4">No products found.</p>
      )}

      <h2 className="mt-10 text-2xl font-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-3 border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ৳{item.price} × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="rounded border px-3 py-1"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="rounded border px-3 py-1"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded bg-red-600 px-3 py-1 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-6 text-xl font-bold">Total: ৳{total}</p>

      {cart.length > 0 && (
        <button
          onClick={() => setCart([])}
          className="mt-4 rounded bg-slate-800 px-4 py-2 text-white"
        >
          Clear Cart
        </button>
      )}
    </section>
  );
}
