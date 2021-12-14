import React from 'react';

export default function FornecedorPage(props) {
    const items = props;
    return (
        <div>
            <h1>Dados do Fornecedor</h1>
            <h1>Código do Fornecedor: {items.listName}</h1>
            <ul>
                <h6>Empresa do Fornecedor: {items.empresa}</h6>
                <h6>Endereço do Fornecedor: {items.endereco}</h6>
                <h6>Telefone do Fornecedor: {items.telefone}</h6>
                <h6>E-mail do Fornecedor: {items.email}</h6>
                <h6>Produto do Fornecedor: {items.produto}</h6>
            </ul>
        </div>
    );
};