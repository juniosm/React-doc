import React from "react";
import { GlobalContext } from "./GlobalContext.js";

function Produto() {
  const global = React.useContext(GlobalContext);
  if (!global.dados) return null;
  return (
    <div>
      total:{" "}
      {global.dados.map(produto => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
}

export default Produto;
