import React from "react";

import CountProvider from "./context/CountProvider";

import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

function App() {
  return (
    <CountProvider>
      <Counter />
      <hr />
      <Mirror />
    </CountProvider>
  );
}

export default App;
