import { CssBaseline, Grid, Link } from '@mui/material';
import React from 'react';
import SearchData from '../functions/searchData';

const RentalList = () => {
    const [rentalList, setRentalList] = React.useState([]);

    var formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

    React.useEffect(() => {
        const callData = async () => {
            const data = await SearchData('http://127.0.0.1:8000/locacao/');
            setRentalList(data)
        }
        callData();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid
                id="GridHome"
                container
                spacing={2}
                direction="row"
                justify="space-around"
                alignItems="stretch"
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                >
                    {rentalList.map(list =>
                        <div key={list.id}>
                            <div>
                                <h1> Histórico de Locações </h1>
                            </div>
                            <div>
                                <h3> Código Locação: {list.id} </h3>
                                <ul>
                                    <h6> Data Locação: {list.data_devolucao} </h6>
                                    <h6> Data Devolução: {list.data_locacao} </h6>
                                    <h6>Código do Carro: {list.veiculo.id}</h6>
                                    <h6>Modelo do Carro: {list.veiculo.modelo}</h6>
                                    <h6>Cor do Carro: {list.veiculo.cor}</h6>
                                    <h6>Ano do Carro: {list.veiculo.ano}</h6>
                                    <h6>Placa do Carro: {list.veiculo.placa}</h6>
                                    <h6>Tipo do Carro: {list.veiculo.tipo}</h6>
                                    <h6>Status do Carro: {list.veiculo.status}</h6>
                                    <h6> Total Locação: {list.preco.toLocaleString('pt-BR', formato)} </h6>
                                </ul>
                            </div>
                        </div>
                    )}
                    <Link href="/locadora/locacao">Iniciar Locacao</Link>

                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default RentalList;
