import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import Table from "../../components/Table";

const ClientListPage = () => {

    const clientService = ClientService()
    const [clients, setClients] = useState([])

    useEffect(async () => {
        var _clients = await clientService.getAll();
        setClients(_clients)
    }, [])

    return (
        <ContentContainer title={"Listagem de Clientes"}>
            { 
                <Table  header={['Nome', 'Email', 'Aprovado', 'Ações']}>
                    {
                        clients.map(element => {
                            return (
                                <tr>
                                    <td>{ element['nome'] }</td>
                                    <td>{ element['email'] }</td>
                                    <td>{ element['aprovado'] ? "Sim" : "Não" }</td>
                                    <td>{
                                        !element['aprovado'] ? <a class="btn btn-primary" href={"/locadora/clientes/approve/" + element['id']} role="button">Aprovar</a> : ""
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

export default ClientListPage