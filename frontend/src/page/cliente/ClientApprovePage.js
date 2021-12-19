import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import LoginService from "../../services/LoginService";
import ClientForm from './ClientForm';

const ClientApprovePage = () => {
    const { id } = useParams();
    const clientService = ClientService()
    const [client, setClient] = useState(undefined)
    // TODO: adicionar justificativa da reprovação

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _client = await clientService.getById(id);
            setClient(_client)
        })();
    }, [])

    const approveClient = async (getFormData) => {
        var clientData = getFormData()

        var result = await clientService.patch(clientData.id, { aprovado: true })

        if (result) {
            alert('Cliente aprovado com sucesso')
            window.location.href = "/locadora/clientes/list"
        } else {
            alert('Falha ao aprovar cliente')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className='col-md-6'>
                    <button onClick={() => approveClient(getFormData)}>Aprovar</button>
                </div>
                <div className='col-md-6'>
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }

    return (
        <ContentContainer title={"Aprovar Cliente"}>
            {
                client ? <ClientForm client={client} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ClientApprovePage
