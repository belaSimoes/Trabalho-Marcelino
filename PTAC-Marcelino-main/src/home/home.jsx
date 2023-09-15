import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <img src="/sua-logo.png" alt="Logo" className="logo" />
        <Link to="/todo" className="button-link">
          Entrar / Fazer Login
        </Link>
      </div>
      <div className="introduction">
        <h2>Bem-vindo à Nossa Loja</h2>
        <p>Faça parte da nossa comunidade. Cadastre-se e aproveite as ofertas!</p>
        <img src="/sua-imagem.png" alt="Imagem de Introdução" />
      </div>
    </div>
  );
}
