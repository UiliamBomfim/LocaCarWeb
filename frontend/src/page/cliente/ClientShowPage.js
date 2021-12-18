import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import ClientForm from './ClientForm';

const ClientShowPage = () => {
    const { id } = useParams();
    const clientService = ClientService()
    const [client, setClient] = useState(undefined)

    useEffect(() => {
        (async () => {
            var _client = await clientService.getById(id);
            setClient(_client)
        })();
    }, [])

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Consultar Cliente"}>
            {
                client ? <ClientForm client={client} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ClientShowPage
