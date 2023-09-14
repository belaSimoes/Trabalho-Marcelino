// Todo.js

import { useState } from "react";
import { Link } from "react-router-dom";
import './estilos.css'

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setid] = useState(1);
  const [Atividade, setAtividade] = useState("");
  const [Faixa, setFaixa] = useState("");
  const [Categoria, setCategoria] = useState("");

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { Atividade: Atividade, id: id, Faixa: Faixa, Categoria: Categoria 
    }]);
    setid(id + 1);
  }



return (
  <div className="container">
    <h1>TODO</h1>
    <Link to="/home" className="button-link">App</Link>
    <form onSubmit={salvar}>
      <div className="input-container">
        <input
          className="pink-border-input"
          onChange={(e) => setAtividade(e.target.value)}
          type="text"
        />
        <button className="pink-border-button">add</button>
      </div>
    </form>

    <div> {/* Deixe esta div sem classes */}
      <div className="values-area"> {/* Aplicar a classe "values-area" aqui */}
        {lista.map((atividade) => (
          <div key={atividade.id}>
            <p>{atividade.id}</p>
            <p>{atividade.Atividade}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}