
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './estilos.css';

export default function Todo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);

  const [id, setId] = useState(1);
  const [Nome, setNome] = useState("");
  const [Cpf, setCpf] = useState("");
  const [Idade, setIdade] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false); // Estado para controlar a visibilidade da mensagem

  useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { id: id, Nome: Nome, Cpf: Cpf, Idade: Idade }]);
    setId(id + 1);
    setNome("");
    setCpf("");
    setIdade("");
    setExibirMensagem(true); // Quando os dados são enviados, exibir a mensagem
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
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="pink-border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={Nome}
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            className="pink-border-input"
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            value={Cpf}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            className="pink-border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={Idade}
          />
          <button className="pink-border-button">add</button>
        </div>
      </form>

      {exibirMensagem && (
        <p className="mensagem-cor-de-rosa">Parabéns, você foi registrado!</p>
      )}

      <div>
        <div className="values-area">
          {lista.map((item) => (
            <div key={item.id}>
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
