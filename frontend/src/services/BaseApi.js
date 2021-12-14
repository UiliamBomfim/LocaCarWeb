import axios from "axios";

const BaseApi = () => {
    
    const BASE_URL = "http://127.0.0.1:8000/"

    const defaultConfig = {
        "Content-Type": "application/json",
        headers: {
            "Authorization": localStorage.getItem("token")
        },
    }

    const create = () => {
        return axios.create({
            baseURL: BASE_URL,
        });
    };

    const get = (url, config) => {
        var _config = appendConfig(config)
        return create().get(url, _config)
    };

    const post = (url, content, config) => {
        var _config = appendConfig(config)
        return create().post(url, content, _config);
    };

    const appendConfig = (config) => {
        var _config = defaultConfig
        return Object.assign(_config, config)
    };

    return {
        create: create,
        post: post,
        get: get,
    }
};

export default BaseApi;