import React from "react";

import { useCount } from "../../context/CountProvider";

export default function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <br />
        <b>Count: {count}</b>
      </span>
    </div>
  );
}
