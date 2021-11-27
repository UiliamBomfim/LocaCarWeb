import React from "react";
import UseForm from "./functions/useForm";

const loggedIn = localStorage.getItem("authStatus");

const LogOn = () => {
    return (
        <React.Fragment>
            <div className="App">
                <h3>
                    {loggedIn ? "Seja Bem Vindo" : "Faça o Log In ou Cadastre-se"}
                </h3>
                {UseForm[loggedIn]}
            </div>
            <div>
                {loggedIn &&
                    <button onClick={() => localStorage.removeItem("authStatus") || window.location.reload()}>Sair</button>}
            </div>
        </React.Fragment>
    )
};

export default LogOn;