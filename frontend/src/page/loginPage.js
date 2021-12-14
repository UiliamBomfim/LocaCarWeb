import React from "react"
import RentalList from "../components/UserLists";
import isLogin from "../functions/loggingIn";

const LoginPage = () => {
    const [userName, setUserName] = React.useState("");
    const [userPass, setUserPass] = React.useState("");
    const [isLogged, setIsLogged] = React.useState(false);

    const handleSubmit = async () => {
        try {
            !(await isLogin(userName, userPass)) ? alert('Usuário ou Senha Inválida') : setIsLogged(true) || alert('Logado no Sistema') || (window.location.href = "/locadora/home")
        } catch (error) {
            console.log('Ocorreu erro no processo de handleSubmit ', error);
        }
    };

    if (!isLogged) {
        return (
            <div >
                <label>
                    Name:
                </label>
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                <label>
                    Senha:
                </label>
                <input type="password" value={userPass} onChange={(event) => setUserPass(event.target.value)} />
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div >
        );
    } else {
        return (
            <div>
                <div>
                    <RentalList />
                </div>
                <div>
                    <button onClick={() => localStorage.removeItem("token") || window.location.reload()}> Logout </button>
                </div>

            </div>
        )
    }
};

export default LoginPage;