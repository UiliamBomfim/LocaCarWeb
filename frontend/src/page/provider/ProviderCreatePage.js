import { useEffect } from "react";
import ContentContainer from "../../components/ContentContainer";
import LoginService from '../../services/LoginService';
import ProviderService from '../../services/ProviderService';
import ProviderForm from './ProviderForm';

const ProviderCreatePage = () => {
    const providerService = ProviderService()

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
        })();
    }, [])

    const saveProvider = async (getFormData) => {
        var providerData = getFormData()
        
        delete providerData.id

        var result = await providerService.post(providerData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/fornecedores/list"
        } else {
            alert('Falha ao realizar cadastro')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveProvider(getFormData)}>Salvar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Cadastrar Fornecedor"}>
            {
                <ProviderForm isDisabled={false} footer={footer} />
            }
        </ContentContainer>
    )
}

export default ProviderCreatePage