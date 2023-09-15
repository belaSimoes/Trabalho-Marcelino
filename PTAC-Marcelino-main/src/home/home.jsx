import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
    const [name, setName] = useState("");
    
    return (
        <div className="container">
            <h1 className="h1-pink">Início</h1>
            <Link to="/todo" className="button-link">Login</Link>
            <div className="image-container">
                <img src="/sua-imagem.png" alt="Sua Imagem" />
            </div>
            <p>{name}</p>
        </div>
    ); 
}
