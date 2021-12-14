import BaseApi from "./BaseApi";

const ClientService = () => {
    const api = BaseApi()

    const getAll = async (filter) => {
        try {
            var data = (await api.get('cliente/')).data
            return data
        } catch (error) {
            return null
        }
    };

    return {
        getAll: getAll,
    }

};

export default ClientService;