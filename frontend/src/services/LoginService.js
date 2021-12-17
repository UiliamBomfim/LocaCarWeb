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
        localStorage.setItem("user-is-employee", `${(user.funcao !== undefined)}`);

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

LoginService.userIsEmployee = () => {
    return localStorage.getItem("user-is-employee") === 'true';
};

LoginService.getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

LoginService.checkPermission = (permissions) => {
    if ((LoginService.userIsEmployee() && !permissions.includes('employee')) ||
        (!LoginService.userIsEmployee() && !permissions.includes('client'))) {
        alert('Você não tem permissão para acessar esse recurso')
        window.location.href = "/locadora/home"
    }
};

export default LoginService;