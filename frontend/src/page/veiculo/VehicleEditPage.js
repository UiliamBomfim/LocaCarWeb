import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import VehicleService from '../../services/VehicleService';
import LoginService from '../../services/LoginService';
import VehicleForm from './VehicleForm';

const VehicleEditPage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const [vehicle, setVehicle] = useState(undefined)

  /*  useEffect(async () => {
        LoginService.checkPermission(['employee'])
        var _vehicle = await vehicleService.getById(id);
        setVehicle(_vehicle)
    }, [])*/
    
    useEffect(() => {
        async function fetchData() {LoginService.checkPermission(['employee'])
        var _vehicle = await vehicleService.getById(id);
        setVehicle(_vehicle);
    }
    fetchData();
    }, [id, vehicleService])

    const saveVehicle = async (getFormData) => {
        var vehicleData = getFormData()
        
        delete vehicleData.id

        var result = await vehicleService.put(id, vehicleData)

        if (result) {
            alert('Alteração realizada com sucesso')
            window.location.href = "/locadora/veiculos/list"
        } else {
            alert('Falha ao realizar alteração')
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
        <ContentContainer title={"Editar Veículo"}>
            {
                vehicle ? <VehicleForm vehicle={vehicle} isDisabled={false} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default VehicleEditPage
