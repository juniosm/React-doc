import React from "react";

const App = () => {
  const [nome, setNome] = React.useState("");

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};

export default App;

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

// const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
