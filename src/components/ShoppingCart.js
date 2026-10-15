"use client";

import { useState } from "react";

import ShopHeader from "./ShopHeader";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import SectionCard from "./SectionCard";

const products = [
  { id: 1, name: "Keyboard", price: 2500 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "USB-C Hub", price: 1800 },
];

export default function ShoppingCart() {
  // 1. State
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // 2. Add product or increase its quantity
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

  // 3. Remove an entire product
  function removeFromCart(id) {
    setCart((previous) => previous.filter((item) => item.id !== id));
  }
  
  // 4. Increase or decrease quantity
  function changeQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // 5. Derived data: search results
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // 6. Derived data: cart item count
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // 7. Derived data: total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 8. Discount calculation
  const discount = total > 5000 ? total * 0.1 : 0;
  const finalTotal = total - discount;

  // 9. Render UI
  return (
    <main className="mx-auto max-w-5xl p-8">
      <ShopHeader itemCount={itemCount} />

      <SearchBar search={search} onSearchChange={setSearch} />

      <ProductList products={filteredProducts} onAdd={addToCart} />

      <div className="mt-10">
        <SectionCard title="Shopping Cart">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={changeQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          )}

          <div className="mt-6 space-y-2">
            <p>Subtotal: ৳{total}</p>
            <p>Discount: ৳{discount}</p>

            <p className="text-xl font-bold">Final Total: ৳{finalTotal}</p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={() => setCart([])}
              className="mt-4 rounded bg-slate-800 px-4 py-2 text-white"
            >
              Clear Cart
            </button>
          )}
        </SectionCard>
      </div>
    </main>
  );
}
