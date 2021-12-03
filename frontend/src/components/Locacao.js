import React from 'react';
import Veiculo from './Veiculo';



export default function Locacao(props) {
    const items = props.veiculo;
    return (
        <div>

            <h2> Código Locação: {props.listName} </h2>

            <ul>
                <h4> Data Locacao: {props.dataLocacao} </h4>
                <h4> Data Devolução: {props.dataDevolucao} </h4>
                <Veiculo modelo={items.modelo} />
                <Veiculo status={items.status} />
            </ul>
        </div>
    )
}