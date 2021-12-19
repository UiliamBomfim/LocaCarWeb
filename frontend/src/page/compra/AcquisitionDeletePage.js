import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from "../../services/AcquisitionService";
import LoginService from '../../services/LoginService';
import AcquisitionForm from './AcquisitionForm';

const AcquisitionDeletePage = () => {
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

    const deleteAcquisition = async (getFormData) => {
        var result = await acquisitionService.del(id)

        if (result) {
            alert('Exclusão realizada com sucesso')
            window.location.href = "/locadora/compras/list"
        } else {
            alert('Falha ao realizar axclusão')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => deleteAcquisition(getFormData)}>Excluir</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Deletar Compra"}>
            {
                acquisition ? <AcquisitionForm acquisition={acquisition} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )

}

export default AcquisitionDeletePage