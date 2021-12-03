import React from 'react';
import Locacao from './Locacao';
import Login from './Login';


export default class UserLists extends React.Component {
    state = { lists: [], loading: true }

    async componentDidMount() {
        const config = new Headers();
        config.append('Content-Type', 'application/json');
        config.append('Authorization', 'Token cd2dccff20db26f0bc7236be96c7a504460121fb');

        const requestOptions = {
            headers: config,
            method: 'GET',
            redirect: 'follow'
        }


        var url = 'http://127.0.0.1:8000/locacao/';
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log('Dados: ', data);
        this.setState({ lists: data, loading: data === [] ? true : false });
    }

    render() {
        const listsApi = this.state.lists;
        var token = '';

        if (token === '')
            return <Login />
        else

            return (
                <div>{
                    listsApi.map(list => <Locacao key={list.id} listName={list.id} veiculo={list.veiculo} dataLocacao={list.data_locacao} dataDevolucao={list.data_devolucao} />)}
                </div>


            )
    }

}