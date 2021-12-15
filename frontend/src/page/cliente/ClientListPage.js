import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import LoginService from "../../services/LoginService";
import Table from "../../components/Table";

const ClientListPage = () => {

    const clientService = ClientService()
    const [clients, setClients] = useState([])

    useEffect(async () => {
        LoginService.checkPermission(['employee'])
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
                                        <>
                                            {(!element['aprovado'] ? <a className="btn btn-primary pr-5" href={"/locadora/clientes/approve/" + element['id']} role="button">Aprovar</a> : "")}
                                            &nbsp;&nbsp;
                                            <a className="btn btn-primary" href={"/locadora/clientes/show/" + element['id']} role="button">Consultar</a>
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

export default ClientListPage