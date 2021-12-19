import BaseApi from "./BaseApi";

const VehicleService = () => {
    const api = BaseApi()
    const BASE_URL = 'veiculo/'

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

    const getColors = async () => {
        try {
            var data = (await api.get("corVeiculo/")).data
            return data
        } catch (error) {
            return null
        }
    }

    const getTypes = async () => {
        try {
            var data = (await api.get("tipoVeiculo/")).data
            return data
        } catch (error) {
            return null
        }
    }

    const getStates = async () => {
        try {
            var data = (await api.get("statusVeiculo/")).data
            return data
        } catch (error) {
            return null
        }
    }

    const del = async (id) => {
        try {
            var status = (await api.del(BASE_URL + id + "/")).status
            return status === 204
        } catch (error) {
            return null
        }
    }

    return {
        getStates: getStates,
        getTypes: getTypes,
        getColors: getColors,
        getAll: getAll,
        getById: getById,
        patch: patch,
        post: post,
        put: put,
        del: del,
    }

};

export default VehicleService