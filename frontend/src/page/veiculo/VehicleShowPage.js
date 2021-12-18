import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import ContentContainer from "../../components/ContentContainer";
import VehicleService from '../../services/VehicleService';
import VehicleForm from './VehicleForm';

const VehicleShowPage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const [vehicle, setVehicle] = useState(undefined)

   /* useEffect(async () => {
        var _vehicle = await vehicleService.getById(id);
        setVehicle(_vehicle)
    }, [])*/
    
    useEffect(() => {
        async function fetchData() {var _vehicle = await vehicleService.getById(id);
        setVehicle(_vehicle);
        }
        fetchData();
    }, [id, vehicleService])

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
                vehicle ? <VehicleForm vehicle={vehicle} isDisabled={true} footer={footer} /> : undefined
            }
        </ContentContainer>
    )
}

export default VehicleShowPage
