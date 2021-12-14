import React from "react";
import SearchData from "../functions/searchData";
import VeiculoPage from "../page/veiculoPage";

const VeiculoList = () => {
    const [arrayVeiculos, setArrayVeiculos] = React.useState([]);

    React.useEffect(() => {
        (async () => setArrayVeiculos(await SearchData('http://127.0.0.1:8000/veiculo/')))();
    }, []);

    return (
        <div>{
            arrayVeiculos.map(list =>
                <VeiculoPage
                    key={list.id}
                    listName={list.id}
                    veiculo={list.modelo}
                    cor={list.cor}
                    ano={list.ano}
                    placa={list.placa}
                    tipo={list.tipo}
                    status={list.status}
                />)}
        </div>
    );
}

export default VeiculoList