import React from 'react';
import Veiculo from './Veiculo';



export default function Locacao(props) {
    const items = props.veiculo
    return (
        <div>
            <h2> {props.listName} </h2>
            <ul>
                <Veiculo modelo={items.modelo} status={items.status} />
            </ul>
        </div>
    )
}