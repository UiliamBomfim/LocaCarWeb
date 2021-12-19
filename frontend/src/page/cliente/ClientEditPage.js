import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import ClientForm from './ClientForm';

const ClientEditPage = () => {
    const { id } = useParams();
    const clientService = ClientService()
    const [client, setClient] = useState(undefined)

    useEffect(() => {
        (async () => {
            var _client = await clientService.getById(id);
            setClient(_client)
        })();
    }, [])

    const saveClient = async (getFormData) => {
        var clientData = getFormData()
        delete clientData.id

        var result = await clientService.put(id, clientData)

        if (result) {
            alert('Alterações realizadas com sucesso')
            window.history.go(-1)
        } else {
            alert('Falha ao alterar usuario')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className='col-md-6'>
                    <button onClick={() => saveClient(getFormData)}>Salvar</button>
                </div>
                <div className='col-md-6'>
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Editar Cadastro"}>
            {
                client ? <ClientForm client={client} isDisabled={false} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
};

export default ClientEditPage
