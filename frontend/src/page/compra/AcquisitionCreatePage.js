import ContentContainer from "../../components/ContentContainer";
import AcquisitionService from "../../services/AcquisitionService";
import LoginService from '../../services/LoginService';
import { useEffect } from "react";
import AcquisitionForm from "./AcquisitionForm";

const AcquisitionCreatePage = () => {
    const acquisitionService = AcquisitionService()

    useEffect(async () => {
        LoginService.checkPermission(['employee'])
    }, [])

    const saveAcquisition = async (getFormData) => {
        var acquisitionData = getFormData()
        
        delete acquisitionData.id

        var result = await acquisitionService.post(acquisitionData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/compras/list"
        } else {
            alert('Falha ao realizar cadastro')
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
        <ContentContainer title={"Cadastrar Compra"}>
            {
                <AcquisitionForm isDisabled={false} footer={footer} />
            }
        </ContentContainer>
    )
}

export default AcquisitionCreatePage