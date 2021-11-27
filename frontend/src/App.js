import { useEffect, useState } from 'react';
import './App.css';
import React from "react";
import api from "./api";


function App() {
    const [locadora, setLocadora] = useState([]);

    useEffect(() => {
        api
            .get("funcionarios/")
            .then((response) => {
                console.log(response)
                setLocadora(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {locadora.map(funcionarios => (
                    <h1 key={funcionarios.id}>{funcionarios.nome} </h1>
                ))}
            </header>
        </div>
    );
}

export default App;