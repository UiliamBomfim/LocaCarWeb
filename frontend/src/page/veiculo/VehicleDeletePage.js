import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import VehicleService from '../../services/VehicleService';
import VehicleForm from './VehicleForm';

const VehicleDeletePage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const [vehicle, setVehicle] = useState(undefined)

    useEffect(() => {
        (async () => {
            var _vehicle = await vehicleService.getById(id);

            if (_vehicle.status === 'INDISPONIVEL') {
                alert('O status do veículo é INDISPONIVEL, ele não pode ser deletado no momento.')
                window.location.href = "/locadora/veiculos/list"
            }

            setVehicle(_vehicle)
        })()
    }, [])

    const deleteVehicle = async (getFormData) => {
        var result = await vehicleService.del(id)

        if (result) {
            alert('Exclusão realizada com sucesso')
            window.location.href = "/locadora/veiculos/list"
        } else {
            alert('Falha ao realizar axclusão')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => deleteVehicle(getFormData)}>Excluir</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }
    
    return (
        <ContentContainer title={"Deletar Veículo"}>
            {
                vehicle ? <VehicleForm vehicle={vehicle} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default VehicleDeletePage
