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
    const [justification, setJustification] = useState(undefined)

    useEffect(async () => {
        LoginService.checkPermission(['employee'])
        var _client = await clientService.getById(id);
        setClient(_client)
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
                    {/*<br/><br/><br/><br/><br/><br/>*/}
                    <button onClick={() => approveClient(getFormData)}>Aprovar</button>
                </div>
                {/* remover quando for habilitar a justificativa de reprovacao
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label> Justificativa: </label>
                            <input type="text" value={justification}
                                onChange={(event) => setJustification(event.target.value) } />
                        </div>
                        <br/><br/>
                        <button onClick={() => console.log(getFormData())}>Reprovar</button>
                    </div>
                */}
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