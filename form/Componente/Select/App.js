import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};

export default App;

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

// const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
