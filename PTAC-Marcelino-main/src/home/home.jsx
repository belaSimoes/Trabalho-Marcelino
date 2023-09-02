// Home.js

import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
    const [name, setName] = useState("");
    
    return (
        <div className="container"> {/* Aplicar a classe "container" aqui */}
            <h1 className="h1-pink">Home</h1> {/* Aplicar a classe "h1-pink" aqui */}
            <Link to="/todo">APP</Link>
            <p>{name}</p>
        </div>
    );
}
