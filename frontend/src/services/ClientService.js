import BaseApi from "./BaseApi";

const ClientService = () => {
    const api = BaseApi()
    const BASE_URL = 'cliente/'

    const getAll = async (filter) => {
        try {
            var data = (await api.get(BASE_URL)).data
            return data
        } catch (error) {
            return null
        }
    };

    const getById = async (id) => {
        try {
            var data = (await api.get(BASE_URL + id)).data
            return data
        } catch (error) {
            return null
        }
    };

    const patch = async (id, content) => {
        try {
            var data = (await api.patch(BASE_URL + id + "/", content)).data
            return data
        } catch (error) {
            return null
        }
    }

    const post = async (content) => {
        try {
            var data = (await api.post(BASE_URL, content)).data
            return data
        } catch (error) {
            return null
        }
    }

    const put = async (id, content) => {
        try {
            var data = (await api.put(BASE_URL + id + "/", content)).data
            return data
        } catch (error) {
            return null
        }
    }

    const createUser = async (content) => {
        try {
            var data = (await api.post("cliente_create/", content)).data
            return data
        } catch (error) {
            return null
        }
    }

    return {
        createUser: createUser,
        getAll: getAll,
        getById: getById,
        patch: patch,
        post: post,
        put: put,
    }

};

export default ClientService;