import BaseApi from '../services/BaseApi'

const Auth = () => {

    const api = BaseApi();

    const setStatus = (status) => {
        return localStorage.setItem("authStatus", status);
    };

    const loggingIn = (user, pass, thenCallback, catchCallback) => {

        api.create().post('api-token-auth/', { "username": user, "password": pass, })
        .then(function (response) {
            thenCallback && thenCallback(response);
            localStorage.setItem('token', response.token);
        })
        .catch(function (error) {
            catchCallback && catchCallback(error);
        });

    };

    return {
        setStatus: setStatus,
        loggingIn: loggingIn,
    }
}

export default Auth;