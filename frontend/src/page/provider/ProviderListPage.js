import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ProviderService from "../../services/ProviderService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const ProviderListPage = () => {
    const providerService = ProviderService()
    const [providers, setProviders] = useState([])

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _providers = await providerService.getAll();
            setProviders(_providers)
        })()
    }, [])

    const tableActions = () => {
        return (
            <div className="mb-5">
                <div className="d-flex justify-content-end">
                    <a className="btn btn-sm btn-primary" href={"/locadora/fornecedores/create/"} role="button">Cadastrar</a>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Fornecedores"}>
            { 
                <Table  header={['Nome', 'Telefone', 'Email', 'Produto', 'Ações']} tableActions={tableActions}>
                    {
                        providers && providers.map(element => {
                            return (
                                <tr>
                                    <td>{ element['empresa'] }</td>
                                    <td>{ element['telefone'] }</td>
                                    <td>{ element['email'] }</td>
                                    <td>{ element['produto'] }</td>
                                    <td className="d-flex justify-content-end">{
                                        <>
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/fornecedores/edit/" + element['id']} role="button">Editar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/fornecedores/show/" + element['id']} role="button">Consultar</a>
                                        </>
                                     }</td>
                                </tr>
                            )
                        })
                    }
                </Table>
            }
        </ContentContainer>
    )
}

export default ProviderListPage