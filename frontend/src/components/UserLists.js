import React from 'react';
import Locacao from './Locacao';



export default class UserLists extends React.Component {
    state = { lists: [], loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = 'http://127.0.0.1:8000/locacao/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render() {
        const listsApi = this.state.lists;

        return (
            <div>{
                listsApi.map(list => <Locacao key={list.id} listName={list.id} veiculo={list.veiculo} dataLocacao={list.data_locacao} dataDevolucao={list.data_devolucao} />)}
            </div>


        )

    }

}
