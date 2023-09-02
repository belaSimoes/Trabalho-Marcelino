// Todo.js

import { useState } from "react";
import { Link } from "react-router-dom";
import './estilos.css'

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setid] = useState(1);
  const [Atividade, setAtividade] = useState("");

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { Atividade: Atividade, id: id }]);
    setid(id + 1);
  }
  return (
    <div className="container">
      <h1>TODO</h1>
      <Link to="/home" className="button-link">App</Link> {/* Aplicar a classe "button-link" aqui */}
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

      {lista.map((atividade) => (
        <div key={atividade.id}>
          <p>{atividade.id}</p>
          <p>{atividade.Atividade}</p>
        </div>
      ))}
    </div>
  );
}