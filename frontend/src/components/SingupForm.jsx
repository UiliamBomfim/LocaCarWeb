import React from 'react';

const SignupForm = () => {

    const [userName, setUserName] = React.useState("");
    const [userMail, setUserMail] = React.useState("");
    const [userCPF, setuserCPF] = React.useState("");
    const [userPass, setuserPass] = React.useState("");

    return (
        <form>
            <h4>Sign Up</h4>
            <div>
                <label>usuário</label>
                <input
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
            </div>
            <div>
                <label>E-mail</label>
                <input
                    type="mail"
                    name="userMail"
                    value={userMail}
                    onChange={(event) => setUserMail(event.target.value)}
                />
            </div>
            <div>
                <label>CPF</label>
                <input
                    type="text"
                    name="userCPF"
                    value={userCPF}
                    onChange={(event) => setuserCPF(event.target.value)}
                />
            </div>
            <div>
                <label>Senha</label>
                <input
                    type="password"
                    name="userPass"
                    value={userPass}
                    onChange={(event) => setuserPass(event.target.value)}
                />
            </div>
        </form>
    )
}

export default SignupForm;