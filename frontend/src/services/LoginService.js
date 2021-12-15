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

        var user = await getLoggedUser()
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user-is-employee", `${(user.funcao != undefined)}`);

        return ((token === undefined) ? Boolean(false) : token)
    };

    const getToken = () => {
        return localStorage.getItem("token");
    };

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user");
        localStorage.removeItem("user-is-employee");
    };

    const isLogged = () => {
        return getToken() ? true : false;
    };

    const getLoggedUser = async () => {
        return (await api.get('users/0')).data
    }

    return {
        login: login,
        logout: logout,
        isLogged: isLogged,
        getToken: getToken,
    }
};

export default LoginService;