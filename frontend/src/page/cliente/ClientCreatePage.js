import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
import LoginService from "../../services/LoginService";
import ClientForm from './ClientForm';

const ClientCreatePage = () => {
    const clientService = ClientService()

    const saveClient = async (getFormData) => {
        var clientData = getFormData()
        
        delete clientData.id
        delete clientData.usuario

        clientData.aprovado = "False"

        var result = await clientService.createUser(clientData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/login"
        } else {
            alert('Falha ao realizar cadastro')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveClient(getFormData)}>Salvar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Cadastrar Cliente"}>
            {
                <ClientForm isDisabled={false} footer={footer} showPassword={true} />
            }
        </ContentContainer>
    )
}

export default ClientCreatePage