import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter(cor => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map(item => (
        <label key={item}>
          <input
            type="checkbox"
            value={item}
            checked={handleChecked(item)}
            onChange={handleChange}
          />
          {item}
        </label>
      ))}
      <ul>
        {cores.map(cor => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

// const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
