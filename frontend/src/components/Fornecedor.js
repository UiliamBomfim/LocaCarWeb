import React from "react";
import SearchData from "../functions/searchData";
import FornecedorPage from "../page/FornecedorPage";

const FornecedorList = () => {
    const [arrayFornecedor, setArrayFornecedor] = React.useState([]);

    React.useEffect(() => {
        (async () => setArrayFornecedor(await SearchData('http://127.0.0.1:8000/fornecedor/')))();
    }, []);

    return (
        <div>{
            arrayFornecedor.map(list =>
                <FornecedorPage
                    key={list.id}
                    listName={list.id}
                    empresa={list.empresa}
                    endereco={list.endereco}
                    telefone={list.telefone}
                    email={list.email}
                    produto={list.produto}
                />)}
        </div>
    );
}

export default FornecedorList