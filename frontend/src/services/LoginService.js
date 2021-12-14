import BaseApi from "./BaseApi";

const LoginService = () => {
    const api = BaseApi();

    const login = async (user, pass) => {
        var result;

        try {
            result = await api.post("api-token-auth/", {
                username: user,
                password: pass
            })
        } catch (error) {
            return false;
        }

        var token = result.data.token;

        token = ((token === undefined) ? null : ('Token ' + token))
        localStorage.setItem("token", token);

        return ((token === undefined) ? Boolean(false) : token)
    };

    const getToken = () => {
        return localStorage.getItem("token");
    };

    const logout = () => {
        localStorage.removeItem("token")
    };

    const isLogged = () => {
        return getToken() ? true : false;
    };

    return {
        login: login,
        logout: logout,
        isLogged: isLogged,
        getToken: getToken,
    }
};

export default LoginService;