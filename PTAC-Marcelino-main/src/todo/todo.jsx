// Todo.js

import { useState } from "react";
import { Link } from "react-router-dom";
import './estilos.css'

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);
  const [Nome, setNome] = useState("");
  const [Cpf, setCpf] = useState("");
  const [Idade, setIdade] = useState("");

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Nome: Nome, Cpf: Cpf, Idade: Idade }]);
    setId(id + 1);
    setNome("");
    setCpf("");
    setIdade("");
  }

  const remover = (id) => {
    const listaFiltrada = lista.filter((item) => item.id !== id);
    setLista(listaFiltrada);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <h1>Seus dados</h1>
      <form onSubmit={salvar}>
        <div className="input-container">
          <input
            className="pink-border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Nome}
          />
          <input
            className="pink-border-input"
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            value={Cpf}
          />
          <input
            className="pink-border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Idade}
          />
          <button className="pink-border-button">add</button>
        </div>
      </form>

      <div>
        <div className="values-area">
          {lista.map((item) => (
            <div key={item.id}>
              <p>ID: {item.id}</p>
              <p>Nome: {item.Nome}</p>
              <p>CPF: {item.Cpf}</p>
              <p>Idade: {item.Idade}</p>
              <button className="pink-border-button" onClick={() => remover(item.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
