import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import VehicleService from "../../services/VehicleService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const VehicleListPage = () => {

    const vehicleService = VehicleService()
    const [vehicles, setVehicles] = useState([])
    const userIsEmployee = LoginService.userIsEmployee()

    useEffect(() => {
        (async () => {
            var _vehicles = await vehicleService.getAll();
            setVehicles(_vehicles)
        })()
    }, [])

    const tableActions = () => {
        return (
            <div className="mb-5">
                {
                    userIsEmployee ? (
                        <div className="d-flex justify-content-end">
                            <a className="btn btn-sm btn-primary" href={"/locadora/veiculos/create/"} role="button">Cadastrar</a>
                        </div>
                    ) : undefined
                }
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Veículos"}>
            { 
                <Table  header={['Modelo', 'Placa', 'Cor', 'Ano', 'Tipo', 'Status', 'Ações']} tableActions={tableActions}>
                    {
                        vehicles.map(element => {
                            return (
                                <tr>
                                    <td>{ element['modelo'] }</td>
                                    <td>{ element['placa'] }</td>
                                    <td>{ element['cor'] }</td>
                                    <td>{ element['ano'] }</td>
                                    <td>{ element['tipo'] }</td>
                                    <td>{ element['status'] }</td>
                                    <td>{
                                        <div className="d-flex justify-content-end">
                                            {(userIsEmployee && element['status'] !== 'INDISPONIVEL' ? <a className="btn btn-sm btn-primary pr-5" href={"/locadora/veiculos/delete/" + element['id']} role="button">Deletar</a> : "")}
                                            &nbsp;&nbsp;
                                            {(userIsEmployee ? <a className="btn btn-sm btn-primary pr-5" href={"/locadora/veiculos/edit/" + element['id']} role="button">Editar</a> : "")}
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/veiculos/show/" + element['id']} role="button">Consultar</a>
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

export default VehicleListPage
