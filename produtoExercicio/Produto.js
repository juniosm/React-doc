import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";

function Produto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        seterror(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (produto === null) return null;
  return (
    <section className="container gridProduto  animeLeft">
      <Head title={`Ranki | ${produto.nome}`} />

      <img src={produto.fotos[0].src} alt="" />
      <div className="textProduto">
        <h3>{produto.nome} </h3>
        <p className="preco">R$ {produto.preco} </p>
        <p>{produto.descricao} </p>
      </div>
    </section>
  );
}

export default Produto;
