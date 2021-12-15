import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import Table from "../../components/Table";

const LocationListPage = () => {

    const locationService = LocationService()
    const [locations, setLocations] = useState([])

    useEffect(async () => {
        // TODO: verificar se é funcionario (true) ou cliente
        var queryParameter = true ? "?listAll=True" : "?listAll=False"
        var _locations = await locationService.getAll(queryParameter);
        setLocations(_locations)
    }, [])

    return (
        <ContentContainer title={"Listagem de Locações"}>
            { 
                <Table  header={['Status', 'Solicitante', 'Aprovador', 'Data de Locação', 'Valor Total', 'Ações']}>
                    {
                        locations.map(element => {
                            return (
                                <tr>
                                    <td>{ element['status'] }</td>
                                    <td>{ element['cliente']['nome'] }</td>
                                    <td>{ element['funcionario'] ? element['funcionario']['nome'] : "Não Aprovado" }</td>
                                    <td>{ element['data_locacao'] }</td>
                                    <td>{ element['valor'] + element['acressimos_manutencao'] + element['acressimos_atraso'] }</td>
                                    <td>{
                                        <>
                                            {
                                                true ? ( // TODO: se for funcionario
                                                    <>
                                                        { element['status'] == 'RESERVA' ? <a className="btn btn-primary" href={"/locadora/locacao/approve/" + element['id']} role="button">Aprovar</a> : undefined }
                                                        { element['status'] == 'EM_AVALIACAO' ? <a className="btn btn-primary" href={"/locadora/locacao/end/" + element['id']} role="button">Finalizar</a> : undefined }
                                                    </>
                                                ) : ( // TODO: se for cliente
                                                    <>
                                                        { element['status'] == 'EM_ABERTO' ? <a className="btn btn-primary" href={"/locadora/locacao/devolve/" + element['id']} role="button">Devolver</a> : undefined }
                                                    </>
                                                )
                                            }
                                            &nbsp;&nbsp;
                                            <a className="btn btn-primary" href={"/locadora/locacoes/show/" + element['id']} role="button">Consultar</a>
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