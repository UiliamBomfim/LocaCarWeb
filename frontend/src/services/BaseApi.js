import axios from "axios";

const BaseApi = () => {
    const BASE_URL = "http://127.0.0.1:8000/"

    const create = () => {
        return axios.create({
            baseURL: BASE_URL,
        });
    };

    const get = (url, config) => {
        return create().get(url, config)
    };

    const post = (url, content, config) => {
        var _config = {  "Content-Type": "application/json" }
        _config = Object.assign(_config, config)
        
        return create().post(url, content, _config);
    };

    return {
        create: create,
        post: post,
        get: get,
    }
};

export default BaseApi;