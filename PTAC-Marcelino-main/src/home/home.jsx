// Home.js


// ...


import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import './sua-imagem.png'

export default function Home() {
    const [name, setName] = useState("");
    
    return (
        <div className="container">
            <h1 className="h1-pink">Home</h1>
            <Link to="/todo" className="button-link">App</Link>
            <img src="/sua-imagem.png"  /> 
            <p>{name}</p>
        </div>
    ); 
}
