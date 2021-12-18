import ContentContainer from "../../components/ContentContainer";
import VehicleService from "../../services/VehicleService";
import LoginService from '../../services/LoginService';
import { useEffect } from "react";
import VehicleForm from "./VehicleForm";

const VehicleCreatePage = () => {
    const vehicleService = VehicleService()

   /* useEffect(async () => {
        LoginService.checkPermission(['employee'])
    }, [])*/
     useEffect(() => {
        async function fetchData() {LoginService.checkPermission(['employee']);
        }
    fetchData();
    }, [])

    const saveVehicle = async (getFormData) => {
        var vehicleData = getFormData()
        
        delete vehicleData.id

        var result = await vehicleService.post(vehicleData)

        if (result) {
            alert('Cadastro realizado com sucesso')
            window.location.href = "/locadora/veiculos/list"
        } else {
            alert('Falha ao realizar cadastro')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => saveVehicle(getFormData)}>Salvar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Cadastrar Veículo"}>
            {
                <VehicleForm isDisabled={false} footer={footer} />
            }
        </ContentContainer>
    )
}

export default VehicleCreatePage
