const SearchData = async (url) => {
    try {
        const token = localStorage.getItem('token');
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();

        return result
    } catch (error) {
        console.error('Ocorreu error em SearchData na url ' + url + ' e o erro ' + error);
        return false;
    }
}
export default SearchData;
