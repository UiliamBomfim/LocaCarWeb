import BaseApi from "./BaseApi";

const LocationService = () => {
    const api = BaseApi()
    const BASE_URL = 'locacao/'

    const getAll = async (queryParams) => {
        try {
            queryParams = queryParams ? queryParams : "";
            var data = (await api.get(BASE_URL + queryParams)).data
            return data
        } catch (error) {
            return null
        }
    };

    return {
        getAll: getAll
    }

};

export default LocationService