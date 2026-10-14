"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Keyboard", price: 2500 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "USB-C Hub", price: 1800 },
];

export default function HomePage() {
  const [cart, setCart] = useState([]);

  function addToCart(product) { 
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);
      if (existing) {
        return previous.map((item) => 
          item.id === product.id ? {...item, quantity : item.quantity + 1} : item
        )
      }
      return [...previous, { ...product, quantity: 1 }];
    });
    // console.log("cart added");
  }
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Tech Shop</h1>
      <p className="mt-2 text-gray-500">Welcome to our online store</p>

      <p className="mt-4 text-lg font-semibold">
        Available Products ({products.length})
      </p>

      {/* Available Products */}
      <div>
        <h1>Available Products</h1>
        {products.map((product) => (
          <div key={product.id} className="border p-4 my-2 rounded shadow">
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <p>Total Items: {itemCount}</p>

        {
          cart.map((item) => (
            <div key={item.id} className="border p-4 my-2 rounded shadow">
              <h1>{item.name}</h1>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        }
      </section>
    </main>
  );
}
