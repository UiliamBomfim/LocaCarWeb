import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from "../../services/AcquisitionService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const AcquisitionListPage = () => {
    const acquisitionService = AcquisitionService()
    const [acquisitions, setAcquisitions] = useState([])
    
    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _acquisitions = await acquisitionService.getAll();
            setAcquisitions(_acquisitions)
        })();
    }, [])

    const tableActions = () => {
        return (
            <div className="mb-5">
                <div className="d-flex justify-content-end">
                    <a className="btn btn-sm btn-primary" href={"/locadora/compras/create/"} role="button">Cadastrar</a>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Compras"}>
            { 
                <Table  header={['Descrição', 'Data', 'Valor', 'Fornecedor', 'Ações']} tableActions={tableActions}>
                    {
                        acquisitions && acquisitions.map(element => {
                            return (
                                <tr>
                                    <td>{ element['descricao'] }</td>
                                    <td>{ element['data'] }</td>
                                    <td>{ element['valor'] }</td>
                                    <td>{ element['fornecedor']['empresa'] }</td>
                                    <td>{
                                        <div className="d-flex justify-content-end">
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/compras/edit/" + element['id']} role="button">Editar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary pr-5" href={"/locadora/compras/delete/" + element['id']} role="button">Deletar</a>
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/compras/show/" + element['id']} role="button">Consultar</a>
                                        </div>
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

export default AcquisitionListPage
