import React from "react";
import Produto from "./Produto.js";

const App = () => {
  const [carregar, setCarregar] = React.useState(null);
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    setCarregar(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const body = await response.json();
    setDados(body);
    setCarregar(false);
  }

  return (
    <div>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        smartphone
      </button>
      {carregar && <p>Carregando....</p>}
      {!carregar && dados && <Produto dados={dados} />}
    </div>
  );  
};

export default App;

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
