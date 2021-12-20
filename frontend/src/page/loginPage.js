import React from "react"
import LoginService from "../services/LoginService";
import ContentContainer from "../components/ContentContainer";

const LoginPage = () => {
    const loginService = LoginService();

    const [userName, setUserName] = React.useState("");
    const [userPass, setUserPass] = React.useState("");
    const [isLogged, setIsLogged] = React.useState(loginService.isLogged());

    const goToHome = () => {
        window.location.href = "/locadora/home"
    };

    const handleSubmit = async () => {
        try {
            var isLogged = await loginService.login(userName, userPass)

            isLogged ? setIsLogged(true) || goToHome() :
                alert('Usuário ou Senha Inválida')

        } catch (error) {
            alert('Ocorreu erro no processo de login.');
        }
    };

    if (!isLogged) {
        return (
            <ContentContainer title={"Login"}>
                <div className="px-5" >
                    <div className="form-group">
                        <label> Nome: </label>
                        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    </div>
                    <br/>

                    <div className="form-group">
                        <label> Senha: </label>
                        <input type="password" value={userPass} onChange={(event) => setUserPass(event.target.value)} />
                    </div>
                    <br/>
                    
                    <div className="text-center">
                        <button onClick={handleSubmit}>Login</button>
                    </div>

                    <hr/>
                    <div className="d-flex justify-content-center row pt-5">
                        <p className="text-center col mb-4">Ou Cadastre-se agora</p>
                        <div className="w-100"></div>
                        <a className="btn btn-primary col" href="/locadora/clientes/create">Cadastrar</a>
                    </div>
                </div >
            </ContentContainer>
        );
    } else {
        goToHome()
        return ( <></> )
    }
};

export default LoginPage;