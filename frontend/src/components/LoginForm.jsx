import React from 'react';
import AuthenticationStatus from '../functions/authenticationStatus';
import LoggingIn from '../login';

const LoginForm = () => {

    const [userName, setUserName] = React.useState("");
    const [userPass, setUserPass] = React.useState("");

    const [loggedIn, setLoggedIn] = React.useState(false);

    const Acessing = () => LoggingIn(userName, userPass) ? setLoggedIn(true) || AuthenticationStatus(true) : setLoggedIn(false) || AuthenticationStatus(false);
    const SingUp = () => localStorage.setItem("authStatus", "singup");

    return(
        <form>
        <h4>{loggedIn ? "Logado" : "Log In"}</h4>
        <div>
        <label htmlFor="username">Usuário:</label>
        <input
            type="text"
            name="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
        />
        </div>
        <div>
        <label htmlFor="password">Senha:</label>
        <input
            type="password"
            name="password"
            value={userPass}
            onChange={(event) => setUserPass(event.target.value)}
        />
        </div>
        <button onClick={Acessing}>Acessar</button>
        <button onClick={SingUp}>Cadastre-se</button>
    </form>
    )
}


export default LoginForm;