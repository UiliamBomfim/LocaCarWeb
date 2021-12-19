import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import LoginService from '../../services/LoginService';
import ProviderService from '../../services/ProviderService';
import ProviderForm from './ProviderForm';

const ProviderEditPage = () => {
    const { id } = useParams();
    const providerService = ProviderService()
    const [provider, setProvider] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _provider = await providerService.getById(id);
            setProvider(_provider)
        })();
    }, [])

    const saveProvider = async (getFormData) => {
        var providerData = getFormData()
        
        delete providerData.id

        var result = await providerService.put(id, providerData)

        if (result) {
            alert('Alteração realizada com sucesso')
            window.location.href = "/locadora/fornecedores/list"
        } else {
            alert('Falha ao realizar alteração')
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
        <ContentContainer title={"Editar Fornecedor"}>
            {
                provider ? <ProviderForm provider={provider} isDisabled={false} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ProviderEditPage