import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const LocationListPage = () => {

    const locationService = LocationService()
    const [locations, setLocations] = useState([])
    const userIsEmployee = LoginService.userIsEmployee()

    useEffect(() => {
        (async () => {
            var queryParameter = userIsEmployee ? "?listAll=True" : "?listAll=False"
            var _locations = await locationService.getAll(queryParameter);
            setLocations(_locations)
        })();
    }, [])

    const tableActions = () => {
        var disabledClass = LoginService.getUser().aprovado ? "" : "disabled"
        return (
            <div className="mb-5">
                {
                    !userIsEmployee ? (
                        <div className="d-flex justify-content-end">
                            <a className={"btn btn-sm btn-primary " + disabledClass} href={"/locadora/locacao/create/"} role="button">Locar</a>
                        </div>
                    ) : undefined
                }
            </div>
        )
    }

    return (
        <ContentContainer title={"Listagem de Locações"}>
            { 
                <Table  header={['Status', 'Solicitante', 'Aprovador', 'Data de Locação', 'Valor Total', 'Ações']} tableActions={tableActions}>
                    {
                        locations && locations.map(element => {
                            return (
                                <tr>
                                    <td>{ element['status'] }</td>
                                    <td>{ element['cliente']['nome'] }</td>
                                    <td>{ element['funcionario'] ? element['funcionario']['nome'] : "Não Aprovado" }</td>
                                    <td>{ element['data_locacao'] }</td>
                                    <td>{ element['valor'] + element['acressimos_manutencao'] + element['acressimos_atraso'] }</td>
                                    <td className="d-flex justify-content-end">{
                                        <>
                                            {
                                                userIsEmployee ? (
                                                    <>
                                                        { element['status'] === 'RESERVA' ? <a className="btn btn-sm btn-primary" href={"/locadora/locacao/approve/" + element['id']} role="button">Aprovar</a> : undefined }
                                                        { element['status'] === 'EM_AVALIACAO' ? <a className="btn btn-sm btn-primary" href={"/locadora/locacao/end/" + element['id']} role="button">Finalizar</a> : undefined }
                                                    </>
                                                ) : (
                                                    <>
                                                        { element['status'] === 'EM_ABERTO' ? <a className="btn btn-sm btn-primary" href={"/locadora/locacao/devolve/" + element['id']} role="button">Devolver</a> : undefined }
                                                    </>
                                                )
                                            }
                                            &nbsp;&nbsp;
                                            <a className="btn btn-sm btn-primary" href={"/locadora/locacao/show/" + element['id']} role="button">Consultar</a>
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
};

export default LocationListPage
