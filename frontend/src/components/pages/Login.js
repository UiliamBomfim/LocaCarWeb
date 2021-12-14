import React from 'react';
import AuthService from '../services/Auth';

const LoginForm = () => {

    const authService = AuthService();

    const [userName, setUserName] = React.useState("");
    const [userPass, setUserPass] = React.useState("");

    const [loggedIn, setLoggedIn] = React.useState(false);

    const Acessing = () => {
        var thenCallback = (response) => {
            console.log('then', response)
        };

        var catchCallback = (error) => {
            console.log('catch', error)
        };

        var r = authService.loggingIn(userName, userPass, thenCallback, catchCallback);
            // setLoggedIn(true) || authService.setStatus(true) :
            // setLoggedIn(false) || authService.setStatus(false);
    }

    const SingUp = () => {
        authService.setStatus("singup");
    }

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