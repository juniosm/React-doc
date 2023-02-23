import React from "react";
import { useNavigate } from "react-router-dom";
import Head from "./Head";

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then(res => res.json())
      .then(json => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className="container  animeLeft">
      <Head title="Ranki | Produto" />
      <ul className="listaProduto">
        {produtos.map(({ id, fotos, nome }) => (
          <li key={id} onClick={() => navigate(`/produto/${id}`)}>
            <img src={fotos[0].src} alt="" />
            <h3>{nome}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
