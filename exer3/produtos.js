import React from "react";


const Produtos = props => {
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] }
];

  return (
    <section id="produtos">
      <h1 style={props.style}>Produtos</h1>
      {produtos.map(({ nome, propriedades }) => (
        <ul key={nome} style={{ border: "1px solid black" }}>
          <h2>{nome}</h2>
          {propriedades.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </section>
  );
};

export default Produtos;
