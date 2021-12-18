import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from '../../services/AcquisitionService';
import LoginService from '../../services/LoginService';
import AcquisitionForm from './AcquisitionForm';

const AcquisitionEditPage = () => {
    const { id } = useParams();
    const acquisitionService = AcquisitionService()
    const [acquisition, setAcquisition] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _acquisition = await acquisitionService.getById(id);
            setAcquisition(_acquisition)
        })();
    }, [])

    const saveAcquisition = async (getFormData) => {
        var acquisitionData = getFormData()
        
        delete acquisitionData.id

        var result = await acquisitionService.put(id, acquisitionData)

        if (result) {
            alert('Alteração realizada com sucesso')
            window.location.href = "/locadora/compras/list"
        } else {
            alert('Falha ao realizar alteração')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveAcquisition(getFormData)}>Salvar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Editar Veículo"}>
            {
                acquisition ? <AcquisitionForm acquisition={acquisition} isDisabled={false} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default AcquisitionEditPage