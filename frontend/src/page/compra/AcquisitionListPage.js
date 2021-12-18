import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from "../../services/AcquisitionService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const AcquisitionListPage = () => {
    const acquisitionService = AcquisitionService()
    const [acquisitions, setAcquisitions] = useState([])
    //const userIsEmployee = LoginService.userIsEmployee()

    /*useEffect(async () => {
        LoginService.checkPermission(['employee'])
        var _acquisitions = await acquisitionService.getAll();
        setAcquisitions(_acquisitions)
    }, [])*/
    
    useEffect(() => {
        async function fetchData() {LoginService.checkPermission(['employee'])
        var _acquisitions = await acquisitionService.getAll();
        setAcquisitions(_acquisitions);
    }
    fetchData();
    }, [acquisitionService])

    const tableActions = () => {
        return (
            <div className="mb-5">
                <div className="d-flex justify-content-end">
                    <a className="btn btn-primary" href={"/locadora/compras/create/"} role="button">Cadastrar</a>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Compras"}>
            { 
                <Table  header={['Descrição', 'Data', 'Valor', 'Fornecedor']} tableActions={tableActions}>
                    {
                        acquisitions.map(element => {
                            return (
                                <tr>
                                    <td>{ element['descricao'] }</td>
                                    <td>{ element['data'] }</td>
                                    <td>{ element['valor'] }</td>
                                    <td>{ element['fornecedor']['empresa'] }</td>
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
