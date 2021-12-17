import BaseApi from "./BaseApi";

const AcquisitionService = () => {
    const api = BaseApi()
    const BASE_URL = 'aquisicao/'

    const getAll = async (queryParams) => {
        try {
            queryParams = queryParams ? queryParams : "";
            var data = (await api.get(BASE_URL + queryParams)).data
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

    return {
        getAll: getAll,
        getById: getById,
        patch: patch,
        post: post,
        put: put,
    }
}

export default AcquisitionService