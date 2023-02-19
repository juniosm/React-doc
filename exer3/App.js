import React from "react";
import Headers from "./header";
import Home from "./home";
import Produtos from "./produtos";

const App = () => {
  const { pathname } = window.location;

  let Componente;
  if (pathname === "/produtos") {
    Componente = Produtos;
  } else {
    Componente = Home;
  }

  return (
    <>
      <Headers />
      <Componente style={{ color: "red" }} />
    </>
  );
};

export default App;
