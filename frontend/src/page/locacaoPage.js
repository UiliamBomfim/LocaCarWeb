import React from "react";
import SearchData from "../functions/searchData";
import AlugadoCarroPage from "./alugadoCarroPage";
import { Autocomplete, CssBaseline, Divider, Grid, TextField } from '@mui/material';

const LocacaoPage = () => {

    const [arrayVeiculos, setArrayVeiculos] = React.useState([])
    const [veiculoAlugado, setVeiculoAlugado] = React.useState("");
    const [dataInicio, setDataInicio] = React.useState("");
    const [dataEntrega, setDataEntrega] = React.useState("");

    React.useEffect(() => {
        (async () => setArrayVeiculos(await SearchData('http://127.0.0.1:8000/veiculo/')))();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <div >
                <Grid
                    id="GridLocacao"
                    container
                    spacing={2}
                    direction="row"
                    justify="space-around"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        xs={12}
                        sm={4}
                    >
                        <label>
                            Escolha o Veículo:
                        </label>
                        <Autocomplete
                            getOptionSelected={(o, v) => (o.option === v.value)}
                            getOptionLabel={(o) => o.modelo}
                            onChange={(e, v) => setVeiculoAlugado(!v ? '' : v.modelo)}
                            options={arrayVeiculos}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    type='text'
                                    helperText='Escolha o Modelo do Carro'
                                    variant='outlined'
                                    margin='dense'
                                    fullWidth
                                />}
                        />
                        <label>
                            Escolha o Data de Início:
                        </label>
                        <input type="date" value={dataInicio} onChange={(event) => setDataInicio(event.target.value)} />
                        <label>
                            Escolha o Data de Entrega:
                        </label>
                        <input type="date" value={dataEntrega} onChange={(event) => setDataEntrega(event.target.value)} />
                        <Divider />
                        <AlugadoCarroPage
                            veiculoAlugado={veiculoAlugado}
                            dataInicio={dataInicio}
                            dataEntrega={dataEntrega} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
};

export default LocacaoPage;