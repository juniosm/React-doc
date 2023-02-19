import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" }
  ],
  ativa: true
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" }
  ],
  ativa: false
};

const App = () => {
  const dados = luana;
  const compras = dados.compras;
  const valores = compras.map(item => {
    return +item.preco.replace("R$ ", "");
  });

  const soma = valores.reduce((acu, act) => acu + act);

  return (
    <div>
      <p>Nome: {dados.cliente} </p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {dados.ativa ? " ativo" : " inativo"}
        </span>
      </p>
      <p>Total gasto: {soma}</p>
      {soma > 10000 && <p>Ta gastando muito</p>}
    </div>
  );
};

export default App;
