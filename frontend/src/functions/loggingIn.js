const isLogin = async (userName, userPass) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            username: userName,
            password: userPass,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch('http://127.0.0.1:8000/api-token-auth/', requestOptions);
        const result = await response.json();

        const tokenSys = ((result.token === undefined) ? null : ('Token ' + result.token));

        localStorage.setItem("token", tokenSys);

        return ((result.token === undefined) ? Boolean(false) : tokenSys)
    } catch (error) {
        console.error('Ocorreu um erro na função Login ', error);
        return false
    }
}

export default isLogin;