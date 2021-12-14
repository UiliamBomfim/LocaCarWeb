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
            console.log('Ocorreu erro no processo de login.', error);
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
                </div >
            </ContentContainer>
        );
    } else {
        goToHome()
        return ( <></> )
    }
};

export default LoginPage;