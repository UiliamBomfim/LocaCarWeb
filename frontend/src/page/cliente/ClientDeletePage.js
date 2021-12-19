import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import LoginService from '../../services/LoginService';
import ClientService from "../../services/ClientService";
import ClientForm from './ClientForm';

const ClientDeletePage = () => {
    const { id } = useParams();
    const clientService = ClientService()
    const [client, setClient] = useState(undefined)
    const userIsEmployee = LoginService.userIsEmployee()
    const sucessReturnUrl = userIsEmployee ?  "/locadora/clientes/list" : "/locadora/login"

    useEffect(() => {
        (async () => {
            var _client = await clientService.getById(id);

            if (userIsEmployee && _client.aprovado) {
                alert("O cliente já foi aprovado e não pode ser deletado")
                window.location.href = "/locadora/clientes/list"
            }

            setClient(_client)
        })();
    }, [])

    const deleteClient = async (getFormData) => {
        var result = await clientService.del(id)

        if (result) {
            alert('Exclusão realizada com sucesso')

            !userIsEmployee && LoginService().logout()

            window.location.href = sucessReturnUrl
        } else {
            alert('Falha ao realizar axclusão')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => deleteClient(getFormData)}>Excluir</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Deletar Cliente"}>
            {
                client ? <ClientForm client={client} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ClientDeletePage
