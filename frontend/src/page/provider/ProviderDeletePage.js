import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ProviderService from '../../services/ProviderService';
import LoginService from '../../services/LoginService';
import ProviderForm from './ProviderForm';

const ProviderDeletePage = () => {
    const { id } = useParams();
    const providerService = ProviderService()
    const [provider, setProvider] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _provider = await providerService.getById(id);
            setProvider(_provider)
        })()
    }, [])

    const deleteProvider = async (getFormData) => {
        var result = await providerService.del(id)

        if (result) {
            alert('Exclusão realizada com sucesso')
            window.location.href = "/locadora/fornecedores/list"
        } else {
            alert('Falha ao realizar axclusão')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => deleteProvider(getFormData)}>Excluir</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Deletar Fornecedor"}>
            {
                provider ? <ProviderForm provider={provider} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ProviderDeletePage