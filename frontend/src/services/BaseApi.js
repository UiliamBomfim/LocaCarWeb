import axios from "axios";

const BaseApi = () => {
    
    const BASE_URL = "http://127.0.0.1:8000/"

    const defaultConfig = {
        "Content-Type": "application/json",
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

    const patch = (url, content, config) => {
        var _config = appendConfig(config)
        return create().patch(url, content, _config);
    };

    const put = (url, content, config) => {
        var _config = appendConfig(config)
        return create().put(url, content, _config);
    };

    const del = (url, content, config) => {
        var _config = appendConfig(config)
        return create().delete(url, _config);
    };

    const appendConfig = (config) => {
        var _config = defaultConfig
        _config.headers = { "Authorization": localStorage.getItem("token") }
        return Object.assign(_config, config)
    };

    return {
        create: create,
        post: post,
        get: get,
        patch: patch,
        put: put,
        del: del,
    }
};

export default BaseApi;