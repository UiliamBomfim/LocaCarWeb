import axios from "axios";

const BaseApi = () => {

    const BASE_URL = "http://127.0.0.1:8000/";

    const create = () => {
        return axios.create({
            baseURL: BASE_URL,
        });
    };

    
    return {
        baseUrl: BASE_URL,
        create: create,
    }
}

export default BaseApi;