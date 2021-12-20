import BaseApi from "./BaseApi";

const ReportService = () => {
    const api = BaseApi()
    const BASE_URL = 'relatorio/'

    const getExpenseReport = async (queryParams) => {
        try {
            queryParams = queryParams ? queryParams : "";
            var data = (await api.get(BASE_URL + "despesas/" + queryParams)).data
            return data
        } catch (error) {
            return null
        }
    };

    const getEarningsReport = async (queryParams) => {
        try {
            queryParams = queryParams ? queryParams : "";
            var data = (await api.get(BASE_URL + "receitas/" + queryParams)).data
            return data
        } catch (error) {
            return null
        }
    };

    return {
        getExpenseReport: getExpenseReport,
        getEarningsReport: getEarningsReport,
    }
}

export default ReportService