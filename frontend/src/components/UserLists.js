import React from 'react';
import Locacao from './Locacao';


export default class UserLists extends React.Component {
    state = { lists: [], loading: true }

    async componentDidMount() {
        const config = new Headers();
        config.append('Content-Type', 'application/json');
        config.append('Authorization', 'Token 97e10759a701626c4d455bc11638825bbd7c131d');

        const requestOptions = {
            headers: config,
            method: 'GET',
            redirect: 'follow'
        }


        var url = 'http://127.0.0.1:8000/locacao/';
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log('Dados: ', data);
        this.setState({ lists: data, loading: data === [] ? true : false});
    }

    render() {
        const listsApi = this.state.lists;
        const carregando = this.state.loading;

        console.log('ccarregando : ', carregando)
        
        return (
            <div>{!carregando &&
                listsApi.map(list => <Locacao key={list.id} listName={list.data_locacao} veiculo={list.veiculo} />)}
            </div>


        )
    }

}