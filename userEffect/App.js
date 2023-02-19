import React from "react";
import Produto from "./Produto.js";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoInicial = window.localStorage.getItem("Produto");
    if (produtoInicial) setProduto(produtoInicial);
  }, []);

  React.useEffect(() => {
    if (produto) {
      window.localStorage.setItem("Produto", produto);
    }
  }, [produto]);

  const handleClick = event => {
    setProduto(event.target.innerText);
  };

  return (
    <div>
      <h1>Preferecias:{produto}</h1>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
