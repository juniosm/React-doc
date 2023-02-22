import React from "react";

const Form = ({ pergunta }) => {
  // const [dados, setDados] = React.useState([]);
  const [cont, setCont] = React.useState(0);

  const ativarfec = ({ target }) => {
    pergunta.map(item => {
      if (item.resposta === target.value) {
        setCont(cont + 1);
      }
      return null;
    });
  };

  if (!pergunta) return null;
  return (
    <form>
      {pergunta.map(item => (
        <div key={item.id}>
          <h2>{item.pergunta}</h2>
          <div>
            {item.options.map((item, index, obj) => (
              <label key={index}>
                <input
                  type="radio"
                  name={obj[0]}
                  value={item}
                  onClick={ativarfec}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}
      <p>{`Você acertou ${cont} de 4`}</p>
    </form>
  );
};

export default Form;
