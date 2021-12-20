import ContentContainer from "../../components/ContentContainer";
import ClientService from "../../services/ClientService";
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
        <ContentContainer title={"Cadastrar Cliente"}>
            {
                <ClientForm isDisabled={false} footer={footer} showPassword={true} />
            }
        </ContentContainer>
    )
}

export default ClientCreatePage