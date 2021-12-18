import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ContentContainer from "../../components/ContentContainer";
import LocationService from "../../services/LocationService";
import VehicleService from "../../services/VehicleService";
import LoginService from "../../services/LoginService";
import LocationForm from "./LocationForm";

const LocationEndPage = () => {
    const { id } = useParams();
    const vehicleService = VehicleService()
    const locationService = LocationService()
    const [location, setLocation] = useState(undefined)

    useEffect(() => {
        (async () => {
            LoginService.checkPermission(['employee'])
            
            var _location = await locationService.getById(id);
    
            if (_location.status !== 'EM_AVALIACAO') {
                alert('O status da locação é diferente de EM_AVALIACAO, ela não pode ser finalizada novamente.')
                window.location.href = "/locadora/locacao/list"
            }
            
            setLocation(_location)
        })()
    }, [])

    const endLocation = async (getFormData) => {
        var locationData = getFormData()

        // dar update na locacao
        var result = await locationService.patch(locationData.id, {
            acressimos_manutencao: locationData.acressimosManutencao,
            acressimos_atraso: locationData.acressimosAtraso,
            status: "FECHADA",
        })

        if (!result) {
            alert('Falha ao finalizar Locação')
            window.location.href = "/locadora/locacao/list"
            return
        }

        // dar update no veiculo
        var vehicleStatus = locationData.acressimosManutencao > 0 ? 'CONSERTO' : 'DISPONIVEL'
        result = await vehicleService.patch(locationData.veiculo.id, {
            status: vehicleStatus,
        })

        if (result) {
            alert('Locação finalizada com sucesso')
            window.location.href = "/locadora/locacao/list"
        } else {
            alert('Falha ao finalizar Locação')
        }
    }

    const footer = (getFormData) => {
        return (
            <div className='row text-center'>
                <div className=''>
                    <button onClick={() => endLocation(getFormData)}>Finalizar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => window.history.go(-1)}>Voltar</button>
                </div>
            </div>
        )
    }

    var editable = ['acressimosAtraso', 'acressimosManutencao']
    
    return (
        <ContentContainer title={"Entregar Locação"}>
            {
                location ? <LocationForm location={location} isDisabled={true} footer={footer} editable={editable} /> : undefined
            }
        </ContentContainer>
    )
}

export default LocationEndPage
