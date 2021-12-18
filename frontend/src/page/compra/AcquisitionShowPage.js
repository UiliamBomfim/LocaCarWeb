import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from "../../services/AcquisitionService";
import LoginService from '../../services/LoginService';
import AcquisitionForm from './AcquisitionForm';

const AcquisitionShowPage = () => {
    const { id } = useParams();
    const acquisitionService = AcquisitionService()
    const [acquisition, setAcquisition] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            var _acquisition = await acquisitionService.getById(id);
            setAcquisition(_acquisition)
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
        <ContentContainer title={"Consultar Veículo"}>
            {
                acquisition ? <AcquisitionForm acquisition={acquisition} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )

}

export default AcquisitionShowPage