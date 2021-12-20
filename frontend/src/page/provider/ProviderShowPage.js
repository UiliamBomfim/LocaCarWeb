import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import ProviderService from '../../services/ProviderService';
import LoginService from '../../services/LoginService';
import ProviderForm from './ProviderForm';

const ProviderShowPage = () => {
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
        <ContentContainer title={"Consultar Fornecedor"}>
            {
                provider ? <ProviderForm provider={provider} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default ProviderShowPage