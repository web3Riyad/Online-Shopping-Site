"use client";

import { useState } from "react";

function Counter({ count, onIncrease }) {
  return (
    <button onClick={onIncrease} className="rounded border p-3">
      Count: {count}
    </button>
  );
}

export default function CounterPractice() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((previous) => previous + 1);
  }

  return (
    <div className="flex gap-3">
      <Counter count={count} onIncrease={increase} />
      <Counter count={count} onIncrease={increase} />
    </div>
  );
}
