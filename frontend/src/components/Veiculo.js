import React from 'react';



export default function Veiculo(props) {
    const status = props.status;
    return <li>Veiculo desc.: {props.modelo}
        {props.status}
    </li>
}