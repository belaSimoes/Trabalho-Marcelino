import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './estilos.css';

export default function Todo() {
  const listaLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
  const [usuarios, setUsuarios] = useState(listaLocal);

  const [id, setId] = useState(listaLocal[listaLocal.length - 1]?.id + 1 || 1);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  function salvar(e) {
    e.preventDefault();
    setUsuarios([...usuarios, { id: id, Nome: nome, Cpf: cpf, Idade: idade }]);
    setId(id + 1);
    setNome("");
    setCpf("");
    setIdade("");
    setExibirMensagem(true);
  }

  const remover = (id) => {
    const listaFiltrada = usuarios.filter((item) => item.id !== id);
    setUsuarios(listaFiltrada);
  };

  return (
    <div className="container">
      <h1>Informações de Usuários</h1>
      <Link to="/home">Voltar</Link>
      <form onSubmit={salvar}>
        <div className="input-container">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="pink-border-input"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={nome}
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            className="pink-border-input"
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            value={cpf}
          />
          <label htmlFor="idade">Idade:</label>
          <input
            id="idade"
            className="pink-border-input"
            onChange={(e) => setIdade(e.target.value)}
            type="text"
            value={idade}
          />
          <button className="pink-border-button">Adicionar</button>
        </div>
      </form>

      {exibirMensagem && (
        <p className="mensagem-cor-de-rosa">Parabéns, o usuário foi registrado!</p>
      )}

      <div>
        <div className="values-area">
          {usuarios.map((item) => (
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
