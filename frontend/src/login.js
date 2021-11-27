const LoggingIn = async (user, pass) => {

    let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "username": user,
            "password": pass
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    const response = await fetch("/token-auth", requestOptions);
    const result = await response.json();    
    localStorage.setItem('token', result.token);

    return result
};

export default LoggingIn; 