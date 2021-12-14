import PropTypes from 'prop-types';
import React from "react";

const AlugadoCarroPage = (props) => {

    const { veiculoAlugado, dataInicio, dataEntrega } = props;

    const backHome = () => {
        localStorage.removeItem("alugou");
        window.location.href = "/locadora/home";
    };

    return (
        <div>
            <div>
                <h3>Locação Efetuada</h3>
            </div>
            <div>
                <h5>Carro Alugado: {veiculoAlugado} </h5>
            </div>
            <div>
                <h5>Do Dia: {dataInicio} </h5>
            </div>
            <div>
                <h5>Até o Dia: {dataEntrega} </h5>
            </div>
            <div>
                <button onClick={backHome}>Alugar</button>
            </div>
            <div>
                <button onClick={backHome}>Limpar Dados</button>
            </div>
        </div>
    )
};

export default AlugadoCarroPage;

AlugadoCarroPage.propTypes = {
    veiculoAlugado: PropTypes.string,
    dataInicio: PropTypes.string,
    dataEntrega: PropTypes.string
};