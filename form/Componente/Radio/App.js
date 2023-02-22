import React from "react";

const App = () => {
  const [cor, setCor] = React.useState("");

  return (
    <form>
      <Radio
        options={["azul", "verde", "amarelo"]}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};

export default App;

