import React from "react";

const CountContext = React.createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = React.useContext(CountContext);
  const { count, setCount } = context;
  return { count, setCount };
}
